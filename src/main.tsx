import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import GameExperience from "./pages/GameExperience";
import PSDesign from "./pages/PSDesign";
import Genshin from "./pages/Genshin";
import GenshinX from "./pages/GenshinX";
import KolPlan from "./pages/KolPlan";
import DifyPlan from "./pages/DifyPlan";
import Sanya from "./pages/Sanya";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function ThemeInit() {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") document.documentElement.classList.add("dark");
  }, []);
  return null;
}

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ThemeInit />
      <ScrollReset />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game-experience" element={<GameExperience />} />
          <Route path="/ps-design" element={<PSDesign />} />
          <Route path="/genshin-analysis" element={<Genshin />} />
          <Route path="/genshin-x" element={<GenshinX />} />
          <Route path="/kol-plan" element={<KolPlan />} />
          <Route path="/dify-plan" element={<DifyPlan />} />
          <Route path="/sanya-guide" element={<Sanya />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);