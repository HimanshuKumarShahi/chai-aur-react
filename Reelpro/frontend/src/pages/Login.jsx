import { useState } from "react";
import API from "../api/axios";

function Login() {

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await API.post("/auth/login", data);

    localStorage.setItem("token", res.data.token);

    window.location.href = "/feed";
  };

  return (
    <div>

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setData({ ...data, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
        />

        <button type="submit">Login</button>

      </form>

    </div>
  );
}

export default Login;