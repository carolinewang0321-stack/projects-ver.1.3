import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PSDesign from "./pages/PSDesign";
import Genshin from "./pages/Genshin";
import KolPlan from "./pages/KolPlan";
import DifyPlan from "./pages/DifyPlan";
import Sanya from "./pages/Sanya";

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ps-design" element={<PSDesign />} />
          <Route path="/genshin-analysis" element={<Genshin />} />
          <Route path="/kol-plan" element={<KolPlan />} />
          <Route path="/dify-plan" element={<DifyPlan />} />
          <Route path="/sanya-guide" element={<Sanya />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}