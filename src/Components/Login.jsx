import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="login-section">
        <div className="login-container">
          <h2 className="login-heading">Welcome Back!</h2>
          <p className="login-subheading">
            Sign in to continue your learning journey
          </p>

          <form className="login-form" action="#">
            <div className="form-group">
              <label htmlFor="login-email">Email Address</label>
              <input
                type="email"
                id="login-email"
                name="email"
                required
                placeholder="john@example.com"
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                id="login-password"
                name="password"
                required
                placeholder="Enter your password"
                autoComplete="current-password"
              />
              {/* <div className="password-toggle">👁️</div> */}
            </div>

            <div className="form-options">
              <div className="remember">
                <label className="remember-me"> Remember me </label>
                <input type="checkbox" name="remember" className="login-remember" />
              </div>
              <a href="/forgot-password" className="forgot-password">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="login-button">
              Sign In
            </button>

            <div className="alternative-login">
              <p className="divider">Or continue with</p>
              <div className="social">
                <button className="social-button google">
                  <FcGoogle /> Google
                </button>
                <button className="social-button facebook">
                  <FaFacebookSquare /> Facebook
                </button>
              </div>
            </div>

            <p className="signup-redirect">
              Don't have an account? <Link to="/signup"> Create account </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
