export default defineEventHandler(async (event) => {
  const { page, type, q } = getQuery(event);
  let api = "https://dm-assignment-commonshare.koyeb.app/api/cars";

  if (type === "all") {
    api += `?page=${page}`;
  } else if (type === "popular") {
    api += "/popular";
  } else if (type === "search") {
    api += `?q=${q}`;
  } else {
    api += `/${q}`;
  }
  try {
    // Call API to get cars
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
});
