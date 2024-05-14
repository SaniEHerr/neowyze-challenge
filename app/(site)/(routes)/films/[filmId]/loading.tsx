import React from 'react'

const Loading = () => {
  const skeleton = Array.from({ length: 24 }).map((_, index) => ({}));

  return (
    <div className="flex flex-col gap-10 py-7">
      <div className="flex flex-col justify-center items-center mx-auto gap-4 bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm py-4 px-6 rounded-lg h-[456px] w-[454px]">
        <div className="flex flex-col justify-center items-center gap-2 h-[108px]">
          <div className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg w-[250px] h-[50px]"></div>
          <div className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg w-[150px] h-[50px]"></div>
          <div className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg w-[250px] h-[50px]"></div>
        </div>

        <div className='w-[204px] h-[301px] bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg'></div>

      </div>

      <div className="flex flex-col gap-5">
        <div className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm h-[28px] w-[180px] mx-auto rounded-lg"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-3">
          {skeleton.map(( index: any) => {

            return (
              <div key={index} className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm p-4 rounded-lg w-[272px] h-[95px]">

              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Loading