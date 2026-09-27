import React, { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/usecurrency";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);
  //Extract keys from custom hook
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="min-h-screen bg-[#e9e6df] text-[#20211e] px-4 py-8 sm:px-8"
        style={{
          backgroundImage: `
          linear-gradient(rgba(32,33,30,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(32,33,30,0.035) 1px, transparent 1px)
        `,
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-6xl mx-auto min-h-[calc(100vh-4rem)] flex items-center">
          <div className="w-full grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 items-center">
            <div className="hidden lg:block">
              <div className="border-l-2 border-[#20211e] pl-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#77766f] mb-6">
                  Currency / Exchange
                </p>

                <h1 className="text-6xl xl:text-7xl font-black leading-[0.88] tracking-[-0.06em]">
                  Move
                  <br />
                  money.
                  <br />
                  Simply.
                </h1>

                <p className="mt-8 max-w-sm text-sm leading-6 text-[#686760]">
                  A straightforward currency converter for checking values
                  across different currencies without unnecessary interface
                  clutter.
                </p>

                <div className="mt-12 flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#20211e] rounded-full" />
                  <span className="text-xs uppercase tracking-widest text-[#77766f]">
                    Live conversion
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full max-w-xl lg:ml-auto">
              <div className="flex items-end justify-between mb-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#77766f]">
                    Exchange Desk
                  </p>

                  <h2 className="text-2xl font-bold tracking-tight mt-1">
                    Currency Converter
                  </h2>
                </div>

                <div className="text-right">
                  <p className="font-mono text-xs text-[#77766f]">01 / 01</p>
                </div>
              </div>

              <div className="bg-[#f7f5ef] border border-[#c9c6bd] shadow-[8px_8px_0px_#20211e]">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    convert();
                  }}
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex justify-between items-center mb-5">
                      <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#77766f]">
                        You send
                      </span>

                      <span className="font-mono text-xs text-[#77766f]">
                        {from.toUpperCase()}
                      </span>
                    </div>

                    <div className="border-b-2 border-[#20211e] pb-2">
                      <InputBox
                        label=""
                        amount={amount}
                        onAmountChange={setAmount}
                        CurrencyOptions={options}
                        onCurrencyChange={setFrom}
                        SelectCurrency={from}
                      />
                    </div>
                  </div>

                  <div className="relative border-y border-[#d0cdc4]">
                    <div className="absolute left-8 right-8 top-1/2 border-t border-dashed border-[#c5c2b9]" />

                    <div className="relative flex justify-center">
                      <button
                        type="button"
                        onClick={swap}
                        className="
                        bg-[#f7f5ef]
                        border border-[#20211e]
                        px-5 py-2
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        hover:bg-[#20211e]
                        hover:text-[#f7f5ef]
                        transition-colors
                        cursor-pointer
                      "
                      >
                        Swap
                      </button>
                    </div>
                  </div>

                  {/* TO */}
                  <div className="p-6 sm:p-8">
                    <div className="flex justify-between items-center mb-5">
                      <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#77766f]">
                        You receive
                      </span>

                      <span className="font-mono text-xs text-[#77766f]">
                        {to.toUpperCase()}
                      </span>
                    </div>

                    <div className="border-b-2 border-[#20211e] pb-2">
                      <InputBox
                        label=""
                        amount={convertedAmount}
                        onAmountChange={() => {}}
                        CurrencyOptions={options}
                        onCurrencyChange={setTo}
                        SelectCurrency={to}
                        amountDisable
                      />
                    </div>
                  </div>

                  <div className="px-6 sm:px-8 pb-8">
                    <button
                      type="submit"
                      className="
                      group
                      w-full
                      bg-[#20211e]
                      text-[#f7f5ef]
                      py-4
                      px-5
                      flex
                      items-center
                      justify-between
                      font-bold
                      text-sm
                      uppercase
                      tracking-wider
                      hover:bg-[#353631]
                      transition-colors
                      cursor-pointer
                    "
                    >
                      <span>Convert</span>

                      <span className="font-mono text-xs">
                        {from.toUpperCase()} → {to.toUpperCase()}
                      </span>
                    </button>
                  </div>
                </form>
              </div>

              <div className="flex justify-between mt-5 text-[10px] uppercase tracking-[0.18em] text-[#77766f]">
                <span>Simple exchange tool</span>
                <span>Input → Rate → Result</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
