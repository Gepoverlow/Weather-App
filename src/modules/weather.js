const weather = (() => {
  function convertData(data) {
    const specificObject = {
      cityName: data.name,
      temperature: {
        temp: data.main.temp,
        max: data.main.temp_max,
        min: data.main.temp_min,
      },
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
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

      console.log(data);

      return data;
    } catch (error) {
      alert(error);
      return null;
    }
  }
  return { getData };
})();

export default weather;
