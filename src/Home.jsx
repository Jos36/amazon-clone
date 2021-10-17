import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home__container">
      <img className="home__image" src="avbanner.jpg" alt="" />
      <div className="home__row">
        <Product
          id="1"
          title="this is a product and it's the first one"
          price={100}
          rating={5}
          image="https://m.media-amazon.com/images/I/51VQXsQ9P6L._AC_UY218_.jpg"
        />
        <Product
          id="2"
          title="this is a product and it's the second one"
          price={100}
          rating={2}
          image="https://m.media-amazon.com/images/I/51VQXsQ9P6L._AC_UY218_.jpg"
        />
        <Product
          id="3"
          title="this is a product and it's the third one"
          price={100}
          rating={3}
          image="https://m.media-amazon.com/images/I/51VQXsQ9P6L._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="4"
          title="this is a product and it's the forth one"
          price={100}
          rating={3}
          image="https://m.media-amazon.com/images/I/51VQXsQ9P6L._AC_UY218_.jpg"
        />
        <Product
          id="5"
          title="this is a product and it's the five"
          price={100}
          rating={3}
          image="https://m.media-amazon.com/images/I/51VQXsQ9P6L._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="this is a product and it's the six"
          price={100}
          rating={3}
          image="https://m.media-amazon.com/images/I/51VQXsQ9P6L._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
