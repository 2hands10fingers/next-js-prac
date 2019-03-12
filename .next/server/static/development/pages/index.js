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

/***/ "./components/CharSelect.js":
/*!**********************************!*\
  !*** ./components/CharSelect.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CharSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentBlock */ "./components/ContentBlock.js");
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




var CharSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(CharSelect, _Component);

  function CharSelect() {
    var _this;

    _classCallCheck(this, CharSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CharSelect).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "namer", function (char) {
      switch (char) {
        case undefined:
          return "???";

        case "meme":
          return "Antonio";

        default:
          return char;
      }
    });

    _this.state = {
      char: undefined
    };
    return _this;
  }

  _createClass(CharSelect, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          side = _this$props.side,
          charName = _this$props.charName;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "char--select-container ".concat(side)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "char--char-box ".concat(charName)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "https://glotacosm.com/img/char/char-".concat(charName === undefined ? 'unknown' : charName, ".png")
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "char--name"
      }, this.namer(charName))));
    }
  }]);

  return CharSelect;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CharSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CharSelect */ "./components/CharSelect.js");
/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentBlock */ "./components/ContentBlock.js");
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Provider */ "./components/Provider.js");


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
    var _this;

    _classCallCheck(this, Contact);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Contact).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "contactOrNah", function (str) {
      return str == "email" && "Contact";
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "icons", function () {
      return [{
        site: "mailto:antonio@glotacosm.com",
        img: 'https://glotacosm.com/img/char/char-email.png',
        label: "email"
      }, {
        site: "https://github.com/2hands10fingers",
        img: 'https://glotacosm.com/img/char/char-github.png',
        label: "github"
      }, {
        site: "https://www.linkedin.com/in/anogueras/",
        img: 'https://glotacosm.com/img/char/char-linkedin.png',
        label: "linkedin"
      }];
    });

    _this.state = {
      label: undefined,
      site: undefined
    };
    return _this;
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var label = this.state.label;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "contact--container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Provider__WEBPACK_IMPORTED_MODULE_4__["MahContext"], null, function (context) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Contact"), console.log(context), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form"
        }, _this2.icons().map(function (info, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            key: index,
            onMouseOver: function onMouseOver() {
              return _this2.setState({
                label: info.label,
                site: info.site
              });
            },
            onMouseLeave: function onMouseLeave() {
              return _this2.setState({
                label: undefined,
                site: undefined
              });
            },
            className: "contact--image-link ".concat(info.label && info.label),
            onClick: context.updatePoints(100),
            href: info.site,
            target: "_blank"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            src: info.img,
            alt: info.label && info.label
          })));
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Choose Your Contact Method"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-1386413196" + " " + "contact--char-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CharSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
          side: "left",
          charName: label
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-1386413196" + " " + "versus"
        }, "~VS~"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CharSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
          side: "right",
          charName: "meme"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "1386413196",
          css: ".modal-main.contact{padding:0;height:80.2%;}.versus{color:white;height:110px;line-height:110px;position:absolute;text-shadow:1px 2px 12px black;font-size:22px;background:royalblue;border:1px solid whitesmoke;padding:0 11px;top:40px;border-radius:100px;background:rgb(254,252,234);background:-moz-radial-gradient(center,ellipse cover,rgba(254,252,234,1) 0%,rgba(241,218,54,1) 100%);background:-webkit-radial-gradient(center,ellipse cover,rgba(254,252,234,1) 0%,rgba(241,218,54,1) 100%);background:radial-gradient(ellipse at center,rgba(254,252,234,1) 0%,rgba(241,218,54,1) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefcea',endColorstr='#f1da36',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefcea',endColorstr='#f1da36',GradientType=1 );box-shadow:1px 1px 115px magenta;}.contact--container{padding-top:2rem;background:-moz-linear-gradient(top,rgba(119,30,154,1) 0%,rgba(119,30,154,0.8) 2%,rgba(119,30,154,0.8) 20%,rgba(152,42,216,0.8) 50%,rgba(119,30,154,0.8) 80%,rgba(119,30,154,0.8) 99%,rgba(119,30,154,0) 100%);background:-webkit-linear-gradient(top,rgba(119,30,154,1) 0%,rgba(119,30,154,0.8) 2%,rgba(119,30,154,0.8) 20%,rgba(152,42,216,0.8) 50%,rgba(119,30,154,0.8) 80%,rgba(119,30,154,0.8) 99%,rgba(119,30,154,0) 100%);background:linear-gradient(to bottom,rgba(119,30,154,1) 0%,rgba(119,30,154,0.8) 2%,rgba(119,30,154,0.8) 20%,rgba(152,42,216,0.8) 50%,rgba(119,30,154,0.8) 80%,rgba(119,30,154,0.8) 99%,rgba(119,30,154,0) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#771e9a',endColorstr='#00771e9a',GradientType=0 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#771e9a',endColorstr='#00771e9a',GradientType=0 );}.contact--container h1,.contact--container h2{color:white;text-shadow:1px 2px 12px black;}.form{width:500px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 auto;}.contact--container h1,.contact--container h2,.versus{font-family:'Press Start 2P';text-align:center;}.contact--char-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;position:relative;}.char--select-container{width:50%;}.char--select-container.right .b--content{background:-moz-linear-gradient(45deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);background:-webkit-linear-gradient(45deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);background:linear-gradient(45deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799',endColorstr='#001e5799',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799',endColorstr='#001e5799',GradientType=1 );}.char--select-container.left .b--content{background:-moz-linear-gradient(-45deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);background:-webkit-linear-gradient(-45deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);background:linear-gradient(135deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799',endColorstr='#001e5799',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799',endColorstr='#001e5799',GradientType=1 );}.contact--image-link .b--content{background:rgb(183,222,237);background:-moz-linear-gradient(45deg,rgba(183,222,237,1) 0%,rgba(113,206,239,1) 50%,rgba(33,180,226,1) 51%,rgba(183,222,237,1) 100%);background:-webkit-linear-gradient(45deg,rgba(183,222,237,1) 0%,rgba(113,206,239,1) 50%,rgba(33,180,226,1) 51%,rgba(183,222,237,1) 100%);background:linear-gradient(45deg,rgba(183,222,237,1) 0%,rgba(113,206,239,1) 50%,rgba(33,180,226,1) 51%,rgba(183,222,237,1) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#b7deed',endColorstr='#b7deed',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#b7deed',endColorstr='#b7deed',GradientType=1 );}.contact--image-link .b--border:hover{border-color:brown;}.contact--image-link img{width:130px;height:auto;}.char--char-box img{width:auto;height:170px;display:block;margin:0 auto;}.char--select-container.left .char--name{text-align:right;}.char--select-container.right .char--name{text-align:left;}@media screen and (max-width:767px){.versus{padding:initial;line-height:50px;height:50px;}}@media screen and (max-width:567px){.form{width:initial;}.versus{font-size:14px;}.modal-main.contact{height:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxDb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFMkIsQUFJcUIsQUFRRSxBQXFCSyxBQVVMLEFBT0EsQUFVaUIsQUFLaEIsQUFNSCxBQUt3SyxBQVFDLEFBUXZKLEFBUVQsQUFJUCxBQUtELEFBT00sQUFJRCxBQUtFLEFBUUYsQUFJQyxBQUlILFVBeElELEFBbUVmLENBc0NlLENBakdBLEFBK0JrQixBQU9sQixBQXNERCxBQXFDWixFQVJBLENBSUEsQ0FqQkYsQUFLcUIsQ0EzRm1NLEFBa0Z4TixFQWhCQSxJQTVGQSxDQWlHQSxBQUtnQixDQWpHSSxHQStFd0gsQ0FoQ3hILElBa0VKLEtBZkEsS0FqR0ksQUE4QnBCLEVBbUZFLEVBbEVGLEtBbURBLFNBakdpQyxhQWtERixZQWRkLE1BbkNBLGVBQ00scUJBQ08sZUFrQ0wsYUFqQ1IsTUEwRTJILFNBekVqSSxDQXdEdUssQ0FRQyxPQS9EN0osaUJBNkNGLEdBM0NVLGVBNEM5QixTQWhDcU4sSUFYM0csY0E2QjFGLGNBQ2hCLDJDQXdDb0ksOEJBckV4QixrQkFvRDhELEVBUUMsK0VBVXRELEtBckVyQixDQVVtSCxnRkEwQzVGLEdBUUEsU0EzREYsb0hBVUUsc0JBMkR2SCwwRkFqQkEsR0FRQSxLQTNEbUMsaUNBQ25DLHVGQVNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxDb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgQ2hhclNlbGVjdCBmcm9tIFwiLi9DaGFyU2VsZWN0XCJcbmltcG9ydCBDb250ZW50QmxvY2sgZnJvbSAnLi9Db250ZW50QmxvY2snO1xuaW1wb3J0IHsgTWFoQ29udGV4dCB9IGZyb20gXCIuL1Byb3ZpZGVyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFjdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhdGUgPXtcbiAgICAgIGxhYmVsOiB1bmRlZmluZWQsXG4gICAgICBzaXRlOiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBjb250YWN0T3JOYWggPSAoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0ciA9PSBcImVtYWlsXCIgJiYgXCJDb250YWN0XCJcbiAgfVxuXG4gIGljb25zID0gKCkgPT4ge1xuICAgIHJldHVybiBbXG4gICAgICB7IHNpdGU6IFwibWFpbHRvOmFudG9uaW9AZ2xvdGFjb3NtLmNvbVwiLCBpbWc6ICdodHRwczovL2dsb3RhY29zbS5jb20vaW1nL2NoYXIvY2hhci1lbWFpbC5wbmcnLCBsYWJlbDogXCJlbWFpbFwiIH0sXG4gICAgICB7IHNpdGU6IFwiaHR0cHM6Ly9naXRodWIuY29tLzJoYW5kczEwZmluZ2Vyc1wiLCBpbWc6ICdodHRwczovL2dsb3RhY29zbS5jb20vaW1nL2NoYXIvY2hhci1naXRodWIucG5nJywgbGFiZWw6IFwiZ2l0aHViXCIgfSxcbiAgICAgIHsgc2l0ZTogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYW5vZ3VlcmFzL1wiLCBpbWc6ICdodHRwczovL2dsb3RhY29zbS5jb20vaW1nL2NoYXIvY2hhci1saW5rZWRpbi5wbmcnLCBsYWJlbDogXCJsaW5rZWRpblwiIH0sXG4gICAgICAvLyB7IHNpdGU6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Fub2d1ZXJhcy9cIiwgaW1nOiAnaHR0cHM6Ly9nbG90YWNvc20uY29tL2ltZy9jaGFyL2NoYXItbGlua2VkaW4ucG5nJywgbGFiZWw6IFwibGlua2VkaW5cIiB9XG4gICAgXVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwgfSA9IHRoaXMuc3RhdGVcbiAgICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtLWNvbnRhaW5lclwiPlxuICAgICAgPE1haENvbnRleHQ+XG4gICAgICAgIHsgY29udGV4dCA9PiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgIFxuICAgICAgICAgIDxoMT5Db250YWN0PC9oMT5cbiAgICAgICAgICB7Y29uc29sZS5sb2coY29udGV4dCl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgICAgIHt0aGlzLmljb25zKCkubWFwKCAoaW5mbywgaW5kZXgpID0+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtsYWJlbDogaW5mby5sYWJlbCwgc2l0ZTogaW5mby5zaXRlfSl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHRoaXMuc2V0U3RhdGUoe2xhYmVsOiB1bmRlZmluZWQsIHNpdGU6IHVuZGVmaW5lZCB9KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbnRhY3QtLWltYWdlLWxpbmsgJHtpbmZvLmxhYmVsICYmIGluZm8ubGFiZWx9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2NvbnRleHQudXBkYXRlUG9pbnRzKDEwMCl9XG4gICAgICAgICAgICBocmVmPXtpbmZvLnNpdGV9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q29udGVudEJsb2NrPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbmZvLmltZ30gYWx0PXtpbmZvLmxhYmVsICYmIGluZm8ubGFiZWx9Lz5cbiAgICAgICAgICAgICAgICB7LyogaW1hZ2UgZnJvbSBmb250YXdlc29tZSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlICovfVxuICAgICAgICAgICAgICA8L0NvbnRlbnRCbG9jaz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDI+Q2hvb3NlIFlvdXIgQ29udGFjdCBNZXRob2Q8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtLWNoYXItd3JhcHBlclwiPlxuICAgICAgICA8Q2hhclNlbGVjdFxuICAgICAgICAgIHNpZGU9XCJsZWZ0XCJcbiAgICAgICAgICBjaGFyTmFtZT17bGFiZWx9XG4gICAgICAgICAgLz5cbnsvKiBcbiAgPGEgaHJlZj17IXNpdGUgPyBcIiNcIiA6IHNpdGV9PntcbiAgICAhc2l0ZSA/IFwiQ2hvb3NlIFlvdXIgQ2hhcmFjdGVyXCIgOiB0aGlzLmNvbnRhY3RPck5haChzaXRlKVxuICB9PC9hPiAqL31cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVyc3VzXCI+flZTfjwvZGl2PlxuXG4gICAgICAgIDxDaGFyU2VsZWN0XG4gICAgICAgICAgc2lkZT1cInJpZ2h0XCJcbiAgICAgICAgICBjaGFyTmFtZT17XCJtZW1lXCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcblxuICAgICAgICAubW9kYWwtbWFpbi5jb250YWN0IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGhlaWdodDogODAuMiU7XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAudmVyc3VzIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTEwcHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMnB4IDEycHggYmxhY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJveWFsYmx1ZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTFweDtcbiAgICAgICAgICB0b3A6IDQwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgLyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHA6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvI2ZlZmNlYSswLGYxZGEzNisxMDA7R29sZCszRCAqL1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTQsMjUyLDIzNCk7IC8qIE9sZCBicm93c2VycyAqL1xuICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgyNTQsMjUyLDIzNCwxKSAwJSwgcmdiYSgyNDEsMjE4LDU0LDEpIDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xuICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgyNTQsMjUyLDIzNCwxKSAwJSxyZ2JhKDI0MSwyMTgsNTQsMSkgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG4gICAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCByZ2JhKDI1NCwyNTIsMjM0LDEpIDAlLHJnYmEoMjQxLDIxOCw1NCwxKSAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZWZjZWEnLCBlbmRDb2xvcnN0cj0nI2YxZGEzNicsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTE1cHggbWFnZW50YTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWN0LS1jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgICAgICAgIC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyM3NzFlOWErMjAsOTgyYWQ4KzUwLDc3MWU5YSs4MCYwKzAsMC44KzIsMSswLDErOTksMC44Kzk5LDArMTAwICovXG4gICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDExOSwzMCwxNTQsMSkgMCUsIHJnYmEoMTE5LDMwLDE1NCwwLjgpIDIlLCByZ2JhKDExOSwzMCwxNTQsMC44KSAyMCUsIHJnYmEoMTUyLDQyLDIxNiwwLjgpIDUwJSwgcmdiYSgxMTksMzAsMTU0LDAuOCkgODAlLCByZ2JhKDExOSwzMCwxNTQsMC44KSA5OSUsIHJnYmEoMTE5LDMwLDE1NCwwKSAxMDAlKTsgLyogRkYzLjYtMTUgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMTE5LDMwLDE1NCwxKSAwJSxyZ2JhKDExOSwzMCwxNTQsMC44KSAyJSxyZ2JhKDExOSwzMCwxNTQsMC44KSAyMCUscmdiYSgxNTIsNDIsMjE2LDAuOCkgNTAlLHJnYmEoMTE5LDMwLDE1NCwwLjgpIDgwJSxyZ2JhKDExOSwzMCwxNTQsMC44KSA5OSUscmdiYSgxMTksMzAsMTU0LDApIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMTE5LDMwLDE1NCwxKSAwJSxyZ2JhKDExOSwzMCwxNTQsMC44KSAyJSxyZ2JhKDExOSwzMCwxNTQsMC44KSAyMCUscmdiYSgxNTIsNDIsMjE2LDAuOCkgNTAlLHJnYmEoMTE5LDMwLDE1NCwwLjgpIDgwJSxyZ2JhKDExOSwzMCwxNTQsMC44KSA5OSUscmdiYSgxMTksMzAsMTU0LDApIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzc3MWU5YScsIGVuZENvbG9yc3RyPScjMDA3NzFlOWEnLEdyYWRpZW50VHlwZT0wICk7IC8qIElFNi05ICovXG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFjdC0tY29udGFpbmVyIGgxLFxuICAgICAgICAuY29udGFjdC0tY29udGFpbmVyIGgyIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAycHggMTJweCBibGFjaztcbiAgICAgICAgfVxuXG5cblxuICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhY3QtLWNvbnRhaW5lciBoMSwgXG4gICAgICAgIC5jb250YWN0LS1jb250YWluZXIgaDIsIFxuICAgICAgICAudmVyc3VzIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFjdC0tY2hhci13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGFyLS1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoYXItLXNlbGVjdC1jb250YWluZXIucmlnaHQgLmItLWNvbnRlbnQgeyAgICAgICAgXG4gICAgICAgICAgLyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHA6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvIzFlNTc5OSsyMCwyOTg5ZDgrNTAsMWU1Nzk5KzgwJjArMCwxKzAsMSs5OSwxKzk5LDArMTAwICovXG4gICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMzAsODcsMTUzLDEpIDAlLCByZ2JhKDMwLDg3LDE1MywxKSAyMCUsIHJnYmEoNDEsMTM3LDIxNiwxKSA1MCUsIHJnYmEoMzAsODcsMTUzLDEpIDgwJSwgcmdiYSgzMCw4NywxNTMsMSkgOTklLCByZ2JhKDMwLDg3LDE1MywwKSAxMDAlKTsgLyogRkYzLjYtMTUgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgzMCw4NywxNTMsMSkgMCUscmdiYSgzMCw4NywxNTMsMSkgMjAlLHJnYmEoNDEsMTM3LDIxNiwxKSA1MCUscmdiYSgzMCw4NywxNTMsMSkgODAlLHJnYmEoMzAsODcsMTUzLDEpIDk5JSxyZ2JhKDMwLDg3LDE1MywwKSAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMzAsODcsMTUzLDEpIDAlLHJnYmEoMzAsODcsMTUzLDEpIDIwJSxyZ2JhKDQxLDEzNywyMTYsMSkgNTAlLHJnYmEoMzAsODcsMTUzLDEpIDgwJSxyZ2JhKDMwLDg3LDE1MywxKSA5OSUscmdiYSgzMCw4NywxNTMsMCkgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMWU1Nzk5JywgZW5kQ29sb3JzdHI9JyMwMDFlNTc5OScsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoYXItLXNlbGVjdC1jb250YWluZXIubGVmdCAuYi0tY29udGVudCB7XG4gICAgICAgICAgLyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHA6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvIzFlNTc5OSsyMCwyOTg5ZDgrNTAsMWU1Nzk5KzgwJjArMCwxKzAsMSs5OSwxKzk5LDArMTAwICovXG4gICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDMwLDg3LDE1MywxKSAwJSwgcmdiYSgzMCw4NywxNTMsMSkgMjAlLCByZ2JhKDQxLDEzNywyMTYsMSkgNTAlLCByZ2JhKDMwLDg3LDE1MywxKSA4MCUsIHJnYmEoMzAsODcsMTUzLDEpIDk5JSwgcmdiYSgzMCw4NywxNTMsMCkgMTAwJSk7IC8qIEZGMy42LTE1ICovXG4gICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDMwLDg3LDE1MywxKSAwJSxyZ2JhKDMwLDg3LDE1MywxKSAyMCUscmdiYSg0MSwxMzcsMjE2LDEpIDUwJSxyZ2JhKDMwLDg3LDE1MywxKSA4MCUscmdiYSgzMCw4NywxNTMsMSkgOTklLHJnYmEoMzAsODcsMTUzLDApIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMzAsODcsMTUzLDEpIDAlLHJnYmEoMzAsODcsMTUzLDEpIDIwJSxyZ2JhKDQxLDEzNywyMTYsMSkgNTAlLHJnYmEoMzAsODcsMTUzLDEpIDgwJSxyZ2JhKDMwLDg3LDE1MywxKSA5OSUscmdiYSgzMCw4NywxNTMsMCkgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMWU1Nzk5JywgZW5kQ29sb3JzdHI9JyMwMDFlNTc5OScsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhY3QtLWltYWdlLWxpbmsgLmItLWNvbnRlbnQge1xuICAgICAgICAgIC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyNiN2RlZWQrMCw3MWNlZWYrNTAsMjFiNGUyKzUxLGI3ZGVlZCsxMDA7U2hhcGUrMStTdHlsZSAqL1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxODMsMjIyLDIzNyk7IC8qIE9sZCBicm93c2VycyAqL1xuICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDE4MywyMjIsMjM3LDEpIDAlLCByZ2JhKDExMywyMDYsMjM5LDEpIDUwJSwgcmdiYSgzMywxODAsMjI2LDEpIDUxJSwgcmdiYSgxODMsMjIyLDIzNywxKSAxMDAlKTsgLyogRkYzLjYtMTUgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgxODMsMjIyLDIzNywxKSAwJSxyZ2JhKDExMywyMDYsMjM5LDEpIDUwJSxyZ2JhKDMzLDE4MCwyMjYsMSkgNTElLHJnYmEoMTgzLDIyMiwyMzcsMSkgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDE4MywyMjIsMjM3LDEpIDAlLHJnYmEoMTEzLDIwNiwyMzksMSkgNTAlLHJnYmEoMzMsMTgwLDIyNiwxKSA1MSUscmdiYSgxODMsMjIyLDIzNywxKSAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNiN2RlZWQnLCBlbmRDb2xvcnN0cj0nI2I3ZGVlZCcsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhY3QtLWltYWdlLWxpbmsgLmItLWJvcmRlcjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBicm93bjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWN0LS1pbWFnZS1saW5rIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGFyLS1jaGFyLWJveCBpbWcge1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIGhlaWdodDogMTcwcHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhci0tc2VsZWN0LWNvbnRhaW5lci5sZWZ0IC5jaGFyLS1uYW1lIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGFyLS1zZWxlY3QtY29udGFpbmVyLnJpZ2h0IC5jaGFyLS1uYW1lIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9IFxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgLnZlcnN1cyB7XG4gICAgICAgICAgICBwYWRkaW5nOiBpbml0aWFsO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgICB3aWR0aDogaW5pdGlhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnZlcnN1cyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5tb2RhbC1tYWluLmNvbnRhY3Qge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH0gXG4gICAgICAgIH1cblxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIDwvTWFoQ29udGV4dD5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\Contact.js */"
        })));
      }));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./components/ContentBlock.js":
/*!************************************!*\
  !*** ./components/ContentBlock.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var ContentBlock = function ContentBlock(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      contentClass = _ref.contentClass;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "b--container" + " " + classes
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "b--border"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "b--content" + " " + contentClass
  }, children))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: true
  }, "\n  .b--border {\n      border: 1.5px solid white;\n      margin: 0.5px;\n      display: block;\n      padding: 0px;\n    }\n\n  .b--container {\n      border: 1px solid black;\n      // max-width: 160px;\n    }\n\n  .b--content {\n      font-family: 'Press Start 2P';\n      background-color: black;\n      color: white;\n      padding: 0.7rem;\n      border-radius: 6px;\n}\n"));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentBlock);

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
/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentBlock */ "./components/ContentBlock.js");
/* harmony import */ var _Printer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Printer */ "./components/Printer.js");
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Provider */ "./components/Provider.js");


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





var text = "Accumulating years of experience in the digital marketing field and in creative branding, GLOTACOSM was born. The creative initiative led by Antonio Nogueras is the nuanced response to highly creative branding and marketing. It seeks to build creative infrastructures and execute complex marketing tasks that require a combination of different creative skills.^ GLOTACOSM seeks to make a brainstorm look like a controlled F5 Tornado in the eye of a hurricane. It yearns to approach creative heights where consumers never thought possible. And while you’re wondering, its name derives from Latin and Greek to mean “World of Language”. At least it’s easier to pronounce than Schlotsky’s on the first try.";

var Hire =
/*#__PURE__*/
function (_Component) {
  _inherits(Hire, _Component);

  function Hire() {
    var _this;

    _classCallCheck(this, Hire);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Hire).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "printer", function (str) {
      console.log(str.split(""));
      return str.split("");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "skills", function () {
      return ["HTML5", "CSS3", "SASS", "PHP", "JavaScript", "React", "Boostrap", "GraphQL", "mySQL", "Wordpress Custom Theme Building", "Python 3", "Ableton", "Digital Marketing Consultation", "Graphic Design", "Copywriting"];
    });

    _this.state = {
      text: ""
    };
    return _this;
  }

  _createClass(Hire, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "hire--wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Provider__WEBPACK_IMPORTED_MODULE_4__["MahContext"], null, function (context) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Hire Me"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "~ The Legend ~"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "hire--skills"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
          contentClass: "main--info"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "hire--text"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Printer__WEBPACK_IMPORTED_MODULE_3__["default"], {
          animate: true,
          text: text.split("")
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
          classes: "profile"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "http://www.glotacosm.com/pixelme.png",
          alt: "profile-shot",
          className: "jsx-188909387" + " " + "hire--profile-image"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "188909387",
          css: ".hire--wrapper{padding:15px 0;}.hire--wrapper h1,.hire--wrapper h2{font-family:'Press Start 2P';text-align:center;}.hire--wrapper h2{color:white;text-shadow:1px 2px 10px black;}.profile{max-width:460px;max-height:190px;margin-top:15px;}.modal-main.hire{background:url(https://www.glotacosm.com/orientpixel-bg.jpg) 100%/cover no-repeat;overflow-y:scroll;-webkit-scrollbar-width:none;-moz-scrollbar-width:none;-ms-scrollbar-width:none;scrollbar-width:none;-ms-overflow-style:none;height:100%;}.modal-main.hire::-webkit-scrollbar{width:0;height:0;}.hire--skills{margin-top:15px;}.hire--profile-image{height:210px;position:relative;top:12px;}.main--info{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:260px;}.hire--text{padding:0 10px;line-height:1.5;}.hire--skills-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;}.hire--skills-wrapper h2{margin-top:4rem;}.hire--skill{margin:2rem;background-color:black;padding:10px 5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-shadow:1px 2px 0px #ffeb3ba1;width:20%;min-height:160px;color:white;text-align:center;font-family:'Press Start 2P';background:url(https://glotacosm.com/spellbook-pixel.png) 100%/contain no-repeat;color:black;font-size:14px;}@media screen and (max-width:767px){.main--info{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.profile .b--border{width:100%;margin:0 0 0 auto !important;}.profile{max-width:initial;}.hire--skill{margin:1.5rem;}.hire--text{font-size:14px;}.hire--profile-image{margin:0 auto;display:block;}}.button--link{text-align:center;padding:1rem;}.button--link a{width:50px;height:72px;padding:0.6rem;text-transform:capitalize;font-size:20px;-webkit-text-decoration:none;text-decoration:none;font-family:'Press Start 2P';color:black;background-color:green;}.button--link a:hover{color:green;background-color:black;cursor:pointer;}@media screen and (max-width:567px){.hire--wrapper h2{font-size:20px;}.modal-main.hire{height:100%;width:90%;}.hire--wrapper:{width:50%;}.hire--skill{margin:0.6rem;width:40%;font-size:15px;}}@media screen and (max-width:478px){.hire--skill{width:66%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxIaXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FK0IsQUFHOEIsQUFHYyxBQUtqQixBQUlNLEFBTWdFLEFBUzFFLEFBS1EsQUFJSCxBQU1BLEFBS0UsQUFLRixBQVFHLEFBSUosQUFxQm9CLEFBR25CLEFBSU8sQUFJSixBQUlDLEFBSUQsQUFNRSxBQUtQLEFBWUQsQUFRSyxBQUdILEFBSUosQUFJSSxBQVFKLFFBOUhDLEVBbUhiLEFBWUEsQ0FsRW1DLEFBMkJuQixDQTNHbUIsQUF3RFIsQUErREYsQUFXWCxDQXRHUSxDQTREbEIsQUFRZ0IsQUEwQ1IsQ0FsSlYsQUErQ2tCLEFBcURoQixBQW1DRixDQTNIcUIsQUFvQnJCLEFBNEJBLENBaENGLENBZ0VJLEFBa0JhLElBNkJqQixDQXZCbUIsQ0ErQkYsSUExQ2IsQ0F0R2tCLEVBa0NULEFBV1gsQUErREEsRUFsR29CLEVBb0RELEFBK0RKLEdBWGEsQ0ErQjlCLENBOUdFLEFBbURBLEdBaEZBLElBTEEsRUFVQSxDQW1IRixFQS9EaUIsWUFvREUsVUE1RUUsQUFVTixLQW1FVSxHQXJHSCxHQW1DSCxNQVZqQixTQXhCdUIsRUFrRXJCLHdCQWxCdUIsR0FxRE0sYUFsRU4sZ0JBbUVYLFlBQ1csdUJBQzNCLFFBdkc0Qix3QkFDWixBQStDVSxZQTlDeEIsSUFpQ1ksVUFDZCxvREFhc0Msa0NBQ3hCLFVBQ08saUJBQ0wsWUFDTSxrQkFDVyw2QkFDb0QsaUZBQ3JFLFlBQ0csZUFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRvbmlvXFxwb3J0LWNvbmNlcHRcXGNvbXBvbmVudHNcXEhpcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRlbnRCbG9jayBmcm9tICcuL0NvbnRlbnRCbG9jayc7XG5pbXBvcnQgUHJpbnRlciBmcm9tICcuL1ByaW50ZXInO1xuaW1wb3J0IHsgTWFoQ29udGV4dCB9IGZyb20gXCIuL1Byb3ZpZGVyXCI7XG5cblxubGV0IHRleHQgPSBcIkFjY3VtdWxhdGluZyB5ZWFycyBvZiBleHBlcmllbmNlIGluIHRoZSBkaWdpdGFsIG1hcmtldGluZyBmaWVsZCBhbmQgaW4gY3JlYXRpdmUgYnJhbmRpbmcsIEdMT1RBQ09TTSB3YXMgYm9ybi4gVGhlIGNyZWF0aXZlIGluaXRpYXRpdmUgbGVkIGJ5IEFudG9uaW8gTm9ndWVyYXMgaXMgdGhlIG51YW5jZWQgcmVzcG9uc2UgdG8gaGlnaGx5IGNyZWF0aXZlIGJyYW5kaW5nIGFuZCBtYXJrZXRpbmcuIEl0IHNlZWtzIHRvIGJ1aWxkIGNyZWF0aXZlIGluZnJhc3RydWN0dXJlcyBhbmQgZXhlY3V0ZSBjb21wbGV4IG1hcmtldGluZyB0YXNrcyB0aGF0IHJlcXVpcmUgYSBjb21iaW5hdGlvbiBvZiBkaWZmZXJlbnQgY3JlYXRpdmUgc2tpbGxzLl4gR0xPVEFDT1NNIHNlZWtzIHRvIG1ha2UgYSBicmFpbnN0b3JtIGxvb2sgbGlrZSBhIGNvbnRyb2xsZWQgRjUgVG9ybmFkbyBpbiB0aGUgZXllIG9mIGEgaHVycmljYW5lLiBJdCB5ZWFybnMgdG8gYXBwcm9hY2ggY3JlYXRpdmUgaGVpZ2h0cyB3aGVyZSBjb25zdW1lcnMgbmV2ZXIgdGhvdWdodCBwb3NzaWJsZS4gQW5kIHdoaWxlIHlvdeKAmXJlIHdvbmRlcmluZywgaXRzIG5hbWUgZGVyaXZlcyBmcm9tIExhdGluIGFuZCBHcmVlayB0byBtZWFuIOKAnFdvcmxkIG9mIExhbmd1YWdl4oCdLiBBdCBsZWFzdCBpdOKAmXMgZWFzaWVyIHRvIHByb25vdW5jZSB0aGFuIFNjaGxvdHNreeKAmXMgb24gdGhlIGZpcnN0IHRyeS5cIlxuXG5jbGFzcyBIaXJlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZXh0OiBcIlwiXG4gICAgfTtcbiAgfVxuXG4gIHByaW50ZXIgPSAoc3RyKSA9PiB7XG4gICAgY29uc29sZS5sb2coc3RyLnNwbGl0KFwiXCIpKVxuICAgIHJldHVybiBzdHIuc3BsaXQoXCJcIilcbiAgfVxuXG4gIHNraWxscyA9ICgpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAgXCJIVE1MNVwiLFxuICAgICAgXCJDU1MzXCIsXG4gICAgICBcIlNBU1NcIixcbiAgICAgIFwiUEhQXCIsXG4gICAgICBcIkphdmFTY3JpcHRcIixcbiAgICAgIFwiUmVhY3RcIixcbiAgICAgIFwiQm9vc3RyYXBcIixcbiAgICAgIFwiR3JhcGhRTFwiLFxuICAgICAgXCJteVNRTFwiLFxuICAgICAgXCJXb3JkcHJlc3MgQ3VzdG9tIFRoZW1lIEJ1aWxkaW5nXCIsXG4gICAgICBcIlB5dGhvbiAzXCIsXG4gICAgICBcIkFibGV0b25cIixcbiAgICAgIFwiRGlnaXRhbCBNYXJrZXRpbmcgQ29uc3VsdGF0aW9uXCIsXG4gICAgICBcIkdyYXBoaWMgRGVzaWduXCIsXG4gICAgICBcIkNvcHl3cml0aW5nXCJcbiAgICBdXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhpcmUtLXdyYXBwZXJcIj5cbiAgICAgIDxNYWhDb250ZXh0PlxuICAgICAgICB7IGNvbnRleHQgPT4gKFxuXG4gICAgICAgIDw+XG4gICAgICAgIDxoMT5IaXJlIE1lPC9oMT5cbiAgICAgICAgPGgyPn4gVGhlIExlZ2VuZCB+PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaXJlLS1za2lsbHNcIj4gICAgIFxuICAgICAgICAgIHsvKiA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoaXJlLS1sb2dvXCJcbiAgICAgICAgICAgIHNyYz1cImh0dHA6Ly93d3cuZ2xvdGFjb3NtLmNvbS9pbWcvR0xPVEFDT1NNLWJyYW5kbG9nby5wbmdcIlxuICAgICAgICAgICAgYWx0PVwicHJvZmlsZS1zaG90XCJcbiAgICAgICAgICAvPiAqL31cblxuICAgICAgIFxuICAgXG4gICAgICAgIDxDb250ZW50QmxvY2sgY29udGVudENsYXNzPXtcIm1haW4tLWluZm9cIn0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpcmUtLXRleHRcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxQcmludGVyIGFuaW1hdGUgdGV4dD17dGV4dC5zcGxpdChcIlwiKX0vPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDb250ZW50QmxvY2sgY2xhc3Nlcz17XCJwcm9maWxlXCJ9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vd3d3Lmdsb3RhY29zbS5jb20vcGl4ZWxtZS5wbmdcIiBhbHQ9XCJwcm9maWxlLXNob3RcIiBjbGFzc05hbWU9XCJoaXJlLS1wcm9maWxlLWltYWdlXCIgLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAuaGlyZS0td3JhcHBlciB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oaXJlLS13cmFwcGVyIGgxLCAuaGlyZS0td3JhcHBlciBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oaXJlLS13cmFwcGVyIGgyIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlOztcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAycHggMTBweCBibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9maWxlIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQ2MHB4O1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE5MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbC1tYWluLmhpcmUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly93d3cuZ2xvdGFjb3NtLmNvbS9vcmllbnRwaXhlbC1iZy5qcGcpIDEwMCUvY292ZXIgbm8tcmVwZWF0O1xuICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAgICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vZGFsLW1haW4uaGlyZTo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcbiAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oaXJlLS1za2lsbHMge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGlyZS0tcHJvZmlsZS1pbWFnZSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMjEwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wOiAxMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWFpbi0taW5mbyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI2MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGlyZS0tdGV4dCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhpcmUtLXNraWxscy1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oaXJlLS1za2lsbHMtd3JhcHBlciBoMiB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oaXJlLS1za2lsbCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMnJlbTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAycHggMHB4ICNmZmViM2JhMTtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTYwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZ2xvdGFjb3NtLmNvbS9zcGVsbGJvb2stcGl4ZWwucG5nKSAxMDAlL2NvbnRhaW4gbm8tcmVwZWF0O1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBcblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgLm1haW4tLWluZm8ge1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucHJvZmlsZSAuYi0tYm9yZGVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByb2ZpbGUge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogaW5pdGlhbDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5oaXJlLS1za2lsbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxLjVyZW07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaGlyZS0tdGV4dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmhpcmUtLXByb2ZpbGUtaW1hZ2Uge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idXR0b24tLWxpbmsge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idXR0b24tLWxpbmsgYSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDcycHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJztcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYnV0dG9uLS1saW5rIGE6aG92ZXJ7XG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjdweCkge1xuXG4gICAgICAgICAgICAuaGlyZS0td3JhcHBlciBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb2RhbC1tYWluLmhpcmUge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgfSAgXG4gICAgICAgICAgLmhpcmUtLXdyYXBwZXI6IHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhpcmUtLXNraWxsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMC42cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OHB4KSB7XG4gICAgICAgICAgLmhpcmUtLXNraWxsIHtcbiAgICAgICAgICAgIHdpZHRoOiA2NiU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYH1cblxuICAgICAgXG4gICAgPC9zdHlsZT5cbiAgICAgICAgICA8L0NvbnRlbnRCbG9jaz5cbiAgIFxuICAgICAgICAgIDwvQ29udGVudEJsb2NrPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlyZS0tc2tpbGxzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxoMj5+IE15IEJvb2sgb2YgU3BlbGxzIH48L2gyPlxuICAgICAgICAgIFxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJoaXJlLS1za2lsbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7dGhpcy5za2lsbHMoKS5tYXAoIHNraWxsID0+IDxsaSBjbGFzc05hbWU9XCJoaXJlLS1za2lsbFwiIG9uQ2xpY2s9e2NvbnRleHQudXBkYXRlUG9pbnRzKCl9IGtleT17c2tpbGx9Pntza2lsbH08L2xpPil9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+VmlzaXQgdGhlIEdpdEh1YjwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tLWxpbmtcIj5cbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vMmhhbmRzMTBmaW5nZXJzXCI+VmlzaXQ8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTWFoQ29udGV4dD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGlyZTsiXX0= */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\Hire.js */"
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "hire--skills-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "~ My Book of Spells ~"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
          className: "hire--skills-container"
        }, _this2.skills().map(function (skill) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
            className: "hire--skill",
            onClick: context.updatePoints(),
            key: skill
          }, skill);
        })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Visit the GitHub")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "button--link"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          target: "_blank",
          href: "https://github.com/2hands10fingers"
        }, "Visit")));
      }));
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
      content = _ref.content,
      pageClass = _ref.pageClass;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3609688703" + " " + "".concat(show ? "modal display-block" : "modal display-none")
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: handleClose,
    className: "jsx-3609688703" + " " + "close--modal"
  }, "X"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-3609688703" + " " + "modal-main ".concat(!undefined && pageClass)
  }, content), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3609688703",
    css: ".modal-main.jsx-3609688703{background-color:#483d8b;padding:1.5rem;-webkit-animation:fadein-jsx-3609688703 0.5s ease-in-out;animation:fadein-jsx-3609688703 0.5s ease-in-out;}.close--modal.jsx-3609688703{position:relative;z-index:2;border:1px solid white;background-color:black;color:white;font-family:'Press Start 2P';font-size:20px;}@-webkit-keyframes fadeout{0%.jsx-3609688703{opacity:0;}100%.jsx-3609688703{opacity:1;}}@-moz-keyframes fadeout{0%.jsx-3609688703{opacity:0;}100%.jsx-3609688703{opacity:1;}}@-o-keyframes fadeout{0%.jsx-3609688703{opacity:0;}100%.jsx-3609688703{opacity:1;}}@-webkit-keyframes fadeout-jsx-3609688703{0%{opacity:0;}100%{opacity:1;}}@keyframes fadeout-jsx-3609688703{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fadein{0%.jsx-3609688703{opacity:0;}100%.jsx-3609688703{opacity:1;}}@-moz-keyframes fadein{0%.jsx-3609688703{opacity:0;}100%.jsx-3609688703{opacity:1;}}@-o-keyframes fadein{0%.jsx-3609688703{opacity:0;}100%.jsx-3609688703{opacity:1;}}@-webkit-keyframes fadein-jsx-3609688703{0%{opacity:0;}100%{opacity:1;}}@keyframes fadein-jsx-3609688703{0%{opacity:0;}100%{opacity:1;}}@media screen and (max-width:767px){.modal-main.jsx-3609688703{width:90%;}}@media screen and (max-width:567px){.modal-main.jsx-3609688703{width:100%;}.close--modal.jsx-3609688703{font-size:40px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxNb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTa0IsQUFJZ0MsQUFNUCxBQVVKLEFBQ0EsQUFHQSxBQUNBLEFBR0EsQUFDQSxBQUdBLEFBQ0EsQUFJQSxBQUNBLEFBR0EsQUFDQSxBQUdBLEFBQ0EsQUFHQSxBQUNBLEFBTUosQUFNQyxBQUlJLFVBOUNBLEFBQ0EsQUFHQSxBQUNBLEFBR0EsQUFDQSxBQUdBLEFBQ0EsQUFJQSxBQUNBLEFBR0EsQUFDQSxBQUdBLEFBQ0EsQUFHQSxBQUNBLEFBT2pCLENBTUEsSUFJQSxHQXhEWSxPQU5LLEdBT1EsWUFOVyxXQU9YLHVCQUNYLFlBQ2lCLDZCQUNkLGVBQ25CLGdCQVZFIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxNb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTW9kYWwgPSAoeyBoYW5kbGVDbG9zZSwgc2hvdywgY29udGVudCwgcGFnZUNsYXNzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c2hvdyA/IFwibW9kYWwgZGlzcGxheS1ibG9ja1wiIDogXCJtb2RhbCBkaXNwbGF5LW5vbmVcIn1gfT5cbiAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZS0tbW9kYWxcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+WDwvYnV0dG9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgbW9kYWwtbWFpbiAkeyF1bmRlZmluZWQgJiYgcGFnZUNsYXNzfWB9PlxuICAgICAgICB7Y29udGVudH1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICBcbiAgICAubW9kYWwtbWFpbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDgzZDhiO1xuICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cyBlYXNlLWluLW91dDtcbiAgICB9XG5cbiAgICAuY2xvc2UtLW1vZGFsIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCc7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZW91dCB7XG4gICAgMCUgICB7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICB9XG4gIEAtbW96LWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgICAwJSAgIHsgb3BhY2l0eTogMDsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG4gIH1cbiAgQC1vLWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgICAwJSAgIHsgb3BhY2l0eTogMDsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG4gIH1cbiAgQGtleWZyYW1lcyBmYWRlb3V0IHtcbiAgICAwJSAgIHsgb3BhY2l0eTogMDsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG4gIH1cblxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICAwJSAgIHsgb3BhY2l0eTogMDsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgMCUgICB7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICB9XG4gIEAtby1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICAwJSAgIHsgb3BhY2l0eTogMDsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG4gIH1cbiAgQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgIDAlICAgeyBvcGFjaXR5OiAwOyB9XG4gICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbiAgfVxuXG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAubW9kYWwtbWFpbiB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gICAgLm1vZGFsLW1haW4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmNsb3NlLS1tb2RhbCB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuICB9XG4gIFxuICBcbiAgYH1cbiAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiBcbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWwiXX0= */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\Modal.js */"
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
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Provider */ "./components/Provider.js");



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
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3184026863"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-3184026863"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Press+Start+2P",
        rel: "stylesheet",
        className: "jsx-3184026863"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3184026863",
        css: "*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}body{background:url('http://i.imgur.com/F0gBD6c.png') 100%/cover no-repeat;height:100vh;width:100vw;overflow:hidden;}.points{position:absolute;top:0;right:0;color:#76e680;font-family:'Press Start 2P';text-shadow:1px 2px 12px black;font-size:20px;padding:1rem;}.points-txt{font-size:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxNeUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ3lCLEFBRzRDLEFBS21DLEFBU3BELEFBV0gsZUFDakIsR0FYUSxNQUNFLFFBQ00sR0FoQm9CLFdBaUJMLHVCQWhCL0IsQ0FJZSxLQWFrQixRQVpuQixZQUNJLFdBWUQsS0FYakIsVUFZZSxhQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxNeUxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaWRlYmFyIGZyb20gJy4vU2lkZWJhcidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zYXNzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9taXNjLmNzcydcclxuaW1wb3J0IHtNYWhDb250ZXh0fSBmcm9tIFwiLi9Qcm92aWRlclwiO1xyXG5cclxuY29uc3Qge0NvbXBvbmVudH0gPSBSZWFjdDtcclxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XHJcbiAgbWFyZ2luOiAyMCxcclxuICBwYWRkaW5nOiAyMCxcclxuICBib3JkZXI6ICcxcHggc29saWQgI0RERCdcclxufVxyXG5cclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICBzdXBlcigpXHJcbiAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIHNob3c6IGZhbHNlLFxyXG4gICAgdHlwZTogXCJcIixcclxuICAgIGN1cnJlbnRQYWdlOiB1bmRlZmluZWQsXHJcblxyXG4gIH07XHJcbn1cclxuXHJcbiAgc2hvd01vZGFsID0gKCkgPT4geyB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSwgdHlwZTogXCJidWlsdFwiIH0pOyB9O1xyXG4gIGhpZGVNb2RhbCA9ICgpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlLCB0eXBlOiBcIlwiIH0pOyB9O1xyXG4gIHNldFBhZ2UgPSAodGhlUGFnZSkgPT4ge3RoaXMuc2V0U3RhdGUoe2N1cnJlbnRQYWdlOiB0aGVQYWdlIH0pfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIFxyXG4gICAgcmV0dXJuKCAgXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UHJlc3MrU3RhcnQrMlBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAqIHtcclxuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBib2R5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHA6Ly9pLmltZ3VyLmNvbS9GMGdCRDZjLnBuZycpIDEwMCUvY292ZXIgbm8tcmVwZWF0O1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgLnBvaW50cyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBjb2xvcjogIzc2ZTY4MDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJztcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAxMnB4IGJsYWNrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucG9pbnRzLXR4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgICA8TWFoQ29udGV4dD5cclxuICAgICAge2NvbnRleHQgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9pbnRzXCI+XHJcbiAgICAgICAgICB7Y29udGV4dC5kYXRhLnBvaW50cyB9PHNwYW4gY2xhc3NOYW1lPVwicG9pbnRzLXR4dFwiPiBwb2ludHM8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L01haENvbnRleHQ+XHJcbiAgICAgIDxTaWRlYmFyIG1lbnU9e3RoaXMucHJvcHMubWVudX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il19 */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\MyLayout.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Provider__WEBPACK_IMPORTED_MODULE_6__["MahContext"], null, function (context) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3184026863" + " " + "points"
        }, context.data.points, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "jsx-3184026863" + " " + "points-txt"
        }, " points"));
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        menu: this.props.menu
      }));
    }
  }]);

  return Layout;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Printer.js":
/*!*******************************!*\
  !*** ./components/Printer.js ***!
  \*******************************/
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



var Printer =
/*#__PURE__*/
function (_Component) {
  _inherits(Printer, _Component);

  function Printer(props) {
    var _this;

    _classCallCheck(this, Printer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Printer).call(this, props));
    _this.state = {
      arr: _this.props.text,
      theText: ""
    };
    return _this;
  }

  _createClass(Printer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.state.arr.forEach(function (letter, index) {
        return setTimeout(function () {
          _this2.setState(function (state) {
            return {
              theText: state.theText + letter
            };
          });
        }, 30 * index);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var arr = this.state.arr;
      var animate = this.props.animate;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, arr.length && Object.values(this.state.theText).map(function (letter, index) {
        return letter === '^' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: animate ? "lett" : "none"
        }, letter);
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
        jsx: true
      }, "\n      \n\n      .lett {\n        animation: fadein 0.5s ease-in-out;\n      }\n\n      @-webkit-keyframes fadein {\n        0%   { opacity: 0; }\n        100% { opacity: 1; }\n      }\n      @-moz-keyframes fadein {\n        0%   { opacity: 0; }\n        100% { opacity: 1; }\n      }\n      @-o-keyframes fadein {\n        0%   { opacity: 0; }\n        100% { opacity: 1; }\n      }\n      @keyframes fadein {\n        0%   { opacity: 0; }\n        100% { opacity: 1; }\n      }\n      \n      \n      "));
    }
  }]);

  return Printer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Printer);

/***/ }),

/***/ "./components/Provider.js":
/*!********************************!*\
  !*** ./components/Provider.js ***!
  \********************************/
/*! exports provided: default, MahContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MahContext", function() { return MahContext; });
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

var _React = react__WEBPACK_IMPORTED_MODULE_0___default.a,
    Component = _React.Component;
var MyContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

var MyProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(MyProvider, _Component);

  function MyProvider() {
    var _this;

    _classCallCheck(this, MyProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyProvider).call(this));
    _this.state = {
      points: 0
    };
    return _this;
  }

  _createClass(MyProvider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyContext.Provider, {
        value: {
          data: this.state,
          updatePoints: function updatePoints(basePoints) {
            return _this2.setState({
              points: _this2.state.points + basePoints
            });
          }
        }
      }, this.props.children);
    }
  }]);

  return MyProvider;
}(Component);

var MahContext = MyContext.Consumer;
/* harmony default export */ __webpack_exports__["default"] = (MyProvider);


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
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Provider */ "./components/Provider.js");



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
        url: "/hire",
        background: "// https://www.glotacosm.com/orientpixel-bg.jpg"
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "blaher", function (link, updateThePoints) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "".concat(link.children && "sidebar--has-children"),
        onClick: function onClick() {
          link.children && _this.subMenuToggler;
          updateThePoints(100);
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sidebar--link",
        onClick: function onClick() {
          _this.setPage(link.name.toLowerCase());

          updateThePoints(100);
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
      freePoints: true,
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

      var _this$state = this.state,
          freePoints = _this$state.freePoints,
          haschildren = _this$state.haschildren,
          show = _this$state.show,
          pages = _this$state.pages,
          currentPage = _this$state.currentPage;
      var menu = this.props.menu;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Provider__WEBPACK_IMPORTED_MODULE_6__["MahContext"], null, function (context) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, console.log(_this2), console.log(context, "<--"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
          className: "sidebar",
          style: {
            display: "".concat(menu ? "none" : "initial")
          }
        }, _this2.links().map(function (link) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !link.children ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            key: link,
            onClick: function onClick() {
              return _this2.setPage(link.name.toLowerCase());
            }
          }, _this2.blaher(link, context.updatePoints)) : _this2.blaher(link, context.updatePoints), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
            styleId: "48249570",
            css: ".sidebar{".concat(!menu && "display: none", ";}.sidebar--has-children{position:relative;}.sidebar--has-children li{").concat(!haschildren && "display: none;", ";}.sidebar--has-children:before{content:'';top:17px;right:0;border-style:inset;position:absolute;width:0;height:0;border-style:solid;border-width:10px 12.5px 0 12.5px;border-color:white transparent transparent transparent;}.sidebar--has-children .sidebar--links li:hover{background-color:lightgreen;}.sidebar li{cursor:pointer;font-family:'Press Start 2P';text-align:center;list-style:none;padding:0;margin:.5rem auto;width:235px;display:block;color:white;text-shadow:1px 6px 0px black;}.sidebar li:hover{background-color:green;}.sidebar--links,sidebar{padding:0;}.sidebar--link{font-size:36px;}.sidebar--link__child{font-size:18px;}.modal{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);}.work--container{position:absolute;}.modal-main{position:fixed;background:white;right:0;bottom:0;width:80%;height:880px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);overflow:auto;}.display-block{display:block;}.display-none{display:none;}.free-points{font-size:19px;text-transform:uppercase;font-family:'Press Start 2P';text-shadow:0px 3px 1px darkgreen;text-align:center;background-color:forestgreen;color:white;height:50px;display:block;margin:0 auto;border-color:#007500;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxTaWRlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHMkMsQUFJNEIsQUFFdUIsQUFLdkIsQUFFZ0IsQUFjaUIsQUFJYixBQWFRLEFBS2IsQUFJSyxBQUlBLEFBSUEsQUFTRyxBQUdKLEFBYUEsQUFJRCxBQUlFLFVBNUNuQixDQXBDYSxFQTZFWCxDQUpBLENBdkQrQixBQXNCakMsQUFJQSxBQUlVLEFBWVcsQUFxQlEsR0F4RjdCLEFBZ0VFLEVBeERVLENBZ0RELEVBbEJYLEtBN0J1QixBQVl2QixBQW9DYyxDQTVEZCxBQU9BLEdBZ0VZLE9BVkksQ0FXSCxBQW9Cb0IsSUEvRFgsR0FoQkEsRUE0RFIsRUFYb0IsUUFZakIsR0E1Q0csR0FoQlIsSUErRTBCLEdBbEIzQixDQTVERSxLQWdCQyxBQWdDWixFQWFVLEVBNURXLE1BZ0JELENBNkNhLFlBNURHLEVBNkVoQixHQTdETixZQUNFLEdBNkRlLFdBNURqQixHQWpCMkMsU0FrQnpCLE1BNERsQixZQUNBLFlBNURoQixBQTZEa0IsY0FDQSxFQS9FbEIsSUEwRG1CLFFBc0JNLE1BckJ2QixlQXNCRiIsImZpbGUiOiJDOlxcVXNlcnNcXEFudG9uaW9cXHBvcnQtY29uY2VwdFxcY29tcG9uZW50c1xcU2lkZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3RcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTW9kYWwnXHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdCdcclxuaW1wb3J0IFdvcmsgZnJvbSAnLi4vY29tcG9uZW50cy9Xb3JrJ1xyXG5pbXBvcnQgSGlyZSBmcm9tICcuLi9jb21wb25lbnRzL0hpcmUnXHJcbmltcG9ydCB7IE1haENvbnRleHQgfSBmcm9tIFwiLi9Qcm92aWRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZWJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgaGFzY2hpbGRyZW46IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgZnJlZVBvaW50czogdHJ1ZSxcclxuICAgICAgICAgICAgdHlwZTogXCJcIixcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgcGFnZXM6IHtcclxuICAgICAgICAgICAgICAgIFwiY29udGFjdFwiOiA8Q29udGFjdCAvPixcclxuICAgICAgICAgICAgICAgIFwid29ya1wiOiA8V29yayAvPixcclxuICAgICAgICAgICAgICAgIFwiaGlyZVwiOiA8SGlyZSAvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGlua3MgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgeyBuYW1lOiBcIldvcmtcIiwgdXJsOiBcIi93b3JrXCIsIGNoaWxkcmVuOiBbXCJCdWlsdFwiLCBcIk1haW50YWluZWRcIl0gfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkNvbnRhY3RcIiwgdXJsOiBcIi9jb250YWN0XCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkhpcmVcIiwgdXJsOiBcIi9oaXJlXCIsIGJhY2tncm91bmQ6IFwiLy8gaHR0cHM6Ly93d3cuZ2xvdGFjb3NtLmNvbS9vcmllbnRwaXhlbC1iZy5qcGdcIiB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHN1Yk1lbnVUb2dnbGVyID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7aGFzY2hpbGRyZW46ICF0aGlzLnN0YXRlLmhhc2NoaWxkcmVufSlcclxuICAgIFxyXG4gICAgaGlkZU1vZGFsID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlLCB0eXBlOiBcIlwiIH0pO1xyXG4gICAgXHJcbiAgICBzZXRQYWdlID0gdGhlUGFnZSA9PiB0aGlzLnNldFN0YXRlKHtjdXJyZW50UGFnZTogdGhlUGFnZSwgc2hvdzogdHJ1ZSB9KVxyXG4gICAgXHJcbiAgICBibGFoZXIgPSAobGluaywgdXBkYXRlVGhlUG9pbnRzKSA9PiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17YCR7bGluay5jaGlsZHJlbiAmJiBcInNpZGViYXItLWhhcy1jaGlsZHJlblwifWB9IFxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmNoaWxkcmVuICYmIHRoaXMuc3ViTWVudVRvZ2dsZXI7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUaGVQb2ludHMoMTAwKTtcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2lkZWJhci0tbGlua1wiIFxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhZ2UobGluay5uYW1lLnRvTG93ZXJDYXNlKCkpIFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVGhlUG9pbnRzKDEwMClcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHtsaW5rLm5hbWV9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHVsIFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgc2lkZWJhci0tbGlua3NgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bGluay5jaGlsZHJlbiAmJiBsaW5rLmNoaWxkcmVuLm1hcChjaGlsZExpbmsgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2NoaWxkTGlua30gXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7bGluay51cmx9P3NvcnQ9JHtjaGlsZExpbmsudG9Mb3dlckNhc2UoKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci0tbGlua19fY2hpbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZExpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvbGk+XHJcbiAgICApXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtmcmVlUG9pbnRzLCBoYXNjaGlsZHJlbiwgc2hvdywgcGFnZXMsIGN1cnJlbnRQYWdlfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBjb25zdCB7IG1lbnV9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoICBcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxNYWhDb250ZXh0PlxyXG4gICAgICAgICAgICB7IGNvbnRleHQgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzKX1cclxuICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhjb250ZXh0LCBcIjwtLVwiKX1cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXJcIiBzdHlsZT17e2Rpc3BsYXk6IGAke21lbnUgPyBcIm5vbmVcIiA6IFwiaW5pdGlhbFwiIH1gfX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5saW5rcygpLm1hcChsaW5rID0+IChcclxuICAgICAgICAgICAgICAgICAgPD4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWxpbmsuY2hpbGRyZW4gPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0UGFnZShsaW5rLm5hbWUudG9Mb3dlckNhc2UoKSl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmJsYWhlcihsaW5rLCBjb250ZXh0LnVwZGF0ZVBvaW50cyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ibGFoZXIobGluaywgY29udGV4dC51cGRhdGVQb2ludHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyFtZW51ICYmIFwiZGlzcGxheTogbm9uZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItLWhhcy1jaGlsZHJlbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLS1oYXMtY2hpbGRyZW4gbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHshaGFzY2hpbGRyZW4gJiYgXCJkaXNwbGF5OiBub25lO1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItLWhhcy1jaGlsZHJlbjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IGluc2V0OyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEyLjVweCAwIDEyLjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci0taGFzLWNoaWxkcmVuIC5zaWRlYmFyLS1saW5rcyBsaTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhciBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCA2cHggMHB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyIGxpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItLWxpbmtzLCBzaWRlYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLS1saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci0tbGlua19fY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubW9kYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC53b3JrLS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubW9kYWwtbWFpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4ODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6NTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6NTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGlzcGxheS1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXNwbGF5LW5vbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mcmVlLXBvaW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAzcHggMXB4IGRhcmtncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZm9yZXN0Z3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDc1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZnJlZVBvaW50cyAmJiBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmcmVlLXBvaW50c1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQudXBkYXRlUG9pbnRzKDEwMDApOyBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmcmVlUG9pbnRzOiBmYWxzZX0pXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICBDbGljayBIZXJlIGZvciBGcmVlIFBvaW50c1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvTWFoQ29udGV4dD5cclxuICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPE1vZGFsIFxyXG4gICAgICAgICAgICAgICAgc2hvdz17c2hvd30gXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZT17dGhpcy5oaWRlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtwYWdlc1tjdXJyZW50UGFnZV19XHJcbiAgICAgICAgICAgICAgICBwYWdlQ2xhc3M9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\Sidebar.js */"),
            dynamic: [!menu && "display: none", !haschildren && "display: none;"]
          }));
        })), freePoints && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "free-points",
          onClick: function onClick() {
            context.updatePoints(1000);

            _this2.setState({
              freePoints: false
            });
          }
        }, "Click Here for Free Points"));
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
        show: show,
        handleClose: this.hideModal,
        content: pages[currentPage],
        pageClass: currentPage
      })));
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WorkItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkItem */ "./components/WorkItem.js");


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
      var _ref;

      return [{
        title: "Podcast Movemnet 2019",
        subline: "",
        role: "Lead Developer",
        workLink: "https://podcastmovement.com/",
        descrip: "Custom theme built from mock-ups for event-based organization. Setup for the client to make backend changes.",
        img: "",
        stack: "HTML5, Javascript, SASS, PHP, Wordpress, Node",
        category: ["Pofessional"],
        built: true,
        maintained: true
      }, {
        title: "Supply Chain Automation",
        subline: "",
        role: "Lead Developer",
        workLink: "http://supplychain.dev.square205.com",
        descrip: "Supply Chain Automation is a resource website for those interested in Supply Chain Automation to access educational resources. Custom Wordpress theme built from scratch and developed from design mock-ups. Built-in Google Analytics tracking solution to track downloads and page visits according to user meta data. Built majority of front-end. Complete with SASS styles, modals, registry logic, and gated content.",
        img: "",
        stack: "HTML5, JavaScript, SASS, PHP, Wordpress, Python, Node",
        category: ["Professional"],
        built: true,
        maintained: false
      }, {
        title: "Money On Mobile",
        subline: "",
        role: "Lead Developer",
        workLink: "http://moneyonmobile.us/",
        descrip: "Custom theme built from scratch. Three-part website to cater to consumers, retailers, and investors of the largest. MoneyOnMobile is a simple, easy to use mobile SMS or smart phone application that lets you connect with your money at the push of a button. With Over 200 million customers, it is one of India's larget mobile money mangagement system. Complete with twitter feed.",
        img: "",
        stack: "HTML5, JavaScript, SASS, PHP, Wordpress, Node",
        category: ["Professional"],
        built: true,
        maintained: false
      }, {
        title: "Autoquip",
        subline: "",
        role: "Developer",
        workLink: "https://autoquip.com",
        descrip: "Consulted on developer operations, technical challenges, solving coding problems, and managing deployment. Perform maintenace and build new additions.",
        img: "",
        stack: "HTML5, JavaScript, React, Wordpress, PHP, SASS, Node",
        category: ["Professional"],
        built: false,
        maintained: true
      }, {
        title: "Office Furniture Distributors",
        subline: "",
        role: "Lead Developer",
        workLink: "https://ofdist.com/",
        descrip: "eCommerce website to send quotes for various office furniture items. Adapted Wordpress theme from mockups to have its look and feel. Integrated fully-functional eCommerce functions.",
        img: "",
        stack: "HTML5, PHP, WordPress, CSS3, Python, Node",
        category: ["Professional"],
        built: true,
        maintained: true
      }, {
        title: "Physmodo Coach Analytics App",
        subline: "",
        role: "Front-end Developer",
        descrip: "Stylized and programmed React components for an analytics app using Material UI",
        img: "",
        stack: "HTML5, JavaScript, CSS3, SASS, React, Node",
        category: ["Professional"],
        built: true,
        maintained: false
      }, (_ref = {
        title: "color-the-innanet",
        subline: "",
        role: "",
        workLink: "http://glotacosm.com/colortheinnanet"
      }, _defineProperty(_ref, "subline", ""), _defineProperty(_ref, "descrip", "Turned received WiFI packet data into color art to represent the individual packets as an art project."), _defineProperty(_ref, "img", "https://camo.githubusercontent.com/835ccd28a5e335ceac27a53d830220d04785b9b2/68747470733a2f2f692e696d6775722e636f6d2f33514f3064596e2e706e67"), _defineProperty(_ref, "stack", "JavaScript, HTML5, CSS3, Python"), _defineProperty(_ref, "category", ["Fun"]), _defineProperty(_ref, "repo", "https://github.com/2hands10fingers/color-the-internet"), _defineProperty(_ref, "built", true), _defineProperty(_ref, "maintained", false), _ref), {
        title: "movie-pal",
        subline: "",
        role: "",
        workLink: "",
        descrip: "CLI to access omdbapi and through webscraping, Produces a user interface for quickly copying data into spreadsheet rows/columns and also provides front-end API search within the user interface.",
        img: "https://i.imgur.com/bwPMIv1.jpg",
        stack: "JavaScript, SASS, Python",
        category: ["Fun"],
        repo: "https://github.com/2hands10fingers/movie-pal",
        built: true,
        maintained: false
      }, {
        title: "Reddit Image Scraper v1.0-1.1",
        role: "",
        workLink: "",
        subline: "",
        descrip: "Scrapes Reddit images from any public subreddit by a user-specified date range and saves them to your computer.",
        img: "https://i.imgur.com/e2mgH7D.png",
        stack: "Python, Reddit API",
        category: ["Freelance", "Fun"],
        repo: "https://github.com/2hands10fingers/Reddit-Image-Scraper-1.0",
        built: true,
        maintained: false
      }, {
        title: "George Mason University",
        subline: "Institue for Biohealth Innovation",
        role: "Freelance Developer/Teacher",
        workLink: "https://ibi.gmu.edu/",
        descrip: "Aided in building this site and taught the Communications Officer how to code and maintain it.",
        img: "",
        stack: "Wordpress, CSS3, PHP, Python, JavaScript",
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2912696686" + " " + "work--container ".concat(built ? "built" : "maintained")
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-2912696686"
      }, "Work"), this.work().map(function (i, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WorkItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: i.title + "--item",
          title: i.title,
          role: i.role,
          workLink: i.workLink,
          descrip: i.descrip,
          img: i.img,
          stack: i.stack,
          category: i.category,
          subline: i.subline,
          index: index
        });
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2912696686" + " " + "work--filter ".concat(this.state.built)
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "jsx-2912696686"
      }, "Built"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "jsx-2912696686"
      }, "Maintained")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2912696686",
        css: ".modal-main.work{background:url(https://glotacosm.com/img/conifer_forest_inner.png);}.work--thing,.work--thing .b--content{min-height:254px !important;}.work--container h1{margin-top:10rem;}.work--container .workitem--container:nth-child(odd) .workitem--img-text{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.workitem--container .b--container{margin:0 1rem;}.work h1{font-family:'Press Start 2P';color:white;text-shadow:1px 2px 12px black;text-align:center;font-size:36px;text-transform:uppercase;margin-top:12rem;}@media screen and (max-width:1060px){.work--container{position:initial;}.modal-main.work{width:95%;}.work--container .workitem--container:nth-child(odd) .workitem--img-text{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.work--thing{position:relative;top:-20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxXb3JrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNLdUIsQUFHMEUsQUFJckMsQUFHWCxBQUtVLEFBSVgsQUFJYSxBQVdWLEFBSVAsQUFJWSxBQUlKLFVBUHBCLElBbkJBLEdBVEYsQUF3QkUsQ0FZWSxVQXZDaEIsQUF3Q0ksQ0F4QlksWUFDbUIsMEJBckJuQyxLQXNCc0IsTUFpQmxCLFlBaEJlLEdBWGpCLFlBWTJCLHlCQUNSLGlCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXEFudG9uaW9cXHBvcnQtY29uY2VwdFxcY29tcG9uZW50c1xcV29yay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXb3JrSXRlbSBmcm9tIFwiLi9Xb3JrSXRlbVwiO1xuXG5jbGFzcyBXb3JrIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBidWlsdDogZmFsc2UsXG4gICAgICBtYWludGFpbmVkOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnR5cGUgPT09IFwiYnVpbHRcIiA/XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYnVpbHQ6IHRydWUgfSkgOlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1haW50YWluZWQ6IHRydWUgfSlcbiAgfVxuXG5cbiAgd29yayA9ICgpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAgeyB0aXRsZTogXCJQb2RjYXN0IE1vdmVtbmV0IDIwMTlcIixcbiAgICAgICAgc3VibGluZTogXCJcIixcbiAgICAgICAgcm9sZTogXCJMZWFkIERldmVsb3BlclwiLFxuICAgICAgICB3b3JrTGluazogXCJodHRwczovL3BvZGNhc3Rtb3ZlbWVudC5jb20vXCIsXG4gICAgICAgIGRlc2NyaXA6IFwiQ3VzdG9tIHRoZW1lIGJ1aWx0IGZyb20gbW9jay11cHMgZm9yIGV2ZW50LWJhc2VkIG9yZ2FuaXphdGlvbi4gU2V0dXAgZm9yIHRoZSBjbGllbnQgdG8gbWFrZSBiYWNrZW5kIGNoYW5nZXMuXCIsXG4gICAgICAgIGltZzogXCJcIixcbiAgICAgICAgc3RhY2s6IFwiSFRNTDUsIEphdmFzY3JpcHQsIFNBU1MsIFBIUCwgV29yZHByZXNzLCBOb2RlXCIsXG4gICAgICAgIGNhdGVnb3J5OiBbXCJQb2Zlc3Npb25hbFwiXSxcbiAgICAgICAgYnVpbHQ6IHRydWUsXG4gICAgICAgIG1haW50YWluZWQ6IHRydWUsXG4gICAgICB9LHtcbiAgICAgICAgdGl0bGU6IFwiU3VwcGx5IENoYWluIEF1dG9tYXRpb25cIixcbiAgICAgICAgc3VibGluZTogXCJcIixcbiAgICAgICAgcm9sZTogXCJMZWFkIERldmVsb3BlclwiLFxuICAgICAgICB3b3JrTGluazogXCJodHRwOi8vc3VwcGx5Y2hhaW4uZGV2LnNxdWFyZTIwNS5jb21cIixcbiAgICAgICAgZGVzY3JpcDogXCJTdXBwbHkgQ2hhaW4gQXV0b21hdGlvbiBpcyBhIHJlc291cmNlIHdlYnNpdGUgZm9yIHRob3NlIGludGVyZXN0ZWQgaW4gU3VwcGx5IENoYWluIEF1dG9tYXRpb24gdG8gYWNjZXNzIGVkdWNhdGlvbmFsIHJlc291cmNlcy4gQ3VzdG9tIFdvcmRwcmVzcyB0aGVtZSBidWlsdCBmcm9tIHNjcmF0Y2ggYW5kIGRldmVsb3BlZCBmcm9tIGRlc2lnbiBtb2NrLXVwcy4gQnVpbHQtaW4gR29vZ2xlIEFuYWx5dGljcyB0cmFja2luZyBzb2x1dGlvbiB0byB0cmFjayBkb3dubG9hZHMgYW5kIHBhZ2UgdmlzaXRzIGFjY29yZGluZyB0byB1c2VyIG1ldGEgZGF0YS4gQnVpbHQgbWFqb3JpdHkgb2YgZnJvbnQtZW5kLiBDb21wbGV0ZSB3aXRoIFNBU1Mgc3R5bGVzLCBtb2RhbHMsIHJlZ2lzdHJ5IGxvZ2ljLCBhbmQgZ2F0ZWQgY29udGVudC5cIixcbiAgICAgICAgaW1nOiBcIlwiLFxuICAgICAgICBzdGFjazogXCJIVE1MNSwgSmF2YVNjcmlwdCwgU0FTUywgUEhQLCBXb3JkcHJlc3MsIFB5dGhvbiwgTm9kZVwiLFxuICAgICAgICBjYXRlZ29yeTogW1wiUHJvZmVzc2lvbmFsXCJdLFxuICAgICAgICBidWlsdDogdHJ1ZSxcbiAgICAgICAgbWFpbnRhaW5lZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIk1vbmV5IE9uIE1vYmlsZVwiLFxuICAgICAgICBzdWJsaW5lOiBcIlwiLFxuICAgICAgICByb2xlOiBcIkxlYWQgRGV2ZWxvcGVyXCIsXG4gICAgICAgIHdvcmtMaW5rOiBcImh0dHA6Ly9tb25leW9ubW9iaWxlLnVzL1wiLFxuICAgICAgICBkZXNjcmlwOiBcIkN1c3RvbSB0aGVtZSBidWlsdCBmcm9tIHNjcmF0Y2guIFRocmVlLXBhcnQgd2Vic2l0ZSB0byBjYXRlciB0byBjb25zdW1lcnMsIHJldGFpbGVycywgYW5kIGludmVzdG9ycyBvZiB0aGUgbGFyZ2VzdC4gTW9uZXlPbk1vYmlsZSBpcyBhIHNpbXBsZSwgZWFzeSB0byB1c2UgbW9iaWxlIFNNUyBvciBzbWFydCBwaG9uZSBhcHBsaWNhdGlvbiB0aGF0IGxldHMgeW91IGNvbm5lY3Qgd2l0aCB5b3VyIG1vbmV5IGF0IHRoZSBwdXNoIG9mIGEgYnV0dG9uLiBXaXRoIE92ZXIgMjAwIG1pbGxpb24gY3VzdG9tZXJzLCBpdCBpcyBvbmUgb2YgSW5kaWEncyBsYXJnZXQgbW9iaWxlIG1vbmV5IG1hbmdhZ2VtZW50IHN5c3RlbS4gQ29tcGxldGUgd2l0aCB0d2l0dGVyIGZlZWQuXCIsXG4gICAgICAgIGltZzogXCJcIixcbiAgICAgICAgc3RhY2s6IFwiSFRNTDUsIEphdmFTY3JpcHQsIFNBU1MsIFBIUCwgV29yZHByZXNzLCBOb2RlXCIsXG4gICAgICAgIGNhdGVnb3J5OiBbXCJQcm9mZXNzaW9uYWxcIl0sXG4gICAgICAgIGJ1aWx0OiB0cnVlLFxuICAgICAgICBtYWludGFpbmVkOiBmYWxzZVxuICAgICAgfSx7XG4gICAgICAgIHRpdGxlOiBcIkF1dG9xdWlwXCIsXG4gICAgICAgIHN1YmxpbmU6IFwiXCIsXG4gICAgICAgIHJvbGU6IFwiRGV2ZWxvcGVyXCIsXG4gICAgICAgIHdvcmtMaW5rOiBcImh0dHBzOi8vYXV0b3F1aXAuY29tXCIsXG4gICAgICAgIGRlc2NyaXA6IFwiQ29uc3VsdGVkIG9uIGRldmVsb3BlciBvcGVyYXRpb25zLCB0ZWNobmljYWwgY2hhbGxlbmdlcywgc29sdmluZyBjb2RpbmcgcHJvYmxlbXMsIGFuZCBtYW5hZ2luZyBkZXBsb3ltZW50LiBQZXJmb3JtIG1haW50ZW5hY2UgYW5kIGJ1aWxkIG5ldyBhZGRpdGlvbnMuXCIsXG4gICAgICAgIGltZzogXCJcIixcbiAgICAgICAgc3RhY2s6IFwiSFRNTDUsIEphdmFTY3JpcHQsIFJlYWN0LCBXb3JkcHJlc3MsIFBIUCwgU0FTUywgTm9kZVwiLFxuICAgICAgICBjYXRlZ29yeTogW1wiUHJvZmVzc2lvbmFsXCJdLFxuICAgICAgICBidWlsdDogZmFsc2UsXG4gICAgICAgIG1haW50YWluZWQ6IHRydWVcbiAgICAgIH0se1xuICAgICAgICB0aXRsZTogXCJPZmZpY2UgRnVybml0dXJlIERpc3RyaWJ1dG9yc1wiLFxuICAgICAgICBzdWJsaW5lOiBcIlwiLFxuICAgICAgICByb2xlOiBcIkxlYWQgRGV2ZWxvcGVyXCIsXG4gICAgICAgIHdvcmtMaW5rOiBcImh0dHBzOi8vb2ZkaXN0LmNvbS9cIixcbiAgICAgICAgZGVzY3JpcDogXCJlQ29tbWVyY2Ugd2Vic2l0ZSB0byBzZW5kIHF1b3RlcyBmb3IgdmFyaW91cyBvZmZpY2UgZnVybml0dXJlIGl0ZW1zLiBBZGFwdGVkIFdvcmRwcmVzcyB0aGVtZSBmcm9tIG1vY2t1cHMgdG8gaGF2ZSBpdHMgbG9vayBhbmQgZmVlbC4gSW50ZWdyYXRlZCBmdWxseS1mdW5jdGlvbmFsIGVDb21tZXJjZSBmdW5jdGlvbnMuXCIsXG4gICAgICAgIGltZzogXCJcIixcbiAgICAgICAgc3RhY2s6IFwiSFRNTDUsIFBIUCwgV29yZFByZXNzLCBDU1MzLCBQeXRob24sIE5vZGVcIixcbiAgICAgICAgY2F0ZWdvcnk6IFtcIlByb2Zlc3Npb25hbFwiXSxcbiAgICAgICAgYnVpbHQ6IHRydWUsXG4gICAgICAgIG1haW50YWluZWQ6IHRydWUsXG4gICAgICB9LHtcbiAgICAgICAgdGl0bGU6IFwiUGh5c21vZG8gQ29hY2ggQW5hbHl0aWNzIEFwcFwiLFxuICAgICAgICBzdWJsaW5lOiBcIlwiLFxuICAgICAgICByb2xlOiBcIkZyb250LWVuZCBEZXZlbG9wZXJcIixcbiAgICAgICAgZGVzY3JpcDogXCJTdHlsaXplZCBhbmQgcHJvZ3JhbW1lZCBSZWFjdCBjb21wb25lbnRzIGZvciBhbiBhbmFseXRpY3MgYXBwIHVzaW5nIE1hdGVyaWFsIFVJXCIsXG4gICAgICAgIGltZzogXCJcIixcbiAgICAgICAgc3RhY2s6IFwiSFRNTDUsIEphdmFTY3JpcHQsIENTUzMsIFNBU1MsIFJlYWN0LCBOb2RlXCIsXG4gICAgICAgIGNhdGVnb3J5OiBbXCJQcm9mZXNzaW9uYWxcIl0sXG4gICAgICAgIGJ1aWx0OiB0cnVlLFxuICAgICAgICBtYWludGFpbmVkOiBmYWxzZVxuICAgICAgfSx7XG4gICAgICAgIHRpdGxlOiBcImNvbG9yLXRoZS1pbm5hbmV0XCIsXG4gICAgICAgIHN1YmxpbmU6IFwiXCIsXG4gICAgICAgIHJvbGU6IFwiXCIsXG4gICAgICAgIHdvcmtMaW5rOiBcImh0dHA6Ly9nbG90YWNvc20uY29tL2NvbG9ydGhlaW5uYW5ldFwiLFxuICAgICAgICBzdWJsaW5lOiBcIlwiLFxuICAgICAgICBkZXNjcmlwOiBcIlR1cm5lZCByZWNlaXZlZCBXaUZJIHBhY2tldCBkYXRhIGludG8gY29sb3IgYXJ0IHRvIHJlcHJlc2VudCB0aGUgaW5kaXZpZHVhbCBwYWNrZXRzIGFzIGFuIGFydCBwcm9qZWN0LlwiLFxuICAgICAgICBpbWc6IFwiaHR0cHM6Ly9jYW1vLmdpdGh1YnVzZXJjb250ZW50LmNvbS84MzVjY2QyOGE1ZTMzNWNlYWMyN2E1M2Q4MzAyMjBkMDQ3ODViOWIyLzY4NzQ3NDcwNzMzYTJmMmY2OTJlNjk2ZDY3NzU3MjJlNjM2ZjZkMmYzMzUxNGYzMDY0NTk2ZTJlNzA2ZTY3XCIsXG4gICAgICAgIHN0YWNrOiBcIkphdmFTY3JpcHQsIEhUTUw1LCBDU1MzLCBQeXRob25cIixcbiAgICAgICAgY2F0ZWdvcnk6IFtcIkZ1blwiXSxcbiAgICAgICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vMmhhbmRzMTBmaW5nZXJzL2NvbG9yLXRoZS1pbnRlcm5ldFwiLFxuICAgICAgICBidWlsdDogdHJ1ZSxcbiAgICAgICAgbWFpbnRhaW5lZDogZmFsc2UsXG4gICAgICB9LHtcbiAgICAgICAgdGl0bGU6IFwibW92aWUtcGFsXCIsXG4gICAgICAgIHN1YmxpbmU6IFwiXCIsXG4gICAgICAgIHJvbGU6IFwiXCIsXG4gICAgICAgIHdvcmtMaW5rOiBcIlwiLFxuICAgICAgICBkZXNjcmlwOiBcIkNMSSB0byBhY2Nlc3Mgb21kYmFwaSBhbmQgdGhyb3VnaCB3ZWJzY3JhcGluZywgUHJvZHVjZXMgYSB1c2VyIGludGVyZmFjZSBmb3IgcXVpY2tseSBjb3B5aW5nIGRhdGEgaW50byBzcHJlYWRzaGVldCByb3dzL2NvbHVtbnMgYW5kIGFsc28gcHJvdmlkZXMgZnJvbnQtZW5kIEFQSSBzZWFyY2ggd2l0aGluIHRoZSB1c2VyIGludGVyZmFjZS5cIixcbiAgICAgICAgaW1nOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vYndQTUl2MS5qcGdcIixcbiAgICAgICAgc3RhY2s6IFwiSmF2YVNjcmlwdCwgU0FTUywgUHl0aG9uXCIsXG4gICAgICAgIGNhdGVnb3J5OiBbXCJGdW5cIl0sXG4gICAgICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tLzJoYW5kczEwZmluZ2Vycy9tb3ZpZS1wYWxcIixcbiAgICAgICAgYnVpbHQ6IHRydWUsXG4gICAgICAgIG1haW50YWluZWQ6IGZhbHNlXG4gICAgICB9LHtcbiAgICAgICAgdGl0bGU6IFwiUmVkZGl0IEltYWdlIFNjcmFwZXIgdjEuMC0xLjFcIixcbiAgICAgICAgcm9sZTogXCJcIixcbiAgICAgICAgd29ya0xpbms6IFwiXCIsXG4gICAgICAgIHN1YmxpbmU6IFwiXCIsXG4gICAgICAgIGRlc2NyaXA6IFwiU2NyYXBlcyBSZWRkaXQgaW1hZ2VzIGZyb20gYW55IHB1YmxpYyBzdWJyZWRkaXQgYnkgYSB1c2VyLXNwZWNpZmllZCBkYXRlIHJhbmdlIGFuZCBzYXZlcyB0aGVtIHRvIHlvdXIgY29tcHV0ZXIuXCIsXG4gICAgICAgIGltZzogXCJodHRwczovL2kuaW1ndXIuY29tL2UybWdIN0QucG5nXCIsXG4gICAgICAgIHN0YWNrOiBcIlB5dGhvbiwgUmVkZGl0IEFQSVwiLFxuICAgICAgICBjYXRlZ29yeTogW1wiRnJlZWxhbmNlXCIsIFwiRnVuXCJdLFxuICAgICAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS8yaGFuZHMxMGZpbmdlcnMvUmVkZGl0LUltYWdlLVNjcmFwZXItMS4wXCIsXG4gICAgICAgIGJ1aWx0OiB0cnVlLFxuICAgICAgICBtYWludGFpbmVkOiBmYWxzZVxuICAgICAgfSx7XG4gICAgICAgIHRpdGxlOiBcIkdlb3JnZSBNYXNvbiBVbml2ZXJzaXR5XCIsXG4gICAgICAgIHN1YmxpbmU6IFwiSW5zdGl0dWUgZm9yIEJpb2hlYWx0aCBJbm5vdmF0aW9uXCIsXG4gICAgICAgIHJvbGU6IFwiRnJlZWxhbmNlIERldmVsb3Blci9UZWFjaGVyXCIsXG4gICAgICAgIHdvcmtMaW5rOiBcImh0dHBzOi8vaWJpLmdtdS5lZHUvXCIsXG4gICAgICAgIGRlc2NyaXA6IFwiQWlkZWQgaW4gYnVpbGRpbmcgdGhpcyBzaXRlIGFuZCB0YXVnaHQgdGhlIENvbW11bmljYXRpb25zIE9mZmljZXIgaG93IHRvIGNvZGUgYW5kIG1haW50YWluIGl0LlwiLFxuICAgICAgICBpbWc6IFwiXCIsXG4gICAgICAgIHN0YWNrOiBcIldvcmRwcmVzcywgQ1NTMywgUEhQLCBQeXRob24sIEphdmFTY3JpcHRcIixcbiAgICAgICAgY2F0ZWdvcnk6IFtcIlByb2Zlc3Npb25hbFwiLCBcIkZyZWVsYW5jZVwiXSxcbiAgICAgICAgcmVwbzogXCJcIixcbiAgICAgICAgYnVpbHQ6IHRydWUsXG4gICAgICAgIG1haW50YWluZWQ6IHRydWVcbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2J1aWx0LCBtYWludGFpbmVkfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgXG4gICAgICAgIGNsYXNzTmFtZT17YHdvcmstLWNvbnRhaW5lciAke2J1aWx0ID8gXCJidWlsdFwiIDogXCJtYWludGFpbmVkXCJ9YH1cbiAgICAgID5cbiAgICAgIDxoMT5Xb3JrPC9oMT5cbiAgICAgIHt0aGlzLndvcmsoKS5tYXAoIChpLCBpbmRleCkgPT5cbiAgICAgICAgPFdvcmtJdGVtXG4gICAgICAgICAga2V5PXtpLnRpdGxlICsgXCItLWl0ZW1cIn1cbiAgICAgICAgICB0aXRsZT17aS50aXRsZX1cbiAgICAgICAgICByb2xlPXtpLnJvbGV9XG4gICAgICAgICAgd29ya0xpbms9e2kud29ya0xpbmt9XG4gICAgICAgICAgZGVzY3JpcD17aS5kZXNjcmlwfVxuICAgICAgICAgIGltZz17aS5pbWd9XG4gICAgICAgICAgc3RhY2s9e2kuc3RhY2t9XG4gICAgICAgICAgY2F0ZWdvcnk9e2kuY2F0ZWdvcnl9XG4gICAgICAgICAgc3VibGluZT17aS5zdWJsaW5lfVxuICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICBcbiAgICAgICAgLz5cblxuICAgICAgKX1cbiAgICA8ZGl2IGNsYXNzTmFtZT17YHdvcmstLWZpbHRlciAke3RoaXMuc3RhdGUuYnVpbHR9YH0+XG4gICAgIDxidXR0b24+QnVpbHQ8L2J1dHRvbj5cbiAgICAgPGJ1dHRvbj5NYWludGFpbmVkPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAubW9kYWwtbWFpbi53b3JrIHtcbiAgICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2dsb3RhY29zbS5jb20vaW1nL2NvbmlmZXJfZm9yZXN0X2lubmVyLnBuZyk7XG4gICAgfVxuICAgICAgXG4gICAgICAud29yay0tdGhpbmcsIC53b3JrLS10aGluZyAuYi0tY29udGVudHtcbiAgICAgICAgbWluLWhlaWdodDogMjU0cHggIWltcG9ydGFudDsgXG4gICAgfVxuICAgICAgLndvcmstLWNvbnRhaW5lciBoMSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcmVtO1xuICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgLndvcmstLWNvbnRhaW5lciAud29ya2l0ZW0tLWNvbnRhaW5lcjpudGgtY2hpbGQob2RkKSAud29ya2l0ZW0tLWltZy10ZXh0IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgfVxuXG4gICAgICAgIC53b3JraXRlbS0tY29udGFpbmVyIC5iLS1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAud29yayBoMSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggMnB4IDEycHggYmxhY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMnJlbTtcbiAgICAgICB9XG5cbiAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpIHtcbiAgICAgICAgLndvcmstLWNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICAubW9kYWwtbWFpbi53b3JrIHtcbiAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmstLWNvbnRhaW5lciAud29ya2l0ZW0tLWNvbnRhaW5lcjpudGgtY2hpbGQob2RkKSAud29ya2l0ZW0tLWltZy10ZXh0IHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmstLXRoaW5nIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAtMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgV29yazsiXX0= */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\Work.js */"
      }));
    }
  }]);

  return Work;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentBlock */ "./components/ContentBlock.js");




var WorkItem = function WorkItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1100357315" + " " + "workitem--container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1100357315" + " " + "workitem--title ".concat(props.subline && 'with-subline')
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1100357315"
  }, props.title), props.subline && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1100357315"
  }, props.subline)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1100357315" + " " + "workitem--img-text"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    href: props.workLink ? props.workLink : props.repo,
    className: "jsx-1100357315"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: props.img ? props.img : "https://via.placeholder.com/500x281",
    alt: props.title,
    className: "jsx-1100357315"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    classes: "work--thing"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1100357315" + " " + "work--description"
  }, props.descrip))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1100357315" + " " + "work--meta"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1100357315" + " " + "work--meta__left"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1100357315" + " " + "work-role-cat"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1100357315" + " " + "work--role"
  }, "Role:", props.role), props.category.length < 2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1100357315"
  }, "Category") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1100357315"
  }, "Categories")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1100357315"
  }, props.category.map(function (category) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: category,
      className: "jsx-1100357315"
    }, category);
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1100357315" + " " + "work--meta__right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    href: props.workLink ? props.workLink : props.repo,
    className: "jsx-1100357315"
  }, props.workLink ? "Visit Site" : "Visit Repo")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1100357315" + " " + "work--stack"
  }, props.stack.split(", ").map(function (stack, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      key: index,
      src: "https://glotacosm.com/img/icons/".concat(stack.toLowerCase(), ".svg"),
      className: "jsx-1100357315"
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1100357315",
    css: ".workitem--container.jsx-1100357315 p.jsx-1100357315,.workitem--container.jsx-1100357315 h2.jsx-1100357315,.workitem--container.jsx-1100357315 h3.jsx-1100357315,.workitem--container.jsx-1100357315 li.jsx-1100357315,.workitem--container.jsx-1100357315 a.jsx-1100357315{font-family:'Press Start 2P';color:white;}.work--stack.jsx-1100357315{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;background-color:#e672b1;border-radius:13px;padding:1rem;border-top-left-radius:0px;border-top-right-radius:0px;margin:1rem 0rem;}.workitem--container.jsx-1100357315 h2.jsx-1100357315{margin:0;}.workitem--container.jsx-1100357315 h3.jsx-1100357315{margin:0rem;font-size:15px;}.workitem--title.jsx-1100357315{text-align:center;text-shadow:1px 2px 12px black;background-color:#e672b1;line-height:70px;height:70px;border-top-right-radius:13px;border-top-left-radius:13px;border-bottom:3px dashed white;margin-bottom:1rem;}.workitem--title.with-subline.jsx-1100357315{line-height:35px;}.work--meta__right.jsx-1100357315{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.work--meta.jsx-1100357315{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.work--meta__right.jsx-1100357315 a.jsx-1100357315{-webkit-text-decoration:none;text-decoration:none;background-color:pink;height:30px;line-height:30px;padding:1rem;border:2px solid pink;-webkit-transition:0.3s ease-in-out;transition:0.3s ease-in-out;}.work--meta__right.jsx-1100357315 a.jsx-1100357315:hover{cursor:pointer;background-color:white;border:2px solid pink;color:pink;}.workitem--container.jsx-1100357315{margin:5rem 1rem;border-radius:13px;background-color:#5142ab63;}.workitem--img-text.jsx-1100357315{margin-bottom:1rem !important;}.workitem--img-text.jsx-1100357315 img.jsx-1100357315{margin:0 1rem;width:500px;height:281px;border:2px solid white;}.work--stack.jsx-1100357315{border-top:3px dashed white;}.work--stack.jsx-1100357315 img.jsx-1100357315{width:40px;height:40px;}.work--container.jsx-1100357315{max-width:1140px;margin:0 auto;}.workitem--img-text.jsx-1100357315{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.work--description.jsx-1100357315{padding:1rem;}.workitem--container.jsx-1100357315 .b--content.jsx-1100357315{height:254px;}.workitem--container.jsx-1100357315 .b--container.jsx-1100357315{height:254px;}@media screen and (max-width:1060px){.workitem--img-text.jsx-1100357315{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.modal-main.work.jsx-1100357315{width:100%;}.work--container.jsx-1100357315{position:initial;}.workitem--title.jsx-1100357315{height:auto;line-height:46px;}.workitem--img-text.jsx-1100357315 img.jsx-1100357315{width:calc(500px * 0.8);height:calc(281px * 0.8);}.work.jsx-1100357315 h1.jsx-1100357315{margin-top:1rem;}.work--meta.jsx-1100357315{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.work--meta__right.jsx-1100357315{text-align:center;}}@media screen and (max-width:460px){.workitem--img-text.jsx-1100357315 img.jsx-1100357315{width:calc(500px * 0.6);height:calc(281px * 0.6);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxXb3JrSXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRGtCLEFBUXNDLEFBS2hCLEFBV0osQUFJRyxBQU1NLEFBWUQsQUFJSixBQU1BLEFBS1EsQUFVUixBQU9JLEFBU2EsQUFJaEIsQUFPYyxBQUlqQixBQUtNLEFBS0osQUFLQSxBQUlBLEFBSUEsQUFLVyxBQUlYLEFBSU0sQUFJTCxBQUtZLEFBS1IsQUFJTSxBQUlKLEFBTU0sU0E3STVCLEVBOEVjLEFBZ0NaLENBMUdlLEFBa0hJLENBekJyQixBQUlBLEFBSUEsQ0FsQ2MsQ0FwQlMsQ0FpRnJCLENBMUdGLEFBZ0NxQixBQTZCTCxBQStCZCxDQXhHK0IsQUE4SC9CLEtBekRGLENBNEM2QixBQW1CQSxFQTFFZCxDQTlEZixDQW9FQSxDQTFGYyxBQXVJWixDQXhERixDQXFCQSxLQTdCNkIsRUFQUCxDQXFCRyxFQXBGekIsUUEwQjJCLEFBaUh6QixBQW1CQSxDQTFHc0IsVUFZYixFQXFCWCxDQWJBLFFBUEYsQ0FaZ0IsRUFqRGlCLEFBdUJaLEFBY0ssQUFNTyxBQXdEVixJQWtCbkIsQUEwQkEsTUE3RmlCLE9BMUJMLFVBMkJDLEVBMUJnQixXQTJCUCxrQkExQk0sSUE0QmpDLGdCQWhCNEIsUUFYUSxPQXlFakMsd0JBeEVxQixNQTNCTSxBQTJDM0IsR0FVRixVQXpCRSxZQTNCcUIsbUJBQ04sVUFvQ2YsR0FuQzZCLDJCQUNDLDRCQUNYLGlCQUNuQiIsImZpbGUiOiJDOlxcVXNlcnNcXEFudG9uaW9cXHBvcnQtY29uY2VwdFxcY29tcG9uZW50c1xcV29ya0l0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGVudEJsb2NrIGZyb20gJy4vQ29udGVudEJsb2NrJztcblxuY29uc3QgV29ya0l0ZW0gPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2B3b3JraXRlbS0tY29udGFpbmVyYH0+XG4gIDxkaXYgY2xhc3NOYW1lPXtgd29ya2l0ZW0tLXRpdGxlICR7cHJvcHMuc3VibGluZSAmJiAnd2l0aC1zdWJsaW5lJ31gfT5cbiAgICA8aDI+e3Byb3BzLnRpdGxlfTwvaDI+XG4gICAge3Byb3BzLnN1YmxpbmUgJiYgPGgzPntwcm9wcy5zdWJsaW5lfTwvaDM+fVxuICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtpdGVtLS1pbWctdGV4dFwiPlxuICAgICAgPGFcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgXG4gICAgICAgIGhyZWY9e3Byb3BzLndvcmtMaW5rID8gcHJvcHMud29ya0xpbmsgOiBwcm9wcy5yZXBvIH0+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e3Byb3BzLmltZyA/IHByb3BzLmltZyA6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzUwMHgyODFcIn0gXG4gICAgICAgICAgYWx0PXtwcm9wcy50aXRsZX0gLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8Q29udGVudEJsb2NrIGNsYXNzZXM9XCJ3b3JrLS10aGluZ1wiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndvcmstLWRlc2NyaXB0aW9uXCI+e3Byb3BzLmRlc2NyaXB9PC9wPlxuICAgICAgICA8L0NvbnRlbnRCbG9jaz5cbiAgICAgIDwvZGl2PlxuICAgXG4gICAgICA8Q29udGVudEJsb2NrPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLS1tZXRhXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yay0tbWV0YV9fbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmstcm9sZS1jYXRcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3b3JrLS1yb2xlXCI+Um9sZTp7cHJvcHMucm9sZX08L3A+XG4gICAgICAgICAge3Byb3BzLmNhdGVnb3J5Lmxlbmd0aCA8IDIgPyA8cD5DYXRlZ29yeTwvcD4gOiA8cD5DYXRlZ29yaWVzPC9wPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8dWw+XG4gICAgICAgICAge3Byb3BzLmNhdGVnb3J5Lm1hcCggY2F0ZWdvcnkgPT4gPGxpIGtleT17Y2F0ZWdvcnl9PntjYXRlZ29yeX08L2xpPiApfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLS1tZXRhX19yaWdodFwiPlxuICAgICAgICA8YVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIFxuICAgICAgICAgIGhyZWY9e3Byb3BzLndvcmtMaW5rID8gcHJvcHMud29ya0xpbmsgOiBwcm9wcy5yZXBvIH0+XG4gICAgICAgICAge3Byb3BzLndvcmtMaW5rID8gXCJWaXNpdCBTaXRlXCIgOiBcIlZpc2l0IFJlcG9cIn1cbiAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRlbnRCbG9jaz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIndvcmstLXN0YWNrXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgcHJvcHMuc3RhY2suc3BsaXQoXCIsIFwiKS5tYXAoIChzdGFjaywgaW5kZXgpID0+IDxpbWcga2V5PXtpbmRleH0gc3JjPXtgaHR0cHM6Ly9nbG90YWNvc20uY29tL2ltZy9pY29ucy8ke3N0YWNrLnRvTG93ZXJDYXNlKCl9LnN2Z2B9IC8+KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9wPlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAud29ya2l0ZW0tLWNvbnRhaW5lciBwLFxuICAgICAgLndvcmtpdGVtLS1jb250YWluZXIgaDIsXG4gICAgICAud29ya2l0ZW0tLWNvbnRhaW5lciBoMyxcbiAgICAgIC53b3JraXRlbS0tY29udGFpbmVyIGxpLFxuICAgICAgLndvcmtpdGVtLS1jb250YWluZXIgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIC53b3JrLS1zdGFjayB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3MmIxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgICAgIG1hcmdpbjogMXJlbSAwcmVtO1xuICAgICAgfVxuXG4gICAgICAud29ya2l0ZW0tLWNvbnRhaW5lciBoMiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgLndvcmtpdGVtLS1jb250YWluZXIgaDMge1xuICAgICAgICBtYXJnaW46IDByZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcblxuICAgICAgfVxuXG4gICAgICAud29ya2l0ZW0tLXRpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAxMnB4IGJsYWNrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3MmIxO1xuICAgICAgICBsaW5lLWhlaWdodDogNzBweDtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTNweDtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IGRhc2hlZCB3aGl0ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTsgIFxuICAgICAgfVxuXG4gICAgICAud29ya2l0ZW0tLXRpdGxlLndpdGgtc3VibGluZSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgfVxuXG4gICAgICAud29yay0tbWV0YV9fcmlnaHQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLndvcmstLW1ldGEge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIH1cblxuICAgICAgLndvcmstLW1ldGFfX3JpZ2h0IGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHBpbms7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXRcbiAgICB9XG5cbiAgICAud29yay0tbWV0YV9fcmlnaHQgYTpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHBpbms7XG4gICAgICBjb2xvcjogcGluaztcbiAgICB9XG5cbiAgICAgIC53b3JraXRlbS0tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiA1cmVtIDFyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTQyYWI2MztcbiAgICAgICBcbiAgICAgIH1cblxuICAgXG4gICAgICBcbiAgICAgIC53b3JraXRlbS0taW1nLXRleHQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC53b3JraXRlbS0taW1nLXRleHQgaW1nIHtcbiAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgaGVpZ2h0OiAyODFweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIC53b3JrLS1zdGFjayB7XG4gICAgICAgIGJvcmRlci10b3A6IDNweCBkYXNoZWQgd2hpdGU7XG4gICAgICB9XG5cbiAgICAgLndvcmstLXN0YWNrIGltZyB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB9XG5cbiAgICAgIC53b3JrLS1jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDExNDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG5cbiAgICAgIC53b3JraXRlbS0taW1nLXRleHQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAud29yay0tZGVzY3JpcHRpb24ge1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAud29ya2l0ZW0tLWNvbnRhaW5lciAuYi0tY29udGVudCB7XG4gICAgICAgIGhlaWdodDogMjU0cHg7XG4gICAgICB9XG5cbiAgICAgIC53b3JraXRlbS0tY29udGFpbmVyIC5iLS1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDI1NHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpIHtcbiAgICAgICAgLndvcmtpdGVtLS1pbWctdGV4dCB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb2RhbC1tYWluLndvcmsge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmstLWNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICAud29ya2l0ZW0tLXRpdGxlIHtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud29ya2l0ZW0tLWltZy10ZXh0IGltZyB7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoNTAwcHggKiAwLjgpO1xuICAgICAgICAgIGhlaWdodDogY2FsYygyODFweCAqIDAuOCk7XG4gICAgICAgIH1cblxuICAgICAgICAud29yayBoMSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3JrLS1tZXRhIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmstLW1ldGFfX3JpZ2h0IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgICAgICAgLndvcmtpdGVtLS1pbWctdGV4dCBpbWcge1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDUwMHB4ICogMC42KTtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMjgxcHggKiAwLjYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcblxuICAgICAgXG4gICAgICBgfVxuXG4gICAgICA8L3N0eWxlPlxuICBcbiAgICA8L2Rpdj5cbiAgKVxuXG4gIGV4cG9ydCBkZWZhdWx0IFdvcmtJdGVtO1xuIl19 */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\WorkItem.js */"
  }));
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
/* harmony import */ var _components_Printer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Printer */ "./components/Printer.js");
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Provider */ "./components/Provider.js");



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




var font = "'Press Start 2P';";
var _React = react__WEBPACK_IMPORTED_MODULE_1___default.a,
    Component = _React.Component;

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Provider__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["455771206", [font, font, font]]]) + " " + "portfolio--wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["455771206", [font, font, font]]]) + " " + "portfolio--header"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Printer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Glotacosm".split("")
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["455771206", [font, font, font]]]) + " " + "portfolio--header second"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Printer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Web Development PORTFOLIO".split("")
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("blink", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["455771206", [font, font, font]]])
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        style: {
          display: "".concat(!this.state.start && "none")
        },
        onClick: this.pressStart,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["455771206", [font, font, font]]]) + " " + "start-button blink"
      }, "Click Here to Continue")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "455771206",
        css: ".start-button.__jsx-style-dynamic-selector{display:block;margin:1.5rem auto;font-family:".concat(font, " text-transform:uppercase;border:none;color:white;background-color:transparent;text-shadow:1px 3px 0px black;}.portfolio--wrapper.__jsx-style-dynamic-selector>.portfolio--header.__jsx-style-dynamic-selector{margin-top:5rem;}h1.__jsx-style-dynamic-selector{font-family:").concat(font, " text-align:center;font-size:75px;color:white;text-transform:uppercase;text-shadow:1px 5px 0px black;}h2.__jsx-style-dynamic-selector{font-family:").concat(font, " text-align:center;font-size:30px;color:white;text-transform:uppercase;text-shadow:1px 5px 0px black;}.points.__jsx-style-dynamic-selector{color:white;}blink.__jsx-style-dynamic-selector{-webkit-animation:2s linear infinite condemned_blink_effect;-webkit-animation:2s linear infinite condemned_blink_effect-__jsx-style-dynamic-selector;animation:2s linear infinite condemned_blink_effect-__jsx-style-dynamic-selector;}@-webkit-keyframes condemned_blink_effect{0%.__jsx-style-dynamic-selector{visibility:hidden;}50%.__jsx-style-dynamic-selector{visibility:hidden;}100%.__jsx-style-dynamic-selector{visibility:visible;}}@-webkit-keyframes condemned_blink_effect-__jsx-style-dynamic-selector{0%{visibility:hidden;}50%{visibility:hidden;}100%{visibility:visible;}}@keyframes condemned_blink_effect-__jsx-style-dynamic-selector{0%{visibility:hidden;}50%{visibility:hidden;}100%{visibility:visible;}}@media screen and (max-width:767px){.portfolio--header.__jsx-style-dynamic-selector{font-size:37px;}}@media screen and (max-width:567px){.portfolio--header.__jsx-style-dynamic-selector{font-size:32px;}body.__jsx-style-dynamic-selector{background:url(http://i.imgur.com/F0gBD6c.png) 90%/cover no-repeat !important;}.portfolio--header.second.__jsx-style-dynamic-selector{font-size:20px;}.free-points.__jsx-style-dynamic-selector{width:282px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NrQixBQUl1QixBQVdFLEFBTUUsQUFTQSxBQVNOLEFBSWdELEFBS3hDLEFBR0EsQUFHQyxBQUtELEFBR0EsQUFHQyxBQUtKLEFBTUEsQUFJK0QsQUFJL0QsQUFJSCxZQWhEaEIsQUFpREUsRUFwRm1CLENBa0VuQixBQU1BLEFBUUEsQ0FyRUYsRUFpQ0UsQUFHQSxBQVFBLEFBR0EsQ0FSQSxBQVdBLGNBM0R5QiwwQkFlVixBQVNBLENBYXFDLGNBckJ4QyxBQVNBLElBaURaLFFBekR5QixBQVNBLGFBekJiLFlBQ0EsQUFnQmtCLEFBU0EsWUF4QkQsa0JBZ0IvQixBQVVBLFdBekJnQyw4QkFDaEMsZ0RBaUNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXHJcbmltcG9ydCBQcmludGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUHJpbnRlcic7XHJcbmltcG9ydCBNeVByb3ZpZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb3ZpZGVyXCI7XHJcblxyXG5jb25zdCBmb250ID0gXCInUHJlc3MgU3RhcnQgMlAnO1wiXHJcblxyXG5cclxuY29uc3Qge0NvbXBvbmVudH0gPSBSZWFjdFxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgc3RhcnQ6IHRydWUgfVxyXG4gIH1cclxuXHJcbiAgcHJlc3NTdGFydCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzdGFydDogIXRoaXMuc3RhdGUuc3RhcnR9KVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TXlQcm92aWRlcj5cclxuICAgICAgPD5cclxuICAgICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tLXdyYXBwZXJcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInBvcnRmb2xpby0taGVhZGVyXCI+XHJcbiAgICAgICAgPFByaW50ZXIgdGV4dD17XCJHbG90YWNvc21cIi5zcGxpdChcIlwiKX0vPlxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwicG9ydGZvbGlvLS1oZWFkZXIgc2Vjb25kXCI+XHJcbiAgICAgICAgPFByaW50ZXIgdGV4dD17XCJXZWIgRGV2ZWxvcG1lbnQgUE9SVEZPTElPXCIuc3BsaXQoXCJcIil9Lz5cclxuICAgICAgPC9oMj5cclxuICAgICAgPGJsaW5rPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN0YXJ0LWJ1dHRvbiBibGlua1wiXHJcbiAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiBgJHshdGhpcy5zdGF0ZS5zdGFydCAmJiBcIm5vbmVcIn1gfX0gXHJcbiAgICAgICAgb25DbGljaz17dGhpcy5wcmVzc1N0YXJ0fT5cclxuICAgICAgICBDbGljayBIZXJlIHRvIENvbnRpbnVlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2JsaW5rPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIFxyXG4gICAgICAuc3RhcnQtYnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDEuNXJlbSBhdXRvO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnR9XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggM3B4IDBweCBibGFjaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnBvcnRmb2xpby0td3JhcHBlciA+IC5wb3J0Zm9saW8tLWhlYWRlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogJHtmb250fVxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDc1cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCA1cHggMHB4IGJsYWNrO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udH1cclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggNXB4IDBweCBibGFjaztcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnBvaW50cyB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBibGluayB7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGxpbmVhciBpbmZpbml0ZSBjb25kZW1uZWRfYmxpbmtfZWZmZWN0OyAvLyBmb3IgYW5kcm9pZFxyXG4gICAgICAgIGFuaW1hdGlvbjogMnMgbGluZWFyIGluZmluaXRlIGNvbmRlbW5lZF9ibGlua19lZmZlY3Q7XHJcbiAgICAgIH1cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGNvbmRlbW5lZF9ibGlua19lZmZlY3QgeyAvLyBmb3IgYW5kcm9pZFxyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgNTAlIHtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAa2V5ZnJhbWVzIGNvbmRlbW5lZF9ibGlua19lZmZlY3Qge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgNTAlIHtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIC5wb3J0Zm9saW8tLWhlYWRlciB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDM3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjdweCkge1xyXG4gICAgICAgIC5wb3J0Zm9saW8tLWhlYWRlciB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKGh0dHA6Ly9pLmltZ3VyLmNvbS9GMGdCRDZjLnBuZykgOTAlL2NvdmVyIG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBvcnRmb2xpby0taGVhZGVyLnNlY29uZCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZnJlZS1wb2ludHMge1xyXG4gICAgICAgICAgd2lkdGg6IDI4MnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPExheW91dCBtZW51PXt0aGlzLnN0YXRlLnN0YXJ0fS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgPC8+XHJcbiAgICAgICAgICAgIDwvTXlQcm92aWRlcj4gXHJcbiAgICApXHJcbiAgfSBcclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\pages\\index.js */"),
        dynamic: [font, font, font]
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        menu: this.state.start
      }))));
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