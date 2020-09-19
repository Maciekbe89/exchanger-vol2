import React, {useState, useEffect} from "react";
import {popularCurrencies, currencyNames, flags} from "../utils";
import Select, {components} from "react-select";
import "./Select.css";

const {Option} = components;
const CustomOption = (props) => (
  <Option {...props}>
    <img
      src={props.data.icon}
      alt="flag"
      style={{
        width: "30px",
        height: "20px",
        borderRadius: "30%",
        margin: "0 15px",
      }}
    />
    <span>{props.data.label}</span>
  </Option>
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
    ...popularCurrencies.map(({value, name, icon}) => {
      return {
        value: value,
        label: `${value} - ${name}`,
        icon: icon,
      };
    }),
    ...currencies.map((item) => {
      return {
        value: item,
        label: `${item} - ${currencyNames[item] || "local currency"}`,
        icon: `${flags[item]}`,
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
