import React from "react";
import { useState } from "react";

function Filter({ data, setGenderVal, genderVal, setIsSelected, isSelected }) {
  const selectHandler = (e) => {
    setIsSelected(true);

    setGenderVal(data.filter((item) => item.gender === e.target.value));
    // setIsSelected(false);
  };

  return (
    <div className="filter">
      <div className="section_1">
        <input
          onClick={selectHandler}
          name="filter"
          type="radio"
          value="Men"
          style={{ height: "16px", width: "16px", verticalalign: "middle" }}
        />
        <label for="men"> &nbsp; Men </label>
        <br />
        <input
          onClick={selectHandler}
          name="filter"
          type="radio"
          value="Women"
          style={{ height: "16px", width: "16px", verticalalign: "middle" }}
        />
        <label for="women"> &nbsp; Women </label> <br />
        <input
          onClick={selectHandler}
          name="filter"
          type="radio"
          value="Boys"
          style={{ height: "16px", width: "16px", verticalalign: "middle" }}
        />
        <label for="boys"> &nbsp; Boys </label> <br />
        <input
          onClick={selectHandler}
          name="filter"
          type="radio"
          value="Girls"
          style={{ height: "16px", width: "16px", verticalalign: "middle" }}
        />
        <label for="girls"> &nbsp; Girls </label> <br />
      </div>
      <hr />
      {/* <div className="categories">CATEGORIES</div>
      <div className="brand">BRAND</div>
      <div className="price">PRICE</div> */}
    </div>
  );
}

export default Filter;
