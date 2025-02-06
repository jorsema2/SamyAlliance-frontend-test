import React from "react";

const Header = ({ searchQuery, setSearchQuery }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(e.target.value);
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
