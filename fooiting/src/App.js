import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/Main";
function App() {
  return (
    <BrowserRouter>
      <div id="body">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
