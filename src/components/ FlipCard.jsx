import { useState, useEffect } from "react"

const FlipCard = ({ value, label, previousValue }) => {
  const [isFlipping, setIsFlipping] = useState(false)
  const currentValue = String(value).padStart(2, "0")
  const prevValue = String(previousValue).padStart(2, "0")

  useEffect(() => {
    if (currentValue !== prevValue) {
      setIsFlipping(true)
      const timer = setTimeout(() => setIsFlipping(false), 600)
      return () => clearTimeout(timer)
    }
  }, [currentValue, prevValue])

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className={`flip-card ${isFlipping ? "flipping" : ""}`}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="countdown-card shadow-2xl">
                <span className="countdown-number">{currentValue}</span>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="countdown-card shadow-2xl">
                <span className="countdown-number">{currentValue}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-black/20 z-10"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-4 bg-[#232334] rounded-r-full z-10"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-4 bg-[#232334] rounded-l-full z-10"></div>
      </div>
      <div className="h-10" />
      <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-medium">
        {label}
      </p>
    </div>
  )
}

export default FlipCard
