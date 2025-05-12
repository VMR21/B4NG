import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://files.kick.com/images/user/2974/profile_image/conversion/9538531a-8dde-45c8-a7a9-1fa858f2f8ce-fullsize.webp"
            alt="logo"
            className="w-10 h-10 rounded-full border border-white/20"
          />
          <h1 className="text-2xl font-bold text-white">b4ng</h1>
        </Link>

        <nav className="space-x-6 text-white/70 text-sm">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/leaderboard" className="hover:text-white transition">Leaderboard</Link>
          <Link to="/rewards" className="hover:text-white transition">Rewards</Link>
        </nav>
      </div>
    </header>
  );
}
