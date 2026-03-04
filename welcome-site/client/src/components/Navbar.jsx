import { motion } from "framer-motion";
import { Button } from "@heroui/react";

function StarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function Navbar({ onJoinClick }) {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-lawn-500 to-lawn-700 flex items-center justify-center shadow-lg">
              <StarIcon className="w-5 h-5 text-gold-400" />
            </div>
            <span className="text-xl font-extrabold text-white tracking-tight">
              Lawn<span className="text-lawn-300">Stars</span>
            </span>
          </div>

          <Button
            onPress={onJoinClick}
            className="bg-white text-lawn-800 font-bold shadow-lg hover:shadow-xl transition-shadow px-6"
            radius="full"
            size="sm"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
