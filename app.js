const weather = (() => {
  function convertData(data) {
    const specificObject = {
      cityName: data.name,
      temperature: data.main.temp,
      weather: data.weather[0].main,
      country: data.sys.country,
    };
    return specificObject;
  }

  async function getData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=28fe7b5f9a78838c639143fc517e4343`;
    try {
      const response = await fetch(url, { mode: "cors" });
      if (!response.ok) throw new Error(`City ${city} not found`);

      const data = convertData(await response.json());

      return data;
    } catch (error) {
      alert(error);
      return null;
    }
  }
  return { getData };
})();

async function displayWeather(input) {
  try {
    const cityData = await weather.getData(input);

    document.getElementById(
      "country"
    ).textContent = `${cityData.cityName}, ${cityData.country}`;
    document.getElementById("weather").textContent = cityData.weather;
    document.getElementById(
      "temperature"
    ).textContent = `${cityData.temperature} Cº`;
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("search-button").addEventListener("click", () => {
  const inputValue = document.getElementById("search-bar").value;

  if (inputValue.length !== 0) {
    displayWeather(inputValue);
  } else return;
});
