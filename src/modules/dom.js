import sunny from "../assets/imgs/sunny.jpg";
import mist from "../assets/imgs/mist.jpg";
import clouds from "../assets/imgs/cloudy.jpg";
import snow from "../assets/imgs/snow.jpg";
import rain from "../assets/imgs/rain.jpg";
import drizzle from "../assets/imgs/drizzle.jpg";
import Thunderstorm from "../assets/imgs/thunderstorm.jpg";

function displayWeatherBG(weather, backgroundDOM) {
  backgroundDOM.style.opacity = 1;

  if (
    weather === "Mist" ||
    weather === "Smoke" ||
    weather === "Haze" ||
    weather === "Dust" ||
    weather === "Fog" ||
    weather === "Sand" ||
    weather === "Ash" ||
    weather === "Squall" ||
    weather === "Tornado"
  ) {
    backgroundDOM.style.backgroundImage = `url(${mist})`;
  } else if (weather === "Clear") {
    backgroundDOM.style.backgroundImage = `url(${sunny})`;
    backgroundDOM.style.color = "Black";
  } else if (weather === "Clouds") {
    backgroundDOM.style.backgroundImage = `url(${clouds})`;
  } else if (weather === "Snow") {
    backgroundDOM.style.backgroundImage = `url(${snow})`;
  } else if (weather === "Rain") {
    backgroundDOM.style.backgroundImage = `url(${rain})`;
  } else if (weather === "Drizzle") {
    backgroundDOM.style.backgroundImage = `url(${drizzle})`;
  } else if (weather === "Thunderstorm") {
    backgroundDOM.style.backgroundImage = `url(${Thunderstorm})`;
  }
}

export default displayWeatherBG;
