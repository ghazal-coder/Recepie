import axios from "axios";

const client = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
});

export async function getApi() {
  const response = await client.get("/filter.php?c=Seafood");
  return response.data.meals;
}

export async function getProduct(id) {
  const response = await client.get(`/lookup.php?i=${id}`);
  return response.data.meals[0];
}

export async function searchMeals(query) {
  const response = await client.get(
    `/search.php?s=${encodeURIComponent(query)}`
  );

  return response.data.meals || [];
}
