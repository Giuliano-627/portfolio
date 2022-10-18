import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import { Provider } from "react-redux";
import {store} from "./store/index";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tech" element={<Technologies />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
