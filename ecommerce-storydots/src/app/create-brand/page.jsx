"use client";

import React, { useEffect } from "react";
import BrandForm from "@/components/BrandForm/BrandForm";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./create-brand.module.css";
import createBrandUrl from "@/utils/createBrand";
import Cookies from "js-cookie";

function CreateBrand() {
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
            <BrandForm api={createBrandUrl} method="post" />
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

export default CreateBrand;
