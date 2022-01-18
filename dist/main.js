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

document.getElementById("search-button").addEventListener("click", () => {
  const inputValue = document.getElementById("search-bar").value;

  if (inputValue.length !== 0) {
    displayWeather(inputValue);
  } else return;
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDRjtBQUNJO0FBQ0o7QUFDQTtBQUNNO0FBQ1U7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxrREFBSSxDQUFDO0FBQ3RELElBQUk7QUFDSixpREFBaUQsbURBQUssQ0FBQztBQUN2RDtBQUNBLElBQUk7QUFDSixpREFBaUQsb0RBQU0sQ0FBQztBQUN4RCxJQUFJO0FBQ0osaURBQWlELGtEQUFJLENBQUM7QUFDdEQsSUFBSTtBQUNKLGlEQUFpRCxrREFBSSxDQUFDO0FBQ3RELElBQUk7QUFDSixpREFBaUQscURBQU8sQ0FBQztBQUN6RCxJQUFJO0FBQ0osaURBQWlELDBEQUFZLENBQUM7QUFDOUQ7QUFDQTs7QUFFQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDckNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUVBQXFFLEtBQUs7QUFDMUU7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RCxnREFBZ0QsTUFBTTs7QUFFdEQ7O0FBRUE7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEN2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2YyQztBQUNLOztBQUVoRDtBQUNBO0FBQ0EsMkJBQTJCLG1FQUFlOztBQUUxQztBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQixJQUFJLGlCQUFpQjs7QUFFOUQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7O0FBRWxEOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsbUJBQW1COztBQUVyRDs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHlCQUF5QixXQUFXLHlCQUF5Qjs7QUFFekY7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxrQkFBa0I7O0FBRWxEOztBQUVBLElBQUksMkRBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdW5ueSBmcm9tIFwiLi4vYXNzZXRzL2ltZ3Mvc3VubnkuanBnXCI7XG5pbXBvcnQgbWlzdCBmcm9tIFwiLi4vYXNzZXRzL2ltZ3MvbWlzdC5qcGdcIjtcbmltcG9ydCBjbG91ZHMgZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL2Nsb3VkeS5qcGdcIjtcbmltcG9ydCBzbm93IGZyb20gXCIuLi9hc3NldHMvaW1ncy9zbm93LmpwZ1wiO1xuaW1wb3J0IHJhaW4gZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL3JhaW4uanBnXCI7XG5pbXBvcnQgZHJpenpsZSBmcm9tIFwiLi4vYXNzZXRzL2ltZ3MvZHJpenpsZS5qcGdcIjtcbmltcG9ydCBUaHVuZGVyc3Rvcm0gZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL3RodW5kZXJzdG9ybS5qcGdcIjtcblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXJCRyh3ZWF0aGVyLCBiYWNrZ3JvdW5kRE9NKSB7XG4gIGlmIChcbiAgICB3ZWF0aGVyID09PSBcIk1pc3RcIiB8fFxuICAgIHdlYXRoZXIgPT09IFwiU21va2VcIiB8fFxuICAgIHdlYXRoZXIgPT09IFwiSGF6ZVwiIHx8XG4gICAgd2VhdGhlciA9PT0gXCJEdXN0XCIgfHxcbiAgICB3ZWF0aGVyID09PSBcIkZvZ1wiIHx8XG4gICAgd2VhdGhlciA9PT0gXCJTYW5kXCIgfHxcbiAgICB3ZWF0aGVyID09PSBcIkFzaFwiIHx8XG4gICAgd2VhdGhlciA9PT0gXCJTcXVhbGxcIiB8fFxuICAgIHdlYXRoZXIgPT09IFwiVG9ybmFkb1wiXG4gICkge1xuICAgIGJhY2tncm91bmRET00uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke21pc3R9KWA7XG4gIH0gZWxzZSBpZiAod2VhdGhlciA9PT0gXCJDbGVhclwiKSB7XG4gICAgYmFja2dyb3VuZERPTS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7c3Vubnl9KWA7XG4gICAgYmFja2dyb3VuZERPTS5zdHlsZS5jb2xvciA9IFwiQmxhY2tcIjtcbiAgfSBlbHNlIGlmICh3ZWF0aGVyID09PSBcIkNsb3Vkc1wiKSB7XG4gICAgYmFja2dyb3VuZERPTS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y2xvdWRzfSlgO1xuICB9IGVsc2UgaWYgKHdlYXRoZXIgPT09IFwiU25vd1wiKSB7XG4gICAgYmFja2dyb3VuZERPTS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7c25vd30pYDtcbiAgfSBlbHNlIGlmICh3ZWF0aGVyID09PSBcIlJhaW5cIikge1xuICAgIGJhY2tncm91bmRET00uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3JhaW59KWA7XG4gIH0gZWxzZSBpZiAod2VhdGhlciA9PT0gXCJEcml6emxlXCIpIHtcbiAgICBiYWNrZ3JvdW5kRE9NLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtkcml6emxlfSlgO1xuICB9IGVsc2UgaWYgKHdlYXRoZXIgPT09IFwiVGh1bmRlcnN0b3JtXCIpIHtcbiAgICBiYWNrZ3JvdW5kRE9NLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtUaHVuZGVyc3Rvcm19KWA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVdlYXRoZXJCRztcbiIsImNvbnN0IHdlYXRoZXIgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBjb252ZXJ0RGF0YShkYXRhKSB7XG4gICAgY29uc3Qgc3BlY2lmaWNPYmplY3QgPSB7XG4gICAgICBjaXR5TmFtZTogZGF0YS5uYW1lLFxuICAgICAgdGVtcGVyYXR1cmU6IHtcbiAgICAgICAgdGVtcDogZGF0YS5tYWluLnRlbXAsXG4gICAgICAgIG1heDogZGF0YS5tYWluLnRlbXBfbWF4LFxuICAgICAgICBtaW46IGRhdGEubWFpbi50ZW1wX21pbixcbiAgICAgIH0sXG4gICAgICBmZWVsc0xpa2U6IGRhdGEubWFpbi5mZWVsc19saWtlLFxuICAgICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcbiAgICAgIHdlYXRoZXI6IGRhdGEud2VhdGhlclswXS5tYWluLFxuICAgICAgY291bnRyeTogZGF0YS5zeXMuY291bnRyeSxcbiAgICB9O1xuICAgIHJldHVybiBzcGVjaWZpY09iamVjdDtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoY2l0eSkge1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPTI4ZmU3YjVmOWE3ODgzOGM2MzkxNDNmYzUxN2U0MzQzYDtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYENpdHkgJHtjaXR5fSBub3QgZm91bmRgKTtcblxuICAgICAgY29uc3QgZGF0YSA9IGNvbnZlcnREYXRhKGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IGdldERhdGEgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgd2VhdGhlciBmcm9tIFwiLi9tb2R1bGVzL3dlYXRoZXIuanNcIjtcbmltcG9ydCBkaXNwbGF5V2VhdGhlckJHIGZyb20gXCIuL21vZHVsZXMvZG9tLmpzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKGlucHV0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCB3ZWF0aGVyLmdldERhdGEoaW5wdXQpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImNvdW50cnlcIlxuICAgICkudGV4dENvbnRlbnQgPSBgJHtjaXR5RGF0YS5jaXR5TmFtZX0sICR7Y2l0eURhdGEuY291bnRyeX1gO1xuXG4gICAgLy9cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlclwiKS50ZXh0Q29udGVudCA9IGNpdHlEYXRhLndlYXRoZXI7XG5cbiAgICAvL1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcInRlbXBlcmF0dXJlXCJcbiAgICApLnRleHRDb250ZW50ID0gYCR7Y2l0eURhdGEudGVtcGVyYXR1cmUudGVtcH0gwrpgO1xuXG4gICAgLy9cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJmZWVscy1saWtlXCJcbiAgICApLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2UgJHtjaXR5RGF0YS5mZWVsc0xpa2V9wrpgO1xuXG4gICAgLy9cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJtYXgtbWluXCJcbiAgICApLnRleHRDb250ZW50ID0gYE1heDogJHtjaXR5RGF0YS50ZW1wZXJhdHVyZS5tYXh9wrogLSBNaW46ICR7Y2l0eURhdGEudGVtcGVyYXR1cmUubWlufcKqYDtcblxuICAgIC8vXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiaHVtaWRpdHlcIlxuICAgICkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHkgJHtjaXR5RGF0YS5odW1pZGl0eX0lYDtcblxuICAgIC8vXG5cbiAgICBkaXNwbGF5V2VhdGhlckJHKFxuICAgICAgY2l0eURhdGEud2VhdGhlcixcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQk9EWVwiKVswXVxuICAgICk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBpbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYmFyXCIpLnZhbHVlO1xuXG4gIGlmIChpbnB1dFZhbHVlLmxlbmd0aCAhPT0gMCkge1xuICAgIGRpc3BsYXlXZWF0aGVyKGlucHV0VmFsdWUpO1xuICB9IGVsc2UgcmV0dXJuO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=