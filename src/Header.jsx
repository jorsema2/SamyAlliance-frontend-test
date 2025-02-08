import React from "react";

const Header = ({ searchQuery, search }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      search(e.target.value);
    }
  };

  return (
    <header>
      <h1>SAMY</h1>
      <input
        type="text"
        placeholder={searchQuery}
        onKeyDown={handleKeyPress}
        aria-label="Search"
      />
    </header>
  );
};

export default Header;
