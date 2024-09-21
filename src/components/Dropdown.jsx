import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Breadcrumbs = ({navEle}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleItemClick = (item) => {
    setDropdownVisible(false); 
  };

  return (
    <div className="container px-0">
      <button
        className="btn btn-link"
        onClick={toggleDropdown}
        aria-expanded={dropdownVisible}
      >
        <MenuIcon style={{color:"black"}} />
      </button>

      {dropdownVisible && (
        <div className="dropdown-menu show mt-2">
          {navEle.map((item) => (
            <button
              key={item}
              className="dropdown-item"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Breadcrumbs;
