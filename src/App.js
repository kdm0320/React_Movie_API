import { element } from "prop-types";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [result, setResult] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const inputHandle = (event) => setMoney(event.target.value);
  const setChange = (event) => setResult(event.target.value);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      <input onChange={inputHandle} value={money} placeholder="Type money" />
      <br></br>
      <p />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={setChange}>
          <option value="0"> Select your coin!</option>
          {coins.map((coin, index) => (
            <option key={index} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <div>
        <h2>You can get {result == 0 ? "0" : money / result} coins</h2>
      </div>
    </div>
  );
}

export default App;
