import React, {useState, useEffect} from "react";
import {popularCurrencies, currencyNames} from "../utils";
import "./Select.css";

const Select = ({label, value, setCurrency}) => {
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
  return (
    <div>
      <label>{label}</label>
      <select
        className="select"
        value={value}
        onChange={(e) => setCurrency(e.target.value)}>
        <optgroup label="Popular">
          {popularCurrencies.map(({value, name}) => (
            <option style={{fontSize: 20}} key={value} value={value}>
              {value} - {name}
            </option>
          ))}
        </optgroup>
        <optgroup label="All">
          {currencies.map((item) => (
            <option style={{color: "green"}} key={item} value={item}>
              {item} - {currencyNames[item] || "local currency"}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
};

export default Select;
