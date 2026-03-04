import { motion } from "framer-motion";

function Leaf({ style, duration, delay }) {
  return (
    <motion.svg
      viewBox="0 0 40 40"
      fill="none"
      className="absolute opacity-20 text-lawn-300"
      style={style}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        rotate: [0, 15, -10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      <path
        d="M20 2C20 2 35 12 35 25C35 32 28 38 20 38C12 38 5 32 5 25C5 12 20 2 20 2Z"
        fill="currentColor"
      />
      <path d="M20 8V34" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      <path
        d="M20 16L14 22M20 22L26 28"
        stroke="white"
        strokeWidth="0.8"
        strokeOpacity="0.2"
      />
    </motion.svg>
  );
}

function GrassBlade({ style, height, duration, delay }) {
  return (
    <motion.svg
      viewBox="0 0 12 60"
      fill="none"
      className="absolute opacity-15 text-lawn-400"
      style={{ ...style, height }}
      animate={{
        rotate: [-5, 5, -5],
        scaleY: [1, 1.05, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      <path
        d="M6 60C6 60 2 35 4 20C6 5 6 0 6 0C6 0 6 5 8 20C10 35 6 60 6 60Z"
        fill="currentColor"
      />
    </motion.svg>
  );
}

function Star({ style, size, duration, delay }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="absolute text-gold-400"
      style={{ ...style, width: size, height: size }}
      animate={{
        opacity: [0.15, 0.4, 0.15],
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </motion.svg>
  );
}

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Leaf
        style={{ top: "10%", left: "5%", width: 50 }}
        duration={6}
        delay={0}
      />
      <Leaf
        style={{ top: "30%", right: "8%", width: 35 }}
        duration={7}
        delay={1}
      />
      <Leaf
        style={{ bottom: "25%", left: "12%", width: 45 }}
        duration={8}
        delay={2}
      />
      <Leaf
        style={{ top: "55%", right: "15%", width: 30 }}
        duration={5}
        delay={0.5}
      />

      <GrassBlade
        style={{ bottom: 0, left: "3%" }}
        height={80}
        duration={4}
        delay={0}
      />
      <GrassBlade
        style={{ bottom: 0, left: "8%" }}
        height={60}
        duration={5}
        delay={0.5}
      />
      <GrassBlade
        style={{ bottom: 0, right: "5%" }}
        height={70}
        duration={4.5}
        delay={1}
      />
      <GrassBlade
        style={{ bottom: 0, right: "10%" }}
        height={55}
        duration={3.5}
        delay={0.3}
      />

      <Star
        style={{ top: "15%", left: "20%" }}
        size={18}
        duration={4}
        delay={0}
      />
      <Star
        style={{ top: "8%", right: "25%" }}
        size={14}
        duration={5}
        delay={1.5}
      />
      <Star
        style={{ top: "40%", left: "45%" }}
        size={10}
        duration={6}
        delay={0.8}
      />
      <Star
        style={{ bottom: "35%", right: "20%" }}
        size={16}
        duration={4.5}
        delay={2}
      />
      <Star
        style={{ top: "60%", left: "30%" }}
        size={12}
        duration={5.5}
        delay={0.3}
      />
    </div>
  );
}
