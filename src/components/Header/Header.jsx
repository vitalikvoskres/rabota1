import "./Header.css";
import bose from "../../assets/Logo.svg";
import burger from "../../assets/burger.svg";
import call from "../../assets/call.svg";
import sound from "../../assets/Sound.svg";
import wave from "../../assets/Vector1.svg";

function Header({ open, setOpen }) {
  return (
    <div className="red">
      <div className="pink">
        <div className="blue1">
          <div className="green1">
            <img src={bose} alt="bose" />
          </div>
          <div className="green2">
            <div className="yellow1">
              <img src={call} alt="call" />
            </div>
            <div className="yellow2" onClick={() => setOpen(!open)}>
              <img src={burger} alt="burger" />
            </div>
          </div>
        </div>
        <div className="blue2">
          <div className="yellow3">
            <img src={sound} alt="sound" />
          </div>
          <div className="yellow5">
            <img src={wave} alt="sound" />
          </div>
          <div className="yellow4">
            <span className="asd">
              The world shades.
              <br />
              Your music shines.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
