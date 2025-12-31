import {NavLink} from "react-router-dom";

const linkClass =
  "flex flex-col items-center justify-center text-xs";

export default function BottomNav() {
    return (
        <nav className="fixed-bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center">

          <NavLink to="/" className={linkClass}>
            <span>🔍</span>
            <span>Search</span>
          </NavLink>

          <NavLink to="/matches" className={linkClass}>
            <span>❤️</span>
            <span>Matches</span>
          </NavLink>

         <NavLink to="/profile" className={linkClass}>
          <span>👤</span>
          <span>Perfil</span>
        </NavLink>
      </nav>
    );
}