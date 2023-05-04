"use client"
import React, { useState, useEffect } from "react";
import "../styles/home.css";
import Loading from "@/components/Loading/Loading";

import { useAuthentication } from "@/utils/auth";

function App() {
  const { username, setUsername, password, setPassword, loading, error, handleLogin } = useAuthentication();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="fadeIn third"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>

        <div id="formFooter">
          {isClient && (
            <a className="underlineHover" href="/home">
              Client? Click here.
            </a>
          )}

          {error && (
            <p className="error">Error: Please check your user or password</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
