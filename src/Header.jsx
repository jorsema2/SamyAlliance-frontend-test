import React from "react";

const Header = ({ searchQuery, search }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      search(e.target.value);
    }
  };

  return (
    <div>
      <h2>SAMY</h2>
      <input type="text" placeholder={searchQuery} onKeyDown={handleKeyPress} />
    </div>
  );
};

export default Header;
