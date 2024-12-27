import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  // State to manage form input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (email && password) {
      // Show an alert with user input (for demonstration purposes)
      alert(`Login Successful! \nEmail: ${email}`);
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required
            />
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-primary" id="logbtn">
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-3">
          <p id="logp">
            Don't have an account? <a href="/signup" className="auth-link">Sign up</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
