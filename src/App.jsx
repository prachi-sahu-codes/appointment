import { Routes, Route } from "react-router";
import "./App.css";
import { Home } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
