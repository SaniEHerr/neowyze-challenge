import Footer from "@/app/_components/Footer"
import Navbar from "@/app/_components/Navbar"

const SiteLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Navbar />

      <main className="max-w-[1280px] flex flex-col justify-start items-center flex-1">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default SiteLayout