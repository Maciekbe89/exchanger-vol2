import React, {useState, useEffect} from "react";
import {popularCurrencies, currencyNames} from "../utils";

const Select = ({label}) => {
  const [currency, setCurrency] = useState([]);
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
        setCurrency(Object.keys(data.rates));
      });
  }, []);
  return (
    <div>
      <label>{label}</label>
      <select>
        <optgroup label="Popular">
          {popularCurrencies.map(({value, name}) => (
            <option key={value} value={value}>
              {value} - {name}
            </option>
          ))}
        </optgroup>
        <optgroup label="All">
          {currency.map((item) => (
            <option key={item} value={item}>
              {item} - {currencyNames[item] || "local currency"}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
};

export default Select;
