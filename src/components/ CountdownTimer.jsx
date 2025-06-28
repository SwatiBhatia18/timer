import { useState, useEffect } from "react"

import { getTimeLeft } from "../utils/getTimeLeft"

import StarsBg from "../assets/StarsBg"
import MountainsBg from "../assets/MountainsBg"

import FlipCard from "./ FlipCard"
import SocialIcons from "./SocialIcons"

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [previousTime, setPreviousTime] = useState({
    days: 14,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const now = new Date()
    const targetDate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000)

    const updateCountdown = () => {
      const newTimeLeft = getTimeLeft(targetDate)
      setPreviousTime(timeLeft)
      setTimeLeft(newTimeLeft)
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen countdown-container relative overflow-hidden">
      <StarsBg />
      <div className="absolute top-45 sm:top-60 md:top-60 lg:top-50  left-0 right-0 flex justify-center z-20">
         <h1 className="mb-12 text-white text-lg md:text-2xl font-normal tracking-[0.3em] uppercase whitespace-nowrap text-center">
          {"WE'RE LAUNCHING SOON"}
        </h1>
      </div>
      <div className="content-wrapper relative z-10">
        <div className="flex flex-row flex-wrap justify-center items-center gap-4 md:gap-8 mb-32">
          <FlipCard
            value={timeLeft.days}
            label="Days"
            previousValue={previousTime.days}
          />
          <FlipCard
            value={timeLeft.hours}
            label="Hours"
            previousValue={previousTime.hours}
          />
          <FlipCard
            value={timeLeft.minutes}
            label="Minutes"
            previousValue={previousTime.minutes}
          />
          <FlipCard
            value={timeLeft.seconds}
            label="Seconds"
            previousValue={previousTime.seconds}
          />
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-16 flex justify-center z-20">
        <SocialIcons />
      </div>
      <MountainsBg />
    </div>
  )
}

export default CountdownTimer
