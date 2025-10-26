import { useState, useCallback, useEffect,useRef } from "react";
import React from "react";

function App() {
  const [length, setLength] = useState(8);
  const [addNumber, setAddNumber] = useState(false);
  const [addChar, setAddChar] = useState(false);
  const [password, setPassword] = useState("");

const passwordref=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (addNumber) str += "0123456789";
    if (addChar) str += "!@#$%&*[]{},.?";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, addChar, addNumber]);

  const copyPasswordtoClipboard=useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setSelectRange(0,20)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, addChar, addNumber, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white text-black"
            placeholder="Password"
            readOnly
            ref={passwordref}
          />
          <button onClick={copyPasswordtoClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer"
            
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-y-2 text-sm">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={addNumber}
              id="numberInput"
              onChange={() => setAddNumber((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={addChar}
              id="charInput"
              onChange={() => setAddChar((prev) => !prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
