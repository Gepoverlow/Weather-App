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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDRjtBQUNJO0FBQ0o7QUFDQTtBQUNNO0FBQ1U7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxrREFBSSxDQUFDO0FBQ3RELElBQUk7QUFDSixpREFBaUQsbURBQUssQ0FBQztBQUN2RDtBQUNBLElBQUk7QUFDSixpREFBaUQsb0RBQU0sQ0FBQztBQUN4RCxJQUFJO0FBQ0osaURBQWlELGtEQUFJLENBQUM7QUFDdEQsSUFBSTtBQUNKLGlEQUFpRCxrREFBSSxDQUFDO0FBQ3RELElBQUk7QUFDSixpREFBaUQscURBQU8sQ0FBQztBQUN6RCxJQUFJO0FBQ0osaURBQWlELDBEQUFZLENBQUM7QUFDOUQ7QUFDQTs7QUFFQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDckNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUVBQXFFLEtBQUs7QUFDMUU7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RCxnREFBZ0QsTUFBTTs7QUFFdEQ7O0FBRUE7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEN2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2YyQztBQUNLOztBQUVoRDtBQUNBO0FBQ0EsMkJBQTJCLG1FQUFlOztBQUUxQztBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQixJQUFJLGlCQUFpQjs7QUFFOUQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7O0FBRWxEOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsbUJBQW1COztBQUVyRDs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHlCQUF5QixXQUFXLHlCQUF5Qjs7QUFFekY7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxrQkFBa0I7O0FBRWxEOztBQUVBLElBQUksMkRBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3VubnkgZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL3N1bm55LmpwZ1wiO1xuaW1wb3J0IG1pc3QgZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL21pc3QuanBnXCI7XG5pbXBvcnQgY2xvdWRzIGZyb20gXCIuLi9hc3NldHMvaW1ncy9jbG91ZHkuanBnXCI7XG5pbXBvcnQgc25vdyBmcm9tIFwiLi4vYXNzZXRzL2ltZ3Mvc25vdy5qcGdcIjtcbmltcG9ydCByYWluIGZyb20gXCIuLi9hc3NldHMvaW1ncy9yYWluLmpwZ1wiO1xuaW1wb3J0IGRyaXp6bGUgZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL2RyaXp6bGUuanBnXCI7XG5pbXBvcnQgVGh1bmRlcnN0b3JtIGZyb20gXCIuLi9hc3NldHMvaW1ncy90aHVuZGVyc3Rvcm0uanBnXCI7XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyQkcod2VhdGhlciwgYmFja2dyb3VuZERPTSkge1xuICBpZiAoXG4gICAgd2VhdGhlciA9PT0gXCJNaXN0XCIgfHxcbiAgICB3ZWF0aGVyID09PSBcIlNtb2tlXCIgfHxcbiAgICB3ZWF0aGVyID09PSBcIkhhemVcIiB8fFxuICAgIHdlYXRoZXIgPT09IFwiRHVzdFwiIHx8XG4gICAgd2VhdGhlciA9PT0gXCJGb2dcIiB8fFxuICAgIHdlYXRoZXIgPT09IFwiU2FuZFwiIHx8XG4gICAgd2VhdGhlciA9PT0gXCJBc2hcIiB8fFxuICAgIHdlYXRoZXIgPT09IFwiU3F1YWxsXCIgfHxcbiAgICB3ZWF0aGVyID09PSBcIlRvcm5hZG9cIlxuICApIHtcbiAgICBiYWNrZ3JvdW5kRE9NLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHttaXN0fSlgO1xuICB9IGVsc2UgaWYgKHdlYXRoZXIgPT09IFwiQ2xlYXJcIikge1xuICAgIGJhY2tncm91bmRET00uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3N1bm55fSlgO1xuICAgIGJhY2tncm91bmRET00uc3R5bGUuY29sb3IgPSBcIkJsYWNrXCI7XG4gIH0gZWxzZSBpZiAod2VhdGhlciA9PT0gXCJDbG91ZHNcIikge1xuICAgIGJhY2tncm91bmRET00uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2Nsb3Vkc30pYDtcbiAgfSBlbHNlIGlmICh3ZWF0aGVyID09PSBcIlNub3dcIikge1xuICAgIGJhY2tncm91bmRET00uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3Nub3d9KWA7XG4gIH0gZWxzZSBpZiAod2VhdGhlciA9PT0gXCJSYWluXCIpIHtcbiAgICBiYWNrZ3JvdW5kRE9NLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtyYWlufSlgO1xuICB9IGVsc2UgaWYgKHdlYXRoZXIgPT09IFwiRHJpenpsZVwiKSB7XG4gICAgYmFja2dyb3VuZERPTS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZHJpenpsZX0pYDtcbiAgfSBlbHNlIGlmICh3ZWF0aGVyID09PSBcIlRodW5kZXJzdG9ybVwiKSB7XG4gICAgYmFja2dyb3VuZERPTS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7VGh1bmRlcnN0b3JtfSlgO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlXZWF0aGVyQkc7XG4iLCJjb25zdCB3ZWF0aGVyID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gY29udmVydERhdGEoZGF0YSkge1xuICAgIGNvbnN0IHNwZWNpZmljT2JqZWN0ID0ge1xuICAgICAgY2l0eU5hbWU6IGRhdGEubmFtZSxcbiAgICAgIHRlbXBlcmF0dXJlOiB7XG4gICAgICAgIHRlbXA6IGRhdGEubWFpbi50ZW1wLFxuICAgICAgICBtYXg6IGRhdGEubWFpbi50ZW1wX21heCxcbiAgICAgICAgbWluOiBkYXRhLm1haW4udGVtcF9taW4sXG4gICAgICB9LFxuICAgICAgZmVlbHNMaWtlOiBkYXRhLm1haW4uZmVlbHNfbGlrZSxcbiAgICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXG4gICAgICB3ZWF0aGVyOiBkYXRhLndlYXRoZXJbMF0ubWFpbixcbiAgICAgIGNvdW50cnk6IGRhdGEuc3lzLmNvdW50cnksXG4gICAgfTtcbiAgICByZXR1cm4gc3BlY2lmaWNPYmplY3Q7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKGNpdHkpIHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZhcHBpZD0yOGZlN2I1ZjlhNzg4MzhjNjM5MTQzZmM1MTdlNDM0M2A7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBDaXR5ICR7Y2l0eX0gbm90IGZvdW5kYCk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBjb252ZXJ0RGF0YShhd2FpdCByZXNwb25zZS5qc29uKCkpO1xuXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBnZXREYXRhIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHdlYXRoZXIgZnJvbSBcIi4vbW9kdWxlcy93ZWF0aGVyLmpzXCI7XG5pbXBvcnQgZGlzcGxheVdlYXRoZXJCRyBmcm9tIFwiLi9tb2R1bGVzL2RvbS5qc1wiO1xuXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5V2VhdGhlcihpbnB1dCkge1xuICB0cnkge1xuICAgIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgd2VhdGhlci5nZXREYXRhKGlucHV0KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJjb3VudHJ5XCJcbiAgICApLnRleHRDb250ZW50ID0gYCR7Y2l0eURhdGEuY2l0eU5hbWV9LCAke2NpdHlEYXRhLmNvdW50cnl9YDtcblxuICAgIC8vXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJcIikudGV4dENvbnRlbnQgPSBjaXR5RGF0YS53ZWF0aGVyO1xuXG4gICAgLy9cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJ0ZW1wZXJhdHVyZVwiXG4gICAgKS50ZXh0Q29udGVudCA9IGAke2NpdHlEYXRhLnRlbXBlcmF0dXJlLnRlbXB9IMK6YDtcblxuICAgIC8vXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiZmVlbHMtbGlrZVwiXG4gICAgKS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlICR7Y2l0eURhdGEuZmVlbHNMaWtlfcK6YDtcblxuICAgIC8vXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwibWF4LW1pblwiXG4gICAgKS50ZXh0Q29udGVudCA9IGBNYXg6ICR7Y2l0eURhdGEudGVtcGVyYXR1cmUubWF4fcK6IC0gTWluOiAke2NpdHlEYXRhLnRlbXBlcmF0dXJlLm1pbn3CqmA7XG5cbiAgICAvL1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImh1bWlkaXR5XCJcbiAgICApLnRleHRDb250ZW50ID0gYEh1bWlkaXR5ICR7Y2l0eURhdGEuaHVtaWRpdHl9JWA7XG5cbiAgICAvL1xuXG4gICAgZGlzcGxheVdlYXRoZXJCRyhcbiAgICAgIGNpdHlEYXRhLndlYXRoZXIsXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkJPRFlcIilbMF1cbiAgICApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0U2VhcmNoKCkge1xuICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRlclwiKTtcbiAgY29uc3Qgd2VhdGhlckluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItaW5mb1wiKTtcbiAgY29uc3QgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWJhclwiKS52YWx1ZTtcblxuICBpZiAoaW5wdXRWYWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cbiAgICB3ZWF0aGVySW5mby5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICB3ZWF0aGVySW5mby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgIHdlYXRoZXJJbmZvLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+ICh3ZWF0aGVySW5mby5zdHlsZS5vcGFjaXR5ID0gMSksIDUwKTtcblxuICAgICAgLy9cblxuICAgICAgZGlzcGxheVdlYXRoZXIoaW5wdXRWYWx1ZSk7XG5cbiAgICAgIC8vXG4gICAgfSwgMzAwMCk7XG4gIH1cbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGluaXRTZWFyY2goKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9