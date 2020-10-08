import React, {useState} from "react";
import Chart from "react-apexcharts";
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

  const series = [
    {
      name: "series1",
      data: Object.keys(result).map((date) =>
        parseFloat(result[date][currencyTo.value]).toFixed(2)
      ),
    },
  ];
  const options = {
    chart: {
      foreColor: "#fff",
      toolbar: {
        show: true,
        offsetX: -5,
        offsetY: -32,

        tools: {
          download: false,
          selection: false,
          zoom: true,
          pan: false,
          reset: false,
          autoSelected: "pan",
        },
      },
      height: 320,
      type: "area",
    },
    colors: ["#FFBE00"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    xaxis: {
      labels: {
        show: true,
      },
      axisTicks: {
        show: false,
      },
      type: "category",
      categories: Object.keys(result),
    },
    tooltip: {
      x: {
        format: "yyyy/mm/dd",
      },
    },
  };

  // currency value
  // {
  //   result[date][currencyTo.value];
  // }

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
      <Chart
        options={options}
        series={series}
        type="line"
        height="50%"
        width="100%"
      />
      {/* {Object.keys(result)
        .sort()
        .map((date) => (
          <p>{date}</p>
        ))} */}
    </Container>
  );
};

export default Charts;
