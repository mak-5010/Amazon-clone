import React from "react";
import "./Header.css";
import AmazonLogo from "../../assets/images/amazon_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={AmazonLogo} alt="" className="header__logo" />
        </Link>
        <div className="header__search" type="text">
          <input type="text" className="header__searchInput" />
          <SearchIcon
            sx={{ backgroundColor: "#cd9042", padding: "5px", height: "22px" }}
          />
        </div>
        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Order</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <div className="header__option"></div>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon
              sx={{
                fill: "#fff",
              }}
            />
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Header;
