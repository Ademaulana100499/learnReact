import { Navbar } from "../../components";

export const LoginPage = () => {
  return (
    <div>
      <Navbar />
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
      </form>
    </div>
  );
};
