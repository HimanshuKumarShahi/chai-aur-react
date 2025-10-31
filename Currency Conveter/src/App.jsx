import React, { useState, useEffect } from 'react';
import './App.css';
import useCurrencyInfo from './hooks/usecurrency';

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  useEffect(() => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(4));
    }
  }, [amount, from, to, currencyInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/7567222/pexels-photo-7567222.jpeg')",
        color:"white"
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-md w-full shadow-lg backdrop-blur-md border-2 border-white/30">
        <h1 className="text-white text-3xl font-bold mb-6 text-center">Currency Converter</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Amount Input */}
          <div>
            <label className="block mb-1 text-white">Amount</label>
            <input
              type="number"
              min="0"
              step="any"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* From Currency */}
          <div>
            <label className="block mb-1 text-white">From</label>
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {options.map((currency) => (
                <option key={currency} value={currency}>
                  {currency.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center my-4">
            <button
              type="button"
              onClick={swap}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition"
            >
              Swap
            </button>
          </div>

          {/* To Currency */}
          <div>
            <label className="block mb-1 text-white">To</label>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {options.map((currency) => (
                <option key={currency} value={currency}>
                  {currency.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* Convert Button */}
          <div>
            <button
              type="submit"
              className="w-full mt-4 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
            >
              Convert
            </button>
          </div>
        </form>
        {/* Result Display */}
        <div className="mt-6 text-center text-white text-xl font-semibold">
          {amount} {from.toUpperCase()} = {convertedAmount} {to.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default App;
