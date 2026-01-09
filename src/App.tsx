import Introduction from "./sections/Introduction"
import Navbar from "./sections/Navbar"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"

function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <Introduction />
      <Projects />
      <Skills />
      <Experience />
    </div>
  )
}

export default App
