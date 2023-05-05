"use client";
import React, { useState } from "react";
import "../styles/home.css";
import axios from "axios";
import Cookies from "js-cookie";
import Loading from "@/components/Loading/Loading";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://ecommerce-api-rest.onrender.com/api/v1/crud/auth",
        {
          username,
          password,
        }
      );

      const sessionId = response.data.sessionId;
      Cookies.set("sessionId", sessionId);
      console.log("Autenticación exitosa");
      window.location.href = "/home";
    } catch (error) {
      console.error("Error de autenticación:", error);
      setError(true);
    }

    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <h2>Admin</h2>
        </div>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            className="fadeIn second"
            name="username"
            placeholder="login"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            className="fadeIn third"
            name="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="/home">
            Client? Click here.
          </a>
          {error && (
            <p className="error">Error: Please check your user or password</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
