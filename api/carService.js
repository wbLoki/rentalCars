// import { useFetch } from "nuxt";

export async function fetchData(type = "", page = 1, q = "") {
  try {
    const response = await useFetch(
      `/api/cars?type=${type}&page=${page}&q=${q}`
    );
    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function searchData(name) {
  try {
    const response = await useFetch(`/api/cars?q=${name}&type=search`);
    return response.data.value.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
