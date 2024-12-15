import { Navbar } from "../../components";

export const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl p-8 mx-auto mt-6 bg-white rounded-lg shadow-xl">
        <h1 className="">Login</h1>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="w-full px-6 py-2 font-semibold text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
