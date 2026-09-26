import { useState, useCallback, useEffect, useRef } from "react";
import React from "react";

function App() {
  const [length, setLength] = useState(8);
  const [addNumber, setAddNumber] = useState(false);
  const [addChar, setAddChar] = useState(false);
  const [password, setPassword] = useState("");

  //   useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

  // Note that useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.

  //  used to take refrences of anythings here used in copypassword.
  const passwordref = useRef(null);

  // useCallback is a React Hook that lets you cache a function definition between re-renders

  //  in this usecallback hook it reused the function stored in memory accordingly if usages then use it again and again

  // this is used to optimised  it store in cache / memory

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (addNumber) str += "0123456789";
    if (addChar) str += "!@#$%&*[]{},.?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, addChar, addNumber, setPassword]);

  // useCallback will return a memoized version of the callback that only changes if one of the inputs has changed.

  const copyPasswordtoClipboard = useCallback(() => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0, 21);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // Accepts a function that contains imperative, possibly effectful code.
  // @param effect — Imperative function that can return a cleanup function
  // @param deps — If present, effect will only activate if the values in the list change.

  // in this if any changes in these then run passwordGenerator

  useEffect(() => {
    passwordGenerator();
  }, [length, addChar, addNumber, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-xl mx-auto my-10 px-5">
        <div className="bg-[#f4f1ea] border border-[#d8d3c8] shadow-[6px_6px_0px_#c9c3b6] p-6 sm:p-8">
          <div className="flex items-end justify-between border-b border-[#c9c3b6] pb-5 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#777168] mb-2">
                Utility / 01
              </p>

              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#25231f]">
                Password
                Generator
              </h1>
            </div>

            <div className="hidden sm:block text-right">
              <p className="text-xs text-[#777168]">STATUS</p>
              <p className="text-sm font-semibold text-[#25231f]">READY</p>
            </div>
          </div>

          <div className="mb-7">
            <div className="flex border-2 border-[#25231f] bg-white">
              <input
                type="text"
                value={password}
                className="outline-none w-full min-w-0 px-4 py-4 bg-transparent text-[#25231f] font-mono text-lg tracking-wider"
                placeholder="Password"
                readOnly
                ref={passwordref}
              />

              <button
                onClick={copyPasswordtoClipboard}
                className="px-5 border-l-2 border-[#25231f] bg-[#25231f] text-[#f4f1ea] font-bold uppercase text-xs tracking-wider hover:bg-[#403d37] transition-colors cursor-pointer"
              >
                Copy
              </button>
            </div>

            <p className="mt-2 text-xs text-[#777168]">
              Generated locally — nothing is sent anywhere.
            </p>
          </div>
          <div className="space-y-5">
            <div className="border-t border-[#c9c3b6] pt-5">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold uppercase tracking-wider text-[#25231f]">
                  Length
                </label>

                <span className="font-mono text-sm font-bold text-[#25231f]">
                  {length.toString().padStart(2, "0")}
                </span>
              </div>

              <input
                type="range"
                min={6}
                max={20}
                value={length}
                className="w-full accent-[#25231f] cursor-pointer"
                onChange={(e) => {
                  setLength(Number(e.target.value));
                }}
              />

              <div className="flex justify-between mt-1 text-[11px] text-[#777168]">
                <span>06</span>
                <span>20</span>
              </div>
            </div>

            <div className="grid grid-cols-2 border border-[#c9c3b6]">
              <label
                htmlFor="numberInput"
                className={`flex items-center justify-between px-4 py-4 cursor-pointer transition-colors ${
                  addNumber
                    ? "bg-[#25231f] text-[#f4f1ea]"
                    : "bg-transparent text-[#25231f] hover:bg-[#e9e5dc]"
                }`}
              >
                <span className="text-sm font-semibold">Numbers</span>

                <input
                  type="checkbox"
                  checked={addNumber}
                  id="numberInput"
                  onChange={() => setAddNumber((prev) => !prev)}
                  className="w-4 h-4 accent-[#25231f] cursor-pointer"
                />
              </label>

              <label
                htmlFor="charInput"
                className={`flex items-center justify-between px-4 py-4 border-l border-[#c9c3b6] cursor-pointer transition-colors ${
                  addChar
                    ? "bg-[#25231f] text-[#f4f1ea]"
                    : "bg-transparent text-[#25231f] hover:bg-[#e9e5dc]"
                }`}
              >
                <span className="text-sm font-semibold">Characters</span>

                <input
                  type="checkbox"
                  checked={addChar}
                  id="charInput"
                  onChange={() => setAddChar((prev) => !prev)}
                  className="w-4 h-4 accent-[#25231f] cursor-pointer"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
