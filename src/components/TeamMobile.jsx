/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

function TeamMobile({ open }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-[#0f75bd]/80 transform ${
        open ? "-translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out filter  `}
    >
      <div className="flex flex-col items-center justify-center gap-8 mt-[10rem]">
        <Link to="/" className="text-4xl dark:text-white" aria-label="Home">
          HOME
        </Link>
        <Link
          to="/mohamed-reda"
          className="text-4xl dark:text-white"
          aria-label="mohamed reda"
        >
          MOHAMED REDA
        </Link>
        <Link
          to="/eyad-ayman"
          className="text-4xl dark:text-white"
          aria-label="eyad ayman"
        >
          EYAD AYMAN
        </Link>
        <Link
          to="/seif-eldin-sameh"
          className="text-4xl dark:text-white"
          aria-label="seif eldin sameh"
        >
          SEIF ELDIN SAMEH
        </Link>
        <Link
          to="/kirolos-adel"
          className="text-4xl dark:text-white"
          aria-label="kirolos adel"
        >
          KIROLOS ADEL
        </Link>
        <Link
          to="/yassmin"
          className="text-4xl dark:text-white"
          aria-label="yassmin"
        >
          YASSMIN
        </Link>
      </div>
    </div>
  );
}
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <TeamMobile open={open} setOpen={setOpen} />
      <div className="flex items-center justify-center">
        <div
          className="relative z-50 flex flex-col items-center justify-between w-6 h-6 cursor-pointer group"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-[#f5f9fa] rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-[#f5f9fa] rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
              open ? "hidden" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-[#f5f9fa] rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
