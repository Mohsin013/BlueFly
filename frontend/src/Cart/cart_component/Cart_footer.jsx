import React from 'react';

const Cart_footer = () => {
  return (
    <div className="footer_main">
      <div className="product_item">
        <img
          src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/denim_540x.jpg?v=1615204984"
          alt="images"
        />
        <div className="title">UP TO 85% OFF THE DENIM SHOP FOR HIM & HER</div>
        <div className="subtitle">
          From Hudson Jeans, Joe's Jeans, J Brand & More
        </div>
        <div className="btn_div">
          <button>ship denim</button>
        </div>
      </div>
      <div className="product_item">
        <img
          src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/lightweight_jackets_540x.jpg?v=1630509164"
          alt="images"
        />
        <div className="title">UP TO 80% OFF LIGHTWEIGHT JACKETS & COATS</div>
        <div className="subtitle">
          Must-Haves From Cole Haan, Burberry, & More
        </div>
        <div className="btn_div">
          <button>shop outerwear</button>
        </div>
      </div>
      <div className="product_item">
        <img
          src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/accesories_540x.jpg?v=1630509636"
          alt="images"
        />
        <div className="title">UP TO 90% OFF WOMEN'S MUST-HAVE ACCESSORIES</div>
        <div className="subtitle">
          Shop Wallets, Belts, Hats, Sunglasses & More
        </div>
        <div className="btn_div">
          <button>shop women ACCESSORIES</button>
        </div>
      </div>
    </div>
  );
};

export default Cart_footer;
