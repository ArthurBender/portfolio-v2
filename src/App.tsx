import Introduction from "./sections/Introduction"
import Navbar from "./sections/Navbar"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Experiences from "./sections/Experiences"
import Contact from "./sections/Contact"

function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <Introduction />
      <Projects />
      <Skills />
      <Experiences />
      <Contact />
    </div>
  )
}

export default App
