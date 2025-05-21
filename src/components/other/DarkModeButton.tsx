import { DarkThemeToggle } from "flowbite-react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons from react-icons
import { useState, useEffect } from "react";

type DarkModeButtonProps = {
  // Optional className prop for additional styling
  className?: string;
};

function DarkModeButton(props: DarkModeButtonProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Default to an empty string if no className is provided
  const customClasses = props.className ?? "";

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");
  }, [isDarkMode]);

  const classes =
    `bg-dark-500 linear apply-fade-in-out-animation
    rounded-2xl p-2 text-[#FFD700] transition-all
    duration-[1s] hover:bg-[#ffffff3d]
    focus:ring-transparent dark:text-white
    dark:focus:ring-transparent
    ` + customClasses;

  return (
    <div className="flex justify-center">
      <DarkThemeToggle
        className={classes}
        iconLight={FaSun}
        iconDark={FaMoon}
      />
    </div>
  );
}

export default DarkModeButton;
