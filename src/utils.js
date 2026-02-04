export async function fetchData(url, settings) {
    console.log("sdfgdsgfdgds")
  try {
    const response = await fetch(
      `${url}?q=${settings.city}&appid=${settings.apiKey}&units=${settings.units}`
    );
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }
    const result = await response.json();
    return { data: result, error: "" };
  } catch (error) {
    return { data: null, error: error.message };
  }
}