import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Views/HomePage";
import Nothing from "./Views/Nothing";

function App() {
  return (
    <div id="app-container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/1" element={<Nothing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
