import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-dark min-h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-heading glow-text mb-6"
      >
        B4NG LEADERBOARD
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-white/70 max-w-2xl mb-10"
      >
        The ultimate challenge. Use code <span className="text-primary font-bold">b4ng</span> on Stake and climb the ranks.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Link
          to="/leaderboard"
          className="bg-primary text-black px-8 py-4 text-lg font-bold rounded-full shadow-lg hover:scale-105 transition"
        >
          View Leaderboard
        </Link>
      </motion.div>
    </div>
  );
}
