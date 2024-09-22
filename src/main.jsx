import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Voron from "./pages/voron.jsx";
import StencilPage from "./pages/StencilPage.jsx";
import PasswordGenerator from "./pages/passwordgen.jsx";
import Simrig from "./pages/simrig.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/voron" element={<Voron />} />
        <Route path="/stencil" element={<StencilPage />} />
        <Route path="/passwordgen" element={<PasswordGenerator />} />
        <Route path="/simrig" element={<Simrig />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
