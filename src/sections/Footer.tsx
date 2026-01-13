const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="section flex justify-between py-2!">
        <span>Designed and built by Arthur Bender</span>
        <span>© {new Date().getFullYear()}. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer;