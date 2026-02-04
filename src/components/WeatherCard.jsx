export const WeatherCard = ({ allData, loading }) => {
  console.log(allData);
  if (loading) {
    let linkForImg = `https://openweathermap.org/img/wn/${allData.data.list[0].weather[0].icon}@2x.png`;
    console.log("загрузка");
    return (
      <>
        <div>
          <p>{allData.data.city.name}</p>
          <h2>{allData.data.list[0].main.temp}</h2>
          <img src={linkForImg}></img>
          <p>{allData.data.list[0].weather[0].description}</p>
        </div>
        <div>
          <p>Feels like: {allData.data.list[0].main.feels_like}</p>
          <p>Humidity: {allData.data.list[0].main.humidity}</p>
          <p>Max temp: {allData.data.list[0].main.temp_max}</p>
          <p>Wind speed {allData.data.list[0].wind.speed}</p>
        </div>
      </>
    );
  }
};