import React, {useState} from "react";
import Chart from "react-apexcharts";
import {SelectMenu, Button} from "../../components";
import {Checkmark} from "../Calculator/Calculator.css";
import {Container} from "./Charts.css";
import PL from "../../assets/flags/pl.png";
import US from "../../assets/flags/us.png";

const Charts = () => {
  const [result, setResult] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState({
    value: "PLN",
    label: "PLN - Polish Zloty",
    icon: `${PL}`,
  });
  const [currencyTo, setCurrencyTo] = useState({
    value: "USD",
    label: "USD - US Dollar",
    icon: `${US}`,
  });

  const startDate = new Date(new Date().setDate(new Date().getDate() - 14))
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
      name: `${currencyFrom.value} / ${currencyTo.value}`,
      data: Object.keys(result).map((date) =>
        parseFloat(result[date][currencyTo.value]).toFixed(2)
      ),
    },
  ];
  const options = {
    chart: {
      foreColor: "#fff",
      toolbar: {
        show: false,
        offsetX: -5,
        offsetY: -32,

        tools: {
          download: false,
          selection: false,
          zoom: false,
          pan: false,
          reset: false,
          autoSelected: "pan",
        },
      },
      height: 300,
      type: "line",
    },
    subtitle: {
      text: `2 weeks: ${currencyFrom.value} / ${currencyTo.value}`,
      align: "right",
    },

    // fill: {
    //   type: "solid",
    // },
    colors: ["#F28705"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },

    xaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      type: "category",
      categories: Object.keys(result).sort(),
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
        margin
        label="From:"
        value={currencyFrom}
        setCurrency={setCurrencyFrom}
      />
      <SelectMenu
        margin
        label="To:"
        value={currencyTo}
        setCurrency={setCurrencyTo}
      />
      <Button type="submit" secondary margin>
        <Checkmark smaller />
      </Button>
      <Chart
        options={options}
        series={series}
        type="line"
        height="58%"
        width="95%"
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
