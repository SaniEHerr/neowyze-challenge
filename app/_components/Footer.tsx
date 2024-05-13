import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm text-white p-4 text-center text-lg">
      <h3>
        Made-with-💖-by-
        <Link href="https://www.linkedin.com/in/santiago-herrera-501293239/">
          <span className="font-bold font-starjhol sani-link-styles">Sani</span>
        </Link>  
      </h3>
    </footer>
  )
}

export default Footer