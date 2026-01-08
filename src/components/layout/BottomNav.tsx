import { NavLink } from "react-router-dom";
import {
  Home,
  Heart,
  MessageCircle,
  User,
  MapPin,
} from "lucide-react";

const linkBase =
  "flex flex-col items-center justify-center text-xs transition-all duration-200";

const navItems = [
  { to: "/community", label: "Comunidad", Icon: MapPin }, // 👈 NUEVO
  { to: "/", label: "Explore", Icon: Home, end: true },
  { to: "/matches", label: "Matches", Icon: Heart },
  { to: "/messages", label: "Chat", Icon: MessageCircle },
  { to: "/profile", label: "Perfil", Icon: User },
];

export default function BottomNav() {
  return (
    <nav
      className="
        fixed bottom-0 left-0 right-0 h-16
        bg-tribe-primary
        flex justify-around items-center
        rounded-t-2xl
        border-t border-white/20
        shadow-[0_-8px_24px_rgba(20,184,166,0.35)]
        z-50
      "
    >
      {navItems.map(({ to, label, Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? "text-white scale-110"
                : "text-tribe-soft opacity-90"
            }`
          }
        >
          <Icon size={22} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
