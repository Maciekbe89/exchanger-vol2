import React, {useState} from "react";
import {SelectMenu, Input, Button, Error} from "../../components";
import {
  Form,
  Checkmark,
  Result,
  TotalResult,
  AmountResult,
} from "./Calculator.css";
import {currencyFormat} from "../../utils";
import PL from "../../assets/flags/pl.png";
import EU from "../../assets/flags/eu.png";

const Calculator = () => {
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [hasErrors, setHasErrors] = useState(false);
  const [resultAmount, setResultAmount] = useState(0);
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

  const API = `https://api.exchangeratesapi.io/latest?base=${currencyFrom.value}`;

  const onSubmit = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setResult(amount * data.rates[currencyTo.value]);
      } catch (e) {
        setHasErrors(true);
      }
    };

    // fetch(API)
    //   .then((response) => {
    //     if (response.ok) {
    //       return response;
    //     }
    //     throw Error("nie udało sie");
    //   })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setResult(amount * data.rates[currencyTo.value]);
    //   });
    fetchData();
    setResultAmount(amount);
    setAmount(e.target.reset());
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input onChange={(e) => setAmount(e.target.value)} />
      <SelectMenu
        label="From:"
        value={currencyFrom}
        setCurrency={setCurrencyFrom}
      />
      <SelectMenu label="To:" value={currencyTo} setCurrency={setCurrencyTo} />
      <Button type="submit" secondary>
        <Checkmark />
      </Button>
      <Result>
        <AmountResult>
          {" "}
          {resultAmount
            ? new Intl.NumberFormat(`${currencyFormat[currencyFrom.value]}`, {
                style: "currency",
                currency: `${currencyFrom.value}`,
              }).format(resultAmount) + " ="
            : ""}
        </AmountResult>
        {hasErrors ? (
          <Error />
        ) : (
          <TotalResult>
            {result
              ? new Intl.NumberFormat(`${currencyFormat[currencyTo.value]}`, {
                  style: "currency",
                  currency: `${currencyTo.value}`,
                }).format(result.toFixed(2))
              : null}
          </TotalResult>
        )}
      </Result>
    </Form>
  );
};

export default Calculator;
