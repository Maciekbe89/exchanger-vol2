import React, {useState, useEffect} from "react";
import {popularCurrencies, currencyNames} from "../utils";
import PL from "../assets/pl.png";
import Select from "react-select";
import "./Select.css";

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
    popularCurrencies.map(({value, name}) => {
      return {
        value: value,
        label: `${value} - ${name}`,
      };
    }),
    currencies.map((item) => {
      return {
        value: item,
        label: `${(<img src={PL} alt="flag" />)} ${item} - ${
          currencyNames[item] || "local currency"
        }`,
      };
    }),
  ];

  // const popularOptions = popularCurrencies.map(({value, name}) => {
  //   return {
  //     value: value,
  //     label: `${value} - ${name}`,
  //   };
  // });

  // const options = currencies.map((item) => {
  //   return {
  //     value: item,
  //     label: `${(<img src={PL} alt="flag" />)} ${item} - ${
  //       currencyNames[item] || "local currency"
  //     }`,
  //   };
  // });

  return (
    <div>
      <label>{label}</label>
      <Select
        value={value}
        onChange={(value) => setCurrency(value)}
        options={options}
      />
      {/* <label>{label}</label>
      <select
        className="select"
        value={value}
        onChange={(e) => setCurrency(e.target.value)}>
        <optgroup label="Popular">
          {popularCurrencies.map(({value, name}) => (
            <option className="option" key={value} value={value}>
              {value} - {name}
            </option>
          ))}
        </optgroup>
        <optgroup label="All">
          {currencies.map((item) => (
            <option className="option" key={item} value={item}>
              {item} - {currencyNames[item] || "local currency"}
            </option>
          ))}
        </optgroup>
      </select> */}
    </div>
  );
};

export default SelectMenu;
