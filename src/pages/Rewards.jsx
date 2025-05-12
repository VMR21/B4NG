import { motion } from "framer-motion";

const rewards = [
  {
    title: "Double Monthly Bonus",
    description: "All users with code b4ng receive double monthly rewards on top of base leaderboard prizes.",
    button: "DOUBLE MONTHLY BONUS",
    link: "https://stake.com/?c=b4ng"
  },
  {
    title: "Instant Rakeback",
    description: "Every wager gives back. Code b4ng instantly activates max rakeback on your account.",
    button: "CLAIM RAKEBACK",
    link: "https://stake.com/?c=b4ng"
  },
  {
    title: "Double Giveaway Prizes",
    description: "Participate in our giveaways and get 2x prize pool if you're using code b4ng.",
    button: "ENTER GIVEAWAYS",
    link: "https://stake.com/?c=b4ng"
  }
];

export default function Rewards() {
  return (
    <div className="bg-dark text-white px-4 py-20 text-center min-h-screen">
      <motion.h1
        className="text-4xl md:text-6xl font-heading glow-text mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        🎁 Rewards for Code: b4ng
      </motion.h1>

      <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2">
        {rewards.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur shadow-xl hover:scale-105 transition flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold text-primary mb-2 uppercase tracking-wide">{r.title}</h2>
              <p className="text-white/80 text-sm leading-relaxed">{r.description}</p>
            </div>
            <a
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-primary text-black font-semibold py-3 rounded-lg hover:opacity-90 transition block"
            >
              {r.button}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
