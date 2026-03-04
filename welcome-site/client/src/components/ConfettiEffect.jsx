import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

const COLORS = [
  "#10b981",
  "#34d399",
  "#6ee7b7",
  "#facc15",
  "#fde68a",
  "#059669",
  "#047857",
  "#ffffff",
];

const SHAPES = ["circle", "square", "star"];

function ConfettiPiece({ piece }) {
  return (
    <motion.div
      initial={{
        x: piece.startX,
        y: -20,
        rotate: 0,
        opacity: 1,
        scale: piece.scale,
      }}
      animate={{
        x: piece.startX + piece.driftX,
        y: piece.endY,
        rotate: piece.rotation,
        opacity: [1, 1, 0],
        scale: [piece.scale, piece.scale * 0.8, 0],
      }}
      transition={{
        duration: piece.duration,
        ease: "easeOut",
      }}
      className="absolute top-0 pointer-events-none"
      style={{ zIndex: 100 }}
    >
      {piece.shape === "circle" && (
        <div
          className="rounded-full"
          style={{
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
          }}
        />
      )}
      {piece.shape === "square" && (
        <div
          className="rounded-sm"
          style={{
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
          }}
        />
      )}
      {piece.shape === "star" && (
        <svg
          width={piece.size}
          height={piece.size}
          viewBox="0 0 24 24"
          fill={piece.color}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )}
    </motion.div>
  );
}

export default function ConfettiEffect() {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      startX: randomBetween(0, window.innerWidth),
      driftX: randomBetween(-150, 150),
      endY: randomBetween(window.innerHeight * 0.6, window.innerHeight),
      rotation: randomBetween(360, 1080),
      duration: randomBetween(2, 4),
      size: randomBetween(6, 14),
      scale: randomBetween(0.8, 1.2),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    }));
    setPieces(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      <AnimatePresence>
        {pieces.map((piece) => (
          <ConfettiPiece key={piece.id} piece={piece} />
        ))}
      </AnimatePresence>
    </div>
  );
}
