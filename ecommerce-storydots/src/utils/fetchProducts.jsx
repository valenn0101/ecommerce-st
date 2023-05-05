export async function fetchProducts() {
    const response = await fetch('https://ecommerce-api-rest.onrender.com/api/v1/crud');
    const data = await response.json();
    return data.products;
  }
  