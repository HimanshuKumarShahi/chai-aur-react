import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { token, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <Link to="/feed" className="font-bold text-gray-800 hover:text-green-500">Home</Link>
        <Link to="/upload" className="text-gray-800 hover:text-green-500">Upload</Link>
        <Link to="/profile" className="text-gray-800 hover:text-green-500">Profile</Link>
        <Link to="/messages" className="text-gray-800 hover:text-green-500">Messages</Link>
        <Link to="/settings" className="text-gray-800 hover:text-green-500">Settings</Link>
      </div>

      {token && (
        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      )}
    </nav>
  );
}

export default Navbar;