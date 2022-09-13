import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../Components/PageNotFound/PageNotFound";
import Footer from "../Components/Footer/Footer";
import HomePage from "./HomePage";
import ServicePage from "./ServicePage";
const RoutesPages = () => {
  return (
    <div>
      

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<ServicePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default RoutesPages;
