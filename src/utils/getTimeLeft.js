export const getTimeLeft = (targetDate) => {
    const currentTime = new Date().getTime()
    const distance = targetDate.getTime() - currentTime
  
    if (distance > 0) {
      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      }
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
  }
  