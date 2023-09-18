import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginFrom/Login.js";
import SignupPage from "./pages/LoginFrom/Signup.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div id="body">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
