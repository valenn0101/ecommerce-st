import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const DeleteButton = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar la carga
  const [isSessionIdExists, setIsSessionIdExists] = useState(false); // Estado para verificar la existencia de sessionId

  useEffect(() => {
    const sessionId = Cookies.get("sessionId");
    setIsSessionIdExists(!!sessionId); // Verificar si sessionId existe y actualizar el estado
  }, []);

  const handleDelete = async () => {
    const sessionId = Cookies.get("sessionId");
    const headers = {
      "X-Session-Id": sessionId,
    };

    try {
      setIsLoading(true);

      await axios.delete(
        `https://ecommerce-api-rest.onrender.com/api/v1/crud/deleteProduct/${id}`,
        {
          headers,
          withCredentials: true,
        }
      );

      setIsLoading(false);
      window.location.reload();
    } catch (error) {
      console.error("Error al eliminar el producto", error);
      setIsLoading(false);
    }
  };

  return (
    <button
      className="btn btn-outline-danger"
      onClick={handleDelete}
      disabled={isLoading || !isSessionIdExists} // Deshabilitar el botón si isLoading es true o si sessionId no existe
    >
      {isLoading ? (
        <i className="fa fa-spinner fa-spin"></i>
      ) : (
        "Eliminar Producto"
      )}
    </button>
  );
};

export default DeleteButton;
