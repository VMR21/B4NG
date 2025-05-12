import { motion } from "framer-motion";

export default function Rewards() {
  const rewards = [
    "🎁 Double Monthly Bonus + Instant Rakeback Activated",
    "🔥 A Variety of Free Challenges Every Week",
    "💸 Double Prizes on Giveaways for b4ng Users",
    "🏆 Access to Exclusive Wagering Challenges",
    "🚀 Priority for Surprise Bonus Drops & Events"
  ];

  return (
    <div className="bg-dark text-white px-4 py-20 text-center min-h-screen">
      <motion.h1
        className="text-4xl md:text-6xl font-heading glow-text mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        🏆 Rewards for Code: b4ng
      </motion.h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {rewards.map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur shadow hover:scale-[1.02] transition"
          >
            <p className="text-lg text-white/90">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
