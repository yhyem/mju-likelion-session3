import React from "react";

const DarkMode = (props) => {
  return (
    <>
      <button
        className="darkModeToggle"
        onClick={() => props.darkMode(!props.dark)}
      >
        dark mode
      </button>
    </>
  );
};

export default DarkMode;
