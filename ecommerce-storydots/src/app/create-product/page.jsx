"use client";

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./create-product.module.css";
import ProductForm from "@/components/ProductForm/ProductForm";
import createProductUrl from "@/utils/createProduct";
import Cookies from "js-cookie";

function CreateProduct() {
  const [isSessionOpen, setSessionOpen] = React.useState(false);

  useEffect(() => {
    const sessionId = Cookies.get("sessionId");
    setSessionOpen(!!sessionId);
  }, []);

  return (
    <div className={styles.body}>
      {isSessionOpen ? (
        <div className={styles.formContainer}>
          <div className={styles.form}>
            <ProductForm api={createProductUrl} method="post" />
          </div>
        </div>
      ) : (
        <div>
          <h3>
            <a className={styles.link} href="/">
              No hay sesión abierta. Por favor, inicia sesión primero.
            </a>
          </h3>
        </div>
      )}
    </div>
  );
}

export default CreateProduct;
