import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fakeData = [
  { username: "*****EID", amount: 83725, prize: 9000 },
  { username: "****688", amount: 47607, prize: 4500 },
  { username: "******B33", amount: 33174, prize: 2000 },
  { username: "**FAN", amount: 27177, prize: 1250 },
  { username: "******921", amount: 25321, prize: 1000 },
  { username: "******qnk", amount: 21305, prize: 750 },
  { username: "******ric", amount: 18714, prize: 500 },
  { username: "******eun", amount: 17998, prize: 350 },
];

export default function Leaderboard() {
  const [top3, setTop3] = useState([]);
  const [rest, setRest] = useState([]);

  useEffect(() => {
    setTop3(fakeData.slice(0, 3));
    setRest(fakeData.slice(3));
  }, []);

  return (
    <div className="bg-dark text-white px-4 py-20 min-h-screen text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-heading glow-text mb-2"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🏆 Monthly Leaderboard
      </motion.h1>
      <p className="text-white/70 text-lg mb-12">
        Track the top performers using code <span className="text-primary font-semibold">b4ng</span>. Top 10 get rewards.
      </p>

      {/* Top 3 Spotlight */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {top3.map((player, i) => {
          const glow = ["shadow-yellow-500", "shadow-gray-400", "shadow-orange-500"];
          const rankColors = ["text-yellow-300", "text-gray-300", "text-orange-300"];
          const borderGlow = ["border-yellow-500", "border-gray-400", "border-orange-500"];

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className={`rounded-xl bg-black/80 border-2 ${borderGlow[i]} p-6 text-center backdrop-blur shadow-xl ${glow[i]} hover:scale-105 transition`}
            >
              <div className={`text-3xl font-bold ${rankColors[i]} mb-2`}>#{i + 1}</div>
              <div className="text-xl font-semibold text-white mb-1">{player.username}</div>
              <div className="text-white/70 text-sm mb-4">${player.amount.toLocaleString()} WAGERED</div>
              <div className="text-green-400 font-bold text-lg">🏆 ${player.prize.toLocaleString()}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Rest of leaderboard */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-4 gap-4 px-4 text-left text-sm font-semibold text-white/60 border-b border-white/10 pb-2">
          <div>Rank</div>
          <div>Player</div>
          <div>Wagered</div>
          <div>Prize</div>
        </div>

        {rest.map((player, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="grid grid-cols-4 gap-4 px-4 py-3 border-b border-white/5 text-sm text-white hover:bg-white/5 transition"
          >
            <div>= #{i + 4}</div>
            <div>{player.username}</div>
            <div>${player.amount.toLocaleString()}</div>
            <div className="text-green-400 font-semibold">${player.prize}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
