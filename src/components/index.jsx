import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link
            to="/"
            className="text-2xl font-semibold hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
        </div>
        <div className="space-x-6">
          <Link
            to="/login"
            className="text-lg font-medium hover:text-gray-300 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
