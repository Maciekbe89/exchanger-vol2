import React, {useState} from "react";
import {Select, Input, Button} from "../components";

const Calculator = () => {
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [currencyFrom, setCurrencyFrom] = useState("PLN");
  const [currencyTo, setCurrencyTo] = useState("EUR");

  const API = `https://api.exchangeratesapi.io/latest?base=${currencyFrom}`;

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
        setResult(amount * data.rates[currencyTo]);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <Input onChange={(e) => setAmount(e.target.value)} />
      <Select
        label="From:"
        value={currencyFrom}
        setCurrency={setCurrencyFrom}
      />
      <Select label="To:" value={currencyTo} setCurrency={setCurrencyTo} />
      <Button />
      <div>Result: {result.toFixed(2)}</div>
    </form>
  );
};

export default Calculator;
