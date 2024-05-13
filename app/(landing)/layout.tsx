import Footer from "../_components/Footer"
import Navbar from "../_components/Navbar"

const LandingLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Navbar />

      <main className="max-w-[1280px] flex flex-col justify-center items-center flex-1">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default LandingLayout