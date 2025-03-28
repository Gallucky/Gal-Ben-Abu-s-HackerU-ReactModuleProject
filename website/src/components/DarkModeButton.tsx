import { DarkThemeToggle } from "flowbite-react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons from react-icons
import { useState, useEffect } from "react";

function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");
    console.log("Inside useEffect");
  }, [isDarkMode]);

  return (
    <div className="flex justify-center">
      <DarkThemeToggle
        className="bg-dark-500 linear
        apply-fade-in-out-animation
          rounded-2xl p-2
          text-[#FFD700] transition-all
          duration-[1s] hover:bg-[#ffffff3d]
            focus:ring-transparent dark:text-white
            dark:focus:ring-transparent
          "
        iconLight={FaSun}
        iconDark={FaMoon}
      />
    </div>
  );
}

export default DarkModeButton;
