import { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import WaitlistForm from "../components/WaitlistForm";
import TrustBar from "../components/TrustBar";
import Footer from "../components/Footer";

export default function LandingPage() {
  const formRef = useRef(null);

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen"
    >
      <Navbar onJoinClick={scrollToForm} />
      <Hero onJoinClick={scrollToForm} />
      <Features />
      <TrustBar />
      <WaitlistForm formRef={formRef} />
      <Footer />
    </motion.div>
  );
}
