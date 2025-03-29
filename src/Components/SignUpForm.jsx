import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signInFormOpen = useNavigate();

  function handleTextInputChange(e) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  function submitUserData(e) {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    localStorage.setItem("UserData", JSON.stringify(userData));

    alert("Data saved!");
    signInFormOpen('/login')
  }

  return (
    <>
      <section className="signup-section">
        <div className="signup-container">
          <h2 className="signup-heading">Start Your Learning Journey</h2>
          <p className="signup-subheading">
            Create an account to Learn on your own time from top universities and businesses.
          </p>

          <form className="signup-form" onSubmit={submitUserData}>
            <div className="form-section">
              {/* <legend>Personal Information</legend> */}
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  required
                  placeholder="Enter your full name"
                  autoComplete="name"
                  onChange={handleTextInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="naeem@gmail.com"
                  autoComplete="email"
                  onChange={handleTextInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="Create password"
                  autoComplete="new-password"
                  onChange={handleTextInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  placeholder="Confirm Password"
                  autoComplete="new-password"
                  onChange={handleTextInputChange}
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="signup-button">
                Create Account
              </button>
            </div>
          </form>

          <div className="alternative-signup">
            <p>Or sign up with:</p>
            <div className="social">
              <button className="social-button google">
                <FcGoogle className="C" /> Continue with Google
              </button>
              <button className="social-button facebook">
                <FaFacebookSquare /> Continue with Facebook
              </button>
            </div>
          </div>

          <p className="login-redirect">
            Already have an account? <Link to="/login"> Log in here </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default SignUpForm;
