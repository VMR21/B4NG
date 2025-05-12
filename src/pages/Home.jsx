// Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6 },
  });

  return (
    <div className="relative overflow-hidden bg-dark text-white px-4 py-16 space-y-20">

      {/* Background Motion Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-[100vw] h-[100vh] animate-pulse opacity-10 bg-gradient-radial from-primary via-accent to-dark blur-3xl rounded-full mx-auto" />
      </div>

      <div className="relative z-10">
        {/* Glowing Promo Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="bg-gradient-to-r from-[#3fffc0]/20 to-[#ff5ad4]/20 border border-white/10 backdrop-blur p-4 rounded-xl max-w-5xl mx-auto text-center text-white shadow-lg mb-10"
        >
          <p className="text-sm md:text-base leading-relaxed">
            <span className="text-primary font-bold">Use code b4ng</span> or 
            <a
              href="https://stake.com/?c=b4ng"
              className="text-accent underline hover:text-white mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              stake.com/?c=b4ng
            </a>
            for <strong>b4ng's exclusive</strong> Double Monthly Bonus + Instant rakeback! 🎯 Variety of free challenges + 💸 Double prizes on giveaways + 🎁 Exclusive challenges!
            <br />🏆 <strong>Leaderboard starts May 1st</strong> — First 10 users get a $15 bonus on deposit!
          </p>
        </motion.div>

        {/* Hero Section */}
        <motion.div {...fadeIn(0)} className="text-center">
          <h1 className="text-5xl md:text-7xl font-heading glow-text mb-4">B4NG LEADERBOARD</h1>
          <p className="text-white/70 max-w-xl mx-auto text-lg">
            Enter code <span className="text-primary font-bold">b4ng</span> on Stake and unlock exclusive rewards + access to our challenge leaderboard.
          </p>
        </motion.div>

        {/* What is this box */}
        <motion.div
          {...fadeIn(0.2)}
          className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto shadow-xl hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold mb-3 text-white">📌 What Is This?</h2>
          <p className="text-white/70 leading-relaxed">
            Stake users who use the code <span className="text-primary font-bold">b4ng</span> automatically enter a private leaderboard challenge. Your wager total decides your position — the higher you rank, the bigger your bonus.
          </p>
        </motion.div>

        {/* Floating Benefit Cards */}
        <motion.div
          {...fadeIn(0.4)}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6"
        >
          {["💰 Instant eligibility for rewards", "🎁 VIP + exclusive bonuses", "🔥 Private leaderboard prizes", "🧠 Telegram access + early drops"].map((text, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur shadow hover:scale-105 hover:shadow-xl transition"
            >
              <p className="text-white text-center">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* How To Join */}
        <motion.div {...fadeIn(0.6)} className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">🚀 How To Join</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Join via Code",
                desc: "Visit Stake.com and sign up using the code b4ng.",
              },
              {
                step: "2",
                title: "Start Wagering",
                desc: "Play any games — every wager counts toward your rank.",
              },
              {
                step: "3",
                title: "Climb the Leaderboard",
                desc: "You're automatically added. Check your position live.",
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

        {/* CTA */}
        <motion.div {...fadeIn(0.8)} className="text-center">
          <p className="text-white/70 mb-4 text-lg">
            Leaderboard is live. Don’t miss your chance to win.
          </p>
          <Link
            to="/leaderboard"
            className="px-8 py-4 bg-primary text-black font-bold rounded-full shadow-lg hover:scale-105 transition"
          >
            View Leaderboard
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
