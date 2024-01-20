import { Routes, Route } from "react-router";
import { Home } from "./pages";
import { Navbar, Toaster } from "./components";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="w-full bg-gradient-to-r from-[#fbfbfc] to-[#eff4f3]">
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
