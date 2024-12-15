import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("acces_token");
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
            <button onClick={handleLogout}>Logout</button>
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
