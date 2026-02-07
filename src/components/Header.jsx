import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-left">
        <h2 className="brand">FF Tournament</h2>
      </div>

      <nav className="header-nav">
        <Link to="/">Matches</Link>
        <Link to="/wallet">Wallet</Link>
        <Link to="/notice">Notice</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/admin">Admin</Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
