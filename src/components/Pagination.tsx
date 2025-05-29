"use client";
import { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>
      <div className="flex items-center gap-2">
        <button
          className={`py-2 px-3 rounded-sm ${currentPage === 1 ? "bg-lamaSky text-white" : "bg-transparent"}`}
          onClick={() => setCurrentPage(1)}
        >
          1
        </button>
        <button
          className={`py-2 px-3 rounded-sm ${currentPage === 2 ? "bg-lamaSky text-white" : "bg-transparent"}`}
          onClick={() => setCurrentPage(2)}
        >
          2
        </button>
        <button
          className={`py-2 px-3 rounded-sm ${currentPage === 3 ? "bg-lamaSky text-white" : "bg-transparent"}`}
          onClick={() => setCurrentPage(3)}
        >
          3
        </button>
        <button
          className={`py-2 px-3 rounded-sm ${currentPage === 10 ? "bg-lamaSky text-white" : "bg-transparent"}`}
          onClick={() => setCurrentPage(10)}
        >
          10
        </button>
      </div>
      <button
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;