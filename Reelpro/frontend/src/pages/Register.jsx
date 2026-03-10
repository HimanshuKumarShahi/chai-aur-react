import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function Register() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/auth/register", data);

      alert("Registration successful");

      // redirect to login page
      navigate("/login");

    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div>

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="username"
          onChange={(e) =>
            setData({ ...data, username: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="email"
          onChange={(e) =>
            setData({ ...data, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="password"
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
        />

        <button type="submit">Register</button>

      </form>

      <p>
        Already have an account? <a href="/login">Login</a>
      </p>

    </div>
  );
}

export default Register;