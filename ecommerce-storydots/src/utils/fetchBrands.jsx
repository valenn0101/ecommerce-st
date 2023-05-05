import axios from "axios";

export async function fetchBrands() {
  try {
    const response = await axios.get("https://ecommerce-api-rest.onrender.com/api/v1/crud/brands");
    const { brands } = response.data;
    return brands;
  } catch (error) {
    console.error("Error fetching brands:", error);
    return [];
  }
}
