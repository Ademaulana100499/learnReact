import { Navbar } from "../../components";

export const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl p-8 mx-auto mt-6 bg-white rounded-lg shadow-xl">
        <h1>Login</h1>
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
