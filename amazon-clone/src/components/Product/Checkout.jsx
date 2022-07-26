import React from "react";
import "./Checkout.css";
import adBanner from "../../assets/images/checkout_banner.jpg";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <>
      <div className="checkout">
        <div className="checkout__left">
          <img src={adBanner} alt="" width="100%" className="checkout__ad" />
          <div className="">
            <h2 className="checkout__title">Your shopping basket</h2>
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
