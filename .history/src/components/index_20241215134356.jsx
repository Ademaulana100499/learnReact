import { Link } from "react-router-dom";
const handleLogout =() =>{
  localStorage.clear()
  setTimeout(() =>{
    Navigate("/login")
  }2000)
}
export const Navbar = () => {
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
          <Link
            to="/login"
            className="text-lg font-medium transition-colors hover:text-gray-300"
          >
            Login
          </Link>
          {token ? (
            <button onClick={handleLogout}>Logout</button>
          )}
        </div>
      </div>
    </div>
  );
};
