import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <>
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#127775;</p>
            ))}
        </div>
        <img src={image} alt="" />
        <button>Add to cart</button>
      </div>
    </>
  );
}

export default Product;
