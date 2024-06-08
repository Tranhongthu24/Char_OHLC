import React, { useEffect, useState } from "react";
import OhlcChart from "./OhlcChart";
import Papa from "papaparse";

const App = () => {
  const [chartData, setChartData] = useState({ labels: [], ohlcData: [] });

  useEffect(() => {
    Papa.parse("/VFS_historical_data_StockScan.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const data = result.data;
        const labels = data.map((item) => item.Date);
        const ohlcData = data.map((item) => ({
          t: item.Date,
          o: parseFloat(item.Open),
          h: parseFloat(item.High),
          l: parseFloat(item.Low),
          c: parseFloat(item.Close),
        }));
        setChartData({ labels, ohlcData });
      },
    });
  }, []);

  return (
    <div className="App">
      <h1>Stock OHLC Chart</h1>
      {/* <OhlcChart data={chartData} /> */}
    </div>
  );
};

export default App;
