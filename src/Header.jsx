import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Header = ({ searchQuery, search }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      search(e.target.value);
    }
  };

  return (
    <header className="header">
      <svg
        width="139"
        height="24"
        viewBox="0 0 139 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="samy-logo"
      >
        <path
          d="M11.1815 10.1961C4.9189 9.43061 3.22497 8.33933 3.22497 6.41737C3.22497 4.16152 5.14693 2.47574 10.7499 2.47574C14.3332 2.47574 17.7129 3.70546 19.8303 5.13064L20.7913 2.54903C18.4052 1.0587 14.3984 0 10.7499 0C4.18595 0 0.50492 2.41873 0.50492 6.46623C0.50492 10.5137 4.15338 12.1018 11.0105 12.8999C17.2406 13.6328 19.3987 14.3902 19.3987 16.8415C19.3987 19.8873 16.3122 21.5161 11.0431 21.5161C7.06889 21.5161 3.7869 19.9606 1.19715 18.0387L0 20.5877C2.94808 22.7051 7.12589 24 11.0675 24C17.8921 24 22.1025 21.0845 22.1025 16.7112C22.1025 12.338 18.7879 11.1408 11.1653 10.2124L11.1815 10.1961Z"
          fill="#1D1D1B"
        />
        <path
          d="M86.1215 20.4737L76.642 0.390869H72.8307V23.5928H75.4774V3.86831L84.8266 23.5928H87.3105L96.6271 4.06376V23.5928H99.2739V0.390869H95.5603L86.1215 20.4737Z"
          fill="#1D1D1B"
        />
        <path
          d="M47.8046 0.390869H45.1578V14.2273L33.0479 21.3451L34.3916 23.6335L46.4771 16.5239L58.5708 23.6335L59.9145 21.3451L47.8046 14.2273V0.390869Z"
          fill="#1D1D1B"
        />
        <path
          d="M137.184 0.342041L125.09 7.45164L113.004 0.342041L111.661 2.63047L123.762 9.74821V23.5928H126.417V9.74821L138.527 2.63047L137.184 0.342041Z"
          fill="#1D1D1B"
        />
      </svg>

      <div className="search-bar">
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
