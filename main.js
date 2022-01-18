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




function displayWeatherBG(weather, backgroundDOM) {
  console.log(_assets_imgs_sunny_jpg__WEBPACK_IMPORTED_MODULE_0__, _assets_imgs_mist_jpg__WEBPACK_IMPORTED_MODULE_1__);
  if (weather === "Mist") {
    backgroundDOM.style.backgroundImage = `url(${_assets_imgs_mist_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
  } else if (weather === "Clear") {
    backgroundDOM.style.backgroundImage = `url(${_assets_imgs_sunny_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
  } else if (weather === "Clouds") {
    backgroundDOM.style.backgroundImage = `url(${_assets_imgs_cloudy_jpg__WEBPACK_IMPORTED_MODULE_2__})`;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);


/***/ }),

/***/ "./src/assets/imgs/cloudy.jpg":
/*!************************************!*\
  !*** ./src/assets/imgs/cloudy.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6b1b6a733132880e794.jpg";

/***/ }),

/***/ "./src/assets/imgs/mist.jpg":
/*!**********************************!*\
  !*** ./src/assets/imgs/mist.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64ad2d9789ccfdfc4628.jpg";

/***/ }),

/***/ "./src/assets/imgs/sunny.jpg":
/*!***********************************!*\
  !*** ./src/assets/imgs/sunny.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c99afd82248e048a3c2e.jpg";

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
    document.getElementById("weather").textContent = cityData.weather;
    document.getElementById(
      "temperature"
    ).textContent = `${cityData.temperature} Cº`;

    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
      cityData.weather,
      document.getElementById("container-body")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNGO0FBQ0k7O0FBRS9DO0FBQ0EsY0FBYyxtREFBSyxFQUFFLGtEQUFJO0FBQ3pCO0FBQ0EsaURBQWlELGtEQUFJLENBQUM7QUFDdEQsSUFBSTtBQUNKLGlEQUFpRCxtREFBSyxDQUFDO0FBQ3ZELElBQUk7QUFDSixpREFBaUQsb0RBQU0sQ0FBQztBQUN4RDtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNmaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxRUFBcUUsS0FBSztBQUMxRTtBQUNBLDBDQUEwQyxjQUFjO0FBQ3hELGdEQUFnRCxNQUFNOztBQUV0RDs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVELGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzVCdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmMkM7QUFDSzs7QUFFaEQ7QUFDQTtBQUNBLDJCQUEyQixtRUFBZTs7QUFFMUM7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0IsSUFBSSxpQkFBaUI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjs7QUFFN0MsSUFBSSwyREFBZ0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN1bm55IGZyb20gXCIuLi9hc3NldHMvaW1ncy9zdW5ueS5qcGdcIjtcbmltcG9ydCBtaXN0IGZyb20gXCIuLi9hc3NldHMvaW1ncy9taXN0LmpwZ1wiO1xuaW1wb3J0IGNsb3VkcyBmcm9tIFwiLi4vYXNzZXRzL2ltZ3MvY2xvdWR5LmpwZ1wiO1xuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlckJHKHdlYXRoZXIsIGJhY2tncm91bmRET00pIHtcbiAgY29uc29sZS5sb2coc3VubnksIG1pc3QpO1xuICBpZiAod2VhdGhlciA9PT0gXCJNaXN0XCIpIHtcbiAgICBiYWNrZ3JvdW5kRE9NLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHttaXN0fSlgO1xuICB9IGVsc2UgaWYgKHdlYXRoZXIgPT09IFwiQ2xlYXJcIikge1xuICAgIGJhY2tncm91bmRET00uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3N1bm55fSlgO1xuICB9IGVsc2UgaWYgKHdlYXRoZXIgPT09IFwiQ2xvdWRzXCIpIHtcbiAgICBiYWNrZ3JvdW5kRE9NLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjbG91ZHN9KWA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVdlYXRoZXJCRztcbiIsImNvbnN0IHdlYXRoZXIgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBjb252ZXJ0RGF0YShkYXRhKSB7XG4gICAgY29uc3Qgc3BlY2lmaWNPYmplY3QgPSB7XG4gICAgICBjaXR5TmFtZTogZGF0YS5uYW1lLFxuICAgICAgdGVtcGVyYXR1cmU6IGRhdGEubWFpbi50ZW1wLFxuICAgICAgd2VhdGhlcjogZGF0YS53ZWF0aGVyWzBdLm1haW4sXG4gICAgICBjb3VudHJ5OiBkYXRhLnN5cy5jb3VudHJ5LFxuICAgIH07XG4gICAgcmV0dXJuIHNwZWNpZmljT2JqZWN0O1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjaXR5KSB7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9MjhmZTdiNWY5YTc4ODM4YzYzOTE0M2ZjNTE3ZTQzNDNgO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgQ2l0eSAke2NpdHl9IG5vdCBmb3VuZGApO1xuXG4gICAgICBjb25zdCBkYXRhID0gY29udmVydERhdGEoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBnZXREYXRhIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHdlYXRoZXIgZnJvbSBcIi4vbW9kdWxlcy93ZWF0aGVyLmpzXCI7XG5pbXBvcnQgZGlzcGxheVdlYXRoZXJCRyBmcm9tIFwiLi9tb2R1bGVzL2RvbS5qc1wiO1xuXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5V2VhdGhlcihpbnB1dCkge1xuICB0cnkge1xuICAgIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgd2VhdGhlci5nZXREYXRhKGlucHV0KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJjb3VudHJ5XCJcbiAgICApLnRleHRDb250ZW50ID0gYCR7Y2l0eURhdGEuY2l0eU5hbWV9LCAke2NpdHlEYXRhLmNvdW50cnl9YDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJcIikudGV4dENvbnRlbnQgPSBjaXR5RGF0YS53ZWF0aGVyO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJ0ZW1wZXJhdHVyZVwiXG4gICAgKS50ZXh0Q29udGVudCA9IGAke2NpdHlEYXRhLnRlbXBlcmF0dXJlfSBDwrpgO1xuXG4gICAgZGlzcGxheVdlYXRoZXJCRyhcbiAgICAgIGNpdHlEYXRhLndlYXRoZXIsXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lci1ib2R5XCIpXG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGlucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1iYXJcIikudmFsdWU7XG5cbiAgaWYgKGlucHV0VmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgZGlzcGxheVdlYXRoZXIoaW5wdXRWYWx1ZSk7XG4gIH0gZWxzZSByZXR1cm47XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==