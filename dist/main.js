/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simonwep_pickr_dist_pickr_es5_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @simonwep/pickr/dist/pickr.es5.min */ "../node_modules/@simonwep/pickr/dist/pickr.es5.min.js");
/* harmony import */ var _simonwep_pickr_dist_pickr_es5_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_simonwep_pickr_dist_pickr_es5_min__WEBPACK_IMPORTED_MODULE_0__);
// import Pickr from '@simonwep/pickr';

var form = document.querySelector('.form');
var inputName = document.querySelector('.input-name');
var inputType = document.querySelector('.input-type');
var inputColor = document.querySelector('.input-color');
var itemsList = document.querySelector('.items-list');
var item = document.querySelector('.item'); //draggable

itemsList.addEventListener("dragstart", function (e) {
  e.target.classList.add("selected");
});
itemsList.addEventListener("dragend", function (e) {
  e.target.classList.remove("selected");
});

var getNextItem = function getNextItem(cursorPosition, currentItem) {
  var currentItemCoord = currentItem.getBoundingClientRect();
  var currentItemCenter = currentItemCoord.y + currentItemCoord.height / 2;
  var nextItem = cursorPosition < currentItemCenter ? currentItem : currentItem.nextElementSibling;
  return nextItem;
};

itemsList.addEventListener("dragover", function (e) {
  e.preventDefault();
  var activeItem = itemsList.querySelector(".selected");
  var currentItem = e.target;
  var isMoveable = activeItem !== currentItem && currentItem.classList.contains("item");

  if (!isMoveable) {
    return;
  }

  var nextItem = getNextItem(e.clientY, currentItem);

  if (nextItem && activeItem === nextItem.previousElementSibling || activeItem === nextItem) {
    return;
  }

  itemsList.insertBefore(activeItem, nextItem);
}); /// 

var arrData = [];
form.addEventListener('submit', function (e) {
  e.preventDefault();
  addObj(inputName.value, inputType.value, inputColor.value);
});

var addObj = function addObj(name, type, color) {
  if (inputName.value !== '' && inputType.value !== '' && inputColor.value !== "" && inputColor.value !== undefined) {
    var obj = {
      id: Date.now(),
      name: name,
      type: type,
      color: color
    };
    arrData.push(obj);
    addToLocalStorage(arrData);
    inputName.value = '';
    inputType.value = '';
    inputColor.value = '';
  }
};

var renderArrData = function renderArrData(arrData) {
  itemsList.innerHTML = '';
  arrData.forEach(function (item) {
    var li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.setAttribute('data-key', item.id);
    li.setAttribute('draggable', 'true');
    li.setAttribute('contenteditable', 'false');
    li.innerHTML = "\n    <div class=\"text text-name\">".concat(item.name, "</div>\n    <div class=\"text text-type\">").concat(item.type, "</div>\n    <div class=\"text text-color\">").concat(item.color, "</div>\n    <button class=\"button edit-button action-button\" title=\"edit\"></button>\n    <button class=\"button delete-button action-button\" title=\"delete notation\"></button>\n    ");
    itemsList.append(li);
  });
};

var addToLocalStorage = function addToLocalStorage(arrData) {
  localStorage.setItem('arrData', JSON.stringify(arrData));
  renderArrData(arrData);
};

var getFromLocalStorage = function getFromLocalStorage() {
  var reference = localStorage.getItem('arrData');

  if (reference) {
    arrData = JSON.parse(reference);
    renderArrData(arrData);
  }
};

var deleteObj = function deleteObj(id) {
  arrData = arrData.filter(function (item) {
    return item.id != id;
  });
  addToLocalStorage(arrData);
};

getFromLocalStorage();
itemsList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-button")) {
    deleteObj(e.target.parentElement.getAttribute("data-key"));
  }

  editObj(e.target);
});

var editObj = function editObj(currentItem) {
  if (currentItem.classList.contains("edit-button")) {
    var currentItemId = currentItem.parentElement.getAttribute("data-key");
    var textName = currentItem.parentElement.querySelector(".text-name");
    var textType = currentItem.parentElement.querySelector(".text-type");
    var textColor = currentItem.parentElement.querySelector(".text-color");
    var updateItem = {
      id: Number(currentItemId),
      name: textName.textContent,
      type: textType.textContent,
      color: textColor.textContent
    };
    currentItem.classList.toggle("active");
    currentItem.parentElement.classList.toggle("active");
    textName.toggleAttribute("contenteditable");
    textType.toggleAttribute("contenteditable");
    textColor.toggleAttribute("contenteditable");

    if (!currentItem.parentElement.classList.contains("active")) {
      addToLocalStorage(updateData(updateItem));
    }
  }
};

var updateData = function updateData(updateItem) {
  var index = arrData.findIndex(function (item) {
    return item.id === updateItem.id;
  });

  if (index >= 0) {
    arrData[index] = updateItem;
  }

  return arrData;
};

var pickr = _simonwep_pickr_dist_pickr_es5_min__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  el: '.color-picker',
  theme: 'monolith',
  useAsButton: true,
  components: {
    // Main components
    preview: true,
    opacity: false,
    hue: true,
    // Input / output Options
    interaction: {
      hex: true,
      rgba: true,
      hsla: false,
      hsva: false,
      cmyk: false,
      input: true,
      clear: true,
      save: true
    }
  }
}); // color picker value

pickr.on('change', function (color) {
  inputColor.value = color["to".concat(pickr.getColorRepresentation())]().toString(0);
});

/***/ }),

/***/ "./assets/styles/main.css":
/*!********************************!*\
  !*** ./assets/styles/main.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./assets/styles/main.scss":
/*!*********************************!*\
  !*** ./assets/styles/main.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/main.css */ "./assets/styles/main.css");
/* harmony import */ var _assets_styles_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_main_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles/main.scss */ "./assets/styles/main.scss");
/* harmony import */ var _assets_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/js/main.js */ "./assets/js/main.js");
/* harmony import */ var _node_modules_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@fortawesome/fontawesome-free/css/all.min.css */ "../node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _node_modules_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _simonwep_pickr_dist_themes_classic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @simonwep/pickr/dist/themes/classic.min.css */ "../node_modules/@simonwep/pickr/dist/themes/classic.min.css");
/* harmony import */ var _simonwep_pickr_dist_themes_classic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_simonwep_pickr_dist_themes_classic_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _simonwep_pickr_dist_themes_monolith_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @simonwep/pickr/dist/themes/monolith.min.css */ "../node_modules/@simonwep/pickr/dist/themes/monolith.min.css");
/* harmony import */ var _simonwep_pickr_dist_themes_monolith_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_simonwep_pickr_dist_themes_monolith_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _simonwep_pickr_dist_themes_nano_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @simonwep/pickr/dist/themes/nano.min.css */ "../node_modules/@simonwep/pickr/dist/themes/nano.min.css");
/* harmony import */ var _simonwep_pickr_dist_themes_nano_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_simonwep_pickr_dist_themes_nano_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _simonwep_pickr_dist_pickr_es5_min__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @simonwep/pickr/dist/pickr.es5.min */ "../node_modules/@simonwep/pickr/dist/pickr.es5.min.js");
/* harmony import */ var _simonwep_pickr_dist_pickr_es5_min__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_simonwep_pickr_dist_pickr_es5_min__WEBPACK_IMPORTED_MODULE_7__);




 // 'classic' theme

 // 'monolith' theme

 // 'nano' theme
// import Pickr from '@simonwep/pickr';



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map