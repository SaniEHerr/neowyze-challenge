import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm">
      <div className='flex flex-col items-center gap-1'>
        <h2 className="text-2xl font-bold text-center">ERROR 404 - Page Not Found</h2>
        <p className='text-xl text-center'>Could not find this page</p>
      </div>
      
      <div className='bg-opacity-60 backdrop-filter backdrop-blur-sm px-4 py-2 rounded-lg bg-[#ffe91f96] lg:bg-zinc-700 lg:hover:bg-[#ffe91f96] transition-colors duration-150'>
        <Link href="/">
          <p className='text-base font-bold'>Go Home</p>
        </Link>
      </div>
    </main>
  );
}