import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import usePostRequest from "@/hooks/authPost";

export function useAuthentication() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, data, sendPostRequest } = usePostRequest(
    "https://story-dots-api.onrender.com/api/v1/crud/auth"
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
        Cookies.set("sessionId", data.sessionId);
        window.location.href = "/home";
      }
    };

    handleData();
  }, [data]);

  return { username, setUsername, password, setPassword, loading, error, handleLogin, handleLogout };
}
