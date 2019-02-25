module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Contact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Contact)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "icons", function () {
      return [{
        site: "mailto:antonio@glotacosm.com",
        img: 'https://glotacosm.com/at-solid.svg',
        label: "email"
      }, {
        site: "https://github.com/2hands10fingers",
        img: 'https://glotacosm.com/github-brands.svg',
        label: "github"
      }, {
        site: "https://www.linkedin.com/in/anogueras/",
        img: 'https://glotacosm.com/linkedin-in-brands.svg',
        label: "linkedin"
      }];
    });

    return _this;
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contact--container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Contact"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form"
      }, this.icons().map(function (info) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "contact--image-link ".concat(info.label && info.label),
          href: info.site
        }, info.site && info.label, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          style: {
            width: 20,
            height: 20
          },
          src: info.img,
          alt: info.label && info.label
        }));
      })));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/Hire.js":
/*!****************************!*\
  !*** ./components/Hire.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Hire =
/*#__PURE__*/
function (_Component) {
  _inherits(Hire, _Component);

  function Hire() {
    var _this;

    _classCallCheck(this, Hire);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Hire).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "skills", function () {
      return ["HTML5", "CSS3", "SASS", "PHP", "JavaScript", "React", "Boostrap", "GraphQL", "mySQL", "Wordpress Custom Theme Building", "Python 3", "Ableton", "Digital Marketing Consultation", "Graphic Design", "Copywriting"];
    });

    _this.state = {};
    return _this;
  }

  _createClass(Hire, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "hire--wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2455071264" + " " + "hire--skills"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "http://www.glotacosm.com/css/antonio_02.jpg",
        alt: "profile-shot",
        className: "jsx-2455071264" + " " + "hire--profile-image"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "http://www.glotacosm.com/img/GLOTACOSM-brandlogo.png",
        alt: "profile-shot",
        className: "jsx-2455071264" + " " + "hire--logo"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2455071264"
      }, "Accumulating years of experience in the digital marketing field and in creative branding, GLOTACOSM was born. The creative initiative led by Antonio Nogueras is the nuanced response to highly creative branding and marketing. It seeks to build creative infrastructures and execute complex marketing tasks that require a combination of different creative skills."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2455071264"
      }, "GLOTACOSM seeks to make a brainstorm look like a controlled F5 Tornado in the eye of a hurricane. It yearns to approach creative heights where consumers never thought possible. And while you\u2019re wondering, its name derives from Latin and Greek to mean \u201CWorld of Language\u201D. At least it\u2019s easier to pronounce than Schlotsky\u2019s on the first try."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-2455071264"
      }, this.skills().map(function (skill) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: skill,
          className: "jsx-2455071264"
        }, skill);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2455071264",
        css: ".hire--profile-image.jsx-2455071264{width:calc(1429px * 0.2);height:calc(2000px * 0.2);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxIaXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ec0IsQUFJa0MseUJBQ0MsMEJBQzlCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxIaXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgSGlyZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICBza2lsbHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgIFwiSFRNTDVcIixcbiAgICAgIFwiQ1NTM1wiLFxuICAgICAgXCJTQVNTXCIsXG4gICAgICBcIlBIUFwiLFxuICAgICAgXCJKYXZhU2NyaXB0XCIsXG4gICAgICBcIlJlYWN0XCIsXG4gICAgICBcIkJvb3N0cmFwXCIsXG4gICAgICBcIkdyYXBoUUxcIixcbiAgICAgIFwibXlTUUxcIixcbiAgICAgIFwiV29yZHByZXNzIEN1c3RvbSBUaGVtZSBCdWlsZGluZ1wiLFxuICAgICAgXCJQeXRob24gM1wiLFxuICAgICAgXCJBYmxldG9uXCIsXG4gICAgICBcIkRpZ2l0YWwgTWFya2V0aW5nIENvbnN1bHRhdGlvblwiLFxuICAgICAgXCJHcmFwaGljIERlc2lnblwiLFxuICAgICAgXCJDb3B5d3JpdGluZ1wiXG4gICAgXVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoaXJlLS13cmFwcGVyXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaXJlLS1za2lsbHNcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoaXJlLS1wcm9maWxlLWltYWdlXCJcbiAgICAgICAgICAgIHNyYz1cImh0dHA6Ly93d3cuZ2xvdGFjb3NtLmNvbS9jc3MvYW50b25pb18wMi5qcGdcIlxuICAgICAgICAgICAgYWx0PVwicHJvZmlsZS1zaG90XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpcmUtLWxvZ29cIlxuICAgICAgICAgICAgc3JjPVwiaHR0cDovL3d3dy5nbG90YWNvc20uY29tL2ltZy9HTE9UQUNPU00tYnJhbmRsb2dvLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJwcm9maWxlLXNob3RcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHA+QWNjdW11bGF0aW5nIHllYXJzIG9mIGV4cGVyaWVuY2UgaW4gdGhlIGRpZ2l0YWwgbWFya2V0aW5nIGZpZWxkIGFuZCBpbiBjcmVhdGl2ZSBicmFuZGluZywgR0xPVEFDT1NNIHdhcyBib3JuLlxuICAgICAgICAgICAgVGhlIGNyZWF0aXZlIGluaXRpYXRpdmUgbGVkIGJ5IEFudG9uaW8gTm9ndWVyYXMgaXMgdGhlIG51YW5jZWQgcmVzcG9uc2UgdG8gaGlnaGx5IGNyZWF0aXZlIGJyYW5kaW5nIGFuZCBtYXJrZXRpbmcuXG4gICAgICAgICAgICBJdCBzZWVrcyB0byBidWlsZCBjcmVhdGl2ZSBpbmZyYXN0cnVjdHVyZXMgYW5kIGV4ZWN1dGUgY29tcGxleCBtYXJrZXRpbmcgdGFza3MgdGhhdCByZXF1aXJlIGEgY29tYmluYXRpb24gb2YgZGlmZmVyZW50IGNyZWF0aXZlIHNraWxscy48L3A+XG5cbiAgICAgICAgICA8cD5HTE9UQUNPU00gc2Vla3MgdG8gbWFrZSBhIGJyYWluc3Rvcm0gbG9vayBsaWtlIGEgY29udHJvbGxlZCBGNSBUb3JuYWRvIGluIHRoZSBleWUgb2YgYSBodXJyaWNhbmUuXG4gICAgICAgICAgICBJdCB5ZWFybnMgdG8gYXBwcm9hY2ggY3JlYXRpdmUgaGVpZ2h0cyB3aGVyZSBjb25zdW1lcnMgbmV2ZXIgdGhvdWdodCBwb3NzaWJsZS4gQW5kIHdoaWxlIHlvdeKAmXJlIHdvbmRlcmluZywgaXRzIG5hbWUgZGVyaXZlcyBmcm9tIExhdGluIGFuZCBHcmVlayB0byBtZWFuIOKAnFdvcmxkIG9mIExhbmd1YWdl4oCdLiBBdCBsZWFzdCBpdOKAmXMgZWFzaWVyIHRvIHByb25vdW5jZSB0aGFuIFNjaGxvdHNreeKAmXMgb24gdGhlIGZpcnN0IHRyeS48L3A+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3RoaXMuc2tpbGxzKCkubWFwKCBza2lsbCA9PiA8bGkga2V5PXtza2lsbH0+e3NraWxsfTwvbGk+KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIFxuICAgICAgLmhpcmUtLXByb2ZpbGUtaW1hZ2Uge1xuICAgICAgICB3aWR0aDogY2FsYygxNDI5cHggKiAwLjIpO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMjAwMHB4ICogMC4yKTtcbiAgICB9IFxuICAgIFxuICAgIGB9XG4gICAgICBcbiAgICA8L3N0eWxlPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIaXJlOyJdfQ== */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\Hire.js */"
      })));
    }
  }]);

  return Hire;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Hire);

/***/ }),

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Modal = function Modal(_ref) {
  var handleClose = _ref.handleClose,
      show = _ref.show,
      content = _ref.content;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2353441739" + " " + "".concat(show ? "modal display-block" : "modal display-none")
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: handleClose,
    className: "jsx-2353441739"
  }, "X"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-2353441739" + " " + "modal-main"
  }, content), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2353441739",
    css: ".modal-main.jsx-2353441739{background-color:#483d8b;padding:1.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxNb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTa0IsQUFJZ0MseUJBQ1YsZUFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRvbmlvXFxwb3J0LWNvbmNlcHRcXGNvbXBvbmVudHNcXE1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBNb2RhbCA9ICh7IGhhbmRsZUNsb3NlLCBzaG93LCBjb250ZW50IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c2hvdyA/IFwibW9kYWwgZGlzcGxheS1ibG9ja1wiIDogXCJtb2RhbCBkaXNwbGF5LW5vbmVcIn1gfT5cbiAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+WDwvYnV0dG9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibW9kYWwtbWFpblwiPlxuICAgICAgICB7Y29udGVudH1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICBcbiAgICAubW9kYWwtbWFpbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDgzZDhiO1xuICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgIH1cbiAgXG4gIFxuICBgfVxuICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuIFxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbCJdfQ== */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\Modal.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_index_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.sass */ "./styles/index.sass");
/* harmony import */ var _styles_index_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_misc_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/misc.css */ "./styles/misc.css");
/* harmony import */ var _styles_misc_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_misc_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_PageSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PageSelector */ "./components/PageSelector.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.js");
/* harmony import */ var _components_Work__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Work */ "./components/Work.js");
/* harmony import */ var _components_Hire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Hire */ "./components/Hire.js");



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import bgImg from '../static/images/bg.jpg'








var _React = react__WEBPACK_IMPORTED_MODULE_1___default.a,
    Component = _React.Component;
var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showModal", function () {
      _this.setState({
        show: true,
        type: "built"
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hideModal", function () {
      _this.setState({
        show: false,
        type: ""
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPage", function (thePage) {
      _this.setState({
        currentPage: thePage
      });
    });

    _this.state = {
      show: false,
      type: "",
      currentPage: undefined
    };
    return _this;
  }

  _createClass(Layout, [{
    key: "render",
    // pageMaker = (page) => {
    //   const pages = {
    //     "contact": <Contact />,
    //     "work": <Work type={this.state.type}/>,
    //     "hire": <Hire />
    //   }
    //   return pages[page]
    // }
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2959425708"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-2959425708"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Press+Start+2P",
        rel: "stylesheet",
        className: "jsx-2959425708"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2959425708",
        css: "body{background:url('http://i.imgur.com/F0gBD6c.png') no-repeat;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxNeUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRHVCLEFBR2tFLDJEQUM3RCIsImZpbGUiOiJDOlxcVXNlcnNcXEFudG9uaW9cXHBvcnQtY29uY2VwdFxcY29tcG9uZW50c1xcTXlMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuLy8gaW1wb3J0IGJnSW1nIGZyb20gJy4uL3N0YXRpYy9pbWFnZXMvYmcuanBnJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zYXNzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9taXNjLmNzcydcclxuaW1wb3J0IFBhZ2VTZWxlY3RvciBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VTZWxlY3RvcidcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTW9kYWwnXHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdCdcclxuaW1wb3J0IFdvcmsgZnJvbSAnLi4vY29tcG9uZW50cy9Xb3JrJ1xyXG5pbXBvcnQgSGlyZSBmcm9tICcuLi9jb21wb25lbnRzL0hpcmUnXHJcbmNvbnN0IHtDb21wb25lbnR9ID0gUmVhY3Q7XHJcbmNvbnN0IGxheW91dFN0eWxlID0ge1xyXG4gIG1hcmdpbjogMjAsXHJcbiAgcGFkZGluZzogMjAsXHJcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnXHJcbn1cclxuXHJcblxyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gIHN1cGVyKClcclxuICB0aGlzLnN0YXRlID0ge1xyXG4gICAgc2hvdzogZmFsc2UsXHJcbiAgICB0eXBlOiBcIlwiLFxyXG4gICAgY3VycmVudFBhZ2U6IHVuZGVmaW5lZCxcclxuXHJcbiAgfTtcclxufVxyXG5cclxuICBzaG93TW9kYWwgPSAoKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBzaG93OiB0cnVlLCB0eXBlOiBcImJ1aWx0XCIgfSk7IH07XHJcbiAgaGlkZU1vZGFsID0gKCkgPT4geyB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UsIHR5cGU6IFwiXCIgfSk7IH07XHJcbiAgc2V0UGFnZSA9ICh0aGVQYWdlKSA9PiB7dGhpcy5zZXRTdGF0ZSh7Y3VycmVudFBhZ2U6IHRoZVBhZ2UgfSl9XHJcblxyXG4gIC8vIHBhZ2VNYWtlciA9IChwYWdlKSA9PiB7XHJcbiAgLy8gICBjb25zdCBwYWdlcyA9IHtcclxuICAvLyAgICAgXCJjb250YWN0XCI6IDxDb250YWN0IC8+LFxyXG4gIC8vICAgICBcIndvcmtcIjogPFdvcmsgdHlwZT17dGhpcy5zdGF0ZS50eXBlfS8+LFxyXG4gIC8vICAgICBcImhpcmVcIjogPEhpcmUgLz5cclxuICAvLyAgIH1cclxuXHJcbiAgLy8gICByZXR1cm4gcGFnZXNbcGFnZV1cclxuICAvLyB9XHJcblxyXG5cclxucmVuZGVyKCl7XHJcbiAgXHJcbiAgcmV0dXJuKCAgXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVByZXNzK1N0YXJ0KzJQXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgYm9keSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cDovL2kuaW1ndXIuY29tL0YwZ0JENmMucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgYH1cclxuICA8L3N0eWxlPlxyXG4gICAgPFNpZGViYXIgbWVudT17dGhpcy5wcm9wcy5tZW51fSAvPlxyXG4gIDwvZGl2PilcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dCJdfQ== */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\MyLayout.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        menu: this.props.menu
      }));
    }
  }]);

  return Layout;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/PageSelector.js":
/*!************************************!*\
  !*** ./components/PageSelector.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PageSelector =
/*#__PURE__*/
function (_Component) {
  _inherits(PageSelector, _Component);

  function PageSelector(props) {
    var _this;

    _classCallCheck(this, PageSelector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PageSelector).call(this, props));
    _this.state = {
      page: _this.props.page
    };
    return _this;
  }

  _createClass(PageSelector, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.page);
    }
  }]);

  return PageSelector;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PageSelector);

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.js");
/* harmony import */ var _components_Work__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Work */ "./components/Work.js");
/* harmony import */ var _components_Hire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Hire */ "./components/Hire.js");



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _React = react__WEBPACK_IMPORTED_MODULE_1___default.a,
    Component = _React.Component;





var Sidebar =
/*#__PURE__*/
function (_Component) {
  _inherits(Sidebar, _Component);

  function Sidebar() {
    var _this;

    _classCallCheck(this, Sidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sidebar).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "links", function () {
      return [{
        name: "Work",
        url: "/work",
        children: ["Built", "Maintained"]
      }, {
        name: "Contact",
        url: "/contact"
      }, {
        name: "Hire",
        url: "/hire"
      }];
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "subMenuToggler", function () {
      return _this.setState({
        haschildren: !_this.state.haschildren
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hideModal", function () {
      return _this.setState({
        show: false,
        type: ""
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPage", function (thePage) {
      return _this.setState({
        currentPage: thePage,
        show: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "blaher", function (link) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "".concat(link.children && "sidebar--has-children"),
        onClick: link.children && _this.subMenuToggler
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sidebar--link",
        onClick: function onClick() {
          return _this.setPage(link.name.toLowerCase());
        }
      }, link.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "sidebar--links"
      }, link.children && link.children.map(function (childLink) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: childLink,
          href: "".concat(link.url, "?sort=").concat(childLink.toLowerCase())
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "sidebar--link__child"
        }, childLink)));
      })));
    });

    _this.state = {
      start: false,
      haschildren: false,
      show: false,
      type: "",
      currentPage: undefined,
      pages: {
        "contact": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_3__["default"], null),
        "work": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Work__WEBPACK_IMPORTED_MODULE_4__["default"], null),
        "hire": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Hire__WEBPACK_IMPORTED_MODULE_5__["default"], null)
      }
    };
    return _this;
  }

  _createClass(Sidebar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "sidebar",
        style: {
          display: "".concat(this.props.menu ? "none" : "initial")
        }
      }, this.links().map(function (link) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !link.children ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: link,
          onClick: function onClick() {
            return _this2.setPage(link.name.toLowerCase());
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["31535466", [!_this2.props.menu && "display: none", !_this2.state.haschildren && "display: none;"]]])
        }, _this2.blaher(link)) : _this2.blaher(link), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "31535466",
          css: ".sidebar{".concat(!_this2.props.menu && "display: none", ";}.sidebar--has-children{position:relative;}.sidebar--has-children li{").concat(!_this2.state.haschildren && "display: none;", ";}.sidebar--has-children:before{content:'';top:17px;right:0;border-style:inset;position:absolute;width:0;height:0;border-style:solid;border-width:10px 12.5px 0 12.5px;border-color:white transparent transparent transparent;}.sidebar--has-children .sidebar--links li:hover{background-color:lightgreen;}li{cursor:pointer;font-family:'Press Start 2P';text-align:center;list-style:none;padding:0;margin:.5rem auto;width:235px;display:block;color:white;text-shadow:1px 6px 0px black;}li:hover{background-color:green;}.sidebar--links,sidebar{padding:0;}.sidebar--link{font-size:36px;}.sidebar--link__child{font-size:18px;}.modal{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);}.work--container{position:absolute;}.modal-main{position:fixed;background:white;right:0;bottom:0;width:80%;height:880px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);overflow:auto;}.display-block{display:block;}.display-none{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxTaWRlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFMkMsQUFJNEIsQUFFdUIsQUFLdkIsQUFFZ0IsQUFjaUIsQUFJYixBQWFRLEFBS2IsQUFJSyxBQUlBLEFBSUEsQUFTRyxBQUdKLEFBYUEsQUFJRCxVQXhDakIsQ0FwQ2EsRUE2RVgsQ0FKQSxDQXZEK0IsQUFzQmpDLEFBSUEsQUFJVSxBQVlXLEdBbkVyQixBQWdFRSxFQXhEVSxDQWdERCxFQWxCWCxLQTdCdUIsQUFZdkIsQUFvQ2MsQ0E1RGQsQUFPQSxHQWdFWSxPQVZJLENBV0gsSUEzQ1MsR0FoQkEsRUE0RFIsRUFYb0IsUUFZakIsR0E1Q0csR0FoQlIsT0E2REQsQ0E1REUsS0FnQkMsQUFnQ1osRUFhVSxFQTVEVyxNQWdCRCxDQTZDYSxZQTVERyxLQWdCdEIsWUFDRSxjQUNGLEdBakIyQyxTQWtCekIsOEJBQ2xDLGdCQWpCQSxJQTBEbUIsY0FDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRvbmlvXFxwb3J0LWNvbmNlcHRcXGNvbXBvbmVudHNcXFNpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL01vZGFsJ1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3QnXHJcbmltcG9ydCBXb3JrIGZyb20gJy4uL2NvbXBvbmVudHMvV29yaydcclxuaW1wb3J0IEhpcmUgZnJvbSAnLi4vY29tcG9uZW50cy9IaXJlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZWJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgaGFzY2hpbGRyZW46IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgdHlwZTogXCJcIixcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgcGFnZXM6IHtcclxuICAgICAgICAgICAgICAgIFwiY29udGFjdFwiOiA8Q29udGFjdCAvPixcclxuICAgICAgICAgICAgICAgIFwid29ya1wiOiA8V29yayAvPixcclxuICAgICAgICAgICAgICAgIFwiaGlyZVwiOiA8SGlyZSAvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGlua3MgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgeyBuYW1lOiBcIldvcmtcIiwgdXJsOiBcIi93b3JrXCIsIGNoaWxkcmVuOiBbXCJCdWlsdFwiLCBcIk1haW50YWluZWRcIl0gfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkNvbnRhY3RcIiwgdXJsOiBcIi9jb250YWN0XCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkhpcmVcIiwgdXJsOiBcIi9oaXJlXCJ9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHN1Yk1lbnVUb2dnbGVyID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7aGFzY2hpbGRyZW46ICF0aGlzLnN0YXRlLmhhc2NoaWxkcmVufSlcclxuICAgIFxyXG4gICAgaGlkZU1vZGFsID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlLCB0eXBlOiBcIlwiIH0pO1xyXG4gICAgXHJcbiAgICBzZXRQYWdlID0gdGhlUGFnZSA9PiB0aGlzLnNldFN0YXRlKHtjdXJyZW50UGFnZTogdGhlUGFnZSwgc2hvdzogdHJ1ZSB9KVxyXG4gICAgXHJcbiAgICBibGFoZXIgPSBsaW5rID0+IChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtgJHtsaW5rLmNoaWxkcmVuICYmIFwic2lkZWJhci0taGFzLWNoaWxkcmVuXCJ9YH0gXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2xpbmsuY2hpbGRyZW4gJiYgdGhpcy5zdWJNZW51VG9nZ2xlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLS1saW5rXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRQYWdlKGxpbmsubmFtZS50b0xvd2VyQ2FzZSgpKX0+e2xpbmsubmFtZX08L2Rpdj5cclxuICAgICAgICA8dWwgXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BzaWRlYmFyLS1saW5rc2B9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsaW5rLmNoaWxkcmVuICYmIGxpbmsuY2hpbGRyZW4ubWFwKGNoaWxkTGluayA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17Y2hpbGRMaW5rfSBcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgJHtsaW5rLnVybH0/c29ydD0ke2NoaWxkTGluay50b0xvd2VyQ2FzZSgpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLS1saW5rX19jaGlsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkTGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9saT5cclxuICAgIClcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICggIFxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2lkZWJhclwiIHN0eWxlPXt7ZGlzcGxheTogYCR7dGhpcy5wcm9wcy5tZW51ID8gXCJub25lXCIgOiBcImluaXRpYWxcIiB9YH19PlxyXG4gICAgICAgICAgICAgICAge3RoaXMubGlua3MoKS5tYXAobGluayA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWxpbmsuY2hpbGRyZW4gPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0UGFnZShsaW5rLm5hbWUudG9Mb3dlckNhc2UoKSl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmJsYWhlcihsaW5rKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJsYWhlcihsaW5rKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHshdGhpcy5wcm9wcy5tZW51ICYmIFwiZGlzcGxheTogbm9uZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItLWhhcy1jaGlsZHJlbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLS1oYXMtY2hpbGRyZW4gbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHshdGhpcy5zdGF0ZS5oYXNjaGlsZHJlbiAmJiBcImRpc3BsYXk6IG5vbmU7XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci0taGFzLWNoaWxkcmVuOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDEwcHggMTIuNXB4IDAgMTIuNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLS1oYXMtY2hpbGRyZW4gLnNpZGViYXItLWxpbmtzIGxpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDZweCAwcHggYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGk6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci0tbGlua3MsIHNpZGViYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLS1saW5rX19jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLndvcmstLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tb2RhbC1tYWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDg4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXNwbGF5LWJsb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpc3BsYXktbm9uZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3d9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2U9e3RoaXMuaGlkZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5zdGF0ZS5wYWdlc1t0aGlzLnN0YXRlLmN1cnJlbnRQYWdlXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\Sidebar.js */"),
          dynamic: [!_this2.props.menu && "display: none", !_this2.state.haschildren && "display: none;"]
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
          show: _this2.state.show,
          handleClose: _this2.hideModal,
          content: _this2.state.pages[_this2.state.currentPage]
        }));
      }));
    }
  }]);

  return Sidebar;
}(Component);



/***/ }),

/***/ "./components/Work.js":
/*!****************************!*\
  !*** ./components/Work.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WorkItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkItem */ "./components/WorkItem.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Work =
/*#__PURE__*/
function (_Component) {
  _inherits(Work, _Component);

  function Work() {
    var _this;

    _classCallCheck(this, Work);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Work).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "work", function () {
      return [{
        title: "Podcast Movemnet",
        role: "Lead Developer",
        workLink: "https://podcastmovement.com/",
        descrip: "Custom theme built from mock-ups for event-based organization. Setup for the client to make backend changes.",
        img: "",
        stack: "JavaScript/jQuery, SASS, PHP, Wordpress, Webpack, Bootstrap, nodeJS",
        category: ["Pofessional"],
        built: true,
        maintained: true
      }, {
        title: "Supply Chain Automation",
        role: "Lead Developer",
        workLink: "http://supplychain.dev.square205.com",
        descrip: "Supply Chain Automation is a resource website for those interested in Supply Chain Automation to access educational resources. Custom Wordpress theme built from scratch and developed from design mock-ups. Built-in Google Analytics tracking solution to track downloads and page visits according to user meta data. Built majority of front-end. Complete with SASS styles, modals, registry logic, and gated content.",
        img: "",
        stack: "JavaScript/jQuery, SASS, PHP, Wordpress, Webpack, Python, Mailchimp, WP-Members, Gravity Forms, Bootstrap, nodeJS",
        category: ["Professional"],
        built: true,
        maintained: false
      }, {
        title: "Money On Mobile",
        role: "Lead Developer",
        workLink: "http://moneyonmobile.us/",
        descrip: "Custom theme built from scratch. Three-part website to cater to consumers, retailers, and investors of the largest. MoneyOnMobile is a simple, easy to use mobile SMS or smart phone application that lets you connect with your money at the push of a button. With Over 200 million customers, it is one of India's larget mobile money mangagement system. Complete with twitter feed.",
        img: "",
        stack: "JavaScript/jQuery, SASS, PHP, Wordpress, Webpack, Bootstrap, nodeJS",
        category: ["Professional"],
        built: true,
        maintained: false
      }, {
        title: "Autoquip",
        role: "Developer",
        workLink: "https://autoquip.com",
        descrip: "Consulted on developer operations, technical challenges, solving coding problems, and managing deployment. Perform maintenace and build new additions.",
        img: "",
        stack: "JavaScript/jQuery, ReactJS, Webpack, Bootstrap, nodeJS, Wordpress, PHP, SASS, mySQL",
        category: ["Professional"],
        built: false,
        maintained: true
      }, {
        title: "Office Furniture Distributors",
        role: "Lead Developer",
        workLink: "https://ofdist.com/",
        descrip: "eCommerce website to send quotes for various office furniture items. Adapted Wordpress theme from mockups to have its look and feel. Integrated fully-functional eCommerce functions.",
        img: "",
        stack: "PHP, jQuery, WordPress, CSS, WooCommerce, Yith Plugins, GravityForms, Python, WP All Import/Export",
        category: ["Professional"],
        built: true,
        maintained: true
      }, {
        title: "Physmodo Coach Analytics App",
        role: "Front-end Developer",
        descrip: "Stylized and programmed React components for an analytics app using Material UI",
        img: "",
        stack: "JavaScript, CSS, SASS, GraphQL, React, Apollo, Chartist, JSS, Stylized Components",
        category: ["Professional"],
        built: true,
        maintained: false
      }, {
        title: "color-the-innanet",
        role: "",
        workLink: "http://glotacosm.com/colortheinnanet",
        descrip: "Turned received WiFI packet data into color art to represent the individual packets as an art project.",
        img: "https://i.imgur.com/pBhk4ST.png",
        stack: "JavaScript/jQuery, HTML Canvas, CSS, Python, JSON",
        category: ["Fun"],
        repo: "https://github.com/2hands10fingers/color-the-internet",
        built: true,
        maintained: false
      }, {
        title: "movie-pal",
        role: "",
        workLink: "",
        descrip: "CLI to access omdbapi and through webscraping, Produces a user interface for quickly copying data into spreadsheet rows/columns and also provides front-end API search within the user interface.",
        img: "https://i.imgur.com/bwPMIv1.jpg",
        stack: "JavaScript/jQuery, SASS, Python, JSON, Boostrap",
        category: ["Fun"],
        repo: "https://github.com/2hands10fingers/movie-pal",
        built: true,
        maintained: false
      }, {
        title: "Reddit Image Scraper v1.0-1.1",
        role: "",
        workLink: "",
        descrip: "Scrapes Reddit images from any public subreddit by a user-specified date range and saves them to your computer.",
        img: "https://i.imgur.com/e2mgH7D.png",
        stack: "Python, Reddit API",
        category: ["Freelance", "Fun"],
        repo: "https://github.com/2hands10fingers/Reddit-Image-Scraper-1.0",
        built: true,
        maintained: false
      }, {
        title: "George Mason University - Institue for Biohealth Innovation",
        role: "Freelance Developer/Teacher",
        workLink: "https://ibi.gmu.edu/",
        descrip: "Aided in building this site and taught the Communications Officer how to code and maintain it.",
        img: "",
        stack: "Wordpress, CSS, PHP, Python",
        category: ["Professional", "Freelance"],
        repo: "",
        built: true,
        maintained: true
      }];
    });

    _this.state = {
      built: false,
      maintained: false
    };
    return _this;
  }

  _createClass(Work, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.type === "built" ? this.setState({
        built: true
      }) : this.setState({
        maintained: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          built = _this$state.built,
          maintained = _this$state.maintained;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "work--container ".concat(this.state.built ? "built" : "maintained")
      }, this.work().map(function (i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WorkItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: i.title + "--item",
          title: i.title,
          role: i.role,
          workLink: i.workLink,
          descrip: i.descrip,
          img: i.img,
          stack: i.stack,
          category: i.category
        });
      }));
    }
  }]);

  return Work;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ }),

/***/ "./components/WorkItem.js":
/*!********************************!*\
  !*** ./components/WorkItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var WorkItem = function WorkItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "workitem--container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.workLink ? props.workLink : props.repo
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "work--stack"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Stack"), ": ", props.stack), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "work--role"
  }, "Role:", props.role), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "work--description"
  }, props.descrip), "Category:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, props.category.map(function (category) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: category
    }, category);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkItem);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import Modal from '../components/Modal.js'


var font = "'Press Start 2P';";
var _React = react__WEBPACK_IMPORTED_MODULE_1___default.a,
    Component = _React.Component; // const PostLink = ({ post }) => (
//   <li>
//     <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
//       <a>{post.title}</a>
//     </Link>
//     <style jsx>{`
//       h1, a {
//         font-family: "Arial";
//       }
//       ul {
//         padding: 0;
//       }
//       li {
//         list-style: none;
//         margin: 5px 0;
//       }
//       a {
//         text-decoration: none;
//         color: blue;
//       }
//       a:hover {
//         opacity: 0.6;
//       }
//     `}</style>
//   </li>
// )

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "pressStart", function () {
      return _this.setState({
        start: !_this.state.start
      });
    });

    _this.state = {
      start: true
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2583186442", [font, font]]]) + " " + "portfolio--wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2583186442", [font, font]]])
      }, "Glotacosm"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("blink", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2583186442", [font, font]]])
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        style: {
          display: "".concat(!this.state.start && "none")
        },
        onClick: this.pressStart,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2583186442", [font, font]]]) + " " + "start-button blink"
      }, "Click Here to Continue")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2583186442",
        css: ".start-button.__jsx-style-dynamic-selector{display:block;margin:0 auto;font-family:".concat(font, " text-transform:uppercase;border:none;color:white;background-color:transparent;text-shadow:1px 10px 0px black;}h1.__jsx-style-dynamic-selector{font-family:").concat(font, " text-align:center;font-size:75px;color:white;text-transform:uppercase;text-shadow:1px 5px 0px black;}blink.__jsx-style-dynamic-selector{-webkit-animation:2s linear infinite condemned_blink_effect;-webkit-animation:2s linear infinite condemned_blink_effect-__jsx-style-dynamic-selector;animation:2s linear infinite condemned_blink_effect-__jsx-style-dynamic-selector;}@-webkit-keyframes condemned_blink_effect{0%.__jsx-style-dynamic-selector{visibility:hidden;}50%.__jsx-style-dynamic-selector{visibility:hidden;}100%.__jsx-style-dynamic-selector{visibility:visible;}}@-webkit-keyframes condemned_blink_effect-__jsx-style-dynamic-selector{0%{visibility:hidden;}50%{visibility:hidden;}100%{visibility:visible;}}@keyframes condemned_blink_effect-__jsx-style-dynamic-selector{0%{visibility:hidden;}50%{visibility:hidden;}100%{visibility:visible;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RrQixBQUd1QixBQVdJLEFBUTBDLEFBS3RDLEFBR0EsQUFHQyxBQUtELEFBR0EsQUFHQyxjQXhDVCxJQXdCZCxBQUdBLEFBUUEsQUFHQSxDQVJBLEFBV0EsU0F2Q3lCLCtCQVNWLENBUXFDLGNBUHhDLFlBQ2EsUUFWYixZQUNBLEtBVWtCLE9BVEQsdUJBVS9CLE1BVGlDLCtCQUNqQyxvREFhRiIsImZpbGUiOiJDOlxcVXNlcnNcXEFudG9uaW9cXHBvcnQtY29uY2VwdFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xyXG4vLyBpbXBvcnQgTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2RhbC5qcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgZm9udCA9IFwiJ1ByZXNzIFN0YXJ0IDJQJztcIlxyXG5cclxuXHJcbmNvbnN0IHtDb21wb25lbnR9ID0gUmVhY3RcclxuLy8gY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcclxuLy8gICA8bGk+XHJcbi8vICAgICA8TGluayBhcz17YC9wLyR7cG9zdC5pZH1gfSBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwb3N0LnRpdGxlfWB9PlxyXG4vLyAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XHJcbi8vICAgICA8L0xpbms+XHJcbi8vICAgICA8c3R5bGUganN4PntgXHJcbi8vICAgICAgIGgxLCBhIHtcclxuLy8gICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgICB1bCB7XHJcbi8vICAgICAgICAgcGFkZGluZzogMDtcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgbGkge1xyXG4vLyAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbi8vICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgYSB7XHJcbi8vICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgICBhOmhvdmVyIHtcclxuLy8gICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIGB9PC9zdHlsZT5cclxuLy8gICA8L2xpPlxyXG4vLyApXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzdGFydDogdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJlc3NTdGFydCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzdGFydDogIXRoaXMuc3RhdGUuc3RhcnR9KVxyXG5cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tLXdyYXBwZXJcIj5cclxuICAgICAgPGgxPkdsb3RhY29zbTwvaDE+XHJcbiAgICAgIDxibGluaz5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdGFydC1idXR0b24gYmxpbmtcIlxyXG4gICAgICAgIHN0eWxlPXt7ZGlzcGxheTogYCR7IXRoaXMuc3RhdGUuc3RhcnQgJiYgXCJub25lXCJ9YH19IFxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMucHJlc3NTdGFydH0+XHJcbiAgICAgICAgQ2xpY2sgSGVyZSB0byBDb250aW51ZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9ibGluaz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuc3RhcnQtYnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBmb250LWZhbWlseTogJHtmb250fVxyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDEwcHggMHB4IGJsYWNrO1xyXG4gICAgICB9XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogJHtmb250fVxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDc1cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCA1cHggMHB4IGJsYWNrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBibGluayB7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGxpbmVhciBpbmZpbml0ZSBjb25kZW1uZWRfYmxpbmtfZWZmZWN0OyAvLyBmb3IgYW5kcm9pZFxyXG4gICAgICAgIGFuaW1hdGlvbjogMnMgbGluZWFyIGluZmluaXRlIGNvbmRlbW5lZF9ibGlua19lZmZlY3Q7XHJcbiAgICB9XHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgY29uZGVtbmVkX2JsaW5rX2VmZmVjdCB7IC8vIGZvciBhbmRyb2lkXHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBjb25kZW1uZWRfYmxpbmtfZWZmZWN0IHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxMYXlvdXQgbWVudT17dGhpcy5zdGF0ZS5zdGFydH0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbn0iXX0= */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\pages\\index.js */"),
        dynamic: [font, font]
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        menu: this.state.start
      })));
    }
  }]);

  return _default;
}(Component);



/***/ }),

/***/ "./styles/index.sass":
/*!***************************!*\
  !*** ./styles/index.sass ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/misc.css":
/*!*************************!*\
  !*** ./styles/misc.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* @font-face {
  font-family: Pixeled;
  src: url(../assets/fonts/Pixeled.ttf);
}

h1 {
  font-family: Pixeled;
} */
/* s */

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map