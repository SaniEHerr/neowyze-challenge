import React from 'react';

const Loading = () => {
  const skeleton = Array.from({ length: 10 }).map((_, index) => ({}));

  return (
    <div className="max-w-[1420px] mx-auto py-7">
      <div className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg mx-auto mb-8 h-[40px] w-[200px] animate-pulse duration-300"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skeleton.map((index: any) => (
          <div
            key={index}
            className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm p-4 w-[236px] h-[400px] rounded-lg flex flex-col justify-between gap-2 animate-pulse duration-300"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;