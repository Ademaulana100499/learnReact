import { Navbar } from "../../components";
export const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <form>
        <h2>Login</h2>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password">
        </div>
        <button type="submit" class="btn">Login</button>
    </form>
    </div>
  );
};
