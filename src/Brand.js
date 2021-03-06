// import React, { useState } from "react";

function Brand({ getBrand }) {
  //   console.log(getBrand);

  const selectHandler = () => {};

  return (
    <>
      <h4 className="heading">Brand</h4>
      <div className="filter">
        {getBrand.map((item, id) => {
          return (
            <div key={id}>
              <input
                onClick={selectHandler}
                name="brand"
                type="radio"
                value={item.brand}
                style={{
                  height: "16px",
                  width: "16px",
                  verticalalign: "middle",
                }}
              />
              <label for={item}> &nbsp; {item} </label>
            </div>
          );
        })}
      </div>
      <hr />
    </>
  );
}

export default Brand;
