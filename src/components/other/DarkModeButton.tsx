import { DarkThemeToggle } from "flowbite-react";
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

type DarkModeButtonProps = {
  // Optional className prop for additional styling
  className?: string;
};

function DarkModeButton(props: DarkModeButtonProps) {
  // Default to an empty string if no className is provided
  const customClasses = props.className ?? "";

  const classes =
    `bg-dark-500 linear
    rounded-2xl p-2 text-[#FFD700] transition-all
    duration-[1s] hover:bg-[#ffffff3d]
    focus:ring-transparent dark:text-white
    dark:focus:ring-transparent
    ` + customClasses;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const button = e.currentTarget;

    if (button) {
      // Adding the animation.
      button.classList.add("apply-fade-in-out-animation");

      // Listening to when the animation ends.
      button.addEventListener(
        "animationend",
        // Removing the animation - This runs only one time / once.
        () => button.classList.remove("apply-fade-in-out-animation"),
        { once: true },
      );
    }
  };

  return (
    <div className="flex justify-center" onClick={handleClick}>
      <DarkThemeToggle
        className={classes}
        iconLight={FaSun}
        iconDark={FaMoon}
      />
    </div>
  );
}

export default DarkModeButton;
