"use client";

import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Card from "./Card";
import Pagination from "./Pagination";
import { api } from "../lib/api";
import industries from "../../data/DropdownIndustries.data.json";
import integrations from "../../data/DropdownIntegrations.data.json";
import regions from "../../data/DropdownRegions.data.json";

import { AxiosError } from "axios";
import Grid from "./Grid";
import EmptyState from "./EmptyState";

export default function CardsList({ postsInfo }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [industry, setIndustry] = useState("");
  const [integration, setIntegration] = useState("");
  const [region, setRegion] = useState("");
  const postsPerPage = 20;
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [isLoading, setIsLoading] = useState();

  ///_industry

  async function handleIndustryRequest(industry) {
    setIsLoading(true);
    setIndustry(industry);
    try {
      const response = await api.post("/cards", {
        category: [],
        industry,
        integration,
        region,
        limit: 20,
        order: "ASC",
        page: 1,
        order_by: "title",
        post_type: ["customers"],
      });
      setPosts(response.data.data.list);
      setTotalPosts(response.data.data.count_per.query);
      setIsLoading(false);
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response.data);
      }
    }
  }

  async function handleRegionRequest(region) {
    console.log(region);
    setRegion(region);
    try {
      const response = await api.post("/cards", {
        category: [],
        industry: industry,
        integration: integration,
        region: region,
        limit: 20,
        order: "ASC",
        page: 1,
        order_by: "title",
        post_type: ["customers"],
      });
      setPosts(response.data.data.list);
      setTotalPosts(response.data.data.count_per.query);
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response.data);
      }
    }
  }

  async function handleIntegrationRequest(integration) {
    console.log(industry);
    setIntegration(integration);
    try {
      const response = await api.post("/cards", {
        category: [],
        industry: industry,
        integration: integration,
        region: region,
        limit: 20,
        order: "ASC",
        page: 1,
        order_by: "title",
        post_type: ["customers"],
      });
      console.log(response.data.data.list);
      setPosts(response.data.data.list);
      setTotalPosts(response.data.data.count_per.query);
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response.data);
      }
    }
  }

  async function handlePageRequest(page) {
    console.log(page);
    setCurrentPage(page);
    try {
      const response = await api.post("/cards", {
        category: [],
        industry: industry,
        limit: 20,
        order: "ASC",
        page: page,
        order_by: "title",
        post_type: ["customers"],
      });
      console.log(response.data.data.list);
      setPosts(response.data.data.list);
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response.data);
      }
    }
  }

  async function handleSearchRequests(param, title) {
    if (title === "Industries") {
      setIndustry(param);
    }
    try {
      const response = await api.post("/cards", {
        category: [],
        industry: industry,
        limit: 20,
        order: "ASC",
        page: page,
        order_by: "title",
        post_type: ["customers"],
      });
      console.log(response.data.data.list);
      setPosts(response.data.data.list);
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response.data);
      }
    }
  }

  useEffect(() => {
    setIsLoading(true);
    setPosts(postsInfo.list);
    setTotalPosts(postsInfo.count_per.query);
    setIsLoading(false);
  }, [postsInfo]);

  return (
    <div>
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row">
        <Dropdown
          title={"Industries"}
          info={industries}
          handleCategoryChange={handleIndustryRequest}
        />
        <Dropdown
          title={"Regions"}
          info={regions}
          handleCategoryChange={handleRegionRequest}
        />
        <Dropdown
          title={"Integrations"}
          info={integrations}
          handleCategoryChange={handleIntegrationRequest}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-8">
        {isLoading && (
          <div className="absolute left-0 top-0 h-full w-full bg-gray-50 opacity-50"></div>
        )}
        {totalPosts === 0 && isLoading === false ? (
          <EmptyState />
        ) : (
          <Grid>
            {posts.map((post) => (
              <Card
                key={post.title}
                imgUrl={post.image.src}
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
          onPageChange={handlePageRequest}
        />
      </div>
    </div>
  );
}
