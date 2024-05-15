"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className='px-4 mt-7'>
      <main className="flex flex-col items-center justify-center gap-4 bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg p-4">
        <div className='flex flex-col items-center gap-1'>
          <h2 className="text-2xl font-bold text-center">Character not found</h2>
          <p className='text-xl text-center'>Could not find this Character - Invalid or non-existent ID</p>
        </div>
        
        <div className='flex col md:flex-row items-center justify-center gap-4'>
          <div className='bg-opacity-60 backdrop-filter backdrop-blur-sm px-4 py-2 rounded-lg bg-[#ffe91f96] lg:bg-zinc-700 lg:hover:bg-[#ffe91f96] transition-colors duration-150' onClick={goBack}>
            <p className='text-base font-semibold'>GO BACK</p>
          </div>
          <div className='bg-opacity-60 backdrop-filter backdrop-blur-sm px-4 py-2 rounded-lg bg-[#ffe91f96] lg:bg-zinc-700 lg:hover:bg-[#ffe91f96] transition-colors duration-150'>
            <Link href="/">
              <p className='text-base font-semibold'>HOME</p>
            </Link>
          </div>
        </div>
      </main>

    </div>
  );
}