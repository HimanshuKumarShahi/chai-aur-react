import { useState } from "react";
import "../src/index.css"

function App() {
  let [counter, setcounter] = useState(1);

  // Here use usestate to update ui in project at multiple level .not even numbers all things like images , books , etc

  const addnumber = () => {
    if (counter < 20) {
      setcounter(counter + 1);
    } else {
      alert("Max value : 20");
    }
  };

  const removenumber = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    } else {
      alert("Min value : 0");
    }
  };

  return (
    <main className="container">
      <div className="card">
        <h1 className="title">Chai Aur React</h1>
        <p className="subtitle">Interactive Counter</p>

        <div className="counter-display">
          <span className="count">{counter}</span>
        </div>

        <div className="button-group">
          <button className="btn btn-add" onClick={addnumber}>
            + Add Value
          </button>
          <button className="btn btn-remove" onClick={removenumber}>
            - Remove Vlaue
          </button>
        </div>

        <footer className="footer">Current count: {counter}</footer>
      </div>
    </main>
  );
}

export default App;