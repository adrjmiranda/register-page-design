/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("/**\n * Changes Password Visibility\n */\nvar passwordInput = document.querySelector('#password');\nvar passwordConfirmationInput = document.querySelector('#password-confirmation');\nvar passwordVisibilityButton = document.querySelector('.password-visibility');\nvar passwordConfirmationVisibilityButton = document.querySelector('.password-confirmation-visibility');\nvar HIDDEN_CLASS = 'hidden';\nvar changeVisibility = function (_a) {\n    var _b;\n    var input = _a.input, button = _a.button;\n    var inputType = (_b = input.getAttribute('type')) !== null && _b !== void 0 ? _b : 'password';\n    var newType = inputType === 'text' ? 'password' : 'text';\n    input.setAttribute('type', newType);\n    button.querySelectorAll('i').forEach(function (icon) {\n        return icon.classList.toggle(HIDDEN_CLASS);\n    });\n};\nif (passwordInput &&\n    passwordVisibilityButton &&\n    passwordConfirmationInput &&\n    passwordConfirmationVisibilityButton) {\n    var inputFieldList = [\n        {\n            input: passwordInput,\n            button: passwordVisibilityButton,\n        },\n        {\n            input: passwordConfirmationInput,\n            button: passwordConfirmationVisibilityButton,\n        },\n    ];\n    inputFieldList.forEach(function (inputField) {\n        inputField.button.addEventListener('click', function () {\n            return changeVisibility(inputField);\n        });\n    });\n}\n\n\n//# sourceURL=webpack://register-page-design/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;