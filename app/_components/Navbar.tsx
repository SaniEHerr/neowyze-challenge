import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm w-full p-4 py-8 text-center">
      <div className="flex justify-center">
        <Link href="/">
          <p className="font-starjedi text-black text-6xl flex flex-col star-wars-title transition-all duration-300">
            <span>STAR</span>
            <span>WARS</span>
          </p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar