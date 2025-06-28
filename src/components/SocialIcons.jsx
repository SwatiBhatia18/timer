import FacebookIcon from "../assets/icons/FacebookIcon"
import InstagramIcon from "../assets/icons/InstagramIcon"
import PinterestIcon from "../assets/icons/PinterestIcon"

const iconBase = "transition-colors duration-300"
const iconColor = "text-[#8385A9] hover:text-[#fb6087]"

const SocialIcons = () => (
  <div className="flex justify-center gap-8 mb-8">
    <a href="#" className={`${iconBase} ${iconColor}`} aria-label="Facebook">
      <FacebookIcon />
    </a>
    <a href="#" className={`${iconBase} ${iconColor}`} aria-label="Pinterest">
      <PinterestIcon />
    </a>
    <a href="#" className={`${iconBase} ${iconColor}`} aria-label="Instagram">
      <InstagramIcon />
    </a>
  </div>
)

export default SocialIcons
