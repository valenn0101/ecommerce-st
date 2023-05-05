import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { useAuthentication } from "@/utils/auth";
import Cookies from "js-cookie";

export default function Header() {
  const { handleLogout } = useAuthentication();
  const [isSessionOpen, setSessionOpen] = React.useState(false);

  useEffect(() => {
    const sessionId = Cookies.get("sessionId");
    setSessionOpen(!!sessionId);
  }, []);

  const handleCreateBrandClick = () => {
    window.location.href = "/create-brand";
  };

  const handleCreateProductClick = () => {
    window.location.href = "/create-product"
  }

  return (
    <div className={styles.header}>
      <h1><a className={styles.link} href="/home">Ecommerce APP</a></h1>
      <button onClick={handleLogout} className="btn btn-secondary">
        Our brands
      </button>
      {isSessionOpen ? (
        <>
          <button onClick={handleCreateProductClick} className="btn btn-success">
            Create new product
          </button>
          <button onClick={handleCreateBrandClick} className="btn btn-info">
            Create new brand
          </button>
          <button onClick={handleLogout} className="btn btn-warning">
            Log Out
          </button>
        </>
      ) : null}
    </div>
  );
}
