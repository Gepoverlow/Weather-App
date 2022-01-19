/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_imgs_sunny_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/imgs/sunny.jpg */ "./src/assets/imgs/sunny.jpg");
/* harmony import */ var _assets_imgs_mist_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/imgs/mist.jpg */ "./src/assets/imgs/mist.jpg");
/* harmony import */ var _assets_imgs_cloudy_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/imgs/cloudy.jpg */ "./src/assets/imgs/cloudy.jpg");
/* harmony import */ var _assets_imgs_snow_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/imgs/snow.jpg */ "./src/assets/imgs/snow.jpg");
/* harmony import */ var _assets_imgs_rain_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/imgs/rain.jpg */ "./src/assets/imgs/rain.jpg");
/* harmony import */ var _assets_imgs_drizzle_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/imgs/drizzle.jpg */ "./src/assets/imgs/drizzle.jpg");
/* harmony import */ var _assets_imgs_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/imgs/thunderstorm.jpg */ "./src/assets/imgs/thunderstorm.jpg");








function displayWeatherBG(weather, backgroundDOM) {
  backgroundDOM.style.opacity = 0;

  setTimeout(() => (backgroundDOM.style.opacity = 1), 50);

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
    backgroundDOM.style.backgroundImage = `url(${_assets_imgs_mist_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
  } else if (weather === "Clear") {
    backgroundDOM.style.backgroundImage = `url(${_assets_imgs_sunny_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
    backgroundDOM.style.color = "Black";
  } else if (weather === "Clouds") {
    backgroundDOM.style.backgroundImage = `url(${_assets_imgs_cloudy_jpg__WEBPACK_IMPORTED_MODULE_2__})`;
  } else if (weather === "Snow") {
    backgroundDOM.style.backgroundImage = `url(${_assets_imgs_snow_jpg__WEBPACK_IMPORTED_MODULE_3__})`;
  } else if (weather === "Rain") {
    backgroundDOM.style.backgroundImage = `url(${_assets_imgs_rain_jpg__WEBPACK_IMPORTED_MODULE_4__})`;
  } else if (weather === "Drizzle") {
    backgroundDOM.style.backgroundImage = `url(${_assets_imgs_drizzle_jpg__WEBPACK_IMPORTED_MODULE_5__})`;
  } else if (weather === "Thunderstorm") {
    backgroundDOM.style.backgroundImage = `url(${_assets_imgs_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_6__})`;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayWeatherBG);


/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);


/***/ }),

/***/ "./src/assets/imgs/cloudy.jpg":
/*!************************************!*\
  !*** ./src/assets/imgs/cloudy.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6b1b6a733132880e794.jpg";

/***/ }),

/***/ "./src/assets/imgs/drizzle.jpg":
/*!*************************************!*\
  !*** ./src/assets/imgs/drizzle.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0aa28721c1320b47a83d.jpg";

/***/ }),

/***/ "./src/assets/imgs/mist.jpg":
/*!**********************************!*\
  !*** ./src/assets/imgs/mist.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64ad2d9789ccfdfc4628.jpg";

/***/ }),

/***/ "./src/assets/imgs/rain.jpg":
/*!**********************************!*\
  !*** ./src/assets/imgs/rain.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "025bf57949af75630552.jpg";

/***/ }),

/***/ "./src/assets/imgs/snow.jpg":
/*!**********************************!*\
  !*** ./src/assets/imgs/snow.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5e7fec742cb2e0f554b.jpg";

/***/ }),

/***/ "./src/assets/imgs/sunny.jpg":
/*!***********************************!*\
  !*** ./src/assets/imgs/sunny.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c99afd82248e048a3c2e.jpg";

/***/ }),

/***/ "./src/assets/imgs/thunderstorm.jpg":
/*!******************************************!*\
  !*** ./src/assets/imgs/thunderstorm.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b23f89f617b7616ba0b0.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather.js */ "./src/modules/weather.js");
/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom.js */ "./src/modules/dom.js");



async function displayWeather(input) {
  try {
    const cityData = await _modules_weather_js__WEBPACK_IMPORTED_MODULE_0__["default"].getData(input);

    document.getElementById(
      "country"
    ).textContent = `${cityData.cityName}, ${cityData.country}`;

    //

    document.getElementById("weather").textContent = cityData.weather;

    //

    document.getElementById(
      "temperature"
    ).textContent = `${cityData.temperature.temp} º`;

    //

    document.getElementById(
      "feels-like"
    ).textContent = `Feels like ${cityData.feelsLike}º`;

    //

    document.getElementById(
      "max-min"
    ).textContent = `Max: ${cityData.temperature.max}º - Min: ${cityData.temperature.min}ª`;

    //

    document.getElementById(
      "humidity"
    ).textContent = `Humidity ${cityData.humidity}%`;

    //

    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
      cityData.weather,
      document.getElementsByTagName("BODY")[0]
    );
  } catch (error) {
    console.log(error);
  }
}

function initSearch() {
  const loader = document.querySelector(".loader");
  const weatherInfo = document.getElementById("weather-info");
  const inputValue = document.getElementById("search-bar").value;

  if (inputValue.length !== 0) {
    loader.style.display = "inline-block";

    weatherInfo.style.opacity = 0;
    weatherInfo.style.display = "none";

    setTimeout(() => {
      loader.style.display = "none";

      weatherInfo.style.display = "block";
      setTimeout(() => (weatherInfo.style.opacity = 1), 50);

      //

      displayWeather(inputValue);

      //
    }, 3000);
  }
}

document.getElementById("search-button").addEventListener("click", () => {
  initSearch();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDRjtBQUNJO0FBQ0o7QUFDQTtBQUNNO0FBQ1U7O0FBRTNEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxrREFBSSxDQUFDO0FBQ3RELElBQUk7QUFDSixpREFBaUQsbURBQUssQ0FBQztBQUN2RDtBQUNBLElBQUk7QUFDSixpREFBaUQsb0RBQU0sQ0FBQztBQUN4RCxJQUFJO0FBQ0osaURBQWlELGtEQUFJLENBQUM7QUFDdEQsSUFBSTtBQUNKLGlEQUFpRCxrREFBSSxDQUFDO0FBQ3RELElBQUk7QUFDSixpREFBaUQscURBQU8sQ0FBQztBQUN6RCxJQUFJO0FBQ0osaURBQWlELDBEQUFZLENBQUM7QUFDOUQ7QUFDQTs7QUFFQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUVBQXFFLEtBQUs7QUFDMUU7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RCxnREFBZ0QsTUFBTTs7QUFFdEQ7O0FBRUE7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEN2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2YyQztBQUNLOztBQUVoRDtBQUNBO0FBQ0EsMkJBQTJCLG1FQUFlOztBQUUxQztBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQixJQUFJLGlCQUFpQjs7QUFFOUQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7O0FBRWxEOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsbUJBQW1COztBQUVyRDs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHlCQUF5QixXQUFXLHlCQUF5Qjs7QUFFekY7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxrQkFBa0I7O0FBRWxEOztBQUVBLElBQUksMkRBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3VubnkgZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL3N1bm55LmpwZ1wiO1xuaW1wb3J0IG1pc3QgZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL21pc3QuanBnXCI7XG5pbXBvcnQgY2xvdWRzIGZyb20gXCIuLi9hc3NldHMvaW1ncy9jbG91ZHkuanBnXCI7XG5pbXBvcnQgc25vdyBmcm9tIFwiLi4vYXNzZXRzL2ltZ3Mvc25vdy5qcGdcIjtcbmltcG9ydCByYWluIGZyb20gXCIuLi9hc3NldHMvaW1ncy9yYWluLmpwZ1wiO1xuaW1wb3J0IGRyaXp6bGUgZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL2RyaXp6bGUuanBnXCI7XG5pbXBvcnQgVGh1bmRlcnN0b3JtIGZyb20gXCIuLi9hc3NldHMvaW1ncy90aHVuZGVyc3Rvcm0uanBnXCI7XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyQkcod2VhdGhlciwgYmFja2dyb3VuZERPTSkge1xuICBiYWNrZ3JvdW5kRE9NLnN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4gKGJhY2tncm91bmRET00uc3R5bGUub3BhY2l0eSA9IDEpLCA1MCk7XG5cbiAgaWYgKFxuICAgIHdlYXRoZXIgPT09IFwiTWlzdFwiIHx8XG4gICAgd2VhdGhlciA9PT0gXCJTbW9rZVwiIHx8XG4gICAgd2VhdGhlciA9PT0gXCJIYXplXCIgfHxcbiAgICB3ZWF0aGVyID09PSBcIkR1c3RcIiB8fFxuICAgIHdlYXRoZXIgPT09IFwiRm9nXCIgfHxcbiAgICB3ZWF0aGVyID09PSBcIlNhbmRcIiB8fFxuICAgIHdlYXRoZXIgPT09IFwiQXNoXCIgfHxcbiAgICB3ZWF0aGVyID09PSBcIlNxdWFsbFwiIHx8XG4gICAgd2VhdGhlciA9PT0gXCJUb3JuYWRvXCJcbiAgKSB7XG4gICAgYmFja2dyb3VuZERPTS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7bWlzdH0pYDtcbiAgfSBlbHNlIGlmICh3ZWF0aGVyID09PSBcIkNsZWFyXCIpIHtcbiAgICBiYWNrZ3JvdW5kRE9NLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzdW5ueX0pYDtcbiAgICBiYWNrZ3JvdW5kRE9NLnN0eWxlLmNvbG9yID0gXCJCbGFja1wiO1xuICB9IGVsc2UgaWYgKHdlYXRoZXIgPT09IFwiQ2xvdWRzXCIpIHtcbiAgICBiYWNrZ3JvdW5kRE9NLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjbG91ZHN9KWA7XG4gIH0gZWxzZSBpZiAod2VhdGhlciA9PT0gXCJTbm93XCIpIHtcbiAgICBiYWNrZ3JvdW5kRE9NLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzbm93fSlgO1xuICB9IGVsc2UgaWYgKHdlYXRoZXIgPT09IFwiUmFpblwiKSB7XG4gICAgYmFja2dyb3VuZERPTS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cmFpbn0pYDtcbiAgfSBlbHNlIGlmICh3ZWF0aGVyID09PSBcIkRyaXp6bGVcIikge1xuICAgIGJhY2tncm91bmRET00uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2RyaXp6bGV9KWA7XG4gIH0gZWxzZSBpZiAod2VhdGhlciA9PT0gXCJUaHVuZGVyc3Rvcm1cIikge1xuICAgIGJhY2tncm91bmRET00uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke1RodW5kZXJzdG9ybX0pYDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5V2VhdGhlckJHO1xuIiwiY29uc3Qgd2VhdGhlciA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGNvbnZlcnREYXRhKGRhdGEpIHtcbiAgICBjb25zdCBzcGVjaWZpY09iamVjdCA9IHtcbiAgICAgIGNpdHlOYW1lOiBkYXRhLm5hbWUsXG4gICAgICB0ZW1wZXJhdHVyZToge1xuICAgICAgICB0ZW1wOiBkYXRhLm1haW4udGVtcCxcbiAgICAgICAgbWF4OiBkYXRhLm1haW4udGVtcF9tYXgsXG4gICAgICAgIG1pbjogZGF0YS5tYWluLnRlbXBfbWluLFxuICAgICAgfSxcbiAgICAgIGZlZWxzTGlrZTogZGF0YS5tYWluLmZlZWxzX2xpa2UsXG4gICAgICBodW1pZGl0eTogZGF0YS5tYWluLmh1bWlkaXR5LFxuICAgICAgd2VhdGhlcjogZGF0YS53ZWF0aGVyWzBdLm1haW4sXG4gICAgICBjb3VudHJ5OiBkYXRhLnN5cy5jb3VudHJ5LFxuICAgIH07XG4gICAgcmV0dXJuIHNwZWNpZmljT2JqZWN0O1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjaXR5KSB7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9MjhmZTdiNWY5YTc4ODM4YzYzOTE0M2ZjNTE3ZTQzNDNgO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgQ2l0eSAke2NpdHl9IG5vdCBmb3VuZGApO1xuXG4gICAgICBjb25zdCBkYXRhID0gY29udmVydERhdGEoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcblxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydChlcnJvcik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgZ2V0RGF0YSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB3ZWF0aGVyIGZyb20gXCIuL21vZHVsZXMvd2VhdGhlci5qc1wiO1xuaW1wb3J0IGRpc3BsYXlXZWF0aGVyQkcgZnJvbSBcIi4vbW9kdWxlcy9kb20uanNcIjtcblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIoaW5wdXQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjaXR5RGF0YSA9IGF3YWl0IHdlYXRoZXIuZ2V0RGF0YShpbnB1dCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiY291bnRyeVwiXG4gICAgKS50ZXh0Q29udGVudCA9IGAke2NpdHlEYXRhLmNpdHlOYW1lfSwgJHtjaXR5RGF0YS5jb3VudHJ5fWA7XG5cbiAgICAvL1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyXCIpLnRleHRDb250ZW50ID0gY2l0eURhdGEud2VhdGhlcjtcblxuICAgIC8vXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwidGVtcGVyYXR1cmVcIlxuICAgICkudGV4dENvbnRlbnQgPSBgJHtjaXR5RGF0YS50ZW1wZXJhdHVyZS50ZW1wfSDCumA7XG5cbiAgICAvL1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImZlZWxzLWxpa2VcIlxuICAgICkudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZSAke2NpdHlEYXRhLmZlZWxzTGlrZX3CumA7XG5cbiAgICAvL1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcIm1heC1taW5cIlxuICAgICkudGV4dENvbnRlbnQgPSBgTWF4OiAke2NpdHlEYXRhLnRlbXBlcmF0dXJlLm1heH3CuiAtIE1pbjogJHtjaXR5RGF0YS50ZW1wZXJhdHVyZS5taW59wqpgO1xuXG4gICAgLy9cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJodW1pZGl0eVwiXG4gICAgKS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eSAke2NpdHlEYXRhLmh1bWlkaXR5fSVgO1xuXG4gICAgLy9cblxuICAgIGRpc3BsYXlXZWF0aGVyQkcoXG4gICAgICBjaXR5RGF0YS53ZWF0aGVyLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJCT0RZXCIpWzBdXG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFNlYXJjaCgpIHtcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkZXJcIik7XG4gIGNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLWluZm9cIik7XG4gIGNvbnN0IGlucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1iYXJcIikudmFsdWU7XG5cbiAgaWYgKGlucHV0VmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXG4gICAgd2VhdGhlckluZm8uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgd2VhdGhlckluZm8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICB3ZWF0aGVySW5mby5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiAod2VhdGhlckluZm8uc3R5bGUub3BhY2l0eSA9IDEpLCA1MCk7XG5cbiAgICAgIC8vXG5cbiAgICAgIGRpc3BsYXlXZWF0aGVyKGlucHV0VmFsdWUpO1xuXG4gICAgICAvL1xuICAgIH0sIDMwMDApO1xuICB9XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpbml0U2VhcmNoKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==