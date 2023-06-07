"use client";

import { useCallback, useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Card from "./Card";
import Pagination from "./Pagination";
import { getPosts } from "../lib/api";
import industries from "../../data/DropdownIndustries.data.json";
import integrations from "../../data/DropdownIntegrations.data.json";
import regions from "../../data/DropdownRegions.data.json";

import Grid from "./Grid";
import EmptyState from "./EmptyState";

let isFirstRender = true;

export default function CardsList({ postsInfo }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [industry, setIndustry] = useState("");
  const [integration, setIntegration] = useState("");
  const [region, setRegion] = useState("");
  const postsPerPage = 20;
  const [posts, setPosts] = useState(postsInfo.list);
  const [totalPosts, setTotalPosts] = useState(postsInfo.count_per.query);
  const [isLoading, setIsLoading] = useState(postsInfo ? false : true);

  const handleSearchRequests = useCallback(async () => {
    setIsLoading(true);
    const posts = await getPosts(currentPage, industry, integration, region);
    setPosts(posts.list);
    setTotalPosts(posts.count_per.query);
    setIsLoading(false);
  }, [currentPage, industry, integration, region]);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    handleSearchRequests();
  }, [currentPage, industry, integration, region, handleSearchRequests]);

  return (
    <section>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row">
        <Dropdown
          title={"Industries"}
          info={industries}
          handleCategoryChange={(ind) => {
            setIndustry(ind);
            setCurrentPage(1);
          }}
        />
        <Dropdown
          title={"Regions"}
          info={regions}
          handleCategoryChange={(reg) => {
            setRegion(reg);
            setCurrentPage(1);
          }}
        />
        <Dropdown
          title={"Integrations"}
          info={integrations}
          handleCategoryChange={(int) => {
            setIntegration(int);
            setCurrentPage(1);
          }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-8">
        {isLoading && (
          <div className="absolute left-0 top-0 h-full w-full bg-gray-50 opacity-50"></div>
        )}
        {totalPosts === 0 && !isLoading ? (
          <EmptyState />
        ) : (
          <Grid>
            {posts.map((post, i) => (
              <Card
                key={i}
                imgUrl={post.image.src}
                brokenImageUrl={post.image.broken_image.src}
                brokenImageAlt={post.image.broken_image.alt}
                linkUrl={post.link.url}
                title={post.title}
                label={post.label.text}
              />
            ))}
          </Grid>
        )}

        <Pagination
          currentPage={currentPage}
          totalCount={totalPosts}
          pageSize={postsPerPage}
          handlePageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </section>
  );
}
