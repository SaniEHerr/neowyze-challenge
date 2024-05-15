import React from 'react'

const Loading = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='bg-opacity-60 backdrop-filter backdrop-blur-sm px-4 py-2 rounded-lg bg-zinc-700 cursor-pointer w-[89.4px] h-[40px] animate-pulse duration-300'></div>
        <div className="p-4 flex flex-col md:flex-row gap-8 items-center w-[236px] h-[477.25] md:w-[420px] md:h-[357.21px] bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg animate-pulse duration-300">
          <div className="flex flex-col gap-3">
            <div className="w-[140px] h-[28px] bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg mx-auto"></div>
            
            <div className="w-[204px] h-[285.25px] bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg"></div>
          </div>

          <div className="flex flex-col items-center gap-2 mx-auto">
            <div className='w-[140px] h-[24.01px] bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg mx-auto'></div>
            <div className='w-[90px] h-[24.01px] bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg mx-auto'></div>
            <div className='w-[100px] h-[24.01px] bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg mx-auto'></div>
            <div className='w-[80px] h-[24.01px] bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg mx-auto'></div>
            <div className='w-[120px] h-[24.01px] bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg mx-auto'></div>
            <div className='w-[140px] h-[24.01px] bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg mx-auto'></div>
          </div>
        </div>
    </div>
  )
}

export default Loading