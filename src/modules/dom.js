import sunny from "../assets/imgs/sunny.jpg";
import mist from "../assets/imgs/mist.jpg";
import clouds from "../assets/imgs/cloudy.jpg";

function displayWeatherBG(weather, backgroundDOM) {
  console.log(sunny, mist);
  if (weather === "Mist") {
    backgroundDOM.style.backgroundImage = `url(${mist})`;
  } else if (weather === "Clear") {
    backgroundDOM.style.backgroundImage = `url(${sunny})`;
  } else if (weather === "Clouds") {
    backgroundDOM.style.backgroundImage = `url(${clouds})`;
  }
}

export default displayWeatherBG;
