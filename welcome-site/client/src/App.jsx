import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./pages/LandingPage";
import ConfirmationPage from "./pages/ConfirmationPage";

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/welcome" element={<ConfirmationPage />} />
      </Routes>
    </AnimatePresence>
  );
}
