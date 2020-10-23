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
        setResult((amount * data.rates[currencyTo.value]).toFixed(2));
      } catch (e) {
        setHasErrors(true);
      }
    };
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
        position="2/4"
        height="38.5%"
      />
      <SelectMenu
        label="To:"
        value={currencyTo}
        setCurrency={setCurrencyTo}
        position="3/5"
        height="38.5%"
      />
      <Button type="submit" secondary>
        <Checkmark />
      </Button>
      {result.toString().length < 15 ? (
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
                  }).format(result)
                : null}
            </TotalResult>
          )}
        </Result>
      ) : (
        <Error calc />
      )}
    </Form>
  );
};

export default Calculator;
