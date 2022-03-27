import React from "react";

export default function Coin(props) {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={props.image} alt="crypto" />
          <h1>{props.name}</h1>
          <p className="coin-symbol">{props.symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">$ {props.price}</p>
          <p className="coin-volume">$ {props.volume.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
