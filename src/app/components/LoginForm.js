"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const LOGIN_API_URL = "https://social-login.druckland.de/api/v1/user/signin";

export default function AuthForm() {
  const [credentials, setCredentials] = useState({
    userEmail: "",
    userPassword: "",
  });
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!isTermsAccepted) {
      setErrorMessage("Unknown email address. Try again!");
      setDisplayError(true);
      return;
    }

    setDisplayError(false);
    setErrorMessage("");

    try {
      const result = await axios.post(LOGIN_API_URL, credentials);
      console.log(result.data);
    } catch (error) {
      console.error(error);
      setErrorMessage("Invalid email address. Please try again.");
      setDisplayError(true);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleTermsAcceptance = () => {
    if (!isTermsAccepted) {
      setErrorMessage("");
      setDisplayError(false);
    }
    setIsTermsAccepted(!isTermsAccepted);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Drukland.de</h1>
        <h2>Sign In to your account</h2>
        <h3>
          Don’t you have an account?
          <span>Register</span>
        </h3>
        {displayError && (
          <div className="error-box flex items-center text-sm mb-4 text-red-500">
            <Image src="/icons/error.svg" alt="Error" height={12} width={12} />
            <span className="ml-2">{errorMessage}</span>
          </div>
        )}
      </div>
      <form
        onSubmit={handleFormSubmit}
        className="fom-container"
        autocomplete="off"
      >
        <div className="input-group">
          <label htmlFor="userEmail">Email Address</label>
          <input
            className="input"
            id="userEmail"
            name="userEmail"
            type="email"
            required
            value={credentials.userEmail}
            onChange={handleInputChange}
          />
        </div>{" "}
        <div className="input-group">
          <label htmlFor="userPassword">Password</label>
          <input
            className="input"
            id="userPassword"
            name="userPassword"
            type="password"
            required
            value={credentials.userPassword}
            onChange={handleInputChange}
          />
        </div>
        <div className="agree-checkbox-container">
          <input type="checkbox" id="terms-checkbox" />
          <div className="agree-checkbox">
            <p>
              I agree to the <span>Terms & Conditions</span>
            </p>
          </div>
        </div>
        <button type="submit" className="submit">
          Log In
        </button>
      </form>
      <div className="bottom-container">
        <hr />
        <span>or sign in with</span>
        <hr />
      </div>
      <div className="bottom-icons">
        <Image
          src="/icons/linkedin.svg"
          alt="LinkedIn"
          width={16}
          height={16}
        />
        <Image src="/icons/google.svg" alt="Google" width={16} height={16} />
        <Image
          src="/icons/facebook.svg"
          alt="Facebook"
          width={16}
          height={16}
        />
      </div>
    </div>
  );
}
