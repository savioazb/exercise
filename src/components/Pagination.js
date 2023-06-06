import { DOTS, usePagination } from "../../hooks/usePagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationTest(props) {
  const {
    handlePageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    handlePageChange(currentPage + 1);
  };

  const onPrevious = () => {
    handlePageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className="flex items-center gap-2">
      <li
        className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-purple-600 hover:bg-purple-200 ${
          currentPage === 1 && "hidden"
        }`}
        onClick={onPrevious}
      >
        <ChevronLeft width={18} />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li className="text-purple-600" key={index}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full  p-4 hover:bg-purple-200 hover:text-purple-600 ${
              pageNumber === currentPage
                ? "bg-purple-600 text-gray-50"
                : "bg-transparent text-purple-600"
            }`}
            onClick={() => handlePageChange(pageNumber)}
            key={index}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-purple-600 hover:bg-purple-200 ${
          currentPage === lastPage && "hidden"
        }`}
        onClick={onNext}
      >
        <ChevronRight width={18} />
      </li>
    </ul>
  );
}
