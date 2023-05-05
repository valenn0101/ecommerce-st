import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const DeleteButtonB = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSessionIdExists, setIsSessionIdExists] = useState(false);

  useEffect(() => {
    const sessionId = Cookies.get("sessionId");
    setIsSessionIdExists(!!sessionId); 
  }, []);

  const handleDelete = async () => {
    const sessionId = Cookies.get("sessionId");
    const headers = {
      "X-Session-Id": sessionId,
    };

    try {
      setIsLoading(true);

      await axios.delete(
        `https://ecommerce-api-rest.onrender.com/api/v1/crud/deleteBrand/${id}`,
        {
          headers,
          withCredentials: true,
        }
      );

      setIsLoading(false);
      window.location.reload();
    } catch (error) {
      console.error("Error al eliminar la marca", error);
      setIsLoading(false);
    }
  };

  return (
    <button
      className="btn btn-outline-danger"
      onClick={handleDelete}
      disabled={isLoading || !isSessionIdExists}
    >
      {isLoading ? (
        <i className="fa fa-spinner fa-spin"></i>
      ) : (
        "Eliminar Marca"
      )}
    </button>
  );
};

export default DeleteButtonB;
