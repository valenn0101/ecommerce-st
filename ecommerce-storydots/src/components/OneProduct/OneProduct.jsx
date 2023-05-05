import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <div className="container">
        <h2 className="text-center">Este es el {product.name}</h2>
      </div>
      <div className="container">
        <div className="col-md-3">
          <label htmlFor="nombre" className="form-label">
            Nombre del Producto
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            placeholder="Nombre del Producto"
            value={product.name}
            disabled
          />
        </div>
        <div className="col-md-9">
          <label htmlFor="descripcion" className="form-label">
            Descripción
          </label>
          <input
            type="text"
            className="form-control"
            id="descripcion"
            placeholder="Descripción"
            value={product.description}
            disabled
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="imagen" className="form-label">
            Imagen
          </label>
          <img
            className="rounded mx-auto d-block teamImg"
            src={product.image_url}
            alt={`Imagen de ${product.name}`}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="precio" className="form-label">
            Precio
          </label>
          <input
            type="text"
            className="form-control"
            id="precio"
            placeholder="Precio"
            value={product.price}
            disabled
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="stock" className="form-label">
            Stock
          </label>
          <input
            type="text"
            className="form-control"
            id="stock"
            placeholder="Stock"
            value={product.stock}
            disabled
          />
        </div>
        <div className="col-6 d-flex flex-row-reverse mt-4">
          <a
            href="/home"
            className="btn btn-primary justify-content-end"
            value="retroceder"
          >
            Retroceder
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
