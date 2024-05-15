
const Loading = () => {
  const skeleton = Array.from({ length: 10 }).map((_, index) => ({}));

  return (
    <div className="max-w-[1420px] mx-auto py-7 flex flex-col gap-10 px-4 lg:px-0">

      <div className="flex flex-col gap-7">
        <div className="w-[270px] h-[40px] rounded-lg bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm animate-pulse duration-300 mx-auto"></div>

        <div className="flex justify-start flex-col sm:flex-row gap-4 mx-auto sm:mx-0">
          <div className="w-[245.76px] h-[35.97px] rounded-lg bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm animate-pulse duration-300"></div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {skeleton.map((index: any) => (
            <div key={index} className="rounded-lg bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm animate-pulse duration-300 p-4 flex flex-col justify-between gap-3 w-[253.78px] sm:w-[244.95px] h-[465.16px] mx-auto">
              <div className='flex flex-col gap-3 items-center'>
                <div className="text-2xl font-bold text-center w-[180px] h-[32px] bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg"></div>

                <div className="w-[204px] h-[285.25px] bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg"></div>

                <div className='flex flex-col items-center text-lg gap-2'>
                  <div className="w-[120px] h-[20px] bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg"></div>

                  <div className="w-[120px] h-[20px] bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg"></div>
                </div>
              </div>

              <div className='flex justify-center'>
                <div>
                  <div className='w-[80.75px] h-[20px] bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg'></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className='w-[500px] h-[42.46px] bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg mx-auto'></div>

    </div>
  )
}

export default Loading