import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-space-walk-4047/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-32 space-y-10">
        <motion.h1
          className="text-4xl md:text-6xl font-heading glow-text"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join the B4NG Leaderboard
        </motion.h1>

        <motion.p
          className="text-white/80 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Use code <span className="text-primary font-bold">b4ng</span> on
          Stake.com and climb our exclusive leaderboard to unlock bonuses and
          rewards.
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
            className="bg-primary text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition shadow-xl"
          >
            🎥 Watch Live on Kick
          </a>

          <Link
            to="/rewards"
            className="border border-primary text-primary font-semibold px-8 py-4 rounded-full hover:bg-primary hover:text-black transition shadow"
          >
            View Rewards
          </Link>

          <Link
            to="/leaderboard"
            className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full hover:bg-primary hover:text-black transition shadow"
          >
            View Leaderboard
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
