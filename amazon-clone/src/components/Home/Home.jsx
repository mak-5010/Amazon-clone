import React from "react";
import HomeBanner from "../../assets/images/home_banner.jpeg";
import Product from "../Product/Product";
import BookOne from "../../assets/images/BookOne.jpg";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <img src={HomeBanner} alt="" className="home__image" />
          <div className="home__row">
            <Product
              id="6478654"
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses
              by Eric Ries"
              price={29.99}
              image={BookOne}
              rating={5}
            />
            <Product
              id="8467467"
              title="INALSA Stand Mixer Professional Mix Master- Heavy Duty 1200 Watt Pure Copper Motor| 5.5L SS Bowl| Metal Gears for Extra Stability"
              price={239}
              image="https://m.media-amazon.com/images/I/6113lMeZpWS._SX679_.jpg"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id="2186564"
              title="Samsung Galaxy Watch4 Bluetooth(4.4 cm, Green, Compatible with Android only) "
              price={275}
              image="https://m.media-amazon.com/images/I/613yXPYAV8L._SX679_.jpg"
              rating={4}
            />
            <Product
              id="65489654"
              title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Blue) "
              price={399}
              image="https://m.media-amazon.com/images/I/61MbLLagiVL._SX679_.jpg"
              rating={4}
            />
            <Product
              id="5465164"
              title="2021 Apple 10.2-inch (25.91 cm) iPad with A13 Bionic chip (Wi-Fi, 64GB) - Space Grey (9th Generation) "
              price={999}
              image="https://m.media-amazon.com/images/I/61NGnpjoRDL._SX679_.jpg"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id="16587465"
              title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black) "
              price={1259}
              image="https://m.media-amazon.com/images/I/71MlcO29QOL._SX679_.jpg"
              rating={0}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
