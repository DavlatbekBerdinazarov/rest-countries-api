import { FaMoon } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa6";

function Header({ darkMode, setDarkMode }) {
  return (
    <div className={darkMode ? `header darker` : `header lighter`}>
      <div className="nav">
        <h3>Where in the world?</h3>
        {darkMode ? (
          <button onClick={() => setDarkMode(!darkMode)} className={darkMode ? `mode-btn darker` : `mode-btn lighter`}>
            <FaRegMoon />
            <p>Light Mode</p>
          </button>
        ) : (
          <button onClick={() => setDarkMode(!darkMode)} className="mode-btn">
            <FaMoon />
            <p>Dark Mode</p>
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
