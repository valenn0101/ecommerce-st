import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import usePostRequest from "@/hooks/authPost";

export function useAuthentication() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, data, sendPostRequest } = usePostRequest(
    "https://ecommerce-api-rest.onrender.com/api/v1/crud/auth"
  );

  const handleLogin = () => {
    const postData = {
      username: username,
      password: password,
    };

    sendPostRequest(postData);
  };
  const handleLogout = () => {
    Cookies.remove("sessionId", { path: "", domain: "" });
    window.location.reload();
  };
  

  useEffect(() => {
    const handleData = () => {
      if (data) {
        const sessionId = data.sessionId;
        const cookieOptions = {
          expires: 1, 
          sameSite: "none",
          secure: true,
        };
        Cookies.set("sessionId", sessionId, cookieOptions);
        window.location.href = "/home";
      }
    };
  
    handleData();
  }, [data]);

  return { username, setUsername, password, setPassword, loading, error, handleLogin, handleLogout };
}
