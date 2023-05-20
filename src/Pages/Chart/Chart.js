import React from "react";
import "./Chart.css";
import YearsChart from "../../Components/ChartPageComps/YearsChart/YearsChart";
import HistoricalTradingData from "../../Components/ChartPageComps/FinancialHighlights/HistoricalTradingData";

const Chart = () => {
  return (
    <div className="chart-page">
      <YearsChart />
      <hr />
      <HistoricalTradingData />
    </div>
  );
};

export default Chart;
