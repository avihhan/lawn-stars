import { motion } from "framer-motion";

const stats = [
  { value: "100%", label: "Transparent Pricing" },
  { value: "5-Star", label: "Rated Service" },
  { value: "Local", label: "Vetted Crews" },
  { value: "Zero", label: "Hidden Fees" },
];

export default function TrustBar() {
  return (
    <section className="relative py-20 hero-gradient overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[1px]">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0 0H1440V30C1200 60 960 0 720 30C480 60 240 0 0 30V0Z"
            fill="#ecfdf5"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mb-2">
            Reliable. Transparent. Professional.
          </h2>
          <div className="flex items-center justify-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-gold-400"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass rounded-2xl p-6 text-center"
            >
              <p className="text-3xl sm:text-4xl font-black text-white mb-1">
                {stat.value}
              </p>
              <p className="text-lawn-200 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0 60H1440V30C1200 0 960 60 720 30C480 0 240 60 0 30V60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
