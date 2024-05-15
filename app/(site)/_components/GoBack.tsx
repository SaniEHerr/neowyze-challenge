"use client"

import { useRouter } from 'next/navigation';

const GoBack = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };


  return (
    <div className='bg-zinc-700 hover:bg-[#ffe91f96] bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg px-4 py-2 transition-colors duration-150 cursor-pointer w-fit hidden lg:block' onClick={goBack}>
      <p>Go Back</p>
    </div>
  )
}

export default GoBack