import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../Components/PageNotFound/PageNotFound";

import HomePage from "./HomePage";
import ServicePage from "./ServicePage";
const RoutesPages = () => 
 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<ServicePage />} />
        {/* <Route path="/Menu/:id" element={<MenuPage />} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

export default RoutesPages;
