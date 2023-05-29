import axios from "axios";

export async function getProductList(searchTerm) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_HOST}/444/products?name_like=${
        searchTerm ? searchTerm : ""
      }`
    );
    const data = await response.data;
    console.log("data:", response);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getProduct(id) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_HOST}/444/products/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getFeaturedList() {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_HOST}/444/featured_products`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
