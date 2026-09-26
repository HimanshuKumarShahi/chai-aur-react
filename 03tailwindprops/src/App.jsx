import "./App.css";
import Card from "./components/Card";
import Dashboard from "./components/Dashboard";

function App() {
  let myobj = {
    username: "himanshu",
    age: 21,
  };

  let newarr = [1, 2, 3, 4, 5, 8];

  return (
    <>
      <h1 className="bg-blue-400 text-black p-4 rounded-xl">Tailwind test</h1>
      {/* <Dashboard /> */}
      <br />
      <Card username="HIMNASHU" btntext="View Here" />
      <Card username="Hitesh Choudhary " btntext="Click Me" />
      <Card username="Hitesh Choudhary " btntex="Click Me" />
    </>
  );
}

export default App;
