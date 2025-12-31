import { NavLink } from "react-router-dom";

const BottomNav = () => {
  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    flex: 1,
    textAlign: "center" as const,
    padding: "10px 0",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "56px",
        display: "flex",
        borderTop: "1px solid #eee",
        background: "#fff",
      }}
    >
      <NavLink to="/" style={linkStyle}>🔥</NavLink>
      <NavLink to="/cerca" style={linkStyle}>📍</NavLink>
      <NavLink to="/matches" style={linkStyle}>❤️</NavLink>
      <NavLink to="/messages" style={linkStyle}>💬</NavLink>
      <NavLink to="/profile" style={linkStyle}>👤</NavLink>
    </nav>
  );
};

export default BottomNav;
