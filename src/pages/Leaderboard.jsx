import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fakeData = [
  { username: "XplodeMax", amount: 58127 },
  { username: "BangBang", amount: 41750 },
  { username: "GodAim", amount: 39210 },
  { username: "TryMe", amount: 31890 },
  { username: "SniperGirl", amount: 28900 },
  { username: "DripKing", amount: 21200 },
];

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);
  const [countdown, setCountdown] = useState("");

  // Countdown to the end of the month
  useEffect(() => {
    const target = new Date();
    target.setMonth(target.getMonth() + 1, 1);
    target.setHours(0, 0, 0, 0);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => setPlayers(fakeData), 500);
  }, []);

  return (
    <div className="bg-dark text-white px-4 py-20 min-h-screen text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-heading glow-text mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🏆 Monthly Leaderboard
      </motion.h1>

      <motion.p
        className="text-white/70 text-lg mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Compete every month using code <span className="text-primary font-bold">b4ng</span>. The top players by total wager win exclusive prizes.
      </motion.p>

      <motion.div
        className="text-primary text-xl font-mono mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Ends in: {countdown}
      </motion.div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {players.map((player, i) => {
          const rankColors = [
            "from-yellow-400 to-yellow-200",
            "from-gray-300 to-gray-200",
            "from-orange-500 to-yellow-300",
          ];

          const bg = i < 3
            ? `bg-gradient-to-br ${rankColors[i]} text-black`
            : "bg-white/5 border border-white/10 text-white";

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-xl p-6 shadow-xl ${bg} hover:scale-105 transition backdrop-blur`}
            >
              <div className="text-xl font-bold mb-2">#{i + 1} {player.username}</div>
              <div className="text-sm opacity-80 font-mono">Wagered: ${player.amount.toLocaleString()} USDT</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
