import { ToastContainer } from "react-toastify"

import Navbar from "./sections/navbar";

export default function Home() {
  return (
    <div className="bg-background">
      <ToastContainer />
      
      <Navbar />
    </div>
  );
}
