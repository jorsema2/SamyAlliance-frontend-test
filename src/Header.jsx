import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Header = ({ searchQuery, search }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      search(e.target.value);
    }
  };

  return (
    <header>
      <h1>SAMY</h1>
      <div>
        <HiMagnifyingGlass className="search-icon" />
        <input
          type="text"
          placeholder={searchQuery}
          onKeyDown={handleKeyPress}
          aria-label="Search"
        />
      </div>
    </header>
  );
};

export default Header;
