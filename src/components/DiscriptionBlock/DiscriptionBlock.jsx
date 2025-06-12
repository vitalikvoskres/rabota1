import React from "react";
import "./DiscriptionBlock.css";


export default function DiscriptionBlock() {
  return (
    <>
      <div className="DiscRed">
        <div className="DiscPink">
          <div className="DiscBlue1">
            <div className="DiscGreen1">
              <h1>
                Why buy direct
                <br />
                from Bose
              </h1>
            </div>
            <div className="DiscGreen2">
              <div className="DiscBrown1">
                <ul>
                  <li>Free 2-day shipping and returns</li>
                  <li>90-day risk-free trial</li>
                  <li>World class customer service</li>
                  <li>My Bose account management</li>
                </ul>
              </div>
              <div className="DiscBrown2">
                A great product is more than what's in the box. It's a promise
                of premium performance, world-class support, and everything you
                expect from a trusted brand. It's just one of many reasons why
                you'll shop with confidence on Bose.com.
              </div>
            </div>
          </div>
          <div className="DiscBlue2">
            <div className="DiscGreen3">
              <h2>Contact Us</h2>
            </div>
            <div className="DiscPurple">
              <div className="DiscGreen4">
                <input className="DiscBrown3" placeholder="Name" />
                <input className="DiscBrown3" placeholder="Email" />
                <textarea
                  className="DiscBrown5"
                  placeholder="Message"
                ></textarea>
                <div className="DiscBrown6">Send</div>
              </div>
              <div className="DiscGreen5">
                <div className="DiscBrown7">
                  <span className="contactTitle">Phone</span>
                  +1 234 5555-55-55
                </div>
                <div className="DiscBrown7">
                  <span className="contactTitle">Email</span>
                  hello@miami.com
                </div>
                <div className="DiscBrown7">
                  <span className="contactTitle">Adress</span>
                  <span className="ContactAdress">
                    400 first ave.
                    <br /> suite 700
                    <br /> Minneapolis, MN 55401
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="backgroundBaba"></div>
    </>
  );
}
