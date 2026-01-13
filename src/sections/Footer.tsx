const Footer = () => {
  return (
    <footer className="bg-dark text-white text-sm">
      <div className="flex justify-between px-4 py-2">
        <span>Designed and built by Arthur Bender</span>
        <span>© {new Date().getFullYear()}. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer;