import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import Footer from "./components/Footer";
function App() {

  return (
    <>
      <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TechnologyGrid />
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2500} />
    </div>
    </>
  )
}

export default App
