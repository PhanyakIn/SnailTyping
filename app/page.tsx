"use client"
import Navbar from "./components/Navbar"
import { FaArrowRotateRight } from "react-icons/fa6";
import { useState } from "react"
import { useTimer } from "@/app/lib/timer"

function Page() {

  const [started, setStarted] = useState<boolean>(false)
  const countdown = useTimer(started,20)

  const handleStart = () => {
    setStarted(true)
  }
  return (
    <main>
      <Navbar/>
      {/* typing main */}
      <div className="flex flex-col justify-center min-h-svh">
          <div className="relative flex flex-col justify-center items-center min-h-130 bg-white p-25">
            <p className="font-mono text-4xl pb-4">{countdown}</p>
            <p className="font-mono leading-13 text-4xl font-medium whitespace-pre-wrap">the quick brown fox jumps over the lazy dog while a small snail slowly climbs the garden wall and watches the clouds drift by above the quiet village square where children</p>
            {!started && (
              <div onClick={handleStart} className="absolute inset-0 z-10 flex items-center justify-center bg-black/85 cursor-pointer select-none transition duration-200 hover:bg-black/90">
                <span className="font-mono text-6xl font-bold">Start</span>
              </div>
            )}
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
export default Page