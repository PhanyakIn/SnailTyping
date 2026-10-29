import Navbar from "./components/Navbar"
import { FaArrowRotateRight } from "react-icons/fa6";

function page() {
  return (
    <main>
      <Navbar/>
      {/* typing main */}
      <div className="flex flex-col justify-center min-h-svh">
        <div className="flex flex-col justify-center items-center min-h-130 bg-white p-25">
          <p className="font-mono text-4xl pb-4">30</p>
          <p className="font-mono leading-13 text-4xl font-medium">the quick brown fox jumps over the lazy dog while a small snail slowly climbs the garden wall and watches the clouds drift by above the quiet village square where children</p>
        </div>

        <div className="flex justify-center p-5 pt-10">
        <button aria-label="Repeat" className="cursor-pointer transition duration-200 hover:text-white">
          <FaArrowRotateRight size={30} />
          </button>
        </div>
      </div>

    </main>
  )
}
export default page