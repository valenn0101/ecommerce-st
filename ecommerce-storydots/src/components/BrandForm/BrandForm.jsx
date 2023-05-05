"use client";

import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function BrandForm({ api, method }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState(null);

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "description") {
      setDescription(event.target.value);
    } else if (event.target.name === "logo_url") {
      setLogo(event.target.files[0]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("logo_url", logo);

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
    } catch (error) {
      window.alert("Error in brand:", error);
    }
    
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3 m-2">
            <label htmlFor="inputName">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Marolio"
              required
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 mb-3 m-2">
            <label htmlFor="inputDescription">Description</label>
            <textarea
              name="description"
              className="form-control h-100"
              id="inputDescription"
              placeholder="Argentinian brand food....."
              required
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="form-group m-2">
          <label htmlFor="inputImage">Image</label>
          <input
            name="logo_url"
            type="file"
            className="form-control-file m-2"
            id="inputImage"
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary m-4">
          {method === "post" ? "Create new Brand" : "Update Brand"}
        </button>
      </form>
    </div>
  );
}

export default BrandForm;
