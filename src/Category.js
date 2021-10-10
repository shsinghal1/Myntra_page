import React from "react";

function Category({ getCategory }) {
  const selectHandler = () => {};

  return (
    <>
      <h4 className="heading">Category</h4>
      <div className="filter">
        {getCategory.map((item, id) => {
          return (
            <div key={id}>
              <input
                onClick={selectHandler}
                name="brand"
                type="radio"
                value={item.category}
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

export default Category;
