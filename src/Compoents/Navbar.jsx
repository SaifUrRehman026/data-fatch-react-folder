import { Button } from "react-bootstrap";
import './Navbar.css'
import ThemeButton from "./ThemeButton";
const Navbar = ({ theme, toggleTheme, search, setSearch }) => {
  return (
    <div className="nav   d-flex justify-content-end align-items-end">
      {/* 🔍 Search bar */}
      <input
        type="text"
        placeholder="Search here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control  inputtext"
      />

      {/* 🌙 Theme Toggle Button */}

      <ThemeButton theme={theme} toggleTheme={toggleTheme} />
      {/* <Button
        className="themeBtn ms-3"
        variant={theme === "light" ? "dark" : "light"}
        onClick={toggleTheme}
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </Button> */}
    </div>
  );
};

export default Navbar;



