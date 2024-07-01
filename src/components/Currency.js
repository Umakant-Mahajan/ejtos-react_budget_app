import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import './Dropdown.css';
import { Button } from "bootstrap";

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);

  const Currmap = {
    '$': 'Dollar',
    '£': 'Pound',
    '€': 'Euro',
    '₹': 'Rupee'
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setIsOpen(false);
    dispatch({ type: "CHG_CURRENCY", currency: value });
  };
 
  return (
    <div className="dropdown-container">
      <div className="dropdown-box" onClick={toggleDropdown}>
        Currency: ({currency} {Currmap[currency]})
        <span className="dropdown-arrow">&#9660;</span>
      </div>
      {isOpen && (
        <div className="drop-menu">
          <div className="dropdown-item" onClick={() => handleSelect('$')}>$ Dollar</div>
          <div className="dropdown-item" onClick={() => handleSelect('£')}>£ Pound</div>
          <div className="dropdown-item" onClick={() => handleSelect('€')}>€ Euro</div>
          <div className="dropdown-item" onClick={() => handleSelect('₹')}>₹ Rupee</div>
        </div>
     )}
    </div>
  );
};

export default Currency;
