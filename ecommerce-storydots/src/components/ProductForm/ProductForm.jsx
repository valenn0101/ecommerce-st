"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { fetchBrands } from "@/utils/fetchBrands";

function ProductForm({ api, method }) {
  const [brands, setBrands] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [price, setPrice] = useState("");
  const [discounted, setDiscounted] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [stock, setStock] = useState("");
  const [brandName, setBrandName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const brands = await fetchBrands();
      setBrands(brands);
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;

    if (name === "name") {
      setName(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "image_url") {
      setImageUrl(files[0]);
    } else if (name === "price") {
      setPrice(value);
    } else if (name === "discounted") {
      setDiscounted(checked ? true : false);
    } else if (name === "discountPercentage") {
      setDiscountPercentage(value);
    } else if (name === "stock") {
      setStock(value);
    } else if (name === "brand") {
      const selectedBrand = brands.find((brand) => brand.name === value);
      const brandId = selectedBrand ? selectedBrand.id : "";
      setBrandName(brandId);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image_url", imageUrl);
    formData.append("price", price);
    formData.append("discounted", discounted ? "true" : "false");
    formData.append("discountPercentage", discountPercentage);
    formData.append("stock", stock);
    formData.append("brand", brandName);

    const sessionId = Cookies.get("sessionId");
    const headers = {
      "Content-Type": "multipart/form-data",
      "X-Session-Id": sessionId,
    };

    try {
      await axios[method](api, formData, {
        headers,
        withCredentials: true,
      });

      window.alert("Successfully, click on the title to return home");
      console.log(formData);
    } catch (error) {
      window.alert("Error in product", error);
      console.log(formData);
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            className="form-control"
            id="description"
            value={description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image_url">Image</label>
          <input
            name="image_url"
            type="file"
            className="form-control"
            id="image_url"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            name="price"
            type="number"
            step="0.01"
            className="form-control"
            id="price"
            value={price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-check">
          <input
            name="discounted"
            type="checkbox"
            className="form-check-input"
            id="discounted"
            checked={discounted}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="discounted">
            Discounted
          </label>
        </div>
        {discounted && (
          <div className="form-group">
            <label htmlFor="discountPercentage">Discount Percentage</label>
            <input
              name="discountPercentage"
              type="number"
              step="0.01"
              className="form-control"
              id="discountPercentage"
              value={discountPercentage}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input
            name="stock"
            type="number"
            className="form-control"
            id="stock"
            value={stock}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="brand">Brand</label>
          <select
            name="brand"
            id="brand"
            className="form-control"
            value={brandName}
            onChange={handleChange}
            required
          >
            <option value="">Select a brand</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.name}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary m-4">
          {method === "post" ? "Create new Product" : "Update Product"}
        </button>
      </form>
    </div>
  );
}
export default ProductForm;
