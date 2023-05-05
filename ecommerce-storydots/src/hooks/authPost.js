import { useState } from "react";

function usePostRequest(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const sendPostRequest = async (postData) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }

      const responseData = await response.json();
      setData(responseData);
      return responseData; 
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, sendPostRequest };
}

export default usePostRequest;
