import React, {useState} from "react";
import {SelectMenu, Input, Button} from "../components";

const Calculator = () => {
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [currencyFrom, setCurrencyFrom] = useState({
    value: "PLN",
    label: "PLN - Polish Zloty",
  });
  const [currencyTo, setCurrencyTo] = useState({
    value: "EUR",
    label: "EUR - Euro",
  });

  const API = `https://api.exchangeratesapi.io/latest?base=${currencyFrom.value}`;

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("nie udało sie");
      })
      .then((response) => response.json())
      .then((data) => {
        setResult(amount * data.rates[currencyTo.value]);
      });
    console.log(amount);
    setAmount(e.target.reset());
  };

  return (
    <form onSubmit={onSubmit}>
      <Input onChange={(e) => setAmount(e.target.value)} />
      <SelectMenu
        label="From:"
        value={currencyFrom}
        setCurrency={setCurrencyFrom}
      />
      <SelectMenu label="To:" value={currencyTo} setCurrency={setCurrencyTo} />
      <Button />
      <div>Result: {result ? result.toFixed(2) : "-"}</div>
    </form>
  );
};

export default Calculator;
