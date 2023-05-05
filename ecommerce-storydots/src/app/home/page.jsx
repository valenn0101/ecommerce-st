"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchProducts } from "@/utils/fetchProducts";
import { fetchBrandInfo } from "@/utils/fetchOneBrand";
import styles from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "@/components/Loading/Loading";
import DeleteButton from "@/components/DeleteProduct/DeleteProduct";

function Home() {
  const [sessionIdExists, setSessionIdExists] = useState(false);
  const [products, setProducts] = useState([]);
  const [brandInfo, setBrandInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasSessionIdCookie = document.cookie.includes("sessionId");
    setSessionIdExists(hasSessionIdCookie);

    async function fetchData() {
      const fetchedProducts = await fetchProducts();
      if (fetchedProducts.length > 0) {
        const brandId = fetchedProducts[0].brandId;
        const brandInfo = await fetchBrandInfo(brandId);
        setBrandInfo(brandInfo);
      }
      setProducts(fetchedProducts);
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
                  <th scope="col">Image</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img
                        src={product.image_url}
                        alt="Product IMG"
                        className={styles.img}
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.brand}</td>
                    <td>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic outlined example"
                      >
                        <Link href={`/one-product/${product.id}`}>
                          <button className="btn btn-outline-primary">View</button>
                        </Link>

                        <button
                          type="button"
                          className="btn btn-outline-info"
                          disabled={!sessionIdExists}
                        >
                          Edit
                        </button>
                        <div>
                          <DeleteButton id={product.id} />
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
