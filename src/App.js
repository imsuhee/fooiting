import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginFrom/Login.js";
import SignupPage from "./pages/LoginFrom/Signup.js";
import ListPage from "../src/pages/ListPage/List";
import Producta from "./pages/ProductPage/Product";
import AppCalendar from "./components/Detailed/AppCalendar";
import Registration from "./pages/RegistrationPage/Registration";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div id="body">
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/Product" element={<Producta />} />
          <Route path="/Calendar" element={<AppCalendar />} />
          <Route path="ListPage" element={<ListPage />} />
          <Route path="Registration" element={<Registration />} />

          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
