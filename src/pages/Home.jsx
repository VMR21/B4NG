import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-dark text-white px-4 py-10">
      <motion.h1
        className="text-center text-5xl md:text-7xl font-heading glow-text mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        B4NG LEADERBOARD
      </motion.h1>

      <motion.p
        className="text-center text-white/70 max-w-2xl mx-auto mb-10 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Use code <span className="text-primary font-bold">b4ng</span> on Stake and become part of the exclusive leaderboard race. Wager, rank up, and win custom rewards.
      </motion.p>

      <div className="max-w-4xl mx-auto space-y-12 text-white/80 leading-relaxed">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-2">📌 What Is This?</h2>
          <p>
            This is a custom Stake leaderboard built for users who enter the code <span className="text-primary font-semibold">b4ng</span>. By using this code, you are tracked automatically and placed into a competition based on your wagered amount.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-2">🎁 Why Use Code <span className="text-primary">b4ng</span>?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Instant eligibility for leaderboard prizes</li>
            <li>Exclusive support + guidance via Telegram</li>
            <li>Giveaways & custom bonus opportunities</li>
            <li>Private competitions and VIP benefits</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white mb-2">🚀 How To Join</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Visit <a href="https://stake.com/?c=b4ng" className="text-primary hover:underline" target="_blank">Stake.com using this link</a></li>
            <li>Create your account with the code <strong>b4ng</strong></li>
            <li>Start wagering and you’ll be automatically ranked</li>
          </ol>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-2xl font-bold text-white mb-2">📊 View The Leaderboard</h2>
          <p>
            The leaderboard is updated live and shows the top players who have wagered the most using code <span className="text-primary font-semibold">b4ng</span>.
          </p>
          <Link
            to="/leaderboard"
            className="inline-block mt-4 px-6 py-3 bg-primary text-black font-bold rounded-lg hover:scale-105 transition"
          >
            View Leaderboard
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
