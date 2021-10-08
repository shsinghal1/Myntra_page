import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Cards from "./cards";
import Filter from "./Filter";
import Brand from "./Brand";

function App() {
  const [data, setData] = useState([]);
  const [genderVal, setGenderVal] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [getBrand, setBrand] = useState([]);

  data &&
    data.map((ele, ind) => {
      if (!getBrand.includes(ele.brand)) {
        // setBrand(...getBrand, ele.brand);
        // console.log(ele.brand);
      }
    });

  const getDataFromApi = async () => {
    const response = await fetch("https://demo7242716.mockable.io/products");
    const res = await response.json();
    setData(res.products);
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="main_div">
        <div className="first_sec">
          <Filter
            setIsSelected={setIsSelected}
            isSelected={isSelected}
            data={data}
            genderVal={genderVal}
            setGenderVal={setGenderVal}
          />
          {getBrand && <Brand getBrand={getBrand} />}
        </div>
        <div className="second_sec">
          <div className="card_ele">
            {isSelected
              ? genderVal.map((ele, ind) => {
                  return <Cards key={ind} data={data} ele={ele} />;
                })
              : data.map((ele, ind) => {
                  return <Cards key={ind} data={data} ele={ele} />;
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
