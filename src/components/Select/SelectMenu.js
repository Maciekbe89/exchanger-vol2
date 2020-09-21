import React, {useState, useEffect} from "react";
import {popularCurrencies, currencyNames, flags} from "../../utils";
import Select from "react-select";
import CustomOption from "./CustomOption";
import CustomFlag from "./CustomFlag";
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
    {
      label: "popular",
      options: [
        ...popularCurrencies.map(({value, name, icon}) => {
          return {
            value: value,
            label: `${value} - ${name}`,
            icon: icon,
          };
        }),
      ],
    },
    {
      label: "all",
      options: [
        ...currencies.map((item) => {
          return {
            value: item,
            label: `${item} - ${currencyNames[item] || "local currency"}`,
            icon: `${flags[item]}`,
          };
        }),
      ],
    },
  ];

  return (
    <div>
      <label>{label}</label>
      <Select
        value={value}
        onChange={(value) => setCurrency(value)}
        options={options}
        components={{Option: CustomOption, SingleValue: CustomFlag}}
      />
    </div>
  );
};

export default SelectMenu;
