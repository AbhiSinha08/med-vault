import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";
import "./tailwind.css";

import Index from "views/Index.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import LandingPage from "views/examples/LandingPage.js";
import DoctorPage from "views/examples/doctorlogin.js"
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Lablogin from "views/examples/lablogin.js";

import Patient from "views/Dashboards/Patient";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <IndexNavbar />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/doctorlogin" element={<DoctorPage />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/lablogin" element={<Lablogin/>} />
      <Route path="/patient" element={<Patient />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
