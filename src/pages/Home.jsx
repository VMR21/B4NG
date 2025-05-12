import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6 },
  });

  return (
    <div className="bg-dark text-white px-4 py-16 space-y-20">

      {/* Hero Section */}
      <motion.div
        {...fadeIn(0)}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-heading glow-text mb-4">B4NG LEADERBOARD</h1>
        <p className="text-white/70 max-w-xl mx-auto text-lg">
          Use code <span className="text-primary font-bold">b4ng</span> on Stake and join the exclusive leaderboard for massive rewards.
        </p>
      </motion.div>

      {/* About Box */}
      <motion.div
        {...fadeIn(0.2)}
        className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto shadow-xl hover:shadow-2xl transition"
      >
        <h2 className="text-2xl font-bold mb-3 text-white">📌 What Is This?</h2>
        <p className="text-white/70 leading-relaxed">
          This is a custom leaderboard for Stake users who register or play with code <span className="text-primary font-bold">b4ng</span>.
          Every wager you make helps you climb the ranks and win exclusive bonuses.
        </p>
      </motion.div>

      {/* Why Use Cards */}
      <motion.div
        {...fadeIn(0.4)}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6"
      >
        {[
          "💰 Instant eligibility for leaderboard rewards",
          "🎁 Access to giveaways + custom VIP bonuses",
          "🧠 Strategy and support for high rollers",
          "🔥 Private events and exclusive drops",
        ].map((text, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur hover:shadow-xl transition"
          >
            <p className="text-white">{text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* How to Join Steps */}
      <motion.div
        {...fadeIn(0.6)}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">🚀 How To Join</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              title: "Join via Code",
              desc: "Go to Stake using the code b4ng or our direct link.",
            },
            {
              step: "2",
              title: "Start Wagering",
              desc: "Wager on any games. Every amount counts.",
            },
            {
              step: "3",
              title: "Check Leaderboard",
              desc: "Your rank is updated automatically. Climb up!",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur-lg shadow"
            >
              <div className="text-4xl font-bold text-primary mb-2">{s.step}</div>
              <h3 className="text-xl font-semibold mb-1">{s.title}</h3>
              <p className="text-white/70 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        {...fadeIn(0.8)}
        className="text-center"
      >
        <p className="text-white/70 mb-4 text-lg">
          View the current rankings and start climbing the board.
        </p>
        <Link
          to="/leaderboard"
          className="px-8 py-4 bg-primary text-black font-bold rounded-full shadow-lg hover:scale-105 transition"
        >
          View Leaderboard
        </Link>
      </motion.div>
    </div>
  );
}
