import React, {useState, useEffect} from "react";

const Select = ({label}) => {
  const [currency, setCurrency] = useState([]);
  const API = `https://api.exchangeratesapi.io/latest?base=PLN`;

  const recentCurrencies = [
    {
      value: "PLN",
      name: "Polish Zloty",
    },
    {
      value: "EUR",
      name: "Euro",
    },
    {
      value: "USD",
      name: "US Dollar",
    },
    {
      value: "GBP",
      name: "British Pound",
    },
  ];

  const currencyNames = {
    RUB: "Russian Rubel",
  };

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
        <optgroup label="Recent">
          {recentCurrencies.map(({value, name}) => (
            <option key={value} value={value}>
              {value} - {name}
            </option>
          ))}
        </optgroup>
        <optgroup label="All">
          {currency.map((item) => (
            <option key={item} value={item}>
              {item} - {currencyNames[item] || "dupa"}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
};

export default Select;
