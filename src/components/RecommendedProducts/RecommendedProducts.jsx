import "./RecommendedProducts.css";
import kolonka from "../../assets/kolonka.svg";
import kolonkaa from "../../assets/kolonkaa.svg";
import kolonkaaa from "../../assets/kolonkaaa.svg";

function RecommendedProducts() {
  return (
    <div className="Recommend-Red">
      <div className="Recommend-pink">
        <div className="Recommend-blue1">
          <h1>Recommended</h1>
        </div>
        <div className="Recommend-blue2">
          <div className="Recommend-yellow1">
            <div className="Recommend-green1">
              <img src={kolonka} alt="Bose portable Smart speaker" />
            </div>
            <div className="Recommend-green2">
              <div className="Recommend-brown1">
                <span>Bose portable Smart speaker</span>
              </div>
              <div className="Recommend-brown2">
                <span>Smart home</span>
              </div>
              <div className="Recommend-brown3">
                <span>$ 399.00</span>
              </div>
            </div>
          </div>
          <div className="Recommend-yellow3">
            <div className="Recommend-green5">
              <img src={kolonkaaa} alt="SoundLink Color Bluetooth speaker II" />
            </div>
            <div className="Recommend-green6">
              <div className="Recommend-brown7">
                <span>SoundLink Color Bluetooth speaker II</span>
              </div>
              <div className="Recommend-brown8">
                <span>Portable bluetooth</span>
              </div>
              <div className="Recommend-brown9">
                <span>$ 129.00</span>
              </div>
            </div>
          </div>
          <div className="Recommend-yellow2">
            <div className="Recommend-green3">
              <img src={kolonkaa} alt="SoundLink Flex Bluetooth speaker" />
            </div>
            <div className="Recommend-green4">
              <div className="Recommend-brown4">
                <span>SoundLink Flex Bluetooth speaker</span>
              </div>
              <div className="Recommend-brown5">
                <span>Portable bluetooth</span>
              </div>
              <div className="Recommend-brown6">
                <span>$ 149.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendedProducts;
