import React, {useState, useEffect} from "react";
import {popularCurrencies, currencyNames} from "../utils";
import PL from "../assets/pl.png";
import Select from "react-select";
import "./Select.css";

const CustomOption = ({innerProps}) => (
  <div {...innerProps}>
    {popularCurrencies.map(({value, name}) => (
      <>
        <img src={PL} alt="flag" style={{width: "30px", borderRadius: "50%"}} />
        <p className="option" key={value} value={value}>
          {value} - {name}
        </p>
      </>
    ))}
  </div>
);
const SelectMenu = ({label, value, setCurrency}) => {
  const [currencies, setCurrencies] = useState([]);
  const API = `https://api.exchangeratesapi.io/latest?base=PLN`;

  useEffect(() => {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("nie udało sie");
      })
      .then((response) => response.json())
      .then((data) => {
        setCurrencies(Object.keys(data.rates));
      });
  }, [API]);

  const options = [
    // ...popularCurrencies.map(({value, name}) => {
    //   return {
    //     value: value,
    //     label: `${value} - ${name}`,
    //   };
    // }),
    ...currencies.map((item) => {
      return {
        value: item,
        label: `${item} - ${currencyNames[item] || "local currency"}`,
      };
    }),
  ];

  return (
    <div>
      <label>{label}</label>
      <Select
        value={value}
        onChange={(value) => setCurrency(value)}
        options={options}
        components={{Option: CustomOption}}
      />
    </div>
  );
};

export default SelectMenu;
