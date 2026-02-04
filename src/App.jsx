import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { DateDisplay } from "./components/DateDisplay";
import { WeatherCard } from "./components/WeatherCard";
import { Footer } from "./components/Footer";
import { fetchData } from "./utils";

const API_URL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "a94d0a5ac08570add4b47b8da933f247";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorState, setErroState] = useState(null);

  const handleSearchRequest = async (city) => {
    const data = await fetchData(API_URL, {
      city,
      apiKey: API_KEY,
      units: "metric",
    });
    setData(data);
    console.log(data);
    setLoading(true);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchRequest} />
      <DateDisplay />
      <WeatherCard allData={data} loading={loading} />
      <Footer />
    </>
  );
}
export default App;