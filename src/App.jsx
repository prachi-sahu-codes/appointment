import { Routes, Route } from "react-router";
import "./App.css";
import { Home } from "./pages";
import { Navbar } from "./components/INDEX.JS";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
