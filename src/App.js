import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Views/HomePage";

function App() {
  return (
    <div id="app-container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
