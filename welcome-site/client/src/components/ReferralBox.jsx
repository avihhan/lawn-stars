import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Snippet } from "@heroui/react";

export default function ReferralBox({ referralCode }) {
  const [copied, setCopied] = useState(false);
  const link = `lawnstars.app/waitlist/ref=${referralCode}`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(`https://${link}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = `https://${link}`;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1 }}
      className="w-full max-w-lg mx-auto mt-10"
    >
      <div className="glass-white rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-5">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 text-gold-500 text-xs font-bold mb-3">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            EARLY ACCESS
          </span>
          <h3 className="text-xl font-bold text-lawn-900 mb-1">
            Want early access?
          </h3>
          <p className="text-sm text-gray-600">
            Move up the waitlist by sharing Lawn Stars with your neighbors. The
            more friends who use your link, the sooner your neighborhood unlocks!
          </p>
        </div>

        <div className="flex items-center gap-2 bg-lawn-50 rounded-xl p-2 border border-lawn-200">
          <div className="flex-1 px-3 py-2 text-sm text-lawn-700 font-mono truncate">
            {link}
          </div>
          <Button
            onPress={handleCopy}
            size="sm"
            radius="lg"
            className={`font-bold transition-all ${
              copied
                ? "bg-lawn-600 text-white"
                : "bg-lawn-900 text-white hover:bg-lawn-800"
            }`}
          >
            {copied ? (
              <span className="flex items-center gap-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="w-4 h-4"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Copied!
              </span>
            ) : (
              "Copy Link"
            )}
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 mt-5">
          <span className="text-xs text-gray-400">Share via:</span>
          {["Facebook", "Twitter", "SMS"].map((platform) => (
            <button
              key={platform}
              className="text-xs font-semibold text-lawn-600 hover:text-lawn-800 transition-colors"
            >
              {platform}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
