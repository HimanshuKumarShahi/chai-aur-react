import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

// Accepts a context object (the value returned from React.createContext) and returns the current context value, as given by the nearest context provider for the given context.

function Login() {
  const [Username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const { setUser } = useContext(UserContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ Username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={Username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="UserName"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
        placeholder="PassWord"
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
