import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Input, Button, Spinner } from "@heroui/react";

export default function WaitlistForm({ formRef }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zipCode: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(field) {
    return (e) => setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      navigate(`/welcome?ref=${data.referralCode}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      ref={formRef}
      className="relative py-24 bg-gradient-to-b from-white via-lawn-50 to-lawn-100 overflow-hidden"
    >
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[1px]">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 0H1440V30C1200 60 960 0 720 30C480 60 240 0 0 30V0Z" fill="white" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column: illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <svg
                viewBox="0 0 500 400"
                fill="none"
                className="w-full max-w-md mx-auto"
              >
                {/* Sky */}
                <rect width="500" height="400" rx="24" fill="#ecfdf5" />
                {/* Sun */}
                <circle cx="400" cy="80" r="40" fill="#facc15" opacity="0.6" />
                <circle cx="400" cy="80" r="30" fill="#fde68a" />
                {/* House */}
                <rect x="180" y="160" width="140" height="120" rx="4" fill="#065f46" />
                <polygon points="250,100 160,170 340,170" fill="#047857" />
                <rect x="220" y="210" width="40" height="70" rx="3" fill="#34d399" />
                <rect x="290" y="190" width="20" height="20" rx="2" fill="#6ee7b7" />
                {/* Ground / lawn */}
                <rect x="0" y="280" width="500" height="120" rx="0" fill="#10b981" />
                <rect x="0" y="280" width="500" height="8" fill="#059669" />
                {/* Lawn mower */}
                <rect x="60" y="265" width="50" height="30" rx="6" fill="#064e3b" />
                <circle cx="65" cy="300" r="10" fill="#022c22" />
                <circle cx="65" cy="300" r="5" fill="#6ee7b7" />
                <circle cx="105" cy="300" r="10" fill="#022c22" />
                <circle cx="105" cy="300" r="5" fill="#6ee7b7" />
                <rect x="100" y="260" width="4" height="20" rx="2" fill="#064e3b" />
                {/* Lawn lines */}
                {[320, 340, 360, 380].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="500"
                    y2={y}
                    stroke="#059669"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                ))}
                {/* Trees */}
                <rect x="420" y="210" width="10" height="70" fill="#065f46" />
                <circle cx="425" cy="190" r="30" fill="#047857" />
                <circle cx="415" cy="200" r="20" fill="#059669" />
                {/* Stars */}
                <text x="80" y="100" fontSize="24" fill="#facc15" opacity="0.5">
                  ★
                </text>
                <text x="320" y="60" fontSize="16" fill="#facc15" opacity="0.4">
                  ★
                </text>
              </svg>
            </div>
          </motion.div>

          {/* Right column: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-lawn-600 text-white text-sm font-semibold mb-4">
              Free &amp; Easy
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-lawn-950 mb-3">
              Get on the <span className="gradient-text">waitlist</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Leave your info and we&apos;ll send you an exclusive invite as soon
              as Lawn Stars launches in your neighborhood.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-lawn-800 font-semibold text-sm">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={handleChange("name")}
                  isRequired
                  variant="bordered"
                  radius="lg"
                  classNames={{
                    inputWrapper: "border-lawn-200 hover:border-lawn-400 focus-within:!border-lawn-500 min-h-12",
                  }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-lawn-800 font-semibold text-sm">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange("email")}
                  isRequired
                  variant="bordered"
                  radius="lg"
                  classNames={{
                    inputWrapper: "border-lawn-200 hover:border-lawn-400 focus-within:!border-lawn-500 min-h-12",
                  }}
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-lawn-800 font-semibold text-sm">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange("phone")}
                    variant="bordered"
                    radius="lg"
                    classNames={{
                      inputWrapper: "border-lawn-200 hover:border-lawn-400 focus-within:!border-lawn-500 min-h-12",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-lawn-800 font-semibold text-sm">
                    Zip Code <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="30301"
                    value={formData.zipCode}
                    onChange={handleChange("zipCode")}
                    isRequired
                    variant="bordered"
                    radius="lg"
                    classNames={{
                      inputWrapper: "border-lawn-200 hover:border-lawn-400 focus-within:!border-lawn-500 min-h-12",
                    }}
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm font-medium">{error}</p>
              )}

              <Button
                type="submit"
                isLoading={loading}
                spinner={<Spinner size="sm" color="white" />}
                size="lg"
                radius="lg"
                className="w-full bg-gradient-to-r from-lawn-600 to-lawn-500 text-white font-bold text-lg shadow-xl hover:shadow-lawn-500/30 transition-all hover:scale-[1.02] mt-1"
              >
                {loading ? "Joining..." : "Join the Waitlist"}
              </Button>

              <p className="text-xs text-gray-400 text-center -mt-2">
                By joining, you agree to receive updates from Lawn Stars. We
                respect your privacy — unsubscribe anytime.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
