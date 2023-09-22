import React from "react";
import "./../Components/Signup.css"

const Page = () => {
  return (
    <>
      <div class="login-page">
        <div class="box">
          <div class="left">
            <h3>Create Account</h3>
            <button type="button" class="register-btn">
              Register
            </button>
          </div>
          <div class="right">
            <h3>Have an Account ?</h3>
            <button type="button" class="login-btn">
              Login
            </button>
          </div>
          <div class="form">
            <div class="login-form">
              <h3>Log In</h3>
              <form id="login-form">
                <div class="form-group">
                  <input
                    id="login-email"
                    type="text"
                    placeholder="Email Address*"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <input
                    id="login-password"
                    type="password"
                    placeholder="Password*"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label>
                    <input type="checkbox" /> Remember Me
                  </label>
                </div>
                <input type="submit" value="Login" class="submit-btn" />
              </form>
              <p>
                <a href="#" class="register-btn">
                  Register
                </a>{" "}
                |{" "}
                <a href="#" class="lost-pass-btn">
                  Lost Your Password ?
                </a>
              </p>
            </div>

            <div class="register-form form-hidden">
              <h3>Register</h3>
              <form id="Register-form">
                <div class="form-group">
                  <input
                    id="first-name"
                    type="text"
                    placeholder="First Name*"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Last Name*"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <input
                    id="register-email"
                    type="text"
                    
                    placeholder="Email Address*"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    id="register-password"
                    placeholder="Password*"
                    class="form-control"
                  />
                </div>

                <input type="submit" value="Register" class="submit-btn" />
              </form>
              <p>
                <a href="#" class="login-btn">
                  Login
                </a>{" "}
                |{" "}
                <a href="#" class="lost-pass-btn">
                  Lost Your Password ?
                </a>
              </p>
            </div>

            <div class="lost-password-form form-hidden">
              <h3>Lost Your Password ?</h3>
              <h5>
                You will receive a link to create a new password via email.
              </h5>

              <div class="form-group">
                <input
                  type="text"
                  placeholder="Email Address*"
                  class="form-control"
                />
              </div>
              <button type="button" class="submit-btn">
                Reset Password
              </button>
              <p>
                <a href="#" class="login-btn">
                  Login
                </a>{" "}
                |{" "}
                <a href="#" class="register-btn">
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </>
    
  );
};

export default Page;
