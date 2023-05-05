"use client";
import React, { useEffect, useState } from "react";
import { fetchBrands } from "@/utils/fetchBrands";
import { fetchBrandInfo } from "@/utils/fetchOneBrand";
import styles from "./our-brands.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "@/components/Loading/Loading";
import DeleteButtonB from "@/components/DeleteBrand/DeleteBrand";

function Home() {
  const [sessionIdExists, setSessionIdExists] = useState(false);
  const [brands, setBrands] = useState([]);
  const [brandInfo, setBrandInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasSessionIdCookie = document.cookie.includes("sessionId");
    setSessionIdExists(hasSessionIdCookie);

    async function fetchData() {
      const fetchedBrands = await fetchBrands();
      if (fetchedBrands.length > 0) {
        const brandId = fetchedBrands[0].brandId;
        const brandInfo = await fetchBrandInfo(brandId);
        setBrandInfo(brandInfo);
      }
      setBrands(fetchedBrands);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.table}>
        <div className="container">
          {isLoading ? (
            <Loading />
          ) : (
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {brands.map((brand) => (
                  <tr key={brand.id}>
                    <td>{brand.id}</td>
                    <td>
                      <img
                        src={brand.logo_url}
                        alt="Product IMG"
                        className={styles.img}
                      />
                    </td>
                    <td>{brand.name}</td>
                    <td>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic outlined example"
                      >
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-info"
                          disabled={!sessionIdExists}
                        >
                          Edit
                        </button>
                        <div
                        >
                          <DeleteButtonB id={brand.id}/>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
