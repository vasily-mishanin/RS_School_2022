/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./styles/styles.css");
/* harmony import */ var _modules_Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Keyboard */ "./modules/Keyboard.js");


var keyboard = new _modules_Keyboard__WEBPACK_IMPORTED_MODULE_1__["default"]('EN', 'RU');
var root = document.createElement('div');
var logo = document.createElement('img');
var heading = document.createElement('h1');
var textarea = document.createElement('textarea');
textarea.setAttribute('autofocus', '');
root.classList.add('root');
logo.src = './favicon.ico';
logo.style.width = '80px';
textarea.classList.add('textarea');
heading.classList.add('heading');
heading.textContent = 'RS School Virtual Keyboard';
document.body.appendChild(root);
root.appendChild(logo);
root.appendChild(heading);
root.appendChild(textarea);
keyboard.initRender(root);
keyboard.listenKeyboard();
var footerHTML = "<p>\u042D\u0442\u0430 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 \u0441\u0434\u0435\u043B\u0430\u043D\u0430 \u043D\u0430 MacOS</p> <p>\u0414\u043B\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u044F\u0437\u044B\u043A\u0430 \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0446\u0438\u044F: \u043B\u0435\u0432\u0430\u044F control +  Space</p>";
var footer = document.createElement('footer');
footer.classList.add('footer');
footer.innerHTML = footerHTML;
root.appendChild(footer);

/***/ }),

/***/ "./modules/Key.js":
/*!************************!*\
  !*** ./modules/Key.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Key = /*#__PURE__*/function () {
  function Key(aDown, aUp, bDown, bUp, extraClass, keyCode) {
    _classCallCheck(this, Key);

    this.aDown = aDown;
    this.aUp = aUp;
    this.bDown = bDown;
    this.bUp = bUp;
    this.extraClass = extraClass;
    this.keyCode = keyCode;
  }

  _createClass(Key, [{
    key: "getKeyHTML",
    value: function getKeyHTML() {
      var aDown = this.aDown,
          aUp = this.aUp,
          bDown = this.bDown,
          bUp = this.bUp,
          extraClass = this.extraClass,
          keyCode = this.keyCode;
      return "<div class=\"keyboard__key ".concat(extraClass, "\" id=").concat(keyCode, ">\n      <div class = 'langA'>\n        <span class='caseDown' data-char=").concat(aDown, ">").concat(aDown, "</span>\n        <span class='caseUp' data-char=").concat(aUp, ">").concat(aUp, "</span>\n      </div>\n      <div class = 'langB'>\n      <span class='caseDown' data-char=").concat(bDown, "> ").concat(bDown, " </span>\n      <span class='caseUp' data-char=").concat(bUp, "> ").concat(bUp, " </span>\n      </div>\n    </div>");
    }
  }]);

  return Key;
}();

/* harmony default export */ __webpack_exports__["default"] = (Key);

/***/ }),

/***/ "./modules/Keyboard.js":
/*!*****************************!*\
  !*** ./modules/Keyboard.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Key */ "./modules/Key.js");
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Keyboard = /*#__PURE__*/function () {
  function Keyboard(langA, langB) {
    _classCallCheck(this, Keyboard);

    _defineProperty(this, "firstRowChars", [['§', '±', '&#62;', '&#60;', '', 'Backquote'], ['1', '!', '1', '!', '', 'Digit1'], ['2', '@', '2', '&#34;', '', 'Digit2'], ['3', '#', '3', '№', '', 'Digit3'], ['4', '$', '4', '%', '', 'Digit4'], ['5', '%', '5', ':', '', 'Digit5'], ['6', '^', '6', ',', '', 'Digit6'], ['7', '&', '7', '.', '', 'Digit7'], ['8', '*', '8', ';', '', 'Digit8'], ['9', '(', '9', '(', '', 'Digit9'], ['0', ')', '0', ')', '', 'Digit0'], ['-', '_', '-', '_', '', 'Minus'], ['=', '+', '=', '+', '', 'Equal']]);

    _defineProperty(this, "secondRowChars", [['q', 'Q', 'й', 'Й', 'letter', 'KeyQ'], ['w', 'W', 'ц', 'Ц', 'letter', 'KeyW'], ['e', 'E', 'у', 'У', 'letter', 'KeyE'], ['r', 'R', 'к', 'К', 'letter', 'KeyR'], ['t', 'T', 'е', 'Е', 'letter', 'KeyT'], ['y', 'Y', 'н', 'Н', 'letter', 'KeyY'], ['u', 'U', 'г', 'Г', 'letter', 'KeyU'], ['i', 'I', 'ш', 'Ш', 'letter', 'KeyI'], ['o', 'O', 'щ', 'Щ', 'letter', 'KeyO'], ['p', 'P', 'з', 'З', 'letter', 'KeyP'], ['[', '{', 'х', 'Х', 'letter', 'BracketLeft'], [']', '}', 'ъ', 'Ъ', 'letter', 'BracketRight']]);

    _defineProperty(this, "thirdRowChars", [['a', 'A', 'ф', 'Ф', 'letter', 'KeyA'], ['s', 'S', 'ы', 'Ы', 'letter', 'KeyS'], ['d', 'D', 'в', 'В', 'letter', 'KeyD'], ['f', 'F', 'а', 'А', 'letter', 'KeyF'], ['g', 'G', 'п', 'П', 'letter', 'KeyG'], ['h', 'H', 'р', 'Р', 'letter', 'KeyH'], ['j', 'J', 'о', 'О', 'letter', 'KeyJ'], ['k', 'K', 'л', 'Л', 'letter', 'KeyK'], ['l', 'L', 'д', 'Д', 'letter', 'KeyL'], [';', ':', 'ж', 'Ж', 'letter', 'Semicolon'], ['&#39;', '&#34;', 'э', 'Э', 'letter', 'Quote'], ['&#92;', '&#124;', 'ё', 'Ё', 'letter', 'Backslash']]);

    _defineProperty(this, "fourthRowChars", [['`', '~', ']', '[', '', 'IntlBackslash'], ['z', 'Z', 'я', 'Я', 'letter', 'KeyZ'], ['x', 'X', 'ч', 'Ч', 'letter', 'KeyX'], ['c', 'C', 'с', 'С', 'letter', 'KeyC'], ['v', 'V', 'м', 'М', 'letter', 'KeyV'], ['b', 'B', 'и', 'И', 'letter', 'KeyB'], ['n', 'N', 'т', 'Т', 'letter', 'KeyN'], ['m', 'M', 'ь', 'Ь', 'letter', 'KeyM'], [',', '&#60;', 'б', 'Б', 'letter', 'Comma'], ['.', '&#62;', 'ю', 'Ю', 'letter', 'Period'], ['/', '?', '/', '?', '', 'Slash']]);

    _defineProperty(this, "fifthRowChars", [['Fn', '', 'Fn', '', 'function', 'Function'], ['control', '', 'control', '', 'control', 'ControlLeft'], ['option', '', 'option', '', 'option-left', 'AltLeft'], ['command', '', 'command', '', 'command-left', 'MetaLeft'], ['&#160;', '', '&#160;', '', 'space', 'Space'], ['command', '', 'command', '', 'command-right', 'MetaRight'], ['option', '', 'option', '', 'option-right', 'AltRight']]);

    this.langA = langA;
    this.langB = langB;
    this.currentLang = window.localStorage.getItem('lang') || this.langA;
    this.lowerCase = true;
    this.map = {};
  }

  _createClass(Keyboard, [{
    key: "firstRowHTML",
    value: function firstRowHTML() {
      var firstRowKeys = this.firstRowChars.map(function (chars) {
        return _construct(_Key__WEBPACK_IMPORTED_MODULE_0__["default"], _toConsumableArray(chars));
      });
      var keys = firstRowKeys.map(function (key) {
        return key.getKeyHTML();
      });
      var keyBACKSPACE = new _Key__WEBPACK_IMPORTED_MODULE_0__["default"]('&#9003;', '', '&#9003;', '', 'backspace', 'Backspace');
      keys.push(keyBACKSPACE.getKeyHTML());
      return "<div class =\"keyboard__row\">".concat(keys.join('\n'), "</div>");
    }
  }, {
    key: "secondRowHTML",
    value: function secondRowHTML() {
      var keyTAB = new _Key__WEBPACK_IMPORTED_MODULE_0__["default"]('Tab', '', 'Tab', '', 'tab', 'Tab');
      var secondRowKeys = this.secondRowChars.map(function (chars) {
        return _construct(_Key__WEBPACK_IMPORTED_MODULE_0__["default"], _toConsumableArray(chars));
      });
      var keys = secondRowKeys.map(function (key) {
        return key.getKeyHTML();
      });
      keys.unshift(keyTAB.getKeyHTML());
      var keyENTER = new _Key__WEBPACK_IMPORTED_MODULE_0__["default"]('Enter', '', 'Enter', '', 'enter', 'Enter');
      keys.push(keyENTER.getKeyHTML());
      return "<div class =\"keyboard__row\">".concat(keys.join('\n'), "</div>");
    }
  }, {
    key: "thirdRowHTML",
    value: function thirdRowHTML() {
      var keyCAPSLOCK = new _Key__WEBPACK_IMPORTED_MODULE_0__["default"]('CapsLock', '', 'CapsLock', '', 'capslock', 'CapsLock');
      var thirdRowKeys = this.thirdRowChars.map(function (chars) {
        return _construct(_Key__WEBPACK_IMPORTED_MODULE_0__["default"], _toConsumableArray(chars));
      });
      var keys = thirdRowKeys.map(function (key) {
        return key.getKeyHTML();
      });
      keys.unshift(keyCAPSLOCK.getKeyHTML());
      return "<div class =\"keyboard__row\">".concat(keys.join('\n'), "</div>");
    }
  }, {
    key: "fourthRowHTML",
    value: function fourthRowHTML() {
      var keyShiftLeft = new _Key__WEBPACK_IMPORTED_MODULE_0__["default"]('Shift', '', 'Shift', '', 'shift-left', 'ShiftLeft');
      var keyShiftRight = new _Key__WEBPACK_IMPORTED_MODULE_0__["default"]('Shift', '', 'Shift', '', 'shift-right', 'ShiftRight');
      var fourthRowKeys = this.fourthRowChars.map(function (chars) {
        return _construct(_Key__WEBPACK_IMPORTED_MODULE_0__["default"], _toConsumableArray(chars));
      });
      var keys = fourthRowKeys.map(function (key) {
        return key.getKeyHTML();
      });
      keys.unshift(keyShiftLeft.getKeyHTML());
      keys.push(keyShiftRight.getKeyHTML());
      return "<div class =\"keyboard__row\">".concat(keys.join('\n'), "</div>");
    }
  }, {
    key: "fifthRowHTML",
    value: function fifthRowHTML() {
      var fifthRowKeys = this.fifthRowChars.map(function (chars) {
        return _construct(_Key__WEBPACK_IMPORTED_MODULE_0__["default"], _toConsumableArray(chars));
      });
      var keysHTML = fifthRowKeys.map(function (key) {
        return key.getKeyHTML();
      });
      var arrowsHTML = "<div class=\"arrows\">\n      <span class=\"arrows__left arrow-key\" id=\"ArrowLeft\" data-char=\"&#9664;\">&#9664;</span>\n      <div class=\"arrows__center\">\n          <span class=\"arrows__up arrow-key\" id=\"ArrowUp\" data-char=\"&#9650;\">&#9650;</span>\n          <span class=\"arrows__down arrow-key\" id=\"ArrowDown\" data-char=\"&#9660;\">&#9660;</span>\n      </div>\n      <span class=\"arrows__right arrow-key\" id=\"ArrowRight\" data-char=\"&#9654;\"> &#9654;</span>\n      </div>";
      return "<div class =\"keyboard__row bottom-row\">".concat(keysHTML.join('\n'), " \n ").concat(arrowsHTML, "</div>");
    }
  }, {
    key: "initRender",
    value: function initRender(container) {
      console.log(this.currentLang);
      var keyboardContainer = document.createElement('div');
      keyboardContainer.classList.add('keyboard');
      container.append(keyboardContainer);
      keyboardContainer.innerHTML += this.firstRowHTML();
      keyboardContainer.innerHTML += this.secondRowHTML();
      keyboardContainer.innerHTML += this.thirdRowHTML();
      keyboardContainer.innerHTML += this.fourthRowHTML();
      keyboardContainer.innerHTML += this.fifthRowHTML();

      if (this.currentLang === 'EN') {
        keyboardContainer.querySelectorAll('.langB').forEach(function (el) {
          return el.classList.add('hidden');
        });
        var letters = keyboardContainer.querySelectorAll('.letter');
        letters.forEach(function (key) {
          key.querySelector('.caseUp').classList.add('hidden');
        });
      } else {
        keyboardContainer.querySelectorAll('.langA').forEach(function (el) {
          return el.classList.add('hidden');
        });

        var _letters = keyboardContainer.querySelectorAll('.letter');

        _letters.forEach(function (key) {
          key.querySelector('.caseUp').classList.add('hidden');
        });
      }
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage(keyboardContainer) {
      console.log('this.currentLang =>', this.currentLang);

      if (this.currentLang === 'EN') {
        keyboardContainer.querySelectorAll('.langA').forEach(function (el) {
          return el.classList.add('hidden');
        });
        keyboardContainer.querySelectorAll('.langB').forEach(function (el) {
          return el.classList.remove('hidden');
        });
        window.localStorage.setItem('lang', 'RU');
        this.currentLang = 'RU';
      } else if (this.currentLang === 'RU') {
        keyboardContainer.querySelectorAll('.langB').forEach(function (el) {
          return el.classList.add('hidden');
        });
        keyboardContainer.querySelectorAll('.langA').forEach(function (el) {
          return el.classList.remove('hidden');
        });
        window.localStorage.setItem('lang', 'EN');
        this.currentLang = 'EN';
      }
    }
  }, {
    key: "toLowerCaseLetters",
    value: function toLowerCaseLetters(keyboardContainer) {
      var letters = keyboardContainer.querySelectorAll('.letter');
      letters.forEach(function (key) {
        key.querySelectorAll('.caseUp').forEach(function (el) {
          el.classList.add('hidden');
        });
        key.querySelectorAll('.caseDown').forEach(function (el) {
          el.classList.remove('hidden');
        });
      });
    }
  }, {
    key: "toUppersCaseLetters",
    value: function toUppersCaseLetters(keyboardContainer) {
      var letters = keyboardContainer.querySelectorAll('.letter');
      letters.forEach(function (key) {
        key.querySelectorAll('.caseDown').forEach(function (el) {
          el.classList.add('hidden');
        });
        key.querySelectorAll('.caseUp').forEach(function (el) {
          el.classList.remove('hidden');
        });
      });
    }
  }, {
    key: "listenKeyboard",
    value: function listenKeyboard() {
      var _this = this;

      var keybpard = document.querySelector('.keyboard');
      console.log(keybpard);
      document.addEventListener('keydown', function (e) {
        _this.map[e.code] = true;

        if (e.code === 'Tab') {
          e.preventDefault();
          var textArea = document.querySelector('.textarea');
          var start = textArea.selectionStart;
          var end = textArea.selectionEnd;
          textArea.value = textArea.value.substring(0, start) + '\t' + textArea.value.substring(end);
          textArea.selectionStart = textArea.selectionEnd = start + 1;
        }

        if (e.getModifierState('CapsLock')) {
          _this.toUppersCaseLetters(document.querySelector('.keyboard'));
        }

        if (e.getModifierState('Shift')) {
          _this.toUppersCaseLetters(document.querySelector('.keyboard'));
        }

        if (_this.map['ControlLeft'] && _this.map['Space']) {
          _this.changeLanguage(document.querySelector('.keyboard'));

          document.getElementById(e.code).classList.remove('active');
        }

        document.getElementById(e.code).classList.add('active');
      });
      document.addEventListener('keyup', function (e) {
        _this.map[e.code] = false;

        if (!e.getModifierState('CapsLock')) {
          _this.toLowerCaseLetters(document.querySelector('.keyboard'));
        }

        if (!e.getModifierState('CapsLock')) {
          _this.toLowerCaseLetters(document.querySelector('.keyboard'));
        }

        document.getElementById(e.code).classList.remove('active');
      });
      keybpard.addEventListener('mousedown', function (e) {
        console.log('mousedown');
        var char = e.target.dataset.char;
        var key = e.target.closest('.keyboard__key') || e.target.closest('.arrow-key');

        if (!char) {
          var span = key.querySelector('span');
          char = span.dataset.char;
          console.log(char);
        }

        var textArea = document.querySelector('.textarea');
        var start = textArea.selectionStart;
        var end = textArea.selectionEnd;

        var addChar = function addChar(char) {
          textArea.value = textArea.value.substring(0, start) + char + textArea.value.substring(end);
          textArea.selectionStart = textArea.selectionEnd = start + 1;
        };

        key.classList.add('active');

        if (key.id === 'Space') {
          addChar(' ');
        } else if (key.id === 'Tab') {
          addChar('\t');
        } else if (key.id === 'Enter') {
          addChar('\n');
        } else {
          addChar(char ? char : '');
        }
      });
      keybpard.addEventListener('mouseup', function (e) {
        var key = e.target.closest('.keyboard__key') || e.target.closest('.arrow-key');
        key.classList.remove('active');
      });
    }
  }]);

  return Keyboard;
}();

/* harmony default export */ __webpack_exports__["default"] = (Keyboard);

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("./index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lYTRkYjFiMDQ0ZjZmZTk4NjA2MS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1DLFFBQVEsR0FBRyxJQUFJRCx5REFBSixDQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FBakI7QUFFQSxJQUFNRSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0EsSUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBLElBQU1FLE9BQU8sR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWhCO0FBQ0EsSUFBTUcsUUFBUSxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBakI7QUFDQUcsUUFBUSxDQUFDQyxZQUFULENBQXNCLFdBQXRCLEVBQW1DLEVBQW5DO0FBQ0FOLElBQUksQ0FBQ08sU0FBTCxDQUFlQyxHQUFmLENBQW1CLE1BQW5CO0FBQ0FMLElBQUksQ0FBQ00sR0FBTCxHQUFXLGVBQVg7QUFDQU4sSUFBSSxDQUFDTyxLQUFMLENBQVdDLEtBQVgsR0FBbUIsTUFBbkI7QUFDQU4sUUFBUSxDQUFDRSxTQUFULENBQW1CQyxHQUFuQixDQUF1QixVQUF2QjtBQUNBSixPQUFPLENBQUNHLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFNBQXRCO0FBQ0FKLE9BQU8sQ0FBQ1EsV0FBUixHQUFzQiw0QkFBdEI7QUFDQVgsUUFBUSxDQUFDWSxJQUFULENBQWNDLFdBQWQsQ0FBMEJkLElBQTFCO0FBQ0FBLElBQUksQ0FBQ2MsV0FBTCxDQUFpQlgsSUFBakI7QUFDQUgsSUFBSSxDQUFDYyxXQUFMLENBQWlCVixPQUFqQjtBQUNBSixJQUFJLENBQUNjLFdBQUwsQ0FBaUJULFFBQWpCO0FBRUFOLFFBQVEsQ0FBQ2dCLFVBQVQsQ0FBb0JmLElBQXBCO0FBQ0FELFFBQVEsQ0FBQ2lCLGNBQVQ7QUFFQSxJQUFNQyxVQUFVLHlZQUFoQjtBQUNBLElBQU1DLE1BQU0sR0FBR2pCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0FnQixNQUFNLENBQUNYLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFFBQXJCO0FBQ0FVLE1BQU0sQ0FBQ0MsU0FBUCxHQUFtQkYsVUFBbkI7QUFDQWpCLElBQUksQ0FBQ2MsV0FBTCxDQUFpQkksTUFBakI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDNUJNRTtFQUNKLGFBQVlDLEtBQVosRUFBbUJDLEdBQW5CLEVBQXdCQyxLQUF4QixFQUErQkMsR0FBL0IsRUFBb0NDLFVBQXBDLEVBQWdEQyxPQUFoRCxFQUF5RDtJQUFBOztJQUN2RCxLQUFLTCxLQUFMLEdBQWFBLEtBQWI7SUFDQSxLQUFLQyxHQUFMLEdBQVdBLEdBQVg7SUFDQSxLQUFLQyxLQUFMLEdBQWFBLEtBQWI7SUFDQSxLQUFLQyxHQUFMLEdBQVdBLEdBQVg7SUFDQSxLQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtJQUNBLEtBQUtDLE9BQUwsR0FBZUEsT0FBZjtFQUNEOzs7O1dBRUQsc0JBQWE7TUFDWCxJQUFRTCxLQUFSLEdBQXdELElBQXhELENBQVFBLEtBQVI7TUFBQSxJQUFlQyxHQUFmLEdBQXdELElBQXhELENBQWVBLEdBQWY7TUFBQSxJQUFvQkMsS0FBcEIsR0FBd0QsSUFBeEQsQ0FBb0JBLEtBQXBCO01BQUEsSUFBMkJDLEdBQTNCLEdBQXdELElBQXhELENBQTJCQSxHQUEzQjtNQUFBLElBQWdDQyxVQUFoQyxHQUF3RCxJQUF4RCxDQUFnQ0EsVUFBaEM7TUFBQSxJQUE0Q0MsT0FBNUMsR0FBd0QsSUFBeEQsQ0FBNENBLE9BQTVDO01BQ0EsNENBQW9DRCxVQUFwQyxtQkFBc0RDLE9BQXRELHNGQUV1Q0wsS0FGdkMsY0FFZ0RBLEtBRmhELDZEQUdxQ0MsR0FIckMsY0FHNENBLEdBSDVDLHdHQU1xQ0MsS0FOckMsZUFNK0NBLEtBTi9DLDREQU9tQ0MsR0FQbkMsZUFPMkNBLEdBUDNDO0lBVUQ7Ozs7OztBQUdILCtEQUFlSixHQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTs7SUFFTXRCO0VBQ0osa0JBQVk2QixLQUFaLEVBQW1CQyxLQUFuQixFQUEwQjtJQUFBOztJQUFBLHVDQVFWLENBQ2QsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLE9BQVgsRUFBb0IsT0FBcEIsRUFBNkIsRUFBN0IsRUFBaUMsV0FBakMsQ0FEYyxFQUVkLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEVBQXJCLEVBQXlCLFFBQXpCLENBRmMsRUFHZCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixPQUFoQixFQUF5QixFQUF6QixFQUE2QixRQUE3QixDQUhjLEVBSWQsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsRUFBckIsRUFBeUIsUUFBekIsQ0FKYyxFQUtkLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEVBQXJCLEVBQXlCLFFBQXpCLENBTGMsRUFNZCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixFQUFyQixFQUF5QixRQUF6QixDQU5jLEVBT2QsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsRUFBckIsRUFBeUIsUUFBekIsQ0FQYyxFQVFkLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEVBQXJCLEVBQXlCLFFBQXpCLENBUmMsRUFTZCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixFQUFyQixFQUF5QixRQUF6QixDQVRjLEVBVWQsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsRUFBckIsRUFBeUIsUUFBekIsQ0FWYyxFQVdkLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEVBQXJCLEVBQXlCLFFBQXpCLENBWGMsRUFZZCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixFQUFyQixFQUF5QixPQUF6QixDQVpjLEVBYWQsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsRUFBckIsRUFBeUIsT0FBekIsQ0FiYyxDQVJVOztJQUFBLHdDQXdCVCxDQUNmLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLFFBQXJCLEVBQStCLE1BQS9CLENBRGUsRUFFZixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixRQUFyQixFQUErQixNQUEvQixDQUZlLEVBR2YsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsUUFBckIsRUFBK0IsTUFBL0IsQ0FIZSxFQUlmLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLFFBQXJCLEVBQStCLE1BQS9CLENBSmUsRUFLZixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixRQUFyQixFQUErQixNQUEvQixDQUxlLEVBTWYsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsUUFBckIsRUFBK0IsTUFBL0IsQ0FOZSxFQU9mLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLFFBQXJCLEVBQStCLE1BQS9CLENBUGUsRUFRZixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixRQUFyQixFQUErQixNQUEvQixDQVJlLEVBU2YsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsUUFBckIsRUFBK0IsTUFBL0IsQ0FUZSxFQVVmLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLFFBQXJCLEVBQStCLE1BQS9CLENBVmUsRUFXZixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixRQUFyQixFQUErQixhQUEvQixDQVhlLEVBWWYsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsUUFBckIsRUFBK0IsY0FBL0IsQ0FaZSxDQXhCUzs7SUFBQSx1Q0F1Q1YsQ0FDZCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixRQUFyQixFQUErQixNQUEvQixDQURjLEVBRWQsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsUUFBckIsRUFBK0IsTUFBL0IsQ0FGYyxFQUdkLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLFFBQXJCLEVBQStCLE1BQS9CLENBSGMsRUFJZCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixRQUFyQixFQUErQixNQUEvQixDQUpjLEVBS2QsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsUUFBckIsRUFBK0IsTUFBL0IsQ0FMYyxFQU1kLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLFFBQXJCLEVBQStCLE1BQS9CLENBTmMsRUFPZCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixRQUFyQixFQUErQixNQUEvQixDQVBjLEVBUWQsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsUUFBckIsRUFBK0IsTUFBL0IsQ0FSYyxFQVNkLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLFFBQXJCLEVBQStCLE1BQS9CLENBVGMsRUFVZCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixRQUFyQixFQUErQixXQUEvQixDQVZjLEVBV2QsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixHQUFuQixFQUF3QixHQUF4QixFQUE2QixRQUE3QixFQUF1QyxPQUF2QyxDQVhjLEVBWWQsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixHQUFwQixFQUF5QixHQUF6QixFQUE4QixRQUE5QixFQUF3QyxXQUF4QyxDQVpjLENBdkNVOztJQUFBLHdDQXNEVCxDQUNmLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEVBQXJCLEVBQXlCLGVBQXpCLENBRGUsRUFFZixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixRQUFyQixFQUErQixNQUEvQixDQUZlLEVBR2YsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsUUFBckIsRUFBK0IsTUFBL0IsQ0FIZSxFQUlmLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLFFBQXJCLEVBQStCLE1BQS9CLENBSmUsRUFLZixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixRQUFyQixFQUErQixNQUEvQixDQUxlLEVBTWYsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsUUFBckIsRUFBK0IsTUFBL0IsQ0FOZSxFQU9mLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLFFBQXJCLEVBQStCLE1BQS9CLENBUGUsRUFRZixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixRQUFyQixFQUErQixNQUEvQixDQVJlLEVBU2YsQ0FBQyxHQUFELEVBQU0sT0FBTixFQUFlLEdBQWYsRUFBb0IsR0FBcEIsRUFBeUIsUUFBekIsRUFBbUMsT0FBbkMsQ0FUZSxFQVVmLENBQUMsR0FBRCxFQUFNLE9BQU4sRUFBZSxHQUFmLEVBQW9CLEdBQXBCLEVBQXlCLFFBQXpCLEVBQW1DLFFBQW5DLENBVmUsRUFXZixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixFQUFyQixFQUF5QixPQUF6QixDQVhlLENBdERTOztJQUFBLHVDQW9FVixDQUNkLENBQUMsSUFBRCxFQUFPLEVBQVAsRUFBVyxJQUFYLEVBQWlCLEVBQWpCLEVBQXFCLFVBQXJCLEVBQWlDLFVBQWpDLENBRGMsRUFFZCxDQUFDLFNBQUQsRUFBWSxFQUFaLEVBQWdCLFNBQWhCLEVBQTJCLEVBQTNCLEVBQStCLFNBQS9CLEVBQTBDLGFBQTFDLENBRmMsRUFHZCxDQUFDLFFBQUQsRUFBVyxFQUFYLEVBQWUsUUFBZixFQUF5QixFQUF6QixFQUE2QixhQUE3QixFQUE0QyxTQUE1QyxDQUhjLEVBSWQsQ0FBQyxTQUFELEVBQVksRUFBWixFQUFnQixTQUFoQixFQUEyQixFQUEzQixFQUErQixjQUEvQixFQUErQyxVQUEvQyxDQUpjLEVBS2QsQ0FBQyxRQUFELEVBQVcsRUFBWCxFQUFlLFFBQWYsRUFBeUIsRUFBekIsRUFBNkIsT0FBN0IsRUFBc0MsT0FBdEMsQ0FMYyxFQU1kLENBQUMsU0FBRCxFQUFZLEVBQVosRUFBZ0IsU0FBaEIsRUFBMkIsRUFBM0IsRUFBK0IsZUFBL0IsRUFBZ0QsV0FBaEQsQ0FOYyxFQU9kLENBQUMsUUFBRCxFQUFXLEVBQVgsRUFBZSxRQUFmLEVBQXlCLEVBQXpCLEVBQTZCLGNBQTdCLEVBQTZDLFVBQTdDLENBUGMsQ0FwRVU7O0lBQ3hCLEtBQUtELEtBQUwsR0FBYUEsS0FBYjtJQUNBLEtBQUtDLEtBQUwsR0FBYUEsS0FBYjtJQUNBLEtBQUtDLFdBQUwsR0FBbUJDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsS0FBdUMsS0FBS0wsS0FBL0Q7SUFDQSxLQUFLTSxTQUFMLEdBQWlCLElBQWpCO0lBQ0EsS0FBS0MsR0FBTCxHQUFXLEVBQVg7RUFDRDs7OztXQXdFRCx3QkFBZTtNQUNiLElBQU1DLFlBQVksR0FBRyxLQUFLQyxhQUFMLENBQW1CRixHQUFuQixDQUF1QixVQUFDRyxLQUFEO1FBQUEsa0JBQWVqQiw0Q0FBZixxQkFBc0JpQixLQUF0QjtNQUFBLENBQXZCLENBQXJCO01BQ0EsSUFBTUMsSUFBSSxHQUFHSCxZQUFZLENBQUNELEdBQWIsQ0FBaUIsVUFBQ0ssR0FBRDtRQUFBLE9BQVNBLEdBQUcsQ0FBQ0MsVUFBSixFQUFUO01BQUEsQ0FBakIsQ0FBYjtNQUNBLElBQU1DLFlBQVksR0FBRyxJQUFJckIsNENBQUosQ0FDbkIsU0FEbUIsRUFFbkIsRUFGbUIsRUFHbkIsU0FIbUIsRUFJbkIsRUFKbUIsRUFLbkIsV0FMbUIsRUFNbkIsV0FObUIsQ0FBckI7TUFRQWtCLElBQUksQ0FBQ0ksSUFBTCxDQUFVRCxZQUFZLENBQUNELFVBQWIsRUFBVjtNQUNBLCtDQUFzQ0YsSUFBSSxDQUFDSyxJQUFMLENBQVUsSUFBVixDQUF0QztJQUNEOzs7V0FFRCx5QkFBZ0I7TUFDZCxJQUFNQyxNQUFNLEdBQUcsSUFBSXhCLDRDQUFKLENBQVEsS0FBUixFQUFlLEVBQWYsRUFBbUIsS0FBbkIsRUFBMEIsRUFBMUIsRUFBOEIsS0FBOUIsRUFBcUMsS0FBckMsQ0FBZjtNQUNBLElBQU15QixhQUFhLEdBQUcsS0FBS0MsY0FBTCxDQUFvQlosR0FBcEIsQ0FBd0IsVUFBQ0csS0FBRDtRQUFBLGtCQUFlakIsNENBQWYscUJBQXNCaUIsS0FBdEI7TUFBQSxDQUF4QixDQUF0QjtNQUNBLElBQU1DLElBQUksR0FBR08sYUFBYSxDQUFDWCxHQUFkLENBQWtCLFVBQUNLLEdBQUQ7UUFBQSxPQUFTQSxHQUFHLENBQUNDLFVBQUosRUFBVDtNQUFBLENBQWxCLENBQWI7TUFDQUYsSUFBSSxDQUFDUyxPQUFMLENBQWFILE1BQU0sQ0FBQ0osVUFBUCxFQUFiO01BQ0EsSUFBTVEsUUFBUSxHQUFHLElBQUk1Qiw0Q0FBSixDQUFRLE9BQVIsRUFBaUIsRUFBakIsRUFBcUIsT0FBckIsRUFBOEIsRUFBOUIsRUFBa0MsT0FBbEMsRUFBMkMsT0FBM0MsQ0FBakI7TUFDQWtCLElBQUksQ0FBQ0ksSUFBTCxDQUFVTSxRQUFRLENBQUNSLFVBQVQsRUFBVjtNQUNBLCtDQUFzQ0YsSUFBSSxDQUFDSyxJQUFMLENBQVUsSUFBVixDQUF0QztJQUNEOzs7V0FFRCx3QkFBZTtNQUNiLElBQU1NLFdBQVcsR0FBRyxJQUFJN0IsNENBQUosQ0FDbEIsVUFEa0IsRUFFbEIsRUFGa0IsRUFHbEIsVUFIa0IsRUFJbEIsRUFKa0IsRUFLbEIsVUFMa0IsRUFNbEIsVUFOa0IsQ0FBcEI7TUFRQSxJQUFNOEIsWUFBWSxHQUFHLEtBQUtDLGFBQUwsQ0FBbUJqQixHQUFuQixDQUF1QixVQUFDRyxLQUFEO1FBQUEsa0JBQWVqQiw0Q0FBZixxQkFBc0JpQixLQUF0QjtNQUFBLENBQXZCLENBQXJCO01BQ0EsSUFBTUMsSUFBSSxHQUFHWSxZQUFZLENBQUNoQixHQUFiLENBQWlCLFVBQUNLLEdBQUQ7UUFBQSxPQUFTQSxHQUFHLENBQUNDLFVBQUosRUFBVDtNQUFBLENBQWpCLENBQWI7TUFDQUYsSUFBSSxDQUFDUyxPQUFMLENBQWFFLFdBQVcsQ0FBQ1QsVUFBWixFQUFiO01BQ0EsK0NBQXNDRixJQUFJLENBQUNLLElBQUwsQ0FBVSxJQUFWLENBQXRDO0lBQ0Q7OztXQUVELHlCQUFnQjtNQUNkLElBQU1TLFlBQVksR0FBRyxJQUFJaEMsNENBQUosQ0FDbkIsT0FEbUIsRUFFbkIsRUFGbUIsRUFHbkIsT0FIbUIsRUFJbkIsRUFKbUIsRUFLbkIsWUFMbUIsRUFNbkIsV0FObUIsQ0FBckI7TUFRQSxJQUFNaUMsYUFBYSxHQUFHLElBQUlqQyw0Q0FBSixDQUNwQixPQURvQixFQUVwQixFQUZvQixFQUdwQixPQUhvQixFQUlwQixFQUpvQixFQUtwQixhQUxvQixFQU1wQixZQU5vQixDQUF0QjtNQVFBLElBQU1rQyxhQUFhLEdBQUcsS0FBS0MsY0FBTCxDQUFvQnJCLEdBQXBCLENBQXdCLFVBQUNHLEtBQUQ7UUFBQSxrQkFBZWpCLDRDQUFmLHFCQUFzQmlCLEtBQXRCO01BQUEsQ0FBeEIsQ0FBdEI7TUFDQSxJQUFNQyxJQUFJLEdBQUdnQixhQUFhLENBQUNwQixHQUFkLENBQWtCLFVBQUNLLEdBQUQ7UUFBQSxPQUFTQSxHQUFHLENBQUNDLFVBQUosRUFBVDtNQUFBLENBQWxCLENBQWI7TUFDQUYsSUFBSSxDQUFDUyxPQUFMLENBQWFLLFlBQVksQ0FBQ1osVUFBYixFQUFiO01BQ0FGLElBQUksQ0FBQ0ksSUFBTCxDQUFVVyxhQUFhLENBQUNiLFVBQWQsRUFBVjtNQUNBLCtDQUFzQ0YsSUFBSSxDQUFDSyxJQUFMLENBQVUsSUFBVixDQUF0QztJQUNEOzs7V0FFRCx3QkFBZTtNQUNiLElBQU1hLFlBQVksR0FBRyxLQUFLQyxhQUFMLENBQW1CdkIsR0FBbkIsQ0FBdUIsVUFBQ0csS0FBRDtRQUFBLGtCQUFlakIsNENBQWYscUJBQXNCaUIsS0FBdEI7TUFBQSxDQUF2QixDQUFyQjtNQUNBLElBQU1xQixRQUFRLEdBQUdGLFlBQVksQ0FBQ3RCLEdBQWIsQ0FBaUIsVUFBQ0ssR0FBRDtRQUFBLE9BQVNBLEdBQUcsQ0FBQ0MsVUFBSixFQUFUO01BQUEsQ0FBakIsQ0FBakI7TUFDQSxJQUFNbUIsVUFBVSxvZkFBaEI7TUFRQSwwREFBaURELFFBQVEsQ0FBQ2YsSUFBVCxDQUMvQyxJQUQrQyxDQUFqRCxpQkFFUWdCLFVBRlI7SUFHRDs7O1dBRUQsb0JBQVdDLFNBQVgsRUFBc0I7TUFDcEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtqQyxXQUFqQjtNQUNBLElBQU1rQyxpQkFBaUIsR0FBRzlELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUExQjtNQUNBNkQsaUJBQWlCLENBQUN4RCxTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsVUFBaEM7TUFDQW9ELFNBQVMsQ0FBQ0ksTUFBVixDQUFpQkQsaUJBQWpCO01BQ0FBLGlCQUFpQixDQUFDNUMsU0FBbEIsSUFBK0IsS0FBSzhDLFlBQUwsRUFBL0I7TUFDQUYsaUJBQWlCLENBQUM1QyxTQUFsQixJQUErQixLQUFLK0MsYUFBTCxFQUEvQjtNQUNBSCxpQkFBaUIsQ0FBQzVDLFNBQWxCLElBQStCLEtBQUtnRCxZQUFMLEVBQS9CO01BQ0FKLGlCQUFpQixDQUFDNUMsU0FBbEIsSUFBK0IsS0FBS2lELGFBQUwsRUFBL0I7TUFDQUwsaUJBQWlCLENBQUM1QyxTQUFsQixJQUErQixLQUFLa0QsWUFBTCxFQUEvQjs7TUFDQSxJQUFJLEtBQUt4QyxXQUFMLEtBQXFCLElBQXpCLEVBQStCO1FBQzdCa0MsaUJBQWlCLENBQ2RPLGdCQURILENBQ29CLFFBRHBCLEVBRUdDLE9BRkgsQ0FFVyxVQUFDQyxFQUFEO1VBQUEsT0FBUUEsRUFBRSxDQUFDakUsU0FBSCxDQUFhQyxHQUFiLENBQWlCLFFBQWpCLENBQVI7UUFBQSxDQUZYO1FBR0EsSUFBTWlFLE9BQU8sR0FBR1YsaUJBQWlCLENBQUNPLGdCQUFsQixDQUFtQyxTQUFuQyxDQUFoQjtRQUNBRyxPQUFPLENBQUNGLE9BQVIsQ0FBZ0IsVUFBQ2hDLEdBQUQsRUFBUztVQUN2QkEsR0FBRyxDQUFDbUMsYUFBSixDQUFrQixTQUFsQixFQUE2Qm5FLFNBQTdCLENBQXVDQyxHQUF2QyxDQUEyQyxRQUEzQztRQUNELENBRkQ7TUFHRCxDQVJELE1BUU87UUFDTHVELGlCQUFpQixDQUNkTyxnQkFESCxDQUNvQixRQURwQixFQUVHQyxPQUZILENBRVcsVUFBQ0MsRUFBRDtVQUFBLE9BQVFBLEVBQUUsQ0FBQ2pFLFNBQUgsQ0FBYUMsR0FBYixDQUFpQixRQUFqQixDQUFSO1FBQUEsQ0FGWDs7UUFHQSxJQUFNaUUsUUFBTyxHQUFHVixpQkFBaUIsQ0FBQ08sZ0JBQWxCLENBQW1DLFNBQW5DLENBQWhCOztRQUNBRyxRQUFPLENBQUNGLE9BQVIsQ0FBZ0IsVUFBQ2hDLEdBQUQsRUFBUztVQUN2QkEsR0FBRyxDQUFDbUMsYUFBSixDQUFrQixTQUFsQixFQUE2Qm5FLFNBQTdCLENBQXVDQyxHQUF2QyxDQUEyQyxRQUEzQztRQUNELENBRkQ7TUFHRDtJQUNGOzs7V0FFRCx3QkFBZXVELGlCQUFmLEVBQWtDO01BQ2hDRixPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQyxLQUFLakMsV0FBeEM7O01BQ0EsSUFBSSxLQUFLQSxXQUFMLEtBQXFCLElBQXpCLEVBQStCO1FBQzdCa0MsaUJBQWlCLENBQ2RPLGdCQURILENBQ29CLFFBRHBCLEVBRUdDLE9BRkgsQ0FFVyxVQUFDQyxFQUFEO1VBQUEsT0FBUUEsRUFBRSxDQUFDakUsU0FBSCxDQUFhQyxHQUFiLENBQWlCLFFBQWpCLENBQVI7UUFBQSxDQUZYO1FBR0F1RCxpQkFBaUIsQ0FDZE8sZ0JBREgsQ0FDb0IsUUFEcEIsRUFFR0MsT0FGSCxDQUVXLFVBQUNDLEVBQUQ7VUFBQSxPQUFRQSxFQUFFLENBQUNqRSxTQUFILENBQWFvRSxNQUFiLENBQW9CLFFBQXBCLENBQVI7UUFBQSxDQUZYO1FBR0E3QyxNQUFNLENBQUNDLFlBQVAsQ0FBb0I2QyxPQUFwQixDQUE0QixNQUE1QixFQUFvQyxJQUFwQztRQUNBLEtBQUsvQyxXQUFMLEdBQW1CLElBQW5CO01BQ0QsQ0FURCxNQVNPLElBQUksS0FBS0EsV0FBTCxLQUFxQixJQUF6QixFQUErQjtRQUNwQ2tDLGlCQUFpQixDQUNkTyxnQkFESCxDQUNvQixRQURwQixFQUVHQyxPQUZILENBRVcsVUFBQ0MsRUFBRDtVQUFBLE9BQVFBLEVBQUUsQ0FBQ2pFLFNBQUgsQ0FBYUMsR0FBYixDQUFpQixRQUFqQixDQUFSO1FBQUEsQ0FGWDtRQUdBdUQsaUJBQWlCLENBQ2RPLGdCQURILENBQ29CLFFBRHBCLEVBRUdDLE9BRkgsQ0FFVyxVQUFDQyxFQUFEO1VBQUEsT0FBUUEsRUFBRSxDQUFDakUsU0FBSCxDQUFhb0UsTUFBYixDQUFvQixRQUFwQixDQUFSO1FBQUEsQ0FGWDtRQUdBN0MsTUFBTSxDQUFDQyxZQUFQLENBQW9CNkMsT0FBcEIsQ0FBNEIsTUFBNUIsRUFBb0MsSUFBcEM7UUFDQSxLQUFLL0MsV0FBTCxHQUFtQixJQUFuQjtNQUNEO0lBQ0Y7OztXQUVELDRCQUFtQmtDLGlCQUFuQixFQUFzQztNQUNwQyxJQUFNVSxPQUFPLEdBQUdWLGlCQUFpQixDQUFDTyxnQkFBbEIsQ0FBbUMsU0FBbkMsQ0FBaEI7TUFDQUcsT0FBTyxDQUFDRixPQUFSLENBQWdCLFVBQUNoQyxHQUFELEVBQVM7UUFDdkJBLEdBQUcsQ0FBQytCLGdCQUFKLENBQXFCLFNBQXJCLEVBQWdDQyxPQUFoQyxDQUF3QyxVQUFDQyxFQUFELEVBQVE7VUFDOUNBLEVBQUUsQ0FBQ2pFLFNBQUgsQ0FBYUMsR0FBYixDQUFpQixRQUFqQjtRQUNELENBRkQ7UUFHQStCLEdBQUcsQ0FBQytCLGdCQUFKLENBQXFCLFdBQXJCLEVBQWtDQyxPQUFsQyxDQUEwQyxVQUFDQyxFQUFELEVBQVE7VUFDaERBLEVBQUUsQ0FBQ2pFLFNBQUgsQ0FBYW9FLE1BQWIsQ0FBb0IsUUFBcEI7UUFDRCxDQUZEO01BR0QsQ0FQRDtJQVFEOzs7V0FFRCw2QkFBb0JaLGlCQUFwQixFQUF1QztNQUNyQyxJQUFNVSxPQUFPLEdBQUdWLGlCQUFpQixDQUFDTyxnQkFBbEIsQ0FBbUMsU0FBbkMsQ0FBaEI7TUFDQUcsT0FBTyxDQUFDRixPQUFSLENBQWdCLFVBQUNoQyxHQUFELEVBQVM7UUFDdkJBLEdBQUcsQ0FBQytCLGdCQUFKLENBQXFCLFdBQXJCLEVBQWtDQyxPQUFsQyxDQUEwQyxVQUFDQyxFQUFELEVBQVE7VUFDaERBLEVBQUUsQ0FBQ2pFLFNBQUgsQ0FBYUMsR0FBYixDQUFpQixRQUFqQjtRQUNELENBRkQ7UUFHQStCLEdBQUcsQ0FBQytCLGdCQUFKLENBQXFCLFNBQXJCLEVBQWdDQyxPQUFoQyxDQUF3QyxVQUFDQyxFQUFELEVBQVE7VUFDOUNBLEVBQUUsQ0FBQ2pFLFNBQUgsQ0FBYW9FLE1BQWIsQ0FBb0IsUUFBcEI7UUFDRCxDQUZEO01BR0QsQ0FQRDtJQVFEOzs7V0FFRCwwQkFBaUI7TUFBQTs7TUFDZixJQUFNRSxRQUFRLEdBQUc1RSxRQUFRLENBQUN5RSxhQUFULENBQXVCLFdBQXZCLENBQWpCO01BQ0FiLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZSxRQUFaO01BRUE1RSxRQUFRLENBQUM2RSxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFDQyxDQUFELEVBQU87UUFDMUMsS0FBSSxDQUFDN0MsR0FBTCxDQUFTNkMsQ0FBQyxDQUFDQyxJQUFYLElBQW1CLElBQW5COztRQUNBLElBQUlELENBQUMsQ0FBQ0MsSUFBRixLQUFXLEtBQWYsRUFBc0I7VUFDcEJELENBQUMsQ0FBQ0UsY0FBRjtVQUNBLElBQU1DLFFBQVEsR0FBR2pGLFFBQVEsQ0FBQ3lFLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBakI7VUFDQSxJQUFNUyxLQUFLLEdBQUdELFFBQVEsQ0FBQ0UsY0FBdkI7VUFDQSxJQUFNQyxHQUFHLEdBQUdILFFBQVEsQ0FBQ0ksWUFBckI7VUFDQUosUUFBUSxDQUFDSyxLQUFULEdBQ0VMLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlQyxTQUFmLENBQXlCLENBQXpCLEVBQTRCTCxLQUE1QixJQUNBLElBREEsR0FFQUQsUUFBUSxDQUFDSyxLQUFULENBQWVDLFNBQWYsQ0FBeUJILEdBQXpCLENBSEY7VUFJQUgsUUFBUSxDQUFDRSxjQUFULEdBQTBCRixRQUFRLENBQUNJLFlBQVQsR0FBd0JILEtBQUssR0FBRyxDQUExRDtRQUNEOztRQUVELElBQUlKLENBQUMsQ0FBQ1UsZ0JBQUYsQ0FBbUIsVUFBbkIsQ0FBSixFQUFvQztVQUNsQyxLQUFJLENBQUNDLG1CQUFMLENBQXlCekYsUUFBUSxDQUFDeUUsYUFBVCxDQUF1QixXQUF2QixDQUF6QjtRQUNEOztRQUVELElBQUlLLENBQUMsQ0FBQ1UsZ0JBQUYsQ0FBbUIsT0FBbkIsQ0FBSixFQUFpQztVQUMvQixLQUFJLENBQUNDLG1CQUFMLENBQXlCekYsUUFBUSxDQUFDeUUsYUFBVCxDQUF1QixXQUF2QixDQUF6QjtRQUNEOztRQUVELElBQUksS0FBSSxDQUFDeEMsR0FBTCxDQUFTLGFBQVQsS0FBMkIsS0FBSSxDQUFDQSxHQUFMLENBQVMsT0FBVCxDQUEvQixFQUFrRDtVQUNoRCxLQUFJLENBQUN5RCxjQUFMLENBQW9CMUYsUUFBUSxDQUFDeUUsYUFBVCxDQUF1QixXQUF2QixDQUFwQjs7VUFDQXpFLFFBQVEsQ0FBQzJGLGNBQVQsQ0FBd0JiLENBQUMsQ0FBQ0MsSUFBMUIsRUFBZ0N6RSxTQUFoQyxDQUEwQ29FLE1BQTFDLENBQWlELFFBQWpEO1FBQ0Q7O1FBRUQxRSxRQUFRLENBQUMyRixjQUFULENBQXdCYixDQUFDLENBQUNDLElBQTFCLEVBQWdDekUsU0FBaEMsQ0FBMENDLEdBQTFDLENBQThDLFFBQTlDO01BQ0QsQ0E1QkQ7TUE4QkFQLFFBQVEsQ0FBQzZFLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUNDLENBQUQsRUFBTztRQUN4QyxLQUFJLENBQUM3QyxHQUFMLENBQVM2QyxDQUFDLENBQUNDLElBQVgsSUFBbUIsS0FBbkI7O1FBQ0EsSUFBSSxDQUFDRCxDQUFDLENBQUNVLGdCQUFGLENBQW1CLFVBQW5CLENBQUwsRUFBcUM7VUFDbkMsS0FBSSxDQUFDSSxrQkFBTCxDQUF3QjVGLFFBQVEsQ0FBQ3lFLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBeEI7UUFDRDs7UUFFRCxJQUFJLENBQUNLLENBQUMsQ0FBQ1UsZ0JBQUYsQ0FBbUIsVUFBbkIsQ0FBTCxFQUFxQztVQUNuQyxLQUFJLENBQUNJLGtCQUFMLENBQXdCNUYsUUFBUSxDQUFDeUUsYUFBVCxDQUF1QixXQUF2QixDQUF4QjtRQUNEOztRQUVEekUsUUFBUSxDQUFDMkYsY0FBVCxDQUF3QmIsQ0FBQyxDQUFDQyxJQUExQixFQUFnQ3pFLFNBQWhDLENBQTBDb0UsTUFBMUMsQ0FBaUQsUUFBakQ7TUFDRCxDQVhEO01BYUFFLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsVUFBQ0MsQ0FBRCxFQUFPO1FBQzVDbEIsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtRQUNBLElBQUlnQyxJQUFJLEdBQUdmLENBQUMsQ0FBQ2dCLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkYsSUFBNUI7UUFDQSxJQUFNdkQsR0FBRyxHQUNQd0MsQ0FBQyxDQUFDZ0IsTUFBRixDQUFTRSxPQUFULENBQWlCLGdCQUFqQixLQUFzQ2xCLENBQUMsQ0FBQ2dCLE1BQUYsQ0FBU0UsT0FBVCxDQUFpQixZQUFqQixDQUR4Qzs7UUFFQSxJQUFJLENBQUNILElBQUwsRUFBVztVQUNULElBQU1JLElBQUksR0FBRzNELEdBQUcsQ0FBQ21DLGFBQUosQ0FBa0IsTUFBbEIsQ0FBYjtVQUNBb0IsSUFBSSxHQUFHSSxJQUFJLENBQUNGLE9BQUwsQ0FBYUYsSUFBcEI7VUFDQWpDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZ0MsSUFBWjtRQUNEOztRQUNELElBQU1aLFFBQVEsR0FBR2pGLFFBQVEsQ0FBQ3lFLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBakI7UUFDQSxJQUFNUyxLQUFLLEdBQUdELFFBQVEsQ0FBQ0UsY0FBdkI7UUFDQSxJQUFNQyxHQUFHLEdBQUdILFFBQVEsQ0FBQ0ksWUFBckI7O1FBQ0EsSUFBTWEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0wsSUFBRCxFQUFVO1VBQ3hCWixRQUFRLENBQUNLLEtBQVQsR0FDRUwsUUFBUSxDQUFDSyxLQUFULENBQWVDLFNBQWYsQ0FBeUIsQ0FBekIsRUFBNEJMLEtBQTVCLElBQ0FXLElBREEsR0FFQVosUUFBUSxDQUFDSyxLQUFULENBQWVDLFNBQWYsQ0FBeUJILEdBQXpCLENBSEY7VUFJQUgsUUFBUSxDQUFDRSxjQUFULEdBQTBCRixRQUFRLENBQUNJLFlBQVQsR0FBd0JILEtBQUssR0FBRyxDQUExRDtRQUNELENBTkQ7O1FBT0E1QyxHQUFHLENBQUNoQyxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsUUFBbEI7O1FBQ0EsSUFBSStCLEdBQUcsQ0FBQzZELEVBQUosS0FBVyxPQUFmLEVBQXdCO1VBQ3RCRCxPQUFPLENBQUMsR0FBRCxDQUFQO1FBQ0QsQ0FGRCxNQUVPLElBQUk1RCxHQUFHLENBQUM2RCxFQUFKLEtBQVcsS0FBZixFQUFzQjtVQUMzQkQsT0FBTyxDQUFDLElBQUQsQ0FBUDtRQUNELENBRk0sTUFFQSxJQUFJNUQsR0FBRyxDQUFDNkQsRUFBSixLQUFXLE9BQWYsRUFBd0I7VUFDN0JELE9BQU8sQ0FBQyxJQUFELENBQVA7UUFDRCxDQUZNLE1BRUE7VUFDTEEsT0FBTyxDQUFDTCxJQUFJLEdBQUdBLElBQUgsR0FBVSxFQUFmLENBQVA7UUFDRDtNQUNGLENBOUJEO01BZ0NBakIsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFDQyxDQUFELEVBQU87UUFDMUMsSUFBTXhDLEdBQUcsR0FDUHdDLENBQUMsQ0FBQ2dCLE1BQUYsQ0FBU0UsT0FBVCxDQUFpQixnQkFBakIsS0FBc0NsQixDQUFDLENBQUNnQixNQUFGLENBQVNFLE9BQVQsQ0FBaUIsWUFBakIsQ0FEeEM7UUFFQTFELEdBQUcsQ0FBQ2hDLFNBQUosQ0FBY29FLE1BQWQsQ0FBcUIsUUFBckI7TUFDRCxDQUpEO0lBS0Q7Ozs7OztBQUdILCtEQUFlN0UsUUFBZjs7Ozs7Ozs7Ozs7QUNwVUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDLG9IQUFvSCxpREFBaUQ7V0FDcks7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzdCQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUEsOENBQThDOztXQUU5QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLG1DQUFtQztXQUNwRTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbERBO1VBQ0E7VUFDQTtVQUNBLG9HQUFvRyw2RUFBNkU7VUFDakwsOEhBQThILDJDQUEyQztVQUN6SyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvS2V5LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvS2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3N0eWxlcy5jc3M/MzczOSIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5jc3MnO1xuaW1wb3J0IEtleWJvYXJkIGZyb20gJy4vbW9kdWxlcy9LZXlib2FyZCc7XG5cbmNvbnN0IGtleWJvYXJkID0gbmV3IEtleWJvYXJkKCdFTicsICdSVScpO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5jb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbnRleHRhcmVhLnNldEF0dHJpYnV0ZSgnYXV0b2ZvY3VzJywgJycpO1xucm9vdC5jbGFzc0xpc3QuYWRkKCdyb290Jyk7XG5sb2dvLnNyYyA9ICcuL2Zhdmljb24uaWNvJztcbmxvZ28uc3R5bGUud2lkdGggPSAnODBweCc7XG50ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCd0ZXh0YXJlYScpO1xuaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG5oZWFkaW5nLnRleHRDb250ZW50ID0gJ1JTIFNjaG9vbCBWaXJ0dWFsIEtleWJvYXJkJztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XG5yb290LmFwcGVuZENoaWxkKGxvZ28pO1xucm9vdC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbnJvb3QuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuXG5rZXlib2FyZC5pbml0UmVuZGVyKHJvb3QpO1xua2V5Ym9hcmQubGlzdGVuS2V5Ym9hcmQoKTtcblxuY29uc3QgZm9vdGVySFRNTCA9IGA8cD7QrdGC0LAg0LrQu9Cw0LLQuNCw0YLRg9GA0LAg0YHQtNC10LvQsNC90LAg0L3QsCBNYWNPUzwvcD4gPHA+0JTQu9GPINC/0LXRgNC10LrQu9GO0YfQtdC90LjRjyDRj9C30YvQutCwINC60L7QvNCx0LjQvdCw0YbQuNGPOiDQu9C10LLQsNGPIGNvbnRyb2wgKyAgU3BhY2U8L3A+YDtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuZm9vdGVyLmlubmVySFRNTCA9IGZvb3RlckhUTUw7XG5yb290LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4iLCJjbGFzcyBLZXkge1xuICBjb25zdHJ1Y3RvcihhRG93biwgYVVwLCBiRG93biwgYlVwLCBleHRyYUNsYXNzLCBrZXlDb2RlKSB7XG4gICAgdGhpcy5hRG93biA9IGFEb3duO1xuICAgIHRoaXMuYVVwID0gYVVwO1xuICAgIHRoaXMuYkRvd24gPSBiRG93bjtcbiAgICB0aGlzLmJVcCA9IGJVcDtcbiAgICB0aGlzLmV4dHJhQ2xhc3MgPSBleHRyYUNsYXNzO1xuICAgIHRoaXMua2V5Q29kZSA9IGtleUNvZGU7XG4gIH1cblxuICBnZXRLZXlIVE1MKCkge1xuICAgIGNvbnN0IHsgYURvd24sIGFVcCwgYkRvd24sIGJVcCwgZXh0cmFDbGFzcywga2V5Q29kZSB9ID0gdGhpcztcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJrZXlib2FyZF9fa2V5ICR7ZXh0cmFDbGFzc31cIiBpZD0ke2tleUNvZGV9PlxuICAgICAgPGRpdiBjbGFzcyA9ICdsYW5nQSc+XG4gICAgICAgIDxzcGFuIGNsYXNzPSdjYXNlRG93bicgZGF0YS1jaGFyPSR7YURvd259PiR7YURvd259PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz0nY2FzZVVwJyBkYXRhLWNoYXI9JHthVXB9PiR7YVVwfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcyA9ICdsYW5nQic+XG4gICAgICA8c3BhbiBjbGFzcz0nY2FzZURvd24nIGRhdGEtY2hhcj0ke2JEb3dufT4gJHtiRG93bn0gPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9J2Nhc2VVcCcgZGF0YS1jaGFyPSR7YlVwfT4gJHtiVXB9IDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5O1xuIiwiaW1wb3J0IEtleSBmcm9tICcuL0tleSc7XG5cbmNsYXNzIEtleWJvYXJkIHtcbiAgY29uc3RydWN0b3IobGFuZ0EsIGxhbmdCKSB7XG4gICAgdGhpcy5sYW5nQSA9IGxhbmdBO1xuICAgIHRoaXMubGFuZ0IgPSBsYW5nQjtcbiAgICB0aGlzLmN1cnJlbnRMYW5nID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nJykgfHwgdGhpcy5sYW5nQTtcbiAgICB0aGlzLmxvd2VyQ2FzZSA9IHRydWU7XG4gICAgdGhpcy5tYXAgPSB7fTtcbiAgfVxuXG4gIGZpcnN0Um93Q2hhcnMgPSBbXG4gICAgWyfCpycsICfCsScsICcmIzYyOycsICcmIzYwOycsICcnLCAnQmFja3F1b3RlJ10sXG4gICAgWycxJywgJyEnLCAnMScsICchJywgJycsICdEaWdpdDEnXSxcbiAgICBbJzInLCAnQCcsICcyJywgJyYjMzQ7JywgJycsICdEaWdpdDInXSxcbiAgICBbJzMnLCAnIycsICczJywgJ+KElicsICcnLCAnRGlnaXQzJ10sXG4gICAgWyc0JywgJyQnLCAnNCcsICclJywgJycsICdEaWdpdDQnXSxcbiAgICBbJzUnLCAnJScsICc1JywgJzonLCAnJywgJ0RpZ2l0NSddLFxuICAgIFsnNicsICdeJywgJzYnLCAnLCcsICcnLCAnRGlnaXQ2J10sXG4gICAgWyc3JywgJyYnLCAnNycsICcuJywgJycsICdEaWdpdDcnXSxcbiAgICBbJzgnLCAnKicsICc4JywgJzsnLCAnJywgJ0RpZ2l0OCddLFxuICAgIFsnOScsICcoJywgJzknLCAnKCcsICcnLCAnRGlnaXQ5J10sXG4gICAgWycwJywgJyknLCAnMCcsICcpJywgJycsICdEaWdpdDAnXSxcbiAgICBbJy0nLCAnXycsICctJywgJ18nLCAnJywgJ01pbnVzJ10sXG4gICAgWyc9JywgJysnLCAnPScsICcrJywgJycsICdFcXVhbCddLFxuICBdO1xuXG4gIHNlY29uZFJvd0NoYXJzID0gW1xuICAgIFsncScsICdRJywgJ9C5JywgJ9CZJywgJ2xldHRlcicsICdLZXlRJ10sXG4gICAgWyd3JywgJ1cnLCAn0YYnLCAn0KYnLCAnbGV0dGVyJywgJ0tleVcnXSxcbiAgICBbJ2UnLCAnRScsICfRgycsICfQoycsICdsZXR0ZXInLCAnS2V5RSddLFxuICAgIFsncicsICdSJywgJ9C6JywgJ9CaJywgJ2xldHRlcicsICdLZXlSJ10sXG4gICAgWyd0JywgJ1QnLCAn0LUnLCAn0JUnLCAnbGV0dGVyJywgJ0tleVQnXSxcbiAgICBbJ3knLCAnWScsICfQvScsICfQnScsICdsZXR0ZXInLCAnS2V5WSddLFxuICAgIFsndScsICdVJywgJ9CzJywgJ9CTJywgJ2xldHRlcicsICdLZXlVJ10sXG4gICAgWydpJywgJ0knLCAn0YgnLCAn0KgnLCAnbGV0dGVyJywgJ0tleUknXSxcbiAgICBbJ28nLCAnTycsICfRiScsICfQqScsICdsZXR0ZXInLCAnS2V5TyddLFxuICAgIFsncCcsICdQJywgJ9C3JywgJ9CXJywgJ2xldHRlcicsICdLZXlQJ10sXG4gICAgWydbJywgJ3snLCAn0YUnLCAn0KUnLCAnbGV0dGVyJywgJ0JyYWNrZXRMZWZ0J10sXG4gICAgWyddJywgJ30nLCAn0YonLCAn0KonLCAnbGV0dGVyJywgJ0JyYWNrZXRSaWdodCddLFxuICBdO1xuXG4gIHRoaXJkUm93Q2hhcnMgPSBbXG4gICAgWydhJywgJ0EnLCAn0YQnLCAn0KQnLCAnbGV0dGVyJywgJ0tleUEnXSxcbiAgICBbJ3MnLCAnUycsICfRiycsICfQqycsICdsZXR0ZXInLCAnS2V5UyddLFxuICAgIFsnZCcsICdEJywgJ9CyJywgJ9CSJywgJ2xldHRlcicsICdLZXlEJ10sXG4gICAgWydmJywgJ0YnLCAn0LAnLCAn0JAnLCAnbGV0dGVyJywgJ0tleUYnXSxcbiAgICBbJ2cnLCAnRycsICfQvycsICfQnycsICdsZXR0ZXInLCAnS2V5RyddLFxuICAgIFsnaCcsICdIJywgJ9GAJywgJ9CgJywgJ2xldHRlcicsICdLZXlIJ10sXG4gICAgWydqJywgJ0onLCAn0L4nLCAn0J4nLCAnbGV0dGVyJywgJ0tleUonXSxcbiAgICBbJ2snLCAnSycsICfQuycsICfQmycsICdsZXR0ZXInLCAnS2V5SyddLFxuICAgIFsnbCcsICdMJywgJ9C0JywgJ9CUJywgJ2xldHRlcicsICdLZXlMJ10sXG4gICAgWyc7JywgJzonLCAn0LYnLCAn0JYnLCAnbGV0dGVyJywgJ1NlbWljb2xvbiddLFxuICAgIFsnJiMzOTsnLCAnJiMzNDsnLCAn0Y0nLCAn0K0nLCAnbGV0dGVyJywgJ1F1b3RlJ10sXG4gICAgWycmIzkyOycsICcmIzEyNDsnLCAn0ZEnLCAn0IEnLCAnbGV0dGVyJywgJ0JhY2tzbGFzaCddLFxuICBdO1xuXG4gIGZvdXJ0aFJvd0NoYXJzID0gW1xuICAgIFsnYCcsICd+JywgJ10nLCAnWycsICcnLCAnSW50bEJhY2tzbGFzaCddLFxuICAgIFsneicsICdaJywgJ9GPJywgJ9CvJywgJ2xldHRlcicsICdLZXlaJ10sXG4gICAgWyd4JywgJ1gnLCAn0YcnLCAn0KcnLCAnbGV0dGVyJywgJ0tleVgnXSxcbiAgICBbJ2MnLCAnQycsICfRgScsICfQoScsICdsZXR0ZXInLCAnS2V5QyddLFxuICAgIFsndicsICdWJywgJ9C8JywgJ9CcJywgJ2xldHRlcicsICdLZXlWJ10sXG4gICAgWydiJywgJ0InLCAn0LgnLCAn0JgnLCAnbGV0dGVyJywgJ0tleUInXSxcbiAgICBbJ24nLCAnTicsICfRgicsICfQoicsICdsZXR0ZXInLCAnS2V5TiddLFxuICAgIFsnbScsICdNJywgJ9GMJywgJ9CsJywgJ2xldHRlcicsICdLZXlNJ10sXG4gICAgWycsJywgJyYjNjA7JywgJ9CxJywgJ9CRJywgJ2xldHRlcicsICdDb21tYSddLFxuICAgIFsnLicsICcmIzYyOycsICfRjicsICfQricsICdsZXR0ZXInLCAnUGVyaW9kJ10sXG4gICAgWycvJywgJz8nLCAnLycsICc/JywgJycsICdTbGFzaCddLFxuICBdO1xuXG4gIGZpZnRoUm93Q2hhcnMgPSBbXG4gICAgWydGbicsICcnLCAnRm4nLCAnJywgJ2Z1bmN0aW9uJywgJ0Z1bmN0aW9uJ10sXG4gICAgWydjb250cm9sJywgJycsICdjb250cm9sJywgJycsICdjb250cm9sJywgJ0NvbnRyb2xMZWZ0J10sXG4gICAgWydvcHRpb24nLCAnJywgJ29wdGlvbicsICcnLCAnb3B0aW9uLWxlZnQnLCAnQWx0TGVmdCddLFxuICAgIFsnY29tbWFuZCcsICcnLCAnY29tbWFuZCcsICcnLCAnY29tbWFuZC1sZWZ0JywgJ01ldGFMZWZ0J10sXG4gICAgWycmIzE2MDsnLCAnJywgJyYjMTYwOycsICcnLCAnc3BhY2UnLCAnU3BhY2UnXSxcbiAgICBbJ2NvbW1hbmQnLCAnJywgJ2NvbW1hbmQnLCAnJywgJ2NvbW1hbmQtcmlnaHQnLCAnTWV0YVJpZ2h0J10sXG4gICAgWydvcHRpb24nLCAnJywgJ29wdGlvbicsICcnLCAnb3B0aW9uLXJpZ2h0JywgJ0FsdFJpZ2h0J10sXG4gIF07XG5cbiAgZmlyc3RSb3dIVE1MKCkge1xuICAgIGNvbnN0IGZpcnN0Um93S2V5cyA9IHRoaXMuZmlyc3RSb3dDaGFycy5tYXAoKGNoYXJzKSA9PiBuZXcgS2V5KC4uLmNoYXJzKSk7XG4gICAgY29uc3Qga2V5cyA9IGZpcnN0Um93S2V5cy5tYXAoKGtleSkgPT4ga2V5LmdldEtleUhUTUwoKSk7XG4gICAgY29uc3Qga2V5QkFDS1NQQUNFID0gbmV3IEtleShcbiAgICAgICcmIzkwMDM7JyxcbiAgICAgICcnLFxuICAgICAgJyYjOTAwMzsnLFxuICAgICAgJycsXG4gICAgICAnYmFja3NwYWNlJyxcbiAgICAgICdCYWNrc3BhY2UnXG4gICAgKTtcbiAgICBrZXlzLnB1c2goa2V5QkFDS1NQQUNFLmdldEtleUhUTUwoKSk7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzID1cImtleWJvYXJkX19yb3dcIj4ke2tleXMuam9pbignXFxuJyl9PC9kaXY+YDtcbiAgfVxuXG4gIHNlY29uZFJvd0hUTUwoKSB7XG4gICAgY29uc3Qga2V5VEFCID0gbmV3IEtleSgnVGFiJywgJycsICdUYWInLCAnJywgJ3RhYicsICdUYWInKTtcbiAgICBjb25zdCBzZWNvbmRSb3dLZXlzID0gdGhpcy5zZWNvbmRSb3dDaGFycy5tYXAoKGNoYXJzKSA9PiBuZXcgS2V5KC4uLmNoYXJzKSk7XG4gICAgY29uc3Qga2V5cyA9IHNlY29uZFJvd0tleXMubWFwKChrZXkpID0+IGtleS5nZXRLZXlIVE1MKCkpO1xuICAgIGtleXMudW5zaGlmdChrZXlUQUIuZ2V0S2V5SFRNTCgpKTtcbiAgICBjb25zdCBrZXlFTlRFUiA9IG5ldyBLZXkoJ0VudGVyJywgJycsICdFbnRlcicsICcnLCAnZW50ZXInLCAnRW50ZXInKTtcbiAgICBrZXlzLnB1c2goa2V5RU5URVIuZ2V0S2V5SFRNTCgpKTtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3MgPVwia2V5Ym9hcmRfX3Jvd1wiPiR7a2V5cy5qb2luKCdcXG4nKX08L2Rpdj5gO1xuICB9XG5cbiAgdGhpcmRSb3dIVE1MKCkge1xuICAgIGNvbnN0IGtleUNBUFNMT0NLID0gbmV3IEtleShcbiAgICAgICdDYXBzTG9jaycsXG4gICAgICAnJyxcbiAgICAgICdDYXBzTG9jaycsXG4gICAgICAnJyxcbiAgICAgICdjYXBzbG9jaycsXG4gICAgICAnQ2Fwc0xvY2snXG4gICAgKTtcbiAgICBjb25zdCB0aGlyZFJvd0tleXMgPSB0aGlzLnRoaXJkUm93Q2hhcnMubWFwKChjaGFycykgPT4gbmV3IEtleSguLi5jaGFycykpO1xuICAgIGNvbnN0IGtleXMgPSB0aGlyZFJvd0tleXMubWFwKChrZXkpID0+IGtleS5nZXRLZXlIVE1MKCkpO1xuICAgIGtleXMudW5zaGlmdChrZXlDQVBTTE9DSy5nZXRLZXlIVE1MKCkpO1xuICAgIHJldHVybiBgPGRpdiBjbGFzcyA9XCJrZXlib2FyZF9fcm93XCI+JHtrZXlzLmpvaW4oJ1xcbicpfTwvZGl2PmA7XG4gIH1cblxuICBmb3VydGhSb3dIVE1MKCkge1xuICAgIGNvbnN0IGtleVNoaWZ0TGVmdCA9IG5ldyBLZXkoXG4gICAgICAnU2hpZnQnLFxuICAgICAgJycsXG4gICAgICAnU2hpZnQnLFxuICAgICAgJycsXG4gICAgICAnc2hpZnQtbGVmdCcsXG4gICAgICAnU2hpZnRMZWZ0J1xuICAgICk7XG4gICAgY29uc3Qga2V5U2hpZnRSaWdodCA9IG5ldyBLZXkoXG4gICAgICAnU2hpZnQnLFxuICAgICAgJycsXG4gICAgICAnU2hpZnQnLFxuICAgICAgJycsXG4gICAgICAnc2hpZnQtcmlnaHQnLFxuICAgICAgJ1NoaWZ0UmlnaHQnXG4gICAgKTtcbiAgICBjb25zdCBmb3VydGhSb3dLZXlzID0gdGhpcy5mb3VydGhSb3dDaGFycy5tYXAoKGNoYXJzKSA9PiBuZXcgS2V5KC4uLmNoYXJzKSk7XG4gICAgY29uc3Qga2V5cyA9IGZvdXJ0aFJvd0tleXMubWFwKChrZXkpID0+IGtleS5nZXRLZXlIVE1MKCkpO1xuICAgIGtleXMudW5zaGlmdChrZXlTaGlmdExlZnQuZ2V0S2V5SFRNTCgpKTtcbiAgICBrZXlzLnB1c2goa2V5U2hpZnRSaWdodC5nZXRLZXlIVE1MKCkpO1xuICAgIHJldHVybiBgPGRpdiBjbGFzcyA9XCJrZXlib2FyZF9fcm93XCI+JHtrZXlzLmpvaW4oJ1xcbicpfTwvZGl2PmA7XG4gIH1cblxuICBmaWZ0aFJvd0hUTUwoKSB7XG4gICAgY29uc3QgZmlmdGhSb3dLZXlzID0gdGhpcy5maWZ0aFJvd0NoYXJzLm1hcCgoY2hhcnMpID0+IG5ldyBLZXkoLi4uY2hhcnMpKTtcbiAgICBjb25zdCBrZXlzSFRNTCA9IGZpZnRoUm93S2V5cy5tYXAoKGtleSkgPT4ga2V5LmdldEtleUhUTUwoKSk7XG4gICAgY29uc3QgYXJyb3dzSFRNTCA9IGA8ZGl2IGNsYXNzPVwiYXJyb3dzXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImFycm93c19fbGVmdCBhcnJvdy1rZXlcIiBpZD1cIkFycm93TGVmdFwiIGRhdGEtY2hhcj1cIiYjOTY2NDtcIj4mIzk2NjQ7PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cImFycm93c19fY2VudGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcnJvd3NfX3VwIGFycm93LWtleVwiIGlkPVwiQXJyb3dVcFwiIGRhdGEtY2hhcj1cIiYjOTY1MDtcIj4mIzk2NTA7PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYXJyb3dzX19kb3duIGFycm93LWtleVwiIGlkPVwiQXJyb3dEb3duXCIgZGF0YS1jaGFyPVwiJiM5NjYwO1wiPiYjOTY2MDs8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYXJyb3dzX19yaWdodCBhcnJvdy1rZXlcIiBpZD1cIkFycm93UmlnaHRcIiBkYXRhLWNoYXI9XCImIzk2NTQ7XCI+ICYjOTY1NDs8L3NwYW4+XG4gICAgICA8L2Rpdj5gO1xuICAgIHJldHVybiBgPGRpdiBjbGFzcyA9XCJrZXlib2FyZF9fcm93IGJvdHRvbS1yb3dcIj4ke2tleXNIVE1MLmpvaW4oXG4gICAgICAnXFxuJ1xuICAgICl9IFxcbiAke2Fycm93c0hUTUx9PC9kaXY+YDtcbiAgfVxuXG4gIGluaXRSZW5kZXIoY29udGFpbmVyKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50TGFuZyk7XG4gICAgY29uc3Qga2V5Ym9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBrZXlib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZCcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoa2V5Ym9hcmRDb250YWluZXIpO1xuICAgIGtleWJvYXJkQ29udGFpbmVyLmlubmVySFRNTCArPSB0aGlzLmZpcnN0Um93SFRNTCgpO1xuICAgIGtleWJvYXJkQ29udGFpbmVyLmlubmVySFRNTCArPSB0aGlzLnNlY29uZFJvd0hUTUwoKTtcbiAgICBrZXlib2FyZENvbnRhaW5lci5pbm5lckhUTUwgKz0gdGhpcy50aGlyZFJvd0hUTUwoKTtcbiAgICBrZXlib2FyZENvbnRhaW5lci5pbm5lckhUTUwgKz0gdGhpcy5mb3VydGhSb3dIVE1MKCk7XG4gICAga2V5Ym9hcmRDb250YWluZXIuaW5uZXJIVE1MICs9IHRoaXMuZmlmdGhSb3dIVE1MKCk7XG4gICAgaWYgKHRoaXMuY3VycmVudExhbmcgPT09ICdFTicpIHtcbiAgICAgIGtleWJvYXJkQ29udGFpbmVyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubGFuZ0InKVxuICAgICAgICAuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKTtcbiAgICAgIGNvbnN0IGxldHRlcnMgPSBrZXlib2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcubGV0dGVyJyk7XG4gICAgICBsZXR0ZXJzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvcignLmNhc2VVcCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleWJvYXJkQ29udGFpbmVyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubGFuZ0EnKVxuICAgICAgICAuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKTtcbiAgICAgIGNvbnN0IGxldHRlcnMgPSBrZXlib2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcubGV0dGVyJyk7XG4gICAgICBsZXR0ZXJzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBrZXkucXVlcnlTZWxlY3RvcignLmNhc2VVcCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlTGFuZ3VhZ2Uoa2V5Ym9hcmRDb250YWluZXIpIHtcbiAgICBjb25zb2xlLmxvZygndGhpcy5jdXJyZW50TGFuZyA9PicsIHRoaXMuY3VycmVudExhbmcpO1xuICAgIGlmICh0aGlzLmN1cnJlbnRMYW5nID09PSAnRU4nKSB7XG4gICAgICBrZXlib2FyZENvbnRhaW5lclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLmxhbmdBJylcbiAgICAgICAgLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSk7XG4gICAgICBrZXlib2FyZENvbnRhaW5lclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLmxhbmdCJylcbiAgICAgICAgLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKSk7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmcnLCAnUlUnKTtcbiAgICAgIHRoaXMuY3VycmVudExhbmcgPSAnUlUnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50TGFuZyA9PT0gJ1JVJykge1xuICAgICAga2V5Ym9hcmRDb250YWluZXJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5nQicpXG4gICAgICAgIC5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykpO1xuICAgICAga2V5Ym9hcmRDb250YWluZXJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5nQScpXG4gICAgICAgIC5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJykpO1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5nJywgJ0VOJyk7XG4gICAgICB0aGlzLmN1cnJlbnRMYW5nID0gJ0VOJztcbiAgICB9XG4gIH1cblxuICB0b0xvd2VyQ2FzZUxldHRlcnMoa2V5Ym9hcmRDb250YWluZXIpIHtcbiAgICBjb25zdCBsZXR0ZXJzID0ga2V5Ym9hcmRDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmxldHRlcicpO1xuICAgIGxldHRlcnMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmNhc2VVcCcpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfSk7XG4gICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmNhc2VEb3duJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvVXBwZXJzQ2FzZUxldHRlcnMoa2V5Ym9hcmRDb250YWluZXIpIHtcbiAgICBjb25zdCBsZXR0ZXJzID0ga2V5Ym9hcmRDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmxldHRlcicpO1xuICAgIGxldHRlcnMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBrZXkucXVlcnlTZWxlY3RvckFsbCgnLmNhc2VEb3duJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB9KTtcbiAgICAgIGtleS5xdWVyeVNlbGVjdG9yQWxsKCcuY2FzZVVwJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGxpc3RlbktleWJvYXJkKCkge1xuICAgIGNvbnN0IGtleWJwYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkJyk7XG4gICAgY29uc29sZS5sb2coa2V5YnBhcmQpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICB0aGlzLm1hcFtlLmNvZGVdID0gdHJ1ZTtcbiAgICAgIGlmIChlLmNvZGUgPT09ICdUYWInKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dGFyZWEnKTtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0ZXh0QXJlYS5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgY29uc3QgZW5kID0gdGV4dEFyZWEuc2VsZWN0aW9uRW5kO1xuICAgICAgICB0ZXh0QXJlYS52YWx1ZSA9XG4gICAgICAgICAgdGV4dEFyZWEudmFsdWUuc3Vic3RyaW5nKDAsIHN0YXJ0KSArXG4gICAgICAgICAgJ1xcdCcgK1xuICAgICAgICAgIHRleHRBcmVhLnZhbHVlLnN1YnN0cmluZyhlbmQpO1xuICAgICAgICB0ZXh0QXJlYS5zZWxlY3Rpb25TdGFydCA9IHRleHRBcmVhLnNlbGVjdGlvbkVuZCA9IHN0YXJ0ICsgMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUuZ2V0TW9kaWZpZXJTdGF0ZSgnQ2Fwc0xvY2snKSkge1xuICAgICAgICB0aGlzLnRvVXBwZXJzQ2FzZUxldHRlcnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkJykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS5nZXRNb2RpZmllclN0YXRlKCdTaGlmdCcpKSB7XG4gICAgICAgIHRoaXMudG9VcHBlcnNDYXNlTGV0dGVycyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQnKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm1hcFsnQ29udHJvbExlZnQnXSAmJiB0aGlzLm1hcFsnU3BhY2UnXSkge1xuICAgICAgICB0aGlzLmNoYW5nZUxhbmd1YWdlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZCcpKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5jb2RlKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5jb2RlKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgIHRoaXMubWFwW2UuY29kZV0gPSBmYWxzZTtcbiAgICAgIGlmICghZS5nZXRNb2RpZmllclN0YXRlKCdDYXBzTG9jaycpKSB7XG4gICAgICAgIHRoaXMudG9Mb3dlckNhc2VMZXR0ZXJzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZCcpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFlLmdldE1vZGlmaWVyU3RhdGUoJ0NhcHNMb2NrJykpIHtcbiAgICAgICAgdGhpcy50b0xvd2VyQ2FzZUxldHRlcnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkJykpO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLmNvZGUpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAga2V5YnBhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdtb3VzZWRvd24nKTtcbiAgICAgIGxldCBjaGFyID0gZS50YXJnZXQuZGF0YXNldC5jaGFyO1xuICAgICAgY29uc3Qga2V5ID1cbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLmtleWJvYXJkX19rZXknKSB8fCBlLnRhcmdldC5jbG9zZXN0KCcuYXJyb3cta2V5Jyk7XG4gICAgICBpZiAoIWNoYXIpIHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGtleS5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gICAgICAgIGNoYXIgPSBzcGFuLmRhdGFzZXQuY2hhcjtcbiAgICAgICAgY29uc29sZS5sb2coY2hhcik7XG4gICAgICB9XG4gICAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0YXJlYScpO1xuICAgICAgY29uc3Qgc3RhcnQgPSB0ZXh0QXJlYS5zZWxlY3Rpb25TdGFydDtcbiAgICAgIGNvbnN0IGVuZCA9IHRleHRBcmVhLnNlbGVjdGlvbkVuZDtcbiAgICAgIGNvbnN0IGFkZENoYXIgPSAoY2hhcikgPT4ge1xuICAgICAgICB0ZXh0QXJlYS52YWx1ZSA9XG4gICAgICAgICAgdGV4dEFyZWEudmFsdWUuc3Vic3RyaW5nKDAsIHN0YXJ0KSArXG4gICAgICAgICAgY2hhciArXG4gICAgICAgICAgdGV4dEFyZWEudmFsdWUuc3Vic3RyaW5nKGVuZCk7XG4gICAgICAgIHRleHRBcmVhLnNlbGVjdGlvblN0YXJ0ID0gdGV4dEFyZWEuc2VsZWN0aW9uRW5kID0gc3RhcnQgKyAxO1xuICAgICAgfTtcbiAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGlmIChrZXkuaWQgPT09ICdTcGFjZScpIHtcbiAgICAgICAgYWRkQ2hhcignICcpO1xuICAgICAgfSBlbHNlIGlmIChrZXkuaWQgPT09ICdUYWInKSB7XG4gICAgICAgIGFkZENoYXIoJ1xcdCcpO1xuICAgICAgfSBlbHNlIGlmIChrZXkuaWQgPT09ICdFbnRlcicpIHtcbiAgICAgICAgYWRkQ2hhcignXFxuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRDaGFyKGNoYXIgPyBjaGFyIDogJycpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAga2V5YnBhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPVxuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcua2V5Ym9hcmRfX2tleScpIHx8IGUudGFyZ2V0LmNsb3Nlc3QoJy5hcnJvdy1rZXknKTtcbiAgICAgIGtleS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlib2FyZDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSBmdW5jdGlvbihyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpIHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pOyB9KSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSBmdW5jdGlvbihjaHVua0lkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDA7IH07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gZnVuY3Rpb24ocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoZnVuY3Rpb24oaWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tpZF0gIT09IDA7IH0pKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19iYWJlbF9wb2x5ZmlsbF9saWJfaW5kZXhfanNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcG9seWZpbGwvbGliL2luZGV4LmpzXCIpOyB9KVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19iYWJlbF9wb2x5ZmlsbF9saWJfaW5kZXhfanNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5kZXguanNcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIktleWJvYXJkIiwia2V5Ym9hcmQiLCJyb290IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwibG9nbyIsImhlYWRpbmciLCJ0ZXh0YXJlYSIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsInNyYyIsInN0eWxlIiwid2lkdGgiLCJ0ZXh0Q29udGVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImluaXRSZW5kZXIiLCJsaXN0ZW5LZXlib2FyZCIsImZvb3RlckhUTUwiLCJmb290ZXIiLCJpbm5lckhUTUwiLCJLZXkiLCJhRG93biIsImFVcCIsImJEb3duIiwiYlVwIiwiZXh0cmFDbGFzcyIsImtleUNvZGUiLCJsYW5nQSIsImxhbmdCIiwiY3VycmVudExhbmciLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG93ZXJDYXNlIiwibWFwIiwiZmlyc3RSb3dLZXlzIiwiZmlyc3RSb3dDaGFycyIsImNoYXJzIiwia2V5cyIsImtleSIsImdldEtleUhUTUwiLCJrZXlCQUNLU1BBQ0UiLCJwdXNoIiwiam9pbiIsImtleVRBQiIsInNlY29uZFJvd0tleXMiLCJzZWNvbmRSb3dDaGFycyIsInVuc2hpZnQiLCJrZXlFTlRFUiIsImtleUNBUFNMT0NLIiwidGhpcmRSb3dLZXlzIiwidGhpcmRSb3dDaGFycyIsImtleVNoaWZ0TGVmdCIsImtleVNoaWZ0UmlnaHQiLCJmb3VydGhSb3dLZXlzIiwiZm91cnRoUm93Q2hhcnMiLCJmaWZ0aFJvd0tleXMiLCJmaWZ0aFJvd0NoYXJzIiwia2V5c0hUTUwiLCJhcnJvd3NIVE1MIiwiY29udGFpbmVyIiwiY29uc29sZSIsImxvZyIsImtleWJvYXJkQ29udGFpbmVyIiwiYXBwZW5kIiwiZmlyc3RSb3dIVE1MIiwic2Vjb25kUm93SFRNTCIsInRoaXJkUm93SFRNTCIsImZvdXJ0aFJvd0hUTUwiLCJmaWZ0aFJvd0hUTUwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwibGV0dGVycyIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmUiLCJzZXRJdGVtIiwia2V5YnBhcmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInRleHRBcmVhIiwic3RhcnQiLCJzZWxlY3Rpb25TdGFydCIsImVuZCIsInNlbGVjdGlvbkVuZCIsInZhbHVlIiwic3Vic3RyaW5nIiwiZ2V0TW9kaWZpZXJTdGF0ZSIsInRvVXBwZXJzQ2FzZUxldHRlcnMiLCJjaGFuZ2VMYW5ndWFnZSIsImdldEVsZW1lbnRCeUlkIiwidG9Mb3dlckNhc2VMZXR0ZXJzIiwiY2hhciIsInRhcmdldCIsImRhdGFzZXQiLCJjbG9zZXN0Iiwic3BhbiIsImFkZENoYXIiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=