import React from "react";
import "./Burger.css";
import LogoBurger from "../../assets/LogoBurger.svg";
import IconClose from "../../assets/IconClose.svg";

const BurgerMenu = ({ open, setOpen }) => {
  return (
    <div className={`burger-menu${open ? " open" : ""}`}>
      <div className="burger-menu-content">
        <img
          src={IconClose}
          alt="IconClose"
          className="close-btn"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        />

        <nav>
          <div className="LogoBurger1">
            <img src={LogoBurger} alt="LogoBurger" />
          </div>
          <ul>
            <li>HOME</li>
            <li>RECOMMENDED</li>
            <li>CATEGORIES</li>
            <li>HOW TO BUY</li>
            <li>CONTACTS</li>
          </ul>
          <div className="phone">
            <b>+1 234 5555-55-55</b>
            <div className="call">CALL TO ORDER</div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;
