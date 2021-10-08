import React from "react";

export default function Header() {
  return (
    <div className="header_item_container">
      <div className="logo">Logo</div>
      <div className="list_item_sec">
        <ul className="list">
          <li className="list_item">Men</li>
          <li className="list_item">Women</li>
          <li className="list_item">Kids</li>
          <li className="list_item">Home & Living </li>
          <li className="list_item">Offers</li>
        </ul>
      </div>
      <div className="search_box">
        <button className="btn">
          <i className="fas fa-search"></i>
        </button>
        <input
          className="input"
          type="text"
          placeholder="Search for the products, brands and more"
        />
      </div>
      <div className="extras">
        <ul className="list">
          <li className="item">
            <button className="btn">
              <i className="fas fa-user"></i>
            </button>
            Profile
          </li>
          <li className="item">
            <button className="btn">
              <i className="fas fa-bookmark"></i>
            </button>
            Wishlist
          </li>
          <li className="item">
            <button className="btn">
              <i className="fas fa-shopping-bag"></i>
            </button>
            Bag
          </li>
        </ul>
      </div>
    </div>
  );
}
