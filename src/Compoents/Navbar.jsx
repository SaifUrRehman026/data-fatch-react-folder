import { Button } from "react-bootstrap";
import './Navbar.css'
import ThemeButton from "./ThemeButton";
const Navbar = ({ theme, toggleTheme, search, setSearch }) => {
  return (
    <div className="nav   d-flex justify-content-end align-items-end">
      {/*  Search bar */}
      <input
        type="text"
        placeholder="Search here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control  inputtext"
      />

      {/* {Theme  Button } */}

      <ThemeButton theme={theme} toggleTheme={toggleTheme} />
     
    </div>
  );
};

export default Navbar;



