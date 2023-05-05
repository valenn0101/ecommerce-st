"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Product from "@/components/OneProduct/OneProduct";

const OneProductPage = () => {
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://api-rest-ecommerce.onrender.com/api/v1/crud/info/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  return (
    <div>
      {product ? <Product product={product} /> : <p>Cargando producto...</p>}
    </div>
  );
};

export default OneProductPage;
