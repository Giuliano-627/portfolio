import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Technologies from "./components/Technologies";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/tech" element={<Technologies/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
