import React, {useState} from "react";
import Chart from "react-apexcharts";
import {SelectMenu, Button, Error} from "../../components";
import {Checkmark} from "../Calculator/Calculator.css";
import {Container, ChartWrapper} from "./Charts.css";
import PL from "../../assets/flags/pl.png";
import US from "../../assets/flags/us.png";

const Charts = () => {
  const [result, setResult] = useState("");
  const [hasErrors, setHasErrors] = useState(false);

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
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setResult(data.rates);
      } catch (e) {
        setHasErrors(true);
      }
    };
    fetchData();
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
      },
      type: "line",
    },
    dataLabels: {
      enabled: false,
    },
    subtitle: {
      text: `2 weeks: ${currencyFrom.value} / ${currencyTo.value}`,
      align: "right",
      style: {
        fontSize: "0.8em",
      },
    },
    colors: ["#F28705"],
    stroke: {
      curve: "smooth",
      width: 3,
    },
    tooltip: {
      style: {
        fontSize: "1em",
      },
      z: {
        show: false,
      },
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
  };

  return (
    <Container onSubmit={onSubmit}>
      <SelectMenu
        margin
        label="From:"
        value={currencyFrom}
        setCurrency={setCurrencyFrom}
        position="1/3"
        height="38.5%"
      />
      <SelectMenu
        margin
        label="To:"
        value={currencyTo}
        setCurrency={setCurrencyTo}
        position="2/4"
        height="38.5%"
      />
      <Button type="submit" secondary margin row>
        <Checkmark smaller />
      </Button>
      <ChartWrapper>
        {hasErrors ? (
          <Error />
        ) : (
          <Chart
            style={{width: "90%"}}
            options={options}
            series={series}
            height="90%"
          />
        )}
      </ChartWrapper>
    </Container>
  );
};

export default Charts;
