import React from "react";
import "../styles/TableGuide.css";
import Coin from "./Coin";

const TableGuide = ({ name, price, marketcap, volume, priceChange }) => {
  //   const nameFilter = coins.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="table-guide">
      <div className="table-guide-row">
        <p className="table-guide-coin">Coin</p>
        <p className="table-guide-price">Price</p>
        <p className="table-guide-24hvolume">24h Volume</p>
        <p className="table-guide-24h">24h</p>
        <p className="table-guide-mkt-cap">Mkt Cap</p>
      </div>
    </div>
  );
};

export default TableGuide;
