import React, {useState} from "react";
import {SelectMenu, Button} from "../../components";
import {Checkmark} from "../Calculator/Calculator.css";
import {Container} from "./Charts.css";
import PL from "../../assets/flags/pl.png";
import EU from "../../assets/flags/eu.png";

const Charts = () => {
  const [result, setResult] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState({
    value: "PLN",
    label: "PLN - Polish Zloty",
    icon: `${PL}`,
  });
  const [currencyTo, setCurrencyTo] = useState({
    value: "EUR",
    label: "EUR - Euro",
    icon: `${EU}`,
  });

  const startDate = new Date(new Date().setDate(new Date().getDate() - 30))
    .toLocaleDateString()
    .split(".")
    .reverse()
    .join("-");

  const today = new Date().toLocaleDateString().split(".").reverse().join("-");

  const API = `https://api.exchangeratesapi.io/history?start_at=${startDate}&end_at=${today}&base=${currencyFrom.value}&symbols=${currencyTo.value}`;

  const onSubmit = (e) => {
    console.log("dupa");
    e.preventDefault();
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("nie udało się");
      })
      .then((response) => response.json())
      .then((data) => {
        setResult(data.rates);
      });
  };

  return (
    <Container onSubmit={onSubmit}>
      <SelectMenu
        label="From:"
        value={currencyFrom}
        setCurrency={setCurrencyFrom}
      />
      <SelectMenu label="To:" value={currencyTo} setCurrency={setCurrencyTo} />
      <Button type="submit" secondary>
        <Checkmark smaller />
      </Button>
      {Object.keys(result).map((date) => (
        <p>
          {date} {result[date][currencyTo.value]}
        </p>
      ))}
    </Container>
  );
};

export default Charts;
