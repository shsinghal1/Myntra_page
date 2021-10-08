import React from "react";

function Cards({ ele }) {
  return (
    <div className="card">
      <div className="card1">
        <img
          className="image"
          src={ele.images[0].src}
          alt={ele.images[0].view}
        />
      </div>
      <div className="detail">
        <h4 className="brand">{ele.brand}</h4>
        <p>{ele.additionalInfo}</p>
        <h5>
          Rs.{ele.price}
          <small>
            <del>Rs.{ele.mrp}</del>
          </small>
          <span>
            <small>{ele.discountDisplayLabel}</small>
          </span>
        </h5>
      </div>
    </div>
  );
}

export default Cards;
