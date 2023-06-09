export async function fetchBrandInfo(brandId) {
  const response = await fetch(
    `https://ecommerce-api-rest.onrender.com/api/v1/crud/infoBrand/${brandId}`
  );
  const data = await response.json();
  return data;
}
