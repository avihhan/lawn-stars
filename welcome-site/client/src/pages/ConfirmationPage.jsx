import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import ConfettiEffect from "../components/ConfettiEffect";
import ReferralBox from "../components/ReferralBox";
import Footer from "../components/Footer";

const steps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-lawn-600">
        <path
          d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Check your inbox",
    description: "We sent a welcome email with everything you need to know.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-lawn-600">
        <path
          d="M17.657 16.657L13.414 20.9C13.0389 21.2746 12.5303 21.4851 12 21.4851C11.4697 21.4851 10.9611 21.2746 10.586 20.9L6.343 16.657C3.21895 13.5327 3.21895 8.46734 6.343 5.34301C9.46734 2.21895 14.5327 2.21895 17.657 5.34301C20.781 8.46734 20.781 13.5327 17.657 16.657Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "We launch by zip code",
    description:
      "We roll out neighborhood by neighborhood to guarantee quality.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-lawn-600">
        <path
          d="M15 17H20L18.595 15.595C18.4063 15.4063 18.2567 15.1822 18.1546 14.9357C18.0525 14.6891 18 14.425 18 14.158V11C18.0002 9.75894 17.5988 8.55277 16.8577 7.5614C16.1167 6.57003 15.0765 5.8459 13.891 5.497V5C13.891 4.46957 13.6803 3.96086 13.3052 3.58579C12.9301 3.21071 12.4214 3 11.891 3C11.3606 3 10.8519 3.21071 10.4768 3.58579C10.1017 3.96086 9.891 4.46957 9.891 5V5.497C7.413 6.228 5.891 8.429 5.891 11V14.159C5.891 14.697 5.677 15.214 5.296 15.596L3.891 17H8.891M15 17H9M15 17V18C15 18.7956 14.6839 19.5587 14.1213 20.1213C13.5587 20.6839 12.7956 21 12 21C11.2044 21 10.4413 20.6839 9.87868 20.1213C9.31607 19.5587 9 18.7956 9 18V17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Get your invite first",
    description:
      "You'll be the first to download when we go live in your area.",
  },
];

export default function ConfirmationPage() {
  const [searchParams] = useSearchParams();
  const referralCode = searchParams.get("ref") || "XXXXX";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-lawn-50 via-white to-lawn-50"
    >
      <ConfettiEffect />

      <div className="relative max-w-3xl mx-auto px-4 pt-20 pb-16">
        {/* Animated star */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.3,
          }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-lawn-400 to-lawn-600 flex items-center justify-center shadow-2xl shadow-lawn-500/30">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 text-gold-400"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            {/* Pulse rings */}
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-lawn-400"
            />
            <motion.div
              animate={{ scale: [1, 1.8], opacity: [0.2, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute inset-0 rounded-full bg-lawn-400"
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-lawn-950 mb-4">
            You&apos;re on the list!
          </h1>
          <p className="text-xl text-lawn-700 font-semibold mb-3">
            Welcome to the future of easy, reliable lawn care.
          </p>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            We&apos;ve locked in your spot on the Lawn Stars waitlist for your
            area. Keep an eye on your inbox — we&apos;ll send you an exclusive
            invite to download the app as soon as we launch in your neighborhood.
          </p>
        </motion.div>

        {/* Referral section */}
        <ReferralBox referralCode={referralCode} />

        {/* What's Next */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-lawn-900 text-center mb-8">
            What happens next?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + i * 0.15 }}
                className="relative bg-white rounded-2xl p-6 shadow-lg border border-lawn-100 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-lawn-100 flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="font-bold text-lawn-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-lawn-600 text-white text-xs font-bold flex items-center justify-center shadow">
                  {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Back to home link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-12"
        >
          <a
            href="/"
            className="text-lawn-600 hover:text-lawn-800 font-semibold text-sm transition-colors"
          >
            &larr; Back to Lawn Stars
          </a>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
}
