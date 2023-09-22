// import { useFetch } from "nuxt";

export async function fetchData(type = "", page = 1, q = "") {
  try {
    const response = await useFetch(
      `/api/cars?type=${type}&page=${page}&q=${q}`
    );
    // console.log(response);
    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function searchData(id) {
  try {
    const response = await useFetch(`/api/cars?q=${id}&type=search`);
    return response.data.value.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
