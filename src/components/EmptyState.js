import Image from "next/image";
import emptyState from "../assets/empty-state.png";

export default function EmptyState() {
  return (
    <div className="flex w-full flex-col justify-between md:flex-row">
      <div className="space-y-4">
        <span className="font-alt text-xl font-medium sm:text-3xl">
          There are no results.
        </span>
        <p>
          Please, try different <strong>search</strong> words.
        </p>
      </div>
      <Image
        className=""
        src={emptyState}
        alt="Image illustrating no results from the search"
      />
    </div>
  );
}
