import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import MagicPrivacy from "./pages/MagicPrivacyPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/magic10to1privacy" element={<MagicPrivacy />} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);