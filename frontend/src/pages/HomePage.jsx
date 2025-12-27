import {useState} from "react"
import RateLimitedUI from "../components/RateLimitedUI"
const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {isRateLimited && <RateLimitedUI />}
    </div>
  )
}

export default HomePage
