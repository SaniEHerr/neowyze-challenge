"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

interface PaginationProps {
  total_pages : number;
  page        : number;
  eye_color   : string | undefined;
  gender      : string | undefined;
}

const Pagination = ({ total_pages, page, eye_color, gender }: PaginationProps) => {
  const router = useRouter();

  const handlePageChange = (pageIndex: number) => {
    router.push(`/characters?page=${pageIndex}${eye_color ? `&eye_color=${eye_color}` : ""}${gender ? `&gender=${gender}` : ""}`);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    
    // Logic for generate unique keys for each button
    const generateUniqueKey = (prefix: string, index: number) => `${prefix}-${index}`;
  
    if (total_pages <= 5) {
      for (let i = 1; i <= total_pages; i++) {
        buttons.push(
          <button
            key={generateUniqueKey('page', i)}
            className={`px-4 font-starjedi py-2 rounded-md border hover:text-black font-extrabold border-gray-300 bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm hover:bg-[#ffe91f9c] transition-colors duration-150 ${page === i ? 'bg-[#ffe91f] border-none' : ''}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      // First page Button
      buttons.push(
        <button
          key={generateUniqueKey('page', 1)}
          className={`px-4 font-starjedi py-2 rounded-md border hover:text-black font-extrabold border-gray-300 bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm hover:bg-[#ffe91f9c] transition-colors duration-150 ${page === 1 ? 'bg-[#ffe91f] border-none' : ''}`}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      );
  
      if (page > 2) {
        buttons.push(
          <span key={generateUniqueKey('ellipsis', 1)} className="font-starjedi py-2 rounded-md font-extrabold">
            ...
          </span>
        );
      }
  
      for (let i = Math.max(2, page - 1); i <= Math.min(total_pages - 1, page + 1); i++) {
        buttons.push(
          <button
            key={generateUniqueKey('page', i)}
            className={`px-4 font-starjedi py-2 rounded-md border hover:text-black font-extrabold border-gray-300 bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm hover:bg-[#ffe91f9c] transition-colors duration-150 ${page === i ? 'bg-[#ffe91f] border-none' : ''}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
  
      if (page < total_pages - 2) {
        buttons.push(
          <span key={generateUniqueKey('ellipsis', 2)} className="font-starjedi py-2 rounded-md font-extrabold">
            ...
          </span>
        );
      }
  
      // Last page Button
      buttons.push(
        <button
          key={generateUniqueKey('page', total_pages)}
          className={`px-4 font-starjedi py-2 rounded-md border hover:text-black font-extrabold border-gray-300 bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm hover:bg-[#ffe91f9c] transition-colors duration-150 ${page === total_pages ? 'bg-[#ffe91f] border-none' : ''}`}
          onClick={() => handlePageChange(total_pages)}
        >
          {total_pages}
        </button>
      );
    }
  
    return buttons;
  };

  return (
    <div className="flex justify-center gap-3">
      <button
        onClick={() => handlePageChange(page > 1 ? page - 1 : 1)}
        className={`hidden sm:block border font-starjedi border-gray-300 px-4 py-2 rounded-md font-extrabold bg-zinc-700 transition-colors duration-150 disabled:pointer-events-none ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#ffe91f9c]'}`}
        disabled={page === 1}
      >
        Prev
      </button>

      {renderPaginationButtons()}

      <button
        onClick={() => handlePageChange(page < total_pages ? page + 1 : page)}
        className={`hidden sm:block border font-starjedi border-gray-300 px-4 py-2 rounded-md font-extrabold bg-zinc-700 transition-colors duration-150 disabled:pointer-events-none ${page === total_pages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#ffe91f9c]'}`}
        disabled={page === total_pages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination