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

      var _this$state = this.state,
          label = _this$state.label,
          site = _this$state.site;
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
            onClick: context.updatePoints,
            href: info.site,
            target: "_blank"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            src: info.img,
            alt: info.label && info.label
          })));
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Choose Your Contact Method"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3812365325" + " " + "contact--char-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CharSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
          side: "left",
          charName: label
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3812365325" + " " + "versus"
        }, "~VS~"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CharSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
          side: "right",
          charName: "meme"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "3812365325",
          css: ".modal-main.contact{padding:0;height:80.2%;}.versus{color:white;height:110px;line-height:110px;position:absolute;text-shadow:1px 2px 12px black;font-size:22px;background:royalblue;border:1px solid whitesmoke;padding:0 11px;top:40px;border-radius:100px;background:rgb(254,252,234);background:-moz-radial-gradient(center,ellipse cover,rgba(254,252,234,1) 0%,rgba(241,218,54,1) 100%);background:-webkit-radial-gradient(center,ellipse cover,rgba(254,252,234,1) 0%,rgba(241,218,54,1) 100%);background:radial-gradient(ellipse at center,rgba(254,252,234,1) 0%,rgba(241,218,54,1) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefcea',endColorstr='#f1da36',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefcea',endColorstr='#f1da36',GradientType=1 );box-shadow:1px 1px 115px magenta;}.contact--container{padding-top:2rem;background:-moz-linear-gradient(top,rgba(119,30,154,1) 0%,rgba(119,30,154,0.8) 2%,rgba(119,30,154,0.8) 20%,rgba(152,42,216,0.8) 50%,rgba(119,30,154,0.8) 80%,rgba(119,30,154,0.8) 99%,rgba(119,30,154,0) 100%);background:-webkit-linear-gradient(top,rgba(119,30,154,1) 0%,rgba(119,30,154,0.8) 2%,rgba(119,30,154,0.8) 20%,rgba(152,42,216,0.8) 50%,rgba(119,30,154,0.8) 80%,rgba(119,30,154,0.8) 99%,rgba(119,30,154,0) 100%);background:linear-gradient(to bottom,rgba(119,30,154,1) 0%,rgba(119,30,154,0.8) 2%,rgba(119,30,154,0.8) 20%,rgba(152,42,216,0.8) 50%,rgba(119,30,154,0.8) 80%,rgba(119,30,154,0.8) 99%,rgba(119,30,154,0) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#771e9a',endColorstr='#00771e9a',GradientType=0 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#771e9a',endColorstr='#00771e9a',GradientType=0 );}.contact--container h1,.contact--container h2{color:white;text-shadow:1px 2px 12px black;}.form{width:500px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 auto;}.contact--container h1,.contact--container h2,.versus{font-family:'Press Start 2P';text-align:center;}.contact--char-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;position:relative;}.char--select-container{width:50%;}.char--select-container.right .b--content{background:-moz-linear-gradient(45deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);background:-webkit-linear-gradient(45deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);background:linear-gradient(45deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799',endColorstr='#001e5799',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799',endColorstr='#001e5799',GradientType=1 );}.char--select-container.left .b--content{background:-moz-linear-gradient(-45deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);background:-webkit-linear-gradient(-45deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);background:linear-gradient(135deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799',endColorstr='#001e5799',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799',endColorstr='#001e5799',GradientType=1 );}.contact--image-link .b--content{background:rgb(183,222,237);background:-moz-linear-gradient(45deg,rgba(183,222,237,1) 0%,rgba(113,206,239,1) 50%,rgba(33,180,226,1) 51%,rgba(183,222,237,1) 100%);background:-webkit-linear-gradient(45deg,rgba(183,222,237,1) 0%,rgba(113,206,239,1) 50%,rgba(33,180,226,1) 51%,rgba(183,222,237,1) 100%);background:linear-gradient(45deg,rgba(183,222,237,1) 0%,rgba(113,206,239,1) 50%,rgba(33,180,226,1) 51%,rgba(183,222,237,1) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#b7deed',endColorstr='#b7deed',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#b7deed',endColorstr='#b7deed',GradientType=1 );}.contact--image-link .b--border:hover{border-color:brown;}.contact--image-link img{width:170px;height:auto;}.char--char-box img{width:auto;height:170px;display:block;margin:0 auto;}.char--select-container.left .char--name{text-align:right;}.char--select-container.right .char--name{text-align:left;}@media screen and (max-width:767px){.versus{padding:initial;line-height:50px;height:50px;}}@media screen and (max-width:567px){.form{width:initial;}.versus{font-size:14px;}.modal-main.contact{height:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxDb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFMkIsQUFJYSxBQVFFLEFBcUJLLEFBVUwsQUFPQSxBQVVpQixBQUtoQixBQU1ILEFBS3dLLEFBUUMsQUFRdkosQUFRVCxBQUlQLEFBS0QsQUFPTSxBQUlELEFBS0UsQUFRRixBQUlDLEFBSUgsVUF4SUQsQUFtRWYsQ0FzQ2UsQ0FqR0EsQUErQmtCLEFBT2xCLEFBc0RELEFBcUNaLEVBUkEsQ0FJQSxDQWpCRixBQUtxQixDQTNGbU0sQUFrRnhOLEVBaEJBLElBNUZBLENBaUdBLEFBS2dCLENBakdJLEdBK0V3SCxDQWhDeEgsSUFrRUosS0FmQSxLQWpHSSxBQThCcEIsRUFtRkUsRUFsRUYsS0FtREEsU0FqR2lDLGFBa0RGLFlBZGQsTUFuQ0EsZUFDTSxxQkFDTyxlQWtDTCxhQWpDUixNQTBFMkgsU0F6RWpJLENBd0R1SyxDQVFDLE9BL0Q3SixpQkE2Q0YsR0EzQ1UsZUE0QzlCLFNBaENxTixJQVgzRyxjQTZCMUYsY0FDaEIsMkNBd0NvSSw4QkFyRXhCLGtCQW9EOEQsRUFRQywrRUFVdEQsS0FyRXJCLENBVW1ILGdGQTBDNUYsR0FRQSxTQTNERixvSEFVRSxzQkEyRHZILDBGQWpCQSxHQVFBLEtBM0RtQyxpQ0FDbkMsdUZBU0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRvbmlvXFxwb3J0LWNvbmNlcHRcXGNvbXBvbmVudHNcXENvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBDaGFyU2VsZWN0IGZyb20gXCIuL0NoYXJTZWxlY3RcIlxuaW1wb3J0IENvbnRlbnRCbG9jayBmcm9tICcuL0NvbnRlbnRCbG9jayc7XG5pbXBvcnQgeyBNYWhDb250ZXh0IH0gZnJvbSBcIi4vUHJvdmlkZXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zdGF0ZSA9e1xuICAgICAgbGFiZWw6IHVuZGVmaW5lZCxcbiAgICAgIHNpdGU6IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxuXG4gIGNvbnRhY3RPck5haCA9IChzdHIpID0+IHtcbiAgICByZXR1cm4gc3RyID09IFwiZW1haWxcIiAmJiBcIkNvbnRhY3RcIlxuICB9XG4gIGljb25zID0gKCkgPT4ge1xuICAgIHJldHVybiBbXG4gICAgICB7IHNpdGU6IFwibWFpbHRvOmFudG9uaW9AZ2xvdGFjb3NtLmNvbVwiLCBpbWc6ICdodHRwczovL2dsb3RhY29zbS5jb20vaW1nL2NoYXIvY2hhci1lbWFpbC5wbmcnLCBsYWJlbDogXCJlbWFpbFwiIH0sXG4gICAgICB7IHNpdGU6IFwiaHR0cHM6Ly9naXRodWIuY29tLzJoYW5kczEwZmluZ2Vyc1wiLCBpbWc6ICdodHRwczovL2dsb3RhY29zbS5jb20vaW1nL2NoYXIvY2hhci1naXRodWIucG5nJywgbGFiZWw6IFwiZ2l0aHViXCIgfSxcbiAgICAgIHsgc2l0ZTogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYW5vZ3VlcmFzL1wiLCBpbWc6ICdodHRwczovL2dsb3RhY29zbS5jb20vaW1nL2NoYXIvY2hhci1saW5rZWRpbi5wbmcnLCBsYWJlbDogXCJsaW5rZWRpblwiIH0sXG4gICAgICAvLyB7IHNpdGU6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Fub2d1ZXJhcy9cIiwgaW1nOiAnaHR0cHM6Ly9nbG90YWNvc20uY29tL2ltZy9jaGFyL2NoYXItbGlua2VkaW4ucG5nJywgbGFiZWw6IFwibGlua2VkaW5cIiB9XG4gICAgXVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIHNpdGUgfSA9IHRoaXMuc3RhdGVcbiAgICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtLWNvbnRhaW5lclwiPlxuICAgICAgPE1haENvbnRleHQ+XG4gICAgICAgIHsgY29udGV4dCA9PiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICA8aDE+Q29udGFjdDwvaDE+XG4gICAgICAgICAge2NvbnNvbGUubG9nKGNvbnRleHQpfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgICAgICB7dGhpcy5pY29ucygpLm1hcCggKGluZm8sIGluZGV4KSA9PlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7bGFiZWw6IGluZm8ubGFiZWwsIHNpdGU6IGluZm8uc2l0ZX0pfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtsYWJlbDogdW5kZWZpbmVkLCBzaXRlOiB1bmRlZmluZWQgfSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bjb250YWN0LS1pbWFnZS1saW5rICR7aW5mby5sYWJlbCAmJiBpbmZvLmxhYmVsfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXtjb250ZXh0LnVwZGF0ZVBvaW50c31cbiAgICAgICAgICAgIGhyZWY9e2luZm8uc2l0ZX1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDb250ZW50QmxvY2s+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2luZm8uaW1nfSBhbHQ9e2luZm8ubGFiZWwgJiYgaW5mby5sYWJlbH0vPlxuICAgICAgICAgICAgICAgIHsvKiBpbWFnZSBmcm9tIGZvbnRhd2Vzb21lIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKi99XG4gICAgICAgICAgICAgIDwvQ29udGVudEJsb2NrPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMj5DaG9vc2UgWW91ciBDb250YWN0IE1ldGhvZDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC0tY2hhci13cmFwcGVyXCI+XG4gICAgICAgIDxDaGFyU2VsZWN0XG4gICAgICAgICAgc2lkZT1cImxlZnRcIlxuICAgICAgICAgIGNoYXJOYW1lPXtsYWJlbH1cbiAgICAgICAgICAvPlxuey8qIFxuICA8YSBocmVmPXshc2l0ZSA/IFwiI1wiIDogc2l0ZX0+e1xuICAgICFzaXRlID8gXCJDaG9vc2UgWW91ciBDaGFyYWN0ZXJcIiA6IHRoaXMuY29udGFjdE9yTmFoKHNpdGUpXG4gIH08L2E+ICovfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJzdXNcIj5+VlN+PC9kaXY+XG5cbiAgICAgICAgPENoYXJTZWxlY3RcbiAgICAgICAgICBzaWRlPVwicmlnaHRcIlxuICAgICAgICAgIGNoYXJOYW1lPXtcIm1lbWVcIn1cbiAgICAgICAgICAvPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuXG4ubW9kYWwtbWFpbi5jb250YWN0IHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiA4MC4yJTtcbiAgXG4gIFxuICBcbn1cblxuLnZlcnN1cyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgbGluZS1oZWlnaHQ6IDExMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtc2hhZG93OiAxcHggMnB4IDEycHggYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgYmFja2dyb3VuZDogcm95YWxibHVlO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAwIDExcHg7XG4gIHRvcDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyNmZWZjZWErMCxmMWRhMzYrMTAwO0dvbGQrM0QgKi9cbiAgYmFja2dyb3VuZDogcmdiKDI1NCwyNTIsMjM0KTsgLyogT2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgyNTQsMjUyLDIzNCwxKSAwJSwgcmdiYSgyNDEsMjE4LDU0LDEpIDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMjU0LDI1MiwyMzQsMSkgMCUscmdiYSgyNDEsMjE4LDU0LDEpIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMjU0LDI1MiwyMzQsMSkgMCUscmdiYSgyNDEsMjE4LDU0LDEpIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZWZjZWEnLCBlbmRDb2xvcnN0cj0nI2YxZGEzNicsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xuICBib3gtc2hhZG93OiAxcHggMXB4IDExNXB4IG1hZ2VudGE7XG59XG5cbi5jb250YWN0LS1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgLyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHA6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvIzc3MWU5YSsyMCw5ODJhZDgrNTAsNzcxZTlhKzgwJjArMCwwLjgrMiwxKzAsMSs5OSwwLjgrOTksMCsxMDAgKi9cbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDExOSwzMCwxNTQsMSkgMCUsIHJnYmEoMTE5LDMwLDE1NCwwLjgpIDIlLCByZ2JhKDExOSwzMCwxNTQsMC44KSAyMCUsIHJnYmEoMTUyLDQyLDIxNiwwLjgpIDUwJSwgcmdiYSgxMTksMzAsMTU0LDAuOCkgODAlLCByZ2JhKDExOSwzMCwxNTQsMC44KSA5OSUsIHJnYmEoMTE5LDMwLDE1NCwwKSAxMDAlKTsgLyogRkYzLjYtMTUgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDExOSwzMCwxNTQsMSkgMCUscmdiYSgxMTksMzAsMTU0LDAuOCkgMiUscmdiYSgxMTksMzAsMTU0LDAuOCkgMjAlLHJnYmEoMTUyLDQyLDIxNiwwLjgpIDUwJSxyZ2JhKDExOSwzMCwxNTQsMC44KSA4MCUscmdiYSgxMTksMzAsMTU0LDAuOCkgOTklLHJnYmEoMTE5LDMwLDE1NCwwKSAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgxMTksMzAsMTU0LDEpIDAlLHJnYmEoMTE5LDMwLDE1NCwwLjgpIDIlLHJnYmEoMTE5LDMwLDE1NCwwLjgpIDIwJSxyZ2JhKDE1Miw0MiwyMTYsMC44KSA1MCUscmdiYSgxMTksMzAsMTU0LDAuOCkgODAlLHJnYmEoMTE5LDMwLDE1NCwwLjgpIDk5JSxyZ2JhKDExOSwzMCwxNTQsMCkgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzc3MWU5YScsIGVuZENvbG9yc3RyPScjMDA3NzFlOWEnLEdyYWRpZW50VHlwZT0wICk7IC8qIElFNi05ICovXG59XG5cbi5jb250YWN0LS1jb250YWluZXIgaDEsXG4uY29udGFjdC0tY29udGFpbmVyIGgyIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMXB4IDJweCAxMnB4IGJsYWNrO1xufVxuXG5cblxuLmZvcm0ge1xuICB3aWR0aDogNTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29udGFjdC0tY29udGFpbmVyIGgxLCBcbi5jb250YWN0LS1jb250YWluZXIgaDIsIFxuLnZlcnN1cyB7XG4gIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWN0LS1jaGFyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2hhci0tc2VsZWN0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jaGFyLS1zZWxlY3QtY29udGFpbmVyLnJpZ2h0IC5iLS1jb250ZW50IHsgICAgICAgIFxuICAvKiBQZXJtYWxpbmsgLSB1c2UgdG8gZWRpdCBhbmQgc2hhcmUgdGhpcyBncmFkaWVudDogaHR0cDovL2NvbG9yemlsbGEuY29tL2dyYWRpZW50LWVkaXRvci8jMWU1Nzk5KzIwLDI5ODlkOCs1MCwxZTU3OTkrODAmMCswLDErMCwxKzk5LDErOTksMCsxMDAgKi9cbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMzAsODcsMTUzLDEpIDAlLCByZ2JhKDMwLDg3LDE1MywxKSAyMCUsIHJnYmEoNDEsMTM3LDIxNiwxKSA1MCUsIHJnYmEoMzAsODcsMTUzLDEpIDgwJSwgcmdiYSgzMCw4NywxNTMsMSkgOTklLCByZ2JhKDMwLDg3LDE1MywwKSAxMDAlKTsgLyogRkYzLjYtMTUgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMzAsODcsMTUzLDEpIDAlLHJnYmEoMzAsODcsMTUzLDEpIDIwJSxyZ2JhKDQxLDEzNywyMTYsMSkgNTAlLHJnYmEoMzAsODcsMTUzLDEpIDgwJSxyZ2JhKDMwLDg3LDE1MywxKSA5OSUscmdiYSgzMCw4NywxNTMsMCkgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgzMCw4NywxNTMsMSkgMCUscmdiYSgzMCw4NywxNTMsMSkgMjAlLHJnYmEoNDEsMTM3LDIxNiwxKSA1MCUscmdiYSgzMCw4NywxNTMsMSkgODAlLHJnYmEoMzAsODcsMTUzLDEpIDk5JSxyZ2JhKDMwLDg3LDE1MywwKSAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMWU1Nzk5JywgZW5kQ29sb3JzdHI9JyMwMDFlNTc5OScsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xufVxuXG4uY2hhci0tc2VsZWN0LWNvbnRhaW5lci5sZWZ0IC5iLS1jb250ZW50IHtcbiAgLyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHA6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvIzFlNTc5OSsyMCwyOTg5ZDgrNTAsMWU1Nzk5KzgwJjArMCwxKzAsMSs5OSwxKzk5LDArMTAwICovXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgzMCw4NywxNTMsMSkgMCUsIHJnYmEoMzAsODcsMTUzLDEpIDIwJSwgcmdiYSg0MSwxMzcsMjE2LDEpIDUwJSwgcmdiYSgzMCw4NywxNTMsMSkgODAlLCByZ2JhKDMwLDg3LDE1MywxKSA5OSUsIHJnYmEoMzAsODcsMTUzLDApIDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMzAsODcsMTUzLDEpIDAlLHJnYmEoMzAsODcsMTUzLDEpIDIwJSxyZ2JhKDQxLDEzNywyMTYsMSkgNTAlLHJnYmEoMzAsODcsMTUzLDEpIDgwJSxyZ2JhKDMwLDg3LDE1MywxKSA5OSUscmdiYSgzMCw4NywxNTMsMCkgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMzAsODcsMTUzLDEpIDAlLHJnYmEoMzAsODcsMTUzLDEpIDIwJSxyZ2JhKDQxLDEzNywyMTYsMSkgNTAlLHJnYmEoMzAsODcsMTUzLDEpIDgwJSxyZ2JhKDMwLDg3LDE1MywxKSA5OSUscmdiYSgzMCw4NywxNTMsMCkgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzFlNTc5OScsIGVuZENvbG9yc3RyPScjMDAxZTU3OTknLEdyYWRpZW50VHlwZT0xICk7IC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cbn1cblxuLmNvbnRhY3QtLWltYWdlLWxpbmsgLmItLWNvbnRlbnQge1xuICAvKiBQZXJtYWxpbmsgLSB1c2UgdG8gZWRpdCBhbmQgc2hhcmUgdGhpcyBncmFkaWVudDogaHR0cDovL2NvbG9yemlsbGEuY29tL2dyYWRpZW50LWVkaXRvci8jYjdkZWVkKzAsNzFjZWVmKzUwLDIxYjRlMis1MSxiN2RlZWQrMTAwO1NoYXBlKzErU3R5bGUgKi9cbiAgYmFja2dyb3VuZDogcmdiKDE4MywyMjIsMjM3KTsgLyogT2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDE4MywyMjIsMjM3LDEpIDAlLCByZ2JhKDExMywyMDYsMjM5LDEpIDUwJSwgcmdiYSgzMywxODAsMjI2LDEpIDUxJSwgcmdiYSgxODMsMjIyLDIzNywxKSAxMDAlKTsgLyogRkYzLjYtMTUgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMTgzLDIyMiwyMzcsMSkgMCUscmdiYSgxMTMsMjA2LDIzOSwxKSA1MCUscmdiYSgzMywxODAsMjI2LDEpIDUxJSxyZ2JhKDE4MywyMjIsMjM3LDEpIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMTgzLDIyMiwyMzcsMSkgMCUscmdiYSgxMTMsMjA2LDIzOSwxKSA1MCUscmdiYSgzMywxODAsMjI2LDEpIDUxJSxyZ2JhKDE4MywyMjIsMjM3LDEpIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNiN2RlZWQnLCBlbmRDb2xvcnN0cj0nI2I3ZGVlZCcsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xufVxuXG4uY29udGFjdC0taW1hZ2UtbGluayAuYi0tYm9yZGVyOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiBicm93bjtcbn1cblxuLmNvbnRhY3QtLWltYWdlLWxpbmsgaW1nIHtcbiAgd2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jaGFyLS1jaGFyLWJveCBpbWcge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxNzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2hhci0tc2VsZWN0LWNvbnRhaW5lci5sZWZ0IC5jaGFyLS1uYW1lIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jaGFyLS1zZWxlY3QtY29udGFpbmVyLnJpZ2h0IC5jaGFyLS1uYW1lIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0gXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC52ZXJzdXMge1xuICAgIHBhZGRpbmc6IGluaXRpYWw7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5mb3JtIHtcbiAgICB3aWR0aDogaW5pdGlhbDtcbiAgfVxuICBcbiAgLnZlcnN1cyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIFxuICAubW9kYWwtbWFpbi5jb250YWN0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH0gXG59XG5cbmB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgPC9NYWhDb250ZXh0PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\Contact.js */"
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
          css: ".hire--wrapper{padding:15px 0;}.hire--wrapper h1,.hire--wrapper h2{font-family:'Press Start 2P';text-align:center;}.hire--wrapper h2{color:white;text-shadow:1px 2px 10px black;}.profile{max-width:460px;max-height:190px;margin-top:15px;}.modal-main.hire{background:url(https://www.glotacosm.com/orientpixel-bg.jpg) 100%/cover no-repeat;overflow-y:scroll;-webkit-scrollbar-width:none;-moz-scrollbar-width:none;-ms-scrollbar-width:none;scrollbar-width:none;-ms-overflow-style:none;height:100%;}.modal-main.hire::-webkit-scrollbar{width:0;height:0;}.hire--skills{margin-top:15px;}.hire--profile-image{height:210px;position:relative;top:12px;}.main--info{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:260px;}.hire--text{padding:0 10px;line-height:1.5;}.hire--skills-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;}.hire--skills-wrapper h2{margin-top:4rem;}.hire--skill{margin:2rem;background-color:black;padding:10px 5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-shadow:1px 2px 0px #ffeb3ba1;width:20%;min-height:160px;color:white;text-align:center;font-family:'Press Start 2P';background:url(https://glotacosm.com/spellbook-pixel.png) 100%/contain no-repeat;color:black;font-size:14px;}@media screen and (max-width:767px){.main--info{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.profile .b--border{width:100%;margin:0 0 0 auto !important;}.profile{max-width:initial;}.hire--skill{margin:1.5rem;}.hire--text{font-size:14px;}.hire--profile-image{margin:0 auto;display:block;}}.button--link{text-align:center;padding:1rem;}.button--link a{width:50px;height:72px;padding:0.6rem;text-transform:capitalize;font-size:20px;-webkit-text-decoration:none;text-decoration:none;font-family:'Press Start 2P';color:black;background-color:green;}.button--link a:hover{color:green;background-color:black;cursor:pointer;}@media screen and (max-width:567px){.hire--wrapper h2{font-size:20px;}.modal-main.hire{height:100%;width:90%;}.hire--wrapper:{width:50%;}.hire--skill{margin:0.6rem;width:40%;font-size:15px;}}@media screen and (max-width:478px){.hire--skill{width:66%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxIaXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FK0IsQUFHOEIsQUFHYyxBQUtqQixBQUlNLEFBTWdFLEFBUzFFLEFBS1EsQUFJSCxBQU1BLEFBS0UsQUFLRixBQVFHLEFBSUosQUFxQm9CLEFBR25CLEFBSU8sQUFJSixBQUlDLEFBSUQsQUFNRSxBQUtQLEFBWUQsQUFRSyxBQUdILEFBSUosQUFJSSxBQVFKLFFBOUhDLEVBbUhiLEFBWUEsQ0FsRW1DLEFBMkJuQixDQTNHbUIsQUF3RFIsQUErREYsQUFXWCxDQXRHUSxDQTREbEIsQUFRZ0IsQUEwQ1IsQ0FsSlYsQUErQ2tCLEFBcURoQixBQW1DRixDQTNIcUIsQUFvQnJCLEFBNEJBLENBaENGLENBZ0VJLEFBa0JhLElBNkJqQixDQXZCbUIsQ0ErQkYsSUExQ2IsQ0F0R2tCLEVBa0NULEFBV1gsQUErREEsRUFsR29CLEVBb0RELEFBK0RKLEdBWGEsQ0ErQjlCLENBOUdFLEFBbURBLEdBaEZBLElBTEEsRUFVQSxDQW1IRixFQS9EaUIsWUFvREUsVUE1RUUsQUFVTixLQW1FVSxHQXJHSCxHQW1DSCxNQVZqQixTQXhCdUIsRUFrRXJCLHdCQWxCdUIsR0FxRE0sYUFsRU4sZ0JBbUVYLFlBQ1csdUJBQzNCLFFBdkc0Qix3QkFDWixBQStDVSxZQTlDeEIsSUFpQ1ksVUFDZCxvREFhc0Msa0NBQ3hCLFVBQ08saUJBQ0wsWUFDTSxrQkFDVyw2QkFDb0QsaUZBQ3JFLFlBQ0csZUFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRvbmlvXFxwb3J0LWNvbmNlcHRcXGNvbXBvbmVudHNcXEhpcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRlbnRCbG9jayBmcm9tICcuL0NvbnRlbnRCbG9jayc7XG5pbXBvcnQgUHJpbnRlciBmcm9tICcuL1ByaW50ZXInO1xuaW1wb3J0IHsgTWFoQ29udGV4dCB9IGZyb20gXCIuL1Byb3ZpZGVyXCI7XG5cblxubGV0IHRleHQgPSBcIkFjY3VtdWxhdGluZyB5ZWFycyBvZiBleHBlcmllbmNlIGluIHRoZSBkaWdpdGFsIG1hcmtldGluZyBmaWVsZCBhbmQgaW4gY3JlYXRpdmUgYnJhbmRpbmcsIEdMT1RBQ09TTSB3YXMgYm9ybi4gVGhlIGNyZWF0aXZlIGluaXRpYXRpdmUgbGVkIGJ5IEFudG9uaW8gTm9ndWVyYXMgaXMgdGhlIG51YW5jZWQgcmVzcG9uc2UgdG8gaGlnaGx5IGNyZWF0aXZlIGJyYW5kaW5nIGFuZCBtYXJrZXRpbmcuIEl0IHNlZWtzIHRvIGJ1aWxkIGNyZWF0aXZlIGluZnJhc3RydWN0dXJlcyBhbmQgZXhlY3V0ZSBjb21wbGV4IG1hcmtldGluZyB0YXNrcyB0aGF0IHJlcXVpcmUgYSBjb21iaW5hdGlvbiBvZiBkaWZmZXJlbnQgY3JlYXRpdmUgc2tpbGxzLl4gR0xPVEFDT1NNIHNlZWtzIHRvIG1ha2UgYSBicmFpbnN0b3JtIGxvb2sgbGlrZSBhIGNvbnRyb2xsZWQgRjUgVG9ybmFkbyBpbiB0aGUgZXllIG9mIGEgaHVycmljYW5lLiBJdCB5ZWFybnMgdG8gYXBwcm9hY2ggY3JlYXRpdmUgaGVpZ2h0cyB3aGVyZSBjb25zdW1lcnMgbmV2ZXIgdGhvdWdodCBwb3NzaWJsZS4gQW5kIHdoaWxlIHlvdeKAmXJlIHdvbmRlcmluZywgaXRzIG5hbWUgZGVyaXZlcyBmcm9tIExhdGluIGFuZCBHcmVlayB0byBtZWFuIOKAnFdvcmxkIG9mIExhbmd1YWdl4oCdLiBBdCBsZWFzdCBpdOKAmXMgZWFzaWVyIHRvIHByb25vdW5jZSB0aGFuIFNjaGxvdHNreeKAmXMgb24gdGhlIGZpcnN0IHRyeS5cIlxuXG5jbGFzcyBIaXJlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZXh0OiBcIlwiXG4gICAgfTtcbiAgfVxuXG4gIHByaW50ZXIgPSAoc3RyKSA9PiB7XG4gICAgY29uc29sZS5sb2coc3RyLnNwbGl0KFwiXCIpKVxuICAgIHJldHVybiBzdHIuc3BsaXQoXCJcIilcbiAgfVxuXG4gIHNraWxscyA9ICgpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAgXCJIVE1MNVwiLFxuICAgICAgXCJDU1MzXCIsXG4gICAgICBcIlNBU1NcIixcbiAgICAgIFwiUEhQXCIsXG4gICAgICBcIkphdmFTY3JpcHRcIixcbiAgICAgIFwiUmVhY3RcIixcbiAgICAgIFwiQm9vc3RyYXBcIixcbiAgICAgIFwiR3JhcGhRTFwiLFxuICAgICAgXCJteVNRTFwiLFxuICAgICAgXCJXb3JkcHJlc3MgQ3VzdG9tIFRoZW1lIEJ1aWxkaW5nXCIsXG4gICAgICBcIlB5dGhvbiAzXCIsXG4gICAgICBcIkFibGV0b25cIixcbiAgICAgIFwiRGlnaXRhbCBNYXJrZXRpbmcgQ29uc3VsdGF0aW9uXCIsXG4gICAgICBcIkdyYXBoaWMgRGVzaWduXCIsXG4gICAgICBcIkNvcHl3cml0aW5nXCJcbiAgICBdXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhpcmUtLXdyYXBwZXJcIj5cbiAgICAgIDxNYWhDb250ZXh0PlxuICAgICAgICB7IGNvbnRleHQgPT4gKFxuXG4gICAgICAgIDw+XG4gICAgICAgIDxoMT5IaXJlIE1lPC9oMT5cbiAgICAgICAgPGgyPn4gVGhlIExlZ2VuZCB+PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaXJlLS1za2lsbHNcIj4gICAgIFxuICAgICAgICAgIHsvKiA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoaXJlLS1sb2dvXCJcbiAgICAgICAgICAgIHNyYz1cImh0dHA6Ly93d3cuZ2xvdGFjb3NtLmNvbS9pbWcvR0xPVEFDT1NNLWJyYW5kbG9nby5wbmdcIlxuICAgICAgICAgICAgYWx0PVwicHJvZmlsZS1zaG90XCJcbiAgICAgICAgICAvPiAqL31cblxuICAgICAgIFxuICAgXG4gICAgICAgIDxDb250ZW50QmxvY2sgY29udGVudENsYXNzPXtcIm1haW4tLWluZm9cIn0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpcmUtLXRleHRcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxQcmludGVyIGFuaW1hdGUgdGV4dD17dGV4dC5zcGxpdChcIlwiKX0vPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDb250ZW50QmxvY2sgY2xhc3Nlcz17XCJwcm9maWxlXCJ9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vd3d3Lmdsb3RhY29zbS5jb20vcGl4ZWxtZS5wbmdcIiBhbHQ9XCJwcm9maWxlLXNob3RcIiBjbGFzc05hbWU9XCJoaXJlLS1wcm9maWxlLWltYWdlXCIgLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAuaGlyZS0td3JhcHBlciB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oaXJlLS13cmFwcGVyIGgxLCAuaGlyZS0td3JhcHBlciBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oaXJlLS13cmFwcGVyIGgyIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlOztcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAycHggMTBweCBibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9maWxlIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQ2MHB4O1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE5MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbC1tYWluLmhpcmUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly93d3cuZ2xvdGFjb3NtLmNvbS9vcmllbnRwaXhlbC1iZy5qcGcpIDEwMCUvY292ZXIgbm8tcmVwZWF0O1xuICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAgICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vZGFsLW1haW4uaGlyZTo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcbiAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oaXJlLS1za2lsbHMge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGlyZS0tcHJvZmlsZS1pbWFnZSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMjEwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wOiAxMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWFpbi0taW5mbyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI2MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGlyZS0tdGV4dCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhpcmUtLXNraWxscy1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oaXJlLS1za2lsbHMtd3JhcHBlciBoMiB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oaXJlLS1za2lsbCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMnJlbTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAycHggMHB4ICNmZmViM2JhMTtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTYwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZ2xvdGFjb3NtLmNvbS9zcGVsbGJvb2stcGl4ZWwucG5nKSAxMDAlL2NvbnRhaW4gbm8tcmVwZWF0O1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBcblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgLm1haW4tLWluZm8ge1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucHJvZmlsZSAuYi0tYm9yZGVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByb2ZpbGUge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogaW5pdGlhbDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5oaXJlLS1za2lsbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxLjVyZW07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaGlyZS0tdGV4dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmhpcmUtLXByb2ZpbGUtaW1hZ2Uge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idXR0b24tLWxpbmsge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idXR0b24tLWxpbmsgYSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDcycHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJztcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYnV0dG9uLS1saW5rIGE6aG92ZXJ7XG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjdweCkge1xuXG4gICAgICAgICAgICAuaGlyZS0td3JhcHBlciBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb2RhbC1tYWluLmhpcmUge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgfSAgXG4gICAgICAgICAgLmhpcmUtLXdyYXBwZXI6IHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhpcmUtLXNraWxsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMC42cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OHB4KSB7XG4gICAgICAgICAgLmhpcmUtLXNraWxsIHtcbiAgICAgICAgICAgIHdpZHRoOiA2NiU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYH1cblxuICAgICAgXG4gICAgPC9zdHlsZT5cbiAgICAgICAgICA8L0NvbnRlbnRCbG9jaz5cbiAgIFxuICAgICAgICAgIDwvQ29udGVudEJsb2NrPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlyZS0tc2tpbGxzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxoMj5+IE15IEJvb2sgb2YgU3BlbGxzIH48L2gyPlxuICAgICAgICAgIFxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJoaXJlLS1za2lsbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7dGhpcy5za2lsbHMoKS5tYXAoIHNraWxsID0+IDxsaSBjbGFzc05hbWU9XCJoaXJlLS1za2lsbFwiIG9uQ2xpY2s9e2NvbnRleHQudXBkYXRlUG9pbnRzfWtleT17c2tpbGx9Pntza2lsbH08L2xpPil9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+VmlzaXQgdGhlIEdpdEh1YjwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tLWxpbmtcIj5cbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vMmhhbmRzMTBmaW5nZXJzXCI+VmlzaXQ8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTWFoQ29udGV4dD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGlyZTsiXX0= */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\Hire.js */"
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "hire--skills-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "~ My Book of Spells ~"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
          className: "hire--skills-container"
        }, _this2.skills().map(function (skill) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
            className: "hire--skill",
            onClick: context.updatePoints,
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
        className: "jsx-2600915909"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-2600915909"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Press+Start+2P",
        rel: "stylesheet",
        className: "jsx-2600915909"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2600915909",
        css: "body{background:url('http://i.imgur.com/F0gBD6c.png') 100%/cover no-repeat;height:100vh;width:100vw;overflow:hidden;}.points{position:absolute;top:0;right:0;color:#76e680;font-family:'Press Start 2P';text-shadow:1px 2px 12px black;font-size:20px;padding:1rem;}.points-txt{font-size:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxNeUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ3lCLEFBRytFLEFBT3BELEFBV0gsZUFDakIsR0FYUSxNQUNFLFFBQ00sY0FDZSx3QkFWaEIsS0FXa0IsUUFWbkIsWUFDSSxXQVVELEtBVGpCLFVBVWUsYUFDZiIsImZpbGUiOiJDOlxcVXNlcnNcXEFudG9uaW9cXHBvcnQtY29uY2VwdFxcY29tcG9uZW50c1xcTXlMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguc2FzcydcclxuaW1wb3J0ICcuLi9zdHlsZXMvbWlzYy5jc3MnXHJcbmltcG9ydCB7TWFoQ29udGV4dH0gZnJvbSBcIi4vUHJvdmlkZXJcIjtcclxuXHJcbmNvbnN0IHtDb21wb25lbnR9ID0gUmVhY3Q7XHJcbmNvbnN0IGxheW91dFN0eWxlID0ge1xyXG4gIG1hcmdpbjogMjAsXHJcbiAgcGFkZGluZzogMjAsXHJcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnXHJcbn1cclxuXHJcblxyXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgc3VwZXIoKVxyXG4gIHRoaXMuc3RhdGUgPSB7XHJcbiAgICBzaG93OiBmYWxzZSxcclxuICAgIHR5cGU6IFwiXCIsXHJcbiAgICBjdXJyZW50UGFnZTogdW5kZWZpbmVkLFxyXG5cclxuICB9O1xyXG59XHJcblxyXG4gIHNob3dNb2RhbCA9ICgpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWUsIHR5cGU6IFwiYnVpbHRcIiB9KTsgfTtcclxuICBoaWRlTW9kYWwgPSAoKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSwgdHlwZTogXCJcIiB9KTsgfTtcclxuICBzZXRQYWdlID0gKHRoZVBhZ2UpID0+IHt0aGlzLnNldFN0YXRlKHtjdXJyZW50UGFnZTogdGhlUGFnZSB9KX1cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICBcclxuICAgIHJldHVybiggIFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVByZXNzK1N0YXJ0KzJQXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCdodHRwOi8vaS5pbWd1ci5jb20vRjBnQkQ2Yy5wbmcnKSAxMDAlL2NvdmVyIG5vLXJlcGVhdDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucG9pbnRzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGNvbG9yOiAjNzZlNjgwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggMnB4IDEycHggYmxhY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wb2ludHMtdHh0IHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgIDxNYWhDb250ZXh0PlxyXG4gICAgICB7Y29udGV4dCA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludHNcIj5cclxuICAgICAgICAgIHtjb250ZXh0LmRhdGEucG9pbnRzIH08c3BhbiBjbGFzc05hbWU9XCJwb2ludHMtdHh0XCI+IHBvaW50czwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvTWFoQ29udGV4dD5cclxuICAgICAgPFNpZGViYXIgbWVudT17dGhpcy5wcm9wcy5tZW51fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBMYXlvdXQiXX0= */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\MyLayout.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Provider__WEBPACK_IMPORTED_MODULE_6__["MahContext"], null, function (context) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-2600915909" + " " + "points"
        }, context.data.points, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "jsx-2600915909" + " " + "points-txt"
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
          updatePoints: function updatePoints() {
            return _this2.setState({
              points: _this2.state.points + 100
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
        onClick: link.children && _this.subMenuToggler
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sidebar--link",
        onClick: function onClick() {
          _this.setPage(link.name.toLowerCase());

          updateThePoints();
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

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Provider__WEBPACK_IMPORTED_MODULE_6__["MahContext"], null, function (context) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, console.log(context, "<--"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
          className: "sidebar",
          style: {
            display: "".concat(_this2.props.menu ? "none" : "initial")
          }
        }, _this2.links().map(function (link) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !link.children ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            key: link,
            onClick: function onClick() {
              return _this2.setPage(link.name.toLowerCase());
            }
          }, _this2.blaher(link, context.updatePoints)) : _this2.blaher(link, context.updatePoints), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
            styleId: "3531630095",
            css: ".sidebar{".concat(!_this2.props.menu && "display: none", ";}.sidebar--has-children{position:relative;}.sidebar--has-children li{").concat(!_this2.state.haschildren && "display: none;", ";}.sidebar--has-children:before{content:'';top:17px;right:0;border-style:inset;position:absolute;width:0;height:0;border-style:solid;border-width:10px 12.5px 0 12.5px;border-color:white transparent transparent transparent;}.sidebar--has-children .sidebar--links li:hover{background-color:lightgreen;}.sidebar li{cursor:pointer;font-family:'Press Start 2P';text-align:center;list-style:none;padding:0;margin:.5rem auto;width:235px;display:block;color:white;text-shadow:1px 6px 0px black;}.sidebar li:hover{background-color:green;}.sidebar--links,sidebar{padding:0;}.sidebar--link{font-size:36px;}.sidebar--link__child{font-size:18px;}.modal{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);}.work--container{position:absolute;}.modal-main{position:fixed;background:white;right:0;bottom:0;width:80%;height:880px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);overflow:auto;}.display-block{display:block;}.display-none{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxTaWRlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGMkMsQUFJNEIsQUFFdUIsQUFLdkIsQUFFZ0IsQUFjaUIsQUFJYixBQWFRLEFBS2IsQUFJSyxBQUlBLEFBSUEsQUFTRyxBQUdKLEFBYUEsQUFJRCxVQXhDakIsQ0FwQ2EsRUE2RVgsQ0FKQSxDQXZEK0IsQUFzQmpDLEFBSUEsQUFJVSxBQVlXLEdBbkVyQixBQWdFRSxFQXhEVSxDQWdERCxFQWxCWCxLQTdCdUIsQUFZdkIsQUFvQ2MsQ0E1RGQsQUFPQSxHQWdFWSxPQVZJLENBV0gsSUEzQ1MsR0FoQkEsRUE0RFIsRUFYb0IsUUFZakIsR0E1Q0csR0FoQlIsT0E2REQsQ0E1REUsS0FnQkMsQUFnQ1osRUFhVSxFQTVEVyxNQWdCRCxDQTZDYSxZQTVERyxLQWdCdEIsWUFDRSxjQUNGLEdBakIyQyxTQWtCekIsOEJBQ2xDLGdCQWpCQSxJQTBEbUIsY0FDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRvbmlvXFxwb3J0LWNvbmNlcHRcXGNvbXBvbmVudHNcXFNpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL01vZGFsJ1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3QnXHJcbmltcG9ydCBXb3JrIGZyb20gJy4uL2NvbXBvbmVudHMvV29yaydcclxuaW1wb3J0IEhpcmUgZnJvbSAnLi4vY29tcG9uZW50cy9IaXJlJ1xyXG5pbXBvcnQgeyBNYWhDb250ZXh0IH0gZnJvbSBcIi4vUHJvdmlkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGViYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzdGFydDogZmFsc2UsXHJcbiAgICAgICAgICAgIGhhc2NoaWxkcmVuOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHBhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICBcImNvbnRhY3RcIjogPENvbnRhY3QgLz4sXHJcbiAgICAgICAgICAgICAgICBcIndvcmtcIjogPFdvcmsgLz4sXHJcbiAgICAgICAgICAgICAgICBcImhpcmVcIjogPEhpcmUgLz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpbmtzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJXb3JrXCIsIHVybDogXCIvd29ya1wiLCBjaGlsZHJlbjogW1wiQnVpbHRcIiwgXCJNYWludGFpbmVkXCJdIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJDb250YWN0XCIsIHVybDogXCIvY29udGFjdFwiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJIaXJlXCIsIHVybDogXCIvaGlyZVwiLCBiYWNrZ3JvdW5kOiBcIi8vIGh0dHBzOi8vd3d3Lmdsb3RhY29zbS5jb20vb3JpZW50cGl4ZWwtYmcuanBnXCIgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICBzdWJNZW51VG9nZ2xlciA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe2hhc2NoaWxkcmVuOiAhdGhpcy5zdGF0ZS5oYXNjaGlsZHJlbn0pXHJcbiAgICBcclxuICAgIGhpZGVNb2RhbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSwgdHlwZTogXCJcIiB9KTtcclxuICAgIFxyXG4gICAgc2V0UGFnZSA9IHRoZVBhZ2UgPT4gdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFBhZ2U6IHRoZVBhZ2UsIHNob3c6IHRydWUgfSlcclxuICAgIFxyXG4gICAgYmxhaGVyID0gKGxpbmssIHVwZGF0ZVRoZVBvaW50cykgPT4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2Ake2xpbmsuY2hpbGRyZW4gJiYgXCJzaWRlYmFyLS1oYXMtY2hpbGRyZW5cIn1gfSBcclxuICAgICAgICAgICAgb25DbGljaz17bGluay5jaGlsZHJlbiAmJiB0aGlzLnN1Yk1lbnVUb2dnbGVyfT5cclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaWRlYmFyLS1saW5rXCIgXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFnZShsaW5rLm5hbWUudG9Mb3dlckNhc2UoKSk7IFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVGhlUG9pbnRzKCk7XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICB7bGluay5uYW1lfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx1bCBcclxuICAgICAgICAgIGNsYXNzTmFtZT17YHNpZGViYXItLWxpbmtzYH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xpbmsuY2hpbGRyZW4gJiYgbGluay5jaGlsZHJlbi5tYXAoY2hpbGRMaW5rID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjaGlsZExpbmt9IFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2Ake2xpbmsudXJsfT9zb3J0PSR7Y2hpbGRMaW5rLnRvTG93ZXJDYXNlKCl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItLWxpbmtfX2NoaWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2xpPlxyXG4gICAgKVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKCAgXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TWFoQ29udGV4dD5cclxuICAgICAgICAgICAgeyBjb250ZXh0ID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2coY29udGV4dCwgXCI8LS1cIil9XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlYmFyXCIgc3R5bGU9e3tkaXNwbGF5OiBgJHt0aGlzLnByb3BzLm1lbnUgPyBcIm5vbmVcIiA6IFwiaW5pdGlhbFwiIH1gfX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5saW5rcygpLm1hcChsaW5rID0+IChcclxuICAgICAgICAgICAgICAgICAgPD4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWxpbmsuY2hpbGRyZW4gPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0UGFnZShsaW5rLm5hbWUudG9Mb3dlckNhc2UoKSl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmJsYWhlcihsaW5rLCBjb250ZXh0LnVwZGF0ZVBvaW50cyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ibGFoZXIobGluaywgY29udGV4dC51cGRhdGVQb2ludHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyF0aGlzLnByb3BzLm1lbnUgJiYgXCJkaXNwbGF5OiBub25lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci0taGFzLWNoaWxkcmVuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItLWhhcy1jaGlsZHJlbiBsaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyF0aGlzLnN0YXRlLmhhc2NoaWxkcmVuICYmIFwiZGlzcGxheTogbm9uZTtcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLS1oYXMtY2hpbGRyZW46YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBpbnNldDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMTBweCAxMi41cHggMCAxMi41cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItLWhhcy1jaGlsZHJlbiAuc2lkZWJhci0tbGlua3MgbGk6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXIgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggNnB4IDBweCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhciBsaTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLS1saW5rcywgc2lkZWJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci0tbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItLWxpbmtfX2NoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1vZGFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAud29yay0tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1vZGFsLW1haW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpc3BsYXktYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGlzcGxheS1ub25lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvTWFoQ29udGV4dD5cclxuICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPE1vZGFsIFxyXG4gICAgICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93fSBcclxuICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlPXt0aGlzLmhpZGVNb2RhbH1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMuc3RhdGUucGFnZXNbdGhpcy5zdGF0ZS5jdXJyZW50UGFnZV19XHJcbiAgICAgICAgICAgICAgICBwYWdlQ2xhc3M9e3RoaXMuc3RhdGUuY3VycmVudFBhZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICBcclxuPC8+XHJcbiAgICAgICAgKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\Sidebar.js */"),
            dynamic: [!_this2.props.menu && "display: none", !_this2.state.haschildren && "display: none;"]
          }));
        })));
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
        show: this.state.show,
        handleClose: this.hideModal,
        content: this.state.pages[this.state.currentPage],
        pageClass: this.state.currentPage
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3923918596", [font, font, font]]]) + " " + "portfolio--wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3923918596", [font, font, font]]]) + " " + "portfolio--header"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Printer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Glotacosm".split("")
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3923918596", [font, font, font]]]) + " " + "portfolio--header"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Printer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Web Development PORTFOLIO".split("")
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("blink", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3923918596", [font, font, font]]])
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        style: {
          display: "".concat(!this.state.start && "none")
        },
        onClick: this.pressStart,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3923918596", [font, font, font]]]) + " " + "start-button blink"
      }, "Click Here to Continue")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3923918596",
        css: ".start-button.__jsx-style-dynamic-selector{display:block;margin:0 auto;font-family:".concat(font, " text-transform:uppercase;border:none;color:white;background-color:transparent;text-shadow:1px 10px 0px black;}h1.__jsx-style-dynamic-selector{font-family:").concat(font, " text-align:center;font-size:75px;color:white;text-transform:uppercase;text-shadow:1px 5px 0px black;}h2.__jsx-style-dynamic-selector{font-family:").concat(font, " text-align:center;font-size:30px;color:white;text-transform:uppercase;text-shadow:1px 5px 0px black;}.points.__jsx-style-dynamic-selector{color:white;}blink.__jsx-style-dynamic-selector{-webkit-animation:2s linear infinite condemned_blink_effect;-webkit-animation:2s linear infinite condemned_blink_effect-__jsx-style-dynamic-selector;animation:2s linear infinite condemned_blink_effect-__jsx-style-dynamic-selector;}@-webkit-keyframes condemned_blink_effect{0%.__jsx-style-dynamic-selector{visibility:hidden;}50%.__jsx-style-dynamic-selector{visibility:hidden;}100%.__jsx-style-dynamic-selector{visibility:visible;}}@-webkit-keyframes condemned_blink_effect-__jsx-style-dynamic-selector{0%{visibility:hidden;}50%{visibility:hidden;}100%{visibility:visible;}}@keyframes condemned_blink_effect-__jsx-style-dynamic-selector{0%{visibility:hidden;}50%{visibility:hidden;}100%{visibility:visible;}}@media screen and (max-width:767px){.portfolio--header.__jsx-style-dynamic-selector{font-size:57px;}}@media screen and (max-width:567px){.portfolio--header.__jsx-style-dynamic-selector{font-size:32px;}body.__jsx-style-dynamic-selector{background-position:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NrQixBQUl1QixBQVdJLEFBU0EsQUFTTixBQUlnRCxBQUt4QyxBQUdBLEFBR0MsQUFLRCxBQUdBLEFBR0MsQUFLSixBQU1BLEFBSVUsWUF4QzdCLEVBN0JnQixDQTREZCxBQU1BLEdBNUJBLEFBR0EsQUFRQSxBQUdBLENBUkEsQUFXQSxNQWVBLEdBcEV5QiwrQkFTVixBQVNBLENBYXFDLGNBckJ4QyxBQVNBLFlBUmEsQUFTQSxRQW5CYixZQUNBLEtBVWtCLEFBU0EsT0FsQkQsdUJBVS9CLEFBVUEsTUFuQmlDLCtCQUNqQyxvREEyQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRvbmlvXFxwb3J0LWNvbmNlcHRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcclxuaW1wb3J0IFByaW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QcmludGVyJztcclxuaW1wb3J0IE15UHJvdmlkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvdmlkZXJcIjtcclxuXHJcbmNvbnN0IGZvbnQgPSBcIidQcmVzcyBTdGFydCAyUCc7XCJcclxuXHJcblxyXG5jb25zdCB7Q29tcG9uZW50fSA9IFJlYWN0XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0geyBzdGFydDogdHJ1ZSB9XHJcbiAgfVxyXG5cclxuICBwcmVzc1N0YXJ0ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0OiAhdGhpcy5zdGF0ZS5zdGFydH0pXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNeVByb3ZpZGVyPlxyXG4gICAgICA8PlxyXG4gICAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby0td3JhcHBlclwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwicG9ydGZvbGlvLS1oZWFkZXJcIj5cclxuICAgICAgICA8UHJpbnRlciB0ZXh0PXtcIkdsb3RhY29zbVwiLnNwbGl0KFwiXCIpfS8+XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tLWhlYWRlclwiPlxyXG4gICAgICAgIDxQcmludGVyIHRleHQ9e1wiV2ViIERldmVsb3BtZW50IFBPUlRGT0xJT1wiLnNwbGl0KFwiXCIpfS8+XHJcbiAgICAgIDwvaDI+XHJcbiAgICAgIDxibGluaz5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdGFydC1idXR0b24gYmxpbmtcIlxyXG4gICAgICAgIHN0eWxlPXt7ZGlzcGxheTogYCR7IXRoaXMuc3RhdGUuc3RhcnQgJiYgXCJub25lXCJ9YH19IFxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMucHJlc3NTdGFydH0+XHJcbiAgICAgICAgQ2xpY2sgSGVyZSB0byBDb250aW51ZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9ibGluaz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBcclxuICAgICAgLnN0YXJ0LWJ1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udH1cclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxMHB4IDBweCBibGFjaztcclxuICAgICAgfVxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udH1cclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiA3NXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggNXB4IDBweCBibGFjaztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnR9XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDVweCAwcHggYmxhY2s7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wb2ludHMge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYmxpbmsge1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBsaW5lYXIgaW5maW5pdGUgY29uZGVtbmVkX2JsaW5rX2VmZmVjdDsgLy8gZm9yIGFuZHJvaWRcclxuICAgICAgICBhbmltYXRpb246IDJzIGxpbmVhciBpbmZpbml0ZSBjb25kZW1uZWRfYmxpbmtfZWZmZWN0O1xyXG4gICAgICB9XHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBjb25kZW1uZWRfYmxpbmtfZWZmZWN0IHsgLy8gZm9yIGFuZHJvaWRcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDUwJSB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQGtleWZyYW1lcyBjb25kZW1uZWRfYmxpbmtfZWZmZWN0IHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDUwJSB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAucG9ydGZvbGlvLS1oZWFkZXIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA1N3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY3cHgpIHtcclxuICAgICAgICAucG9ydGZvbGlvLS1oZWFkZXIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8TGF5b3V0IG1lbnU9e2ZhbHNlfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgPC8+XHJcbiAgICAgICAgICAgIDwvTXlQcm92aWRlcj4gXHJcbiAgICApXHJcbiAgfSBcclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\pages\\index.js */"),
        dynamic: [font, font, font]
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        menu: false
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