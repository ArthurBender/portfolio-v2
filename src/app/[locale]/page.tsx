import { ToastContainer } from "react-toastify"

import Navbar from "./sections/navbar";
import Introduction from "./sections/introduction";
import Projects from "./sections/projects";

export default function Home() {
  return (
    <div className="bg-background">
      <ToastContainer />
      
      <Navbar />
      <Introduction />
      <Projects />
    </div>
  );
}
