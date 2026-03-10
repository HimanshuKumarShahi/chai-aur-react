import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* Default page */}
        <Route path="/" element={<Navigate to="/register" />} />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/feed" element={<Feed />} />

      </Routes>

    </BrowserRouter>
  );

}

export default App;