/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts-ts/jenny.ts":
/*!*********************************!*\
  !*** ./src/scripts-ts/jenny.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.test = exports.build = void 0;
var build = function (blueprint) {
    var elementType = blueprint.elementType, attributes = blueprint.attributes, childrenBlueprints = blueprint.childrenBlueprints, events = blueprint.events, appendTo = blueprint.appendTo;
    var newElement = document.createElement(elementType);
    childrenBlueprints === null || childrenBlueprints === void 0 ? void 0 : childrenBlueprints.forEach(function (childBlueprint) {
        newElement.appendChild(build(childBlueprint));
    });
    attributes === null || attributes === void 0 ? void 0 : attributes.forEach(function (attribute) {
        newElement.setAttribute(attribute.type, attribute.value);
    });
    events === null || events === void 0 ? void 0 : events.forEach(function (event) {
        newElement.addEventListener(event.type, event.trigger);
    });
    if (!appendTo)
        return newElement;
    appendTo.appendChild(newElement);
    return newElement;
};
exports.build = build;
var test = "exported";
exports.test = test;
// sample container
// const blueprint: blueprint = {
//   elementType: "DIV",
//   appendTo: body as HTMLBodyElement,
//   attributes: [{ type: "class", value: "container" }],
// };


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var jenny_1 = __webpack_require__(/*! ./scripts-ts/jenny */ "./src/scripts-ts/jenny.ts");
console.log(jenny_1.test);

})();

/******/ })()
;