/* eslint-disable react/prop-types */
import { useState } from "react";

const handleClickScroll1 = () => {
  const element = document.getElementById("about-us");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const handleClickScroll2 = () => {
  const element = document.getElementById("services");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const handleClickScroll3 = () => {
  const element = document.getElementById("appointment");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const handleClickScroll4 = () => {
  const element = document.getElementById("support");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const handleClickScroll6 = () => {
  const element = document.getElementById("team");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const handleClickScroll7 = () => {
  const element = document.getElementById("partners");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
function MobileNav({ open }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-[#0f75bd]/80 transform ${
        open ? "-translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out filter  `}
    >
      <div className="flex flex-col items-center justify-center gap-8 mt-[10rem]">
        <p onClick={handleClickScroll1} className="text-4xl text-white">
          ABOUT US
        </p>
        <p onClick={handleClickScroll2} className="text-4xl text-white">
          SERVICES
        </p>
        <p onClick={handleClickScroll6} className="text-4xl text-white">
          OUR TEAM
        </p>
        <p onClick={handleClickScroll7} className="text-4xl text-white">
          OUR PARTNERS
        </p>
        <p onClick={handleClickScroll3} className="text-4xl text-white">
          APPOINTMENT
        </p>
        <p onClick={handleClickScroll4} className="text-4xl text-white">
          SUPPORT
        </p>
      </div>
    </div>
  );
}
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex items-center justify-center">
        <div
          className="relative z-50 flex flex-col items-center justify-between w-6 h-6 cursor-pointer group"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-[#1e1e1e] dark:bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-[#1e1e1e] dark:bg-white rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
              open ? "hidden" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-[#1e1e1e] dark:bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
