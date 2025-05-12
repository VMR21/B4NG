import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-dark text-white px-4 py-24 text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-heading glow-text mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Join the B4NG Leaderboard
      </motion.h1>

      <motion.p
        className="text-white/70 max-w-2xl mx-auto mb-8 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Use code <span className="text-primary font-bold">b4ng</span> on Stake.com and become part of our exclusive leaderboard challenge. Track your progress, wager more, and win exclusive bonuses.
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="https://kick.com/b4ng"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition"
        >
          🎥 Watch Live on Kick
        </a>

        <Link
          to="/rewards"
          className="border border-primary text-primary font-semibold px-8 py-4 rounded-full hover:bg-primary hover:text-black transition"
        >
          View Rewards
        </Link>
      </motion.div>
    </div>
  );
}
