import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="w-full bg-dark text-white flex justify-between items-center p-4 shadow-xl/25">
      <a href="#" className="text-3xl font-semibold hover:text-gray-300">Arthur Bender</a>

      <div className="flex gap-4 uppercase nav-links">
        <a href="#">Skills</a>
        <a href="#">Experience</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>

      <div className="flex gap-1 text-3xl items-center nav-actions">
        <span>🇧🇷</span>
        <span><MdOutlineLightMode /></span>
      </div>
    </div>
  )
}

export default Navbar;