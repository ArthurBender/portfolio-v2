import Introduction from "./sections/Introduction"
import Navbar from "./sections/Navbar"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <Introduction />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
