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

  useEffect(() => {
    setTimeout(() => setPlayers(fakeData), 500);
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <motion.h2
        className="text-4xl font-bold text-center glow-text mb-8"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Top Players
      </motion.h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {players.map((player, i) => {
          const rankColors = [
            "from-yellow-400 to-yellow-200",
            "from-gray-300 to-gray-200",
            "from-orange-500 to-yellow-300",
          ];
          const bg = i < 3 ? `bg-gradient-to-br ${rankColors[i]} text-black` : "bg-[#1a1a1a] text-white";

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-xl p-4 shadow-xl ${bg} transition hover:scale-105`}
            >
              <div className="text-xl font-bold mb-1">#{i + 1} {player.username}</div>
              <div className="text-sm opacity-80 font-mono">Wagered: ${player.amount.toLocaleString()} USDT</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
