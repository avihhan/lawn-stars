import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";

const features = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="22" className="fill-lawn-100" />
        <path
          d="M16 24L22 30L32 18"
          className="stroke-lawn-600"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Consistent Quality",
    description:
      "The same dependable local crews treating your yard like it's their own — detailed edging, clean lines, professional finish every time.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="22" className="fill-lawn-100" />
        <circle
          cx="24"
          cy="20"
          r="6"
          className="stroke-lawn-600"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M24 26V32"
          className="stroke-lawn-600"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M20 32H28"
          className="stroke-lawn-600"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M18 36H30"
          className="stroke-lawn-600"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Total Transparency",
    description:
      "Fair pricing upfront. Zero hidden corporate markups. No surprise platform fees added on top. What you see is what you pay.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="22" className="fill-lawn-100" />
        <rect
          x="15"
          y="12"
          width="18"
          height="26"
          rx="4"
          className="stroke-lawn-600"
          strokeWidth="2.5"
          fill="none"
        />
        <circle cx="24" cy="33" r="1.5" className="fill-lawn-600" />
        <path
          d="M21 12V10C21 8.34 22.34 7 24 7C25.66 7 27 8.34 27 10V12"
          className="stroke-lawn-600"
          strokeWidth="2"
        />
        <path
          d="M20 20H28M20 24H25"
          className="stroke-lawn-600"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "App Convenience",
    description:
      "Book, manage, and pay for services — from weekly mowing to major landscaping projects — all from your phone.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Features() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1" fill="#059669" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-lawn-100 text-lawn-700 text-sm font-semibold mb-4">
            Why Lawn Stars?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-lawn-950 mb-4">
            Imagine <span className="gradient-text">knowing exactly</span>{" "}
            who&apos;s coming
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Consistent results every week. Fair, transparent pricing. We treat
            your lawn like it&apos;s our own.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={cardVariants}>
              <Card
                className="p-2 border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full"
                radius="lg"
              >
                <CardBody className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-flex mb-5"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-lawn-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
