import "./BrowseCategories.css";
import Baba1 from "../../assets/Baba1.svg";
import Baba2 from "../../assets/Baba2.svg";
import box1 from "../../assets/box1.svg";
import box2 from "../../assets/box2.svg";
import sunglasses1 from "../../assets/sunglasses1.svg";
import sunglasses2 from "../../assets/sunglasses2.svg";

function BrowseCategories() {
  return (
    <div className="Browse-red">
      <div className="Browse-pink">
        <h1>
          Browse Bose
          <br />
          products by category
        </h1>
        <div className="Browse-blue2">
          <div className="Purple1">
            <div className="Browse-green1">
              <img
                className="browsephoto"
                src={Baba1}
                alt="Headphones & earbuds"
              />
            </div>
            <div className="Browse-green2">
              <img
                className="browsephoto"
                src={Baba2}
                alt="Headphones & earbuds detail"
              />
            </div>
          </div>
          <div className="Browse-brown1">
            <span className="Headphones">Headphones & earbuds</span>
          </div>
        </div>
        <div className="Browse-blue3">
          <div className="Purple1">
            <div className="Browse-green3">
              <img className="browsephoto" src={box1} alt="Speakers" />
            </div>
            <div className="Browse-green4">
              <img className="browsephoto" src={box2} alt="Speakers detail" />
            </div>
          </div>
          <div className="Browse-brown2">
            <span>Speakers</span>
          </div>
        </div>
        <div className="Browse-blue4">
          <div className="Purple1">
            <div className="Browse-green5">
              <img
                className="browsephoto"
                src={sunglasses1}
                alt="Audio sunglasses"
              />
            </div>
            <div className="Browse-green6">
              <img
                className="browsephoto"
                src={sunglasses2}
                alt="Audio sunglasses detail"
              />
            </div>
          </div>
          <div className="Browse-brown3">
            <span>Audio sunglasses</span>
          </div>
        </div>
        <button className="view-all">View all</button>
      </div>
    </div>
  );
}

export default BrowseCategories;
