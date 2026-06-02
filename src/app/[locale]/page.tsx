import { ToastContainer } from "react-toastify"

import Navbar from "./sections/navbar";
import Introduction from "./sections/introduction";

export default function Home() {
  return (
    <div className="bg-background">
      <ToastContainer />
      
      <Navbar />
      <Introduction />
    </div>
  );
}
