import React from 'react';

const Loading = () => {
  const skeleton = Array.from({ length: 10 }).map((_, index) => ({}));

  return (
    <div className="max-w-[1420px] mx-auto py-7">
      <div className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg mx-auto mb-8 h-[40px] w-[200px] animate-pulse duration-300"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md1:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {skeleton.map((index: any) => (
          <div
            key={index}
            className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm p-4 w-[255.98px] 2xl:w-[236.79px] h-[408.42px] rounded-lg flex flex-col justify-between gap-3 animate-pulse duration-300"
          >
            <div className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm animate-pulse duration-300 mx-auto w-[150px] h-[30px] rounded-lg"></div>
            <div className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm animate-pulse duration-300 mx-auto w-[204px] h-[301px] rounded-lg"></div>
            <div className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm animate-pulse duration-300 mx-auto w-[85px] h-[24px] rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;