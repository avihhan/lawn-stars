import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import FloatingElements from "./FloatingElements";

export default function Hero({ onJoinClick }) {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden flex items-center">
      <FloatingElements />

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-lawn-200 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-lawn-400 animate-pulse" />
                Now accepting early signups
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white leading-tight mb-6"
            >
              Tired of{" "}
              <span className="text-gold-400">surprise fees</span> &amp;
              no&#8209;show crews?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg sm:text-xl text-lawn-100/90 leading-relaxed mb-8 max-w-xl"
            >
              With Lawn Stars, you work directly with a local team who actually
              cares about your yard. No hidden markups. Just dependable,
              high-quality lawn care from people in your community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onPress={onJoinClick}
                size="lg"
                radius="full"
                className="bg-white text-lawn-800 font-bold text-lg px-10 py-6 shadow-2xl hover:shadow-white/25 transition-all hover:scale-105"
              >
                Join the Waitlist
              </Button>
              <Button
                variant="bordered"
                size="lg"
                radius="full"
                className="border-white/30 text-white font-semibold text-lg px-10 py-6 hover:bg-white/10 transition-all"
                onPress={onJoinClick}
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex items-center gap-6 mt-10"
            >
              <div className="flex -space-x-3">
                {[
                  "bg-lawn-400",
                  "bg-emerald-400",
                  "bg-teal-400",
                  "bg-green-400",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full ${bg} border-2 border-lawn-900 flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-lawn-200 text-sm">
                <span className="font-bold text-white">200+</span> homeowners
                already on the list
              </div>
            </motion.div>
          </div>

          {/* Right column: decorative illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-[460px] h-[460px]">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-lawn-400/20 blur-3xl animate-pulse" />

              {/* Phone mockup */}
              <div className="relative glass rounded-[2.5rem] p-3 w-[260px] h-[460px] mx-auto">
                <div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-lawn-800 to-lawn-950 flex flex-col items-center justify-center p-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-16 h-16 text-gold-400 mb-4"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="text-white font-bold text-xl text-center mb-2">
                    Lawn Stars
                  </p>
                  <p className="text-lawn-300 text-sm text-center mb-6">
                    Your lawn, your team.
                  </p>
                  <div className="w-full space-y-3">
                    <div className="h-3 bg-lawn-700/50 rounded-full w-full" />
                    <div className="h-3 bg-lawn-700/50 rounded-full w-4/5" />
                    <div className="h-3 bg-lawn-700/50 rounded-full w-3/5" />
                  </div>
                  <div className="mt-6 w-full h-10 bg-lawn-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      Book Now
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-16 -left-4 glass-white rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="text-xs font-bold text-lawn-800">
                      Crew Confirmed
                    </p>
                    <p className="text-[10px] text-lawn-600">
                      Arriving in 30 min
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-24 -right-6 glass-white rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <p className="text-xs font-bold text-lawn-800">5.0 Stars</p>
                    <p className="text-[10px] text-lawn-600">
                      "Best service ever!"
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
