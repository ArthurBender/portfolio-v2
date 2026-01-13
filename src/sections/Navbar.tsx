import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="w-full bg-dark text-white flex justify-between items-center px-4 py-2 shadow-lg shadow-black/80 relative z-1">
      <a href="#" className="text-3xl hover:text-4xl hover:tracking-wide w-60 transition-all duration-200" style={{ fontFamily: "Pattaya" }}>Arthur Bender</a>

      <div className="flex gap-8 nav-links">
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