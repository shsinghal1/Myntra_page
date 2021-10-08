import React, { useState } from "react";

function Brand({ props }) {
  console.log(props);

  //   const { getBrand } = props;
  return (
    <div>
      {/* {getBrand.map((item, id) => {
        return (
          <div>
            <input
              name="brand"
              type="radio"
              value={item.brand}
              style={{ height: "16px", width: "16px", verticalalign: "middle" }}
            />
            <label for={item.brand}> &nbsp; {item.brand} </label>
          </div>
        );
      })} */}
    </div>
  );
}

export default Brand;
