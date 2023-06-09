import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TeamMobile from "../components/TeamMobile";
import logo from "../assets/icon-512x512.webp";
import "../styles/header.scss";

const TeamHeader = () => {
  // theme
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleChangeCheckbox = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header className="flex items-center justify-between p-5 team-header">
      <div className="left">
        <Link to="/" className="special">
          <img src={logo} alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div className="middle min-[290px]:hidden md:block">
        <nav className="flex items-center justify-center gap-5">
          <Link to="/" className="text-2xl dark:text-white" aria-label="Home">
            HOME
          </Link>
          <Link
            to="/mohamed-reda"
            className="text-2xl dark:text-white"
            aria-label="mohamed reda"
          >
            MOHAMED REDA
          </Link>
          <Link
            to="/eyad-ayman"
            className="text-2xl dark:text-white"
            aria-label="eyad ayman"
          >
            EYAD AYMAN
          </Link>
          <Link
            to="/seif-eldin-sameh"
            className="text-2xl dark:text-white"
            aria-label="seif eldin sameh"
          >
            SEIF ELDIN SAMEH
          </Link>
          <Link
            to="/kirolos-adel"
            className="text-2xl dark:text-white"
            aria-label="kirolos adel"
          >
            KIROLOS ADEL
          </Link>
          <Link
            to="/yassmin"
            className="text-2xl dark:text-white"
            aria-label="yassmin"
          >
            YASSMIN ADEL
          </Link>
        </nav>
      </div>
      <div className="small-middle min-[290px]:block md:hidden">
        <TeamMobile />
      </div>
      <div className="right">
        <label className="swap swap-rotate" htmlFor="theme">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            id="theme"
            aria-label="theme mode"
            onClick={handleTheme}
            onChange={handleChangeCheckbox}
            checked={theme === "dark"}
          />

          {/* sun icon */}
          <svg
            className="w-10 h-10 fill-[#ffcc00] swap-on"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="w-10 h-10 fill-[#f5f9fa] swap-off"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </header>
  );
};

export default TeamHeader;
