import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const handleLogout = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  return (
    <div className="p-4 text-white bg-blue-600">
      <div className="container flex items-center justify-between mx-auto">
        <div>
          <Link
            to="/"
            className="text-2xl font-semibold transition-colors hover:text-gray-300"
          >
            Home
          </Link>
        </div>
        <div className="space-x-6">
          {token ? (
            <button
              className="w-full px-4 py-2 font-semibold text-white bg-gray-400 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-lg font-medium transition-colors hover:text-gray-300"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
