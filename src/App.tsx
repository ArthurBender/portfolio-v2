import Introduction from "./sections/Introduction"
import Navbar from "./sections/Navbar"
import Skills from "./sections/Skills"

function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <Introduction />
      <Skills />
    </div>
  )
}

export default App
