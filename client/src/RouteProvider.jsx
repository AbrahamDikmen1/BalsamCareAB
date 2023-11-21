import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";

import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const RouteProvider = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default RouteProvider;
