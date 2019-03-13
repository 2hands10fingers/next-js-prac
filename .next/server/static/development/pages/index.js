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
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Contact"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
            onClick: function onClick() {
              return context.updatePoints();
            },
            href: info.site,
            target: "_blank"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            src: info.img,
            alt: info.label && info.label
          })));
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Choose Your Contact Method"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-4123697360" + " " + "contact--char-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CharSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
          side: "left",
          charName: label
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-4123697360" + " " + "versus"
        }, "~VS~"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CharSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
          side: "right",
          charName: "meme"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "4123697360",
          css: ".modal-main.contact{padding:0;height:80.2%;background:-moz-linear-gradient(top,rgba(119,30,154,1) 0%,rgba(119,30,154,0.8) 2%,rgba(119,30,154,0.8) 20%,rgba(152,42,216,0.8) 50%,rgba(119,30,154,0.8) 80%,rgba(119,30,154,0.8) 99%,rgba(119,30,154,0) 100%);background:-webkit-linear-gradient(top,rgba(119,30,154,1) 0%,rgba(119,30,154,0.8) 2%,rgba(119,30,154,0.8) 20%,rgba(152,42,216,0.8) 50%,rgba(119,30,154,0.8) 80%,rgba(119,30,154,0.8) 99%,rgba(119,30,154,0) 100%);background:linear-gradient(to bottom,rgba(119,30,154,1) 0%,rgba(119,30,154,0.8) 2%,rgba(119,30,154,0.8) 20%,rgba(152,42,216,0.8) 50%,rgba(119,30,154,0.8) 80%,rgba(119,30,154,0.8) 99%,rgba(119,30,154,0) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#771e9a',endColorstr='#00771e9a',GradientType=0 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#771e9a',endColorstr='#00771e9a',GradientType=0 );}.versus{color:white;height:110px;line-height:110px;position:absolute;text-shadow:1px 2px 12px black;font-size:22px;background:royalblue;border:1px solid whitesmoke;padding:0 11px;top:40px;border-radius:100px;background:rgb(254,252,234);background:-moz-radial-gradient(center,ellipse cover,rgba(254,252,234,1) 0%,rgba(241,218,54,1) 100%);background:-webkit-radial-gradient(center,ellipse cover,rgba(254,252,234,1) 0%,rgba(241,218,54,1) 100%);background:radial-gradient(ellipse at center,rgba(254,252,234,1) 0%,rgba(241,218,54,1) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefcea',endColorstr='#f1da36',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefcea',endColorstr='#f1da36',GradientType=1 );box-shadow:1px 1px 115px magenta;}.contact--container{padding-top:2rem;background:-moz-linear-gradient(top,rgba(119,30,154,1) 0%,rgba(119,30,154,0.8) 2%,rgba(119,30,154,0.8) 20%,rgba(152,42,216,0.8) 50%,rgba(119,30,154,0.8) 80%,rgba(119,30,154,0.8) 99%,rgba(119,30,154,0) 100%);background:-webkit-linear-gradient(top,rgba(119,30,154,1) 0%,rgba(119,30,154,0.8) 2%,rgba(119,30,154,0.8) 20%,rgba(152,42,216,0.8) 50%,rgba(119,30,154,0.8) 80%,rgba(119,30,154,0.8) 99%,rgba(119,30,154,0) 100%);background:linear-gradient(to bottom,rgba(119,30,154,1) 0%,rgba(119,30,154,0.8) 2%,rgba(119,30,154,0.8) 20%,rgba(152,42,216,0.8) 50%,rgba(119,30,154,0.8) 80%,rgba(119,30,154,0.8) 99%,rgba(119,30,154,0) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#771e9a',endColorstr='#00771e9a',GradientType=0 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#771e9a',endColorstr='#00771e9a',GradientType=0 );}.contact--container h1,.contact--container h2{color:white;text-shadow:1px 2px 12px black;}.form{width:500px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 auto;margin-bottom:3rem;}.contact--container h1,.contact--container h2,.versus{font-family:'Press Start 2P';text-align:center;}.contact--char-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;position:relative;}.char--select-container{width:50%;}.char--select-container.right .b--content{background:-moz-linear-gradient(45deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);background:-webkit-linear-gradient(45deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);background:linear-gradient(45deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799',endColorstr='#001e5799',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799',endColorstr='#001e5799',GradientType=1 );}.char--select-container.left .b--content{background:-moz-linear-gradient(-45deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);background:-webkit-linear-gradient(-45deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);background:linear-gradient(135deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799',endColorstr='#001e5799',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799',endColorstr='#001e5799',GradientType=1 );}.contact--image-link .b--content{background:rgb(183,222,237);background:-moz-linear-gradient(45deg,rgba(183,222,237,1) 0%,rgba(113,206,239,1) 50%,rgba(33,180,226,1) 51%,rgba(183,222,237,1) 100%);background:-webkit-linear-gradient(45deg,rgba(183,222,237,1) 0%,rgba(113,206,239,1) 50%,rgba(33,180,226,1) 51%,rgba(183,222,237,1) 100%);background:linear-gradient(45deg,rgba(183,222,237,1) 0%,rgba(113,206,239,1) 50%,rgba(33,180,226,1) 51%,rgba(183,222,237,1) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#b7deed',endColorstr='#b7deed',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#b7deed',endColorstr='#b7deed',GradientType=1 );}.contact--image-link .b--border:hover{border-color:brown;}.contact--image-link img{width:130px;height:auto;}.char--char-box img{width:auto;height:170px;display:block;margin:0 auto;}.char--select-container.left .char--name{text-align:right;}.char--select-container.right .char--name{text-align:left;}@media screen and (max-width:767px){.versus{padding:initial;line-height:50px;height:50px;}}@media screen and (max-width:567px){.form{width:initial;}.versus{font-size:14px;}.modal-main.contact{height:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxDb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFMkIsQUFJcUIsQUFZRSxBQXFCSyxBQVVMLEFBT0EsQUFXaUIsQUFLaEIsQUFNSCxBQUt3SyxBQVFDLEFBUXZKLEFBUVQsQUFJUCxBQUtELEFBT00sQUFJRCxBQUtFLEFBUUYsQUFJQyxBQUlILFVBN0lELEFBd0VmLENBc0NlLENBbEdBLEFBK0JrQixBQU9sQixBQXVERCxBQXFDWixFQVJBLENBSUEsQ0FqQkYsQUFLcUIsQ0E1Rm1NLEFBbUZ4TixFQWhCQSxJQW5Hd04sQ0F3R3hOLEFBS2dCLENBbEdJLEdBZ0Z3SCxDQWhDeEgsSUFrRUosS0FmQSxLQWxHSSxBQThCcEIsRUFvRkUsRUFsRUYsS0FtREEsU0FsR2lDLGFBbURGLFlBZmQsTUFuQ0EsZUFDTSxxQkFDTyxlQWtDTCxhQWpDUixNQTJFMkgsU0ExRWpJLENBeUR1SyxDQVFDLE9BaEU3SixpQkE4Q0YsR0E1Q1UsZUE2QzlCLFNBakNxTixJQVgzRyxFQXJCMkcsWUFrRHJNLGNBQ0ssbUJBQ3JCLHdCQXdDb0ksOEJBdEV4QixrQkFxRDhELEVBUUMsK0VBVXRELEtBdEVyQixDQVVtSCxNQWhDQSwwRUEyRTVGLEdBUUEsU0E1REYsb0hBVUUsTUFoQ0EsZ0JBNEZ2SCwwRkFqQkEsR0FRQSxLQTVEbUMsaUNBQ25DLHVGQVNBLE1BOUJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxDb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgQ2hhclNlbGVjdCBmcm9tIFwiLi9DaGFyU2VsZWN0XCJcbmltcG9ydCBDb250ZW50QmxvY2sgZnJvbSAnLi9Db250ZW50QmxvY2snO1xuaW1wb3J0IHsgTWFoQ29udGV4dCB9IGZyb20gXCIuL1Byb3ZpZGVyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFjdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhdGUgPXtcbiAgICAgIGxhYmVsOiB1bmRlZmluZWQsXG4gICAgICBzaXRlOiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBjb250YWN0T3JOYWggPSAoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0ciA9PSBcImVtYWlsXCIgJiYgXCJDb250YWN0XCJcbiAgfVxuXG4gIGljb25zID0gKCkgPT4ge1xuICAgIHJldHVybiBbXG4gICAgICB7IHNpdGU6IFwibWFpbHRvOmFudG9uaW9AZ2xvdGFjb3NtLmNvbVwiLCBpbWc6ICdodHRwczovL2dsb3RhY29zbS5jb20vaW1nL2NoYXIvY2hhci1lbWFpbC5wbmcnLCBsYWJlbDogXCJlbWFpbFwiIH0sXG4gICAgICB7IHNpdGU6IFwiaHR0cHM6Ly9naXRodWIuY29tLzJoYW5kczEwZmluZ2Vyc1wiLCBpbWc6ICdodHRwczovL2dsb3RhY29zbS5jb20vaW1nL2NoYXIvY2hhci1naXRodWIucG5nJywgbGFiZWw6IFwiZ2l0aHViXCIgfSxcbiAgICAgIHsgc2l0ZTogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYW5vZ3VlcmFzL1wiLCBpbWc6ICdodHRwczovL2dsb3RhY29zbS5jb20vaW1nL2NoYXIvY2hhci1saW5rZWRpbi5wbmcnLCBsYWJlbDogXCJsaW5rZWRpblwiIH0sXG4gICAgXVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwgfSA9IHRoaXMuc3RhdGVcbiAgICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtLWNvbnRhaW5lclwiPlxuICAgICAgPE1haENvbnRleHQ+XG4gICAgICAgIHsgY29udGV4dCA9PiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgIFxuICAgICAgICAgIDxoMT5Db250YWN0PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAge3RoaXMuaWNvbnMoKS5tYXAoIChpbmZvLCBpbmRleCkgPT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHRoaXMuc2V0U3RhdGUoe2xhYmVsOiBpbmZvLmxhYmVsLCBzaXRlOiBpbmZvLnNpdGV9KX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7bGFiZWw6IHVuZGVmaW5lZCwgc2l0ZTogdW5kZWZpbmVkIH0pfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29udGFjdC0taW1hZ2UtbGluayAke2luZm8ubGFiZWwgJiYgaW5mby5sYWJlbH1gfVxuICAgICAgICAgICAgb25DbGljaz17KCk9PiBjb250ZXh0LnVwZGF0ZVBvaW50cygpfVxuICAgICAgICAgICAgaHJlZj17aW5mby5zaXRlfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENvbnRlbnRCbG9jaz5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW5mby5pbWd9IGFsdD17aW5mby5sYWJlbCAmJiBpbmZvLmxhYmVsfS8+XG4gICAgICAgICAgICAgICAgey8qIGltYWdlIGZyb20gZm9udGF3ZXNvbWUgaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAqL31cbiAgICAgICAgICAgICAgPC9Db250ZW50QmxvY2s+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgyPkNob29zZSBZb3VyIENvbnRhY3QgTWV0aG9kPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LS1jaGFyLXdyYXBwZXJcIj5cbiAgICAgICAgPENoYXJTZWxlY3RcbiAgICAgICAgICBzaWRlPVwibGVmdFwiXG4gICAgICAgICAgY2hhck5hbWU9e2xhYmVsfVxuICAgICAgICAgIC8+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnN1c1wiPn5WU348L2Rpdj5cblxuICAgICAgICA8Q2hhclNlbGVjdFxuICAgICAgICAgIHNpZGU9XCJyaWdodFwiXG4gICAgICAgICAgY2hhck5hbWU9e1wibWVtZVwifVxuICAgICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cbiAgICAgICAgLm1vZGFsLW1haW4uY29udGFjdCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBoZWlnaHQ6IDgwLjIlO1xuICAgICAgICAgICAgICAgICAgICAvKiBQZXJtYWxpbmsgLSB1c2UgdG8gZWRpdCBhbmQgc2hhcmUgdGhpcyBncmFkaWVudDogaHR0cDovL2NvbG9yemlsbGEuY29tL2dyYWRpZW50LWVkaXRvci8jNzcxZTlhKzIwLDk4MmFkOCs1MCw3NzFlOWErODAmMCswLDAuOCsyLDErMCwxKzk5LDAuOCs5OSwwKzEwMCAqL1xuICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgxMTksMzAsMTU0LDEpIDAlLCByZ2JhKDExOSwzMCwxNTQsMC44KSAyJSwgcmdiYSgxMTksMzAsMTU0LDAuOCkgMjAlLCByZ2JhKDE1Miw0MiwyMTYsMC44KSA1MCUsIHJnYmEoMTE5LDMwLDE1NCwwLjgpIDgwJSwgcmdiYSgxMTksMzAsMTU0LDAuOCkgOTklLCByZ2JhKDExOSwzMCwxNTQsMCkgMTAwJSk7IC8qIEZGMy42LTE1ICovXG4gICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDExOSwzMCwxNTQsMSkgMCUscmdiYSgxMTksMzAsMTU0LDAuOCkgMiUscmdiYSgxMTksMzAsMTU0LDAuOCkgMjAlLHJnYmEoMTUyLDQyLDIxNiwwLjgpIDUwJSxyZ2JhKDExOSwzMCwxNTQsMC44KSA4MCUscmdiYSgxMTksMzAsMTU0LDAuOCkgOTklLHJnYmEoMTE5LDMwLDE1NCwwKSAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDExOSwzMCwxNTQsMSkgMCUscmdiYSgxMTksMzAsMTU0LDAuOCkgMiUscmdiYSgxMTksMzAsMTU0LDAuOCkgMjAlLHJnYmEoMTUyLDQyLDIxNiwwLjgpIDUwJSxyZ2JhKDExOSwzMCwxNTQsMC44KSA4MCUscmdiYSgxMTksMzAsMTU0LDAuOCkgOTklLHJnYmEoMTE5LDMwLDE1NCwwKSAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM3NzFlOWEnLCBlbmRDb2xvcnN0cj0nIzAwNzcxZTlhJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL1xuICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC52ZXJzdXMge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAycHggMTJweCBibGFjaztcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogcm95YWxibHVlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gICAgICAgICAgcGFkZGluZzogMCAxMXB4O1xuICAgICAgICAgIHRvcDogNDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAvKiBQZXJtYWxpbmsgLSB1c2UgdG8gZWRpdCBhbmQgc2hhcmUgdGhpcyBncmFkaWVudDogaHR0cDovL2NvbG9yemlsbGEuY29tL2dyYWRpZW50LWVkaXRvci8jZmVmY2VhKzAsZjFkYTM2KzEwMDtHb2xkKzNEICovXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NCwyNTIsMjM0KTsgLyogT2xkIGJyb3dzZXJzICovXG4gICAgICAgICAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDI1NCwyNTIsMjM0LDEpIDAlLCByZ2JhKDI0MSwyMTgsNTQsMSkgMTAwJSk7IC8qIEZGMy42LTE1ICovXG4gICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDI1NCwyNTIsMjM0LDEpIDAlLHJnYmEoMjQxLDIxOCw1NCwxKSAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMjU0LDI1MiwyMzQsMSkgMCUscmdiYSgyNDEsMjE4LDU0LDEpIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZlZmNlYScsIGVuZENvbG9yc3RyPScjZjFkYTM2JyxHcmFkaWVudFR5cGU9MSApOyAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxMTVweCBtYWdlbnRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhY3QtLWNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgICAgICAgLyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHA6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvIzc3MWU5YSsyMCw5ODJhZDgrNTAsNzcxZTlhKzgwJjArMCwwLjgrMiwxKzAsMSs5OSwwLjgrOTksMCsxMDAgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMTE5LDMwLDE1NCwxKSAwJSwgcmdiYSgxMTksMzAsMTU0LDAuOCkgMiUsIHJnYmEoMTE5LDMwLDE1NCwwLjgpIDIwJSwgcmdiYSgxNTIsNDIsMjE2LDAuOCkgNTAlLCByZ2JhKDExOSwzMCwxNTQsMC44KSA4MCUsIHJnYmEoMTE5LDMwLDE1NCwwLjgpIDk5JSwgcmdiYSgxMTksMzAsMTU0LDApIDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xuICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgxMTksMzAsMTU0LDEpIDAlLHJnYmEoMTE5LDMwLDE1NCwwLjgpIDIlLHJnYmEoMTE5LDMwLDE1NCwwLjgpIDIwJSxyZ2JhKDE1Miw0MiwyMTYsMC44KSA1MCUscmdiYSgxMTksMzAsMTU0LDAuOCkgODAlLHJnYmEoMTE5LDMwLDE1NCwwLjgpIDk5JSxyZ2JhKDExOSwzMCwxNTQsMCkgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgxMTksMzAsMTU0LDEpIDAlLHJnYmEoMTE5LDMwLDE1NCwwLjgpIDIlLHJnYmEoMTE5LDMwLDE1NCwwLjgpIDIwJSxyZ2JhKDE1Miw0MiwyMTYsMC44KSA1MCUscmdiYSgxMTksMzAsMTU0LDAuOCkgODAlLHJnYmEoMTE5LDMwLDE1NCwwLjgpIDk5JSxyZ2JhKDExOSwzMCwxNTQsMCkgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjNzcxZTlhJywgZW5kQ29sb3JzdHI9JyMwMDc3MWU5YScsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWN0LS1jb250YWluZXIgaDEsXG4gICAgICAgIC5jb250YWN0LS1jb250YWluZXIgaDIge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAxMnB4IGJsYWNrO1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIC5mb3JtIHtcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWN0LS1jb250YWluZXIgaDEsIFxuICAgICAgICAuY29udGFjdC0tY29udGFpbmVyIGgyLCBcbiAgICAgICAgLnZlcnN1cyB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCc7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhY3QtLWNoYXItd3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhci0tc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGFyLS1zZWxlY3QtY29udGFpbmVyLnJpZ2h0IC5iLS1jb250ZW50IHsgICAgICAgIFxuICAgICAgICAgIC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyMxZTU3OTkrMjAsMjk4OWQ4KzUwLDFlNTc5OSs4MCYwKzAsMSswLDErOTksMSs5OSwwKzEwMCAqL1xuICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDMwLDg3LDE1MywxKSAwJSwgcmdiYSgzMCw4NywxNTMsMSkgMjAlLCByZ2JhKDQxLDEzNywyMTYsMSkgNTAlLCByZ2JhKDMwLDg3LDE1MywxKSA4MCUsIHJnYmEoMzAsODcsMTUzLDEpIDk5JSwgcmdiYSgzMCw4NywxNTMsMCkgMTAwJSk7IC8qIEZGMy42LTE1ICovXG4gICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMzAsODcsMTUzLDEpIDAlLHJnYmEoMzAsODcsMTUzLDEpIDIwJSxyZ2JhKDQxLDEzNywyMTYsMSkgNTAlLHJnYmEoMzAsODcsMTUzLDEpIDgwJSxyZ2JhKDMwLDg3LDE1MywxKSA5OSUscmdiYSgzMCw4NywxNTMsMCkgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDMwLDg3LDE1MywxKSAwJSxyZ2JhKDMwLDg3LDE1MywxKSAyMCUscmdiYSg0MSwxMzcsMjE2LDEpIDUwJSxyZ2JhKDMwLDg3LDE1MywxKSA4MCUscmdiYSgzMCw4NywxNTMsMSkgOTklLHJnYmEoMzAsODcsMTUzLDApIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzFlNTc5OScsIGVuZENvbG9yc3RyPScjMDAxZTU3OTknLEdyYWRpZW50VHlwZT0xICk7IC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGFyLS1zZWxlY3QtY29udGFpbmVyLmxlZnQgLmItLWNvbnRlbnQge1xuICAgICAgICAgIC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyMxZTU3OTkrMjAsMjk4OWQ4KzUwLDFlNTc5OSs4MCYwKzAsMSswLDErOTksMSs5OSwwKzEwMCAqL1xuICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgzMCw4NywxNTMsMSkgMCUsIHJnYmEoMzAsODcsMTUzLDEpIDIwJSwgcmdiYSg0MSwxMzcsMjE2LDEpIDUwJSwgcmdiYSgzMCw4NywxNTMsMSkgODAlLCByZ2JhKDMwLDg3LDE1MywxKSA5OSUsIHJnYmEoMzAsODcsMTUzLDApIDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xuICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgzMCw4NywxNTMsMSkgMCUscmdiYSgzMCw4NywxNTMsMSkgMjAlLHJnYmEoNDEsMTM3LDIxNiwxKSA1MCUscmdiYSgzMCw4NywxNTMsMSkgODAlLHJnYmEoMzAsODcsMTUzLDEpIDk5JSxyZ2JhKDMwLDg3LDE1MywwKSAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDMwLDg3LDE1MywxKSAwJSxyZ2JhKDMwLDg3LDE1MywxKSAyMCUscmdiYSg0MSwxMzcsMjE2LDEpIDUwJSxyZ2JhKDMwLDg3LDE1MywxKSA4MCUscmdiYSgzMCw4NywxNTMsMSkgOTklLHJnYmEoMzAsODcsMTUzLDApIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzFlNTc5OScsIGVuZENvbG9yc3RyPScjMDAxZTU3OTknLEdyYWRpZW50VHlwZT0xICk7IC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWN0LS1pbWFnZS1saW5rIC5iLS1jb250ZW50IHtcbiAgICAgICAgICAvKiBQZXJtYWxpbmsgLSB1c2UgdG8gZWRpdCBhbmQgc2hhcmUgdGhpcyBncmFkaWVudDogaHR0cDovL2NvbG9yemlsbGEuY29tL2dyYWRpZW50LWVkaXRvci8jYjdkZWVkKzAsNzFjZWVmKzUwLDIxYjRlMis1MSxiN2RlZWQrMTAwO1NoYXBlKzErU3R5bGUgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTgzLDIyMiwyMzcpOyAvKiBPbGQgYnJvd3NlcnMgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgxODMsMjIyLDIzNywxKSAwJSwgcmdiYSgxMTMsMjA2LDIzOSwxKSA1MCUsIHJnYmEoMzMsMTgwLDIyNiwxKSA1MSUsIHJnYmEoMTgzLDIyMiwyMzcsMSkgMTAwJSk7IC8qIEZGMy42LTE1ICovXG4gICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMTgzLDIyMiwyMzcsMSkgMCUscmdiYSgxMTMsMjA2LDIzOSwxKSA1MCUscmdiYSgzMywxODAsMjI2LDEpIDUxJSxyZ2JhKDE4MywyMjIsMjM3LDEpIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgxODMsMjIyLDIzNywxKSAwJSxyZ2JhKDExMywyMDYsMjM5LDEpIDUwJSxyZ2JhKDMzLDE4MCwyMjYsMSkgNTElLHJnYmEoMTgzLDIyMiwyMzcsMSkgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjYjdkZWVkJywgZW5kQ29sb3JzdHI9JyNiN2RlZWQnLEdyYWRpZW50VHlwZT0xICk7IC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWN0LS1pbWFnZS1saW5rIC5iLS1ib3JkZXI6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogYnJvd247XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFjdC0taW1hZ2UtbGluayBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhci0tY2hhci1ib3ggaW1nIHtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICBoZWlnaHQ6IDE3MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoYXItLXNlbGVjdC1jb250YWluZXIubGVmdCAuY2hhci0tbmFtZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhci0tc2VsZWN0LWNvbnRhaW5lci5yaWdodCAuY2hhci0tbmFtZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfSBcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgIC52ZXJzdXMge1xuICAgICAgICAgICAgcGFkZGluZzogaW5pdGlhbDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gICAgICAgICAgLmZvcm0ge1xuICAgICAgICAgICAgd2lkdGg6IGluaXRpYWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC52ZXJzdXMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAubW9kYWwtbWFpbi5jb250YWN0IHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9IFxuICAgICAgICB9XG5cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICA8L01haENvbnRleHQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\Contact.js */"
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
          className: "jsx-2420316168" + " " + "hire--profile-image"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "2420316168",
          css: ".hire--wrapper{padding:15px 0;}.hire--wrapper h1,.hire--wrapper h2{font-family:'Press Start 2P';text-align:center;}.hire--wrapper h2{color:white;text-shadow:1px 2px 10px black;}.profile{max-width:460px;max-height:190px;margin-top:15px;}.modal-main.hire{background:url(https://www.glotacosm.com/orientpixel-bg.jpg) 100%/cover no-repeat;overflow-y:scroll;-webkit-scrollbar-width:none;-moz-scrollbar-width:none;-ms-scrollbar-width:none;scrollbar-width:none;-ms-overflow-style:none;height:100%;}.modal-main.hire::-webkit-scrollbar{width:0;height:0;}.hire--skills{margin-top:15px;}.hire--profile-image{height:210px;position:relative;top:12px;}.main--info{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:260px;}.hire--text{padding:0 10px;line-height:1.5;}.hire--skills-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;}.hire--skills-wrapper h2{margin-top:4rem;}.hire--skill{margin:2rem;background-color:black;padding:10px 5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-shadow:1px 2px 0px #ffeb3ba1;width:20%;min-height:160px;color:white;text-align:center;font-family:'Press Start 2P';background:url(https://glotacosm.com/spellbook-pixel.png) 100%/contain no-repeat;color:black;font-size:14px;}@media screen and (max-width:767px){.main--info{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.profile .b--border{width:100%;margin:0 0 0 auto !important;}.profile{max-width:initial;}.hire--skill{margin:1.5rem;}.hire--text{font-size:14px;}.hire--profile-image{margin:0 auto;display:block;}}.button--link{text-align:center;padding:1rem;}.button--link a{width:50px;height:72px;padding:0.6rem;text-transform:capitalize;font-size:20px;-webkit-text-decoration:none;text-decoration:none;font-family:'Press Start 2P';color:black;background-color:green;}.button--link a:hover{color:green;background-color:black;cursor:pointer;}@media screen and (max-width:567px){.hire--wrapper h2{font-size:20px;}.modal-main.hire{height:100%;width:90%;}.hire--wrapper:{width:50%;}.hire--skill{margin:0.6rem;width:40%;font-size:15px;}.hire--text{margin-top:2.8rem;}}@media screen and (max-width:478px){.hire--skill{width:66%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxIaXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FK0IsQUFHOEIsQUFHYyxBQUtqQixBQUlNLEFBTWdFLEFBUzFFLEFBS1EsQUFJSCxBQU1BLEFBS0UsQUFLRixBQVFHLEFBSUosQUFxQm9CLEFBR25CLEFBSU8sQUFJSixBQUlDLEFBSUQsQUFNRSxBQUtQLEFBWUQsQUFRSyxBQUdILEFBSUosQUFJSSxBQU1JLEFBTVIsUUFsSUMsRUFtSGIsQUFnQkEsQ0F0RW1DLEFBMkJuQixDQTNHbUIsQUF3RFIsQUErREYsQUFXWCxDQXRHUSxDQTREbEIsQUFRZ0IsQUEwQ1IsQ0FsSlYsQUErQ2tCLEFBcURoQixBQW1DRixDQTNIcUIsQUFvQnJCLEFBNEJBLENBaENGLENBZ0VJLEFBa0JhLEFBMENqQixJQWJBLENBdkJtQixDQStCRixJQTFDYixDQXRHa0IsRUFrQ1QsQUFXWCxBQStEQSxFQWxHb0IsRUFvREQsQUErREosR0FYYSxDQStCOUIsQ0E5R0UsQUFtREEsR0FoRkEsSUFMQSxFQVVBLENBbUhGLEVBL0RpQixZQW9ERSxVQTVFRSxBQVVOLEtBbUVVLEdBckdILEdBbUNILE1BVmpCLFNBeEJ1QixFQWtFckIsd0JBbEJ1QixHQXFETSxhQWxFTixnQkFtRVgsWUFDVyx1QkFDM0IsUUF2RzRCLHdCQUNaLEFBK0NVLFlBOUN4QixJQWlDWSxVQUNkLG9EQWFzQyxrQ0FDeEIsVUFDTyxpQkFDTCxZQUNNLGtCQUNXLDZCQUNvRCxpRkFDckUsWUFDRyxlQUNuQiIsImZpbGUiOiJDOlxcVXNlcnNcXEFudG9uaW9cXHBvcnQtY29uY2VwdFxcY29tcG9uZW50c1xcSGlyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGVudEJsb2NrIGZyb20gJy4vQ29udGVudEJsb2NrJztcbmltcG9ydCBQcmludGVyIGZyb20gJy4vUHJpbnRlcic7XG5pbXBvcnQgeyBNYWhDb250ZXh0IH0gZnJvbSBcIi4vUHJvdmlkZXJcIjtcblxuXG5sZXQgdGV4dCA9IFwiQWNjdW11bGF0aW5nIHllYXJzIG9mIGV4cGVyaWVuY2UgaW4gdGhlIGRpZ2l0YWwgbWFya2V0aW5nIGZpZWxkIGFuZCBpbiBjcmVhdGl2ZSBicmFuZGluZywgR0xPVEFDT1NNIHdhcyBib3JuLiBUaGUgY3JlYXRpdmUgaW5pdGlhdGl2ZSBsZWQgYnkgQW50b25pbyBOb2d1ZXJhcyBpcyB0aGUgbnVhbmNlZCByZXNwb25zZSB0byBoaWdobHkgY3JlYXRpdmUgYnJhbmRpbmcgYW5kIG1hcmtldGluZy4gSXQgc2Vla3MgdG8gYnVpbGQgY3JlYXRpdmUgaW5mcmFzdHJ1Y3R1cmVzIGFuZCBleGVjdXRlIGNvbXBsZXggbWFya2V0aW5nIHRhc2tzIHRoYXQgcmVxdWlyZSBhIGNvbWJpbmF0aW9uIG9mIGRpZmZlcmVudCBjcmVhdGl2ZSBza2lsbHMuXiBHTE9UQUNPU00gc2Vla3MgdG8gbWFrZSBhIGJyYWluc3Rvcm0gbG9vayBsaWtlIGEgY29udHJvbGxlZCBGNSBUb3JuYWRvIGluIHRoZSBleWUgb2YgYSBodXJyaWNhbmUuIEl0IHllYXJucyB0byBhcHByb2FjaCBjcmVhdGl2ZSBoZWlnaHRzIHdoZXJlIGNvbnN1bWVycyBuZXZlciB0aG91Z2h0IHBvc3NpYmxlLiBBbmQgd2hpbGUgeW914oCZcmUgd29uZGVyaW5nLCBpdHMgbmFtZSBkZXJpdmVzIGZyb20gTGF0aW4gYW5kIEdyZWVrIHRvIG1lYW4g4oCcV29ybGQgb2YgTGFuZ3VhZ2XigJ0uIEF0IGxlYXN0IGl04oCZcyBlYXNpZXIgdG8gcHJvbm91bmNlIHRoYW4gU2NobG90c2t54oCZcyBvbiB0aGUgZmlyc3QgdHJ5LlwiXG5cbmNsYXNzIEhpcmUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRleHQ6IFwiXCJcbiAgICB9O1xuICB9XG5cbiAgcHJpbnRlciA9IChzdHIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdHIuc3BsaXQoXCJcIikpXG4gICAgcmV0dXJuIHN0ci5zcGxpdChcIlwiKVxuICB9XG5cbiAgc2tpbGxzID0gKCkgPT4ge1xuICAgIHJldHVybiBbXG4gICAgICBcIkhUTUw1XCIsXG4gICAgICBcIkNTUzNcIixcbiAgICAgIFwiU0FTU1wiLFxuICAgICAgXCJQSFBcIixcbiAgICAgIFwiSmF2YVNjcmlwdFwiLFxuICAgICAgXCJSZWFjdFwiLFxuICAgICAgXCJCb29zdHJhcFwiLFxuICAgICAgXCJHcmFwaFFMXCIsXG4gICAgICBcIm15U1FMXCIsXG4gICAgICBcIldvcmRwcmVzcyBDdXN0b20gVGhlbWUgQnVpbGRpbmdcIixcbiAgICAgIFwiUHl0aG9uIDNcIixcbiAgICAgIFwiQWJsZXRvblwiLFxuICAgICAgXCJEaWdpdGFsIE1hcmtldGluZyBDb25zdWx0YXRpb25cIixcbiAgICAgIFwiR3JhcGhpYyBEZXNpZ25cIixcbiAgICAgIFwiQ29weXdyaXRpbmdcIlxuICAgIF1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGlyZS0td3JhcHBlclwiPlxuICAgICAgPE1haENvbnRleHQ+XG4gICAgICAgIHsgY29udGV4dCA9PiAoXG5cbiAgICAgICAgPD5cbiAgICAgICAgPGgxPkhpcmUgTWU8L2gxPlxuICAgICAgICA8aDI+fiBUaGUgTGVnZW5kIH48L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpcmUtLXNraWxsc1wiPiAgICAgXG4gICAgICAgICAgey8qIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpcmUtLWxvZ29cIlxuICAgICAgICAgICAgc3JjPVwiaHR0cDovL3d3dy5nbG90YWNvc20uY29tL2ltZy9HTE9UQUNPU00tYnJhbmRsb2dvLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJwcm9maWxlLXNob3RcIlxuICAgICAgICAgIC8+ICovfVxuXG4gICAgICAgXG4gICBcbiAgICAgICAgPENvbnRlbnRCbG9jayBjb250ZW50Q2xhc3M9e1wibWFpbi0taW5mb1wifT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlyZS0tdGV4dFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPFByaW50ZXIgYW5pbWF0ZSB0ZXh0PXt0ZXh0LnNwbGl0KFwiXCIpfS8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPENvbnRlbnRCbG9jayBjbGFzc2VzPXtcInByb2ZpbGVcIn0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly93d3cuZ2xvdGFjb3NtLmNvbS9waXhlbG1lLnBuZ1wiIGFsdD1cInByb2ZpbGUtc2hvdFwiIGNsYXNzTmFtZT1cImhpcmUtLXByb2ZpbGUtaW1hZ2VcIiAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgIC5oaXJlLS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhpcmUtLXdyYXBwZXIgaDEsIC5oaXJlLS13cmFwcGVyIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCc7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhpcmUtLXdyYXBwZXIgaDIge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7O1xuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAxMHB4IGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2ZpbGUge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDYwcHg7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTkwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vZGFsLW1haW4uaGlyZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3d3dy5nbG90YWNvc20uY29tL29yaWVudHBpeGVsLWJnLmpwZykgMTAwJS9jb3ZlciBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgICAgICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgICAubW9kYWwtbWFpbi5oaXJlOjotd2Via2l0LXNjcm9sbGJhciB7IFxuICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhpcmUtLXNraWxscyB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oaXJlLS1wcm9maWxlLWltYWdlIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMTBweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYWluLS1pbmZvIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMjYwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oaXJlLS10ZXh0IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGlyZS0tc2tpbGxzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhpcmUtLXNraWxscy13cmFwcGVyIGgyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhpcmUtLXNraWxsIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAycmVtO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAwcHggI2ZmZWIzYmExO1xuICAgICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxNjBweDtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9nbG90YWNvc20uY29tL3NwZWxsYm9vay1waXhlbC5wbmcpIDEwMCUvY29udGFpbiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIFxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgICAubWFpbi0taW5mbyB7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wcm9maWxlIC5iLS1ib3JkZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucHJvZmlsZSB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBpbml0aWFsO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmhpcmUtLXNraWxsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEuNXJlbTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5oaXJlLS10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaGlyZS0tcHJvZmlsZS1pbWFnZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ1dHRvbi0tbGluayB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ1dHRvbi0tbGluayBhIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNzJweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMC42cmVtO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnO1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5idXR0b24tLWxpbmsgYTpob3ZlcntcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2N3B4KSB7XG5cbiAgICAgICAgICAgIC5oaXJlLS13cmFwcGVyIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vZGFsLW1haW4uaGlyZSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICB9ICBcbiAgICAgICAgICAuaGlyZS0td3JhcHBlcjoge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGlyZS0tc2tpbGwge1xuICAgICAgICAgICAgbWFyZ2luOiAwLjZyZW07XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oaXJlLS10ZXh0IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIuOHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OHB4KSB7XG4gICAgICAgICAgLmhpcmUtLXNraWxsIHtcbiAgICAgICAgICAgIHdpZHRoOiA2NiU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYH1cblxuICAgICAgXG4gICAgPC9zdHlsZT5cbiAgICAgICAgICA8L0NvbnRlbnRCbG9jaz5cbiAgIFxuICAgICAgICAgIDwvQ29udGVudEJsb2NrPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlyZS0tc2tpbGxzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxoMj5+IE15IEJvb2sgb2YgU3BlbGxzIH48L2gyPlxuICAgICAgICAgIFxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJoaXJlLS1za2lsbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7dGhpcy5za2lsbHMoKS5tYXAoIHNraWxsID0+IChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhpcmUtLXNraWxsXCIgXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IGNvbnRleHQudXBkYXRlUG9pbnRzKCl9IFxuICAgICAgICAgICAgICAgICAga2V5PXtza2lsbH0+e3NraWxsfTwvbGk+KVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPlZpc2l0IHRoZSBHaXRIdWI8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLS1saW5rXCI+XG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tLzJoYW5kczEwZmluZ2Vyc1wiPlZpc2l0PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L01haENvbnRleHQ+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhpcmU7Il19 */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\Hire.js */"
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "hire--skills-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "~ My Book of Spells ~"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
          className: "hire--skills-container"
        }, _this2.skills().map(function (skill) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
            className: "hire--skill",
            onClick: function onClick() {
              return context.updatePoints();
            },
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
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Provider */ "./components/Provider.js");




var Modal = function Modal(_ref) {
  var handleClose = _ref.handleClose,
      show = _ref.show,
      content = _ref.content,
      pageClass = _ref.pageClass;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Provider__WEBPACK_IMPORTED_MODULE_2__["MahContext"], null, function (context) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2737425714" + " " + "".concat(show ? "modal display-block" : "modal display-none")
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick() {
        handleClose();
        context.updateType("");
      },
      className: "jsx-2737425714" + " " + "close--modal"
    }, "X"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "jsx-2737425714" + " " + "modal-main ".concat(!undefined && pageClass)
    }, content), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "2737425714",
      css: ".modal-main.jsx-2737425714{background-color:#483d8b;padding:1.5rem;-webkit-animation:fadein-jsx-2737425714 0.5s ease-in-out;animation:fadein-jsx-2737425714 0.5s ease-in-out;}.close--modal.jsx-2737425714{position:relative;z-index:2;border:1px solid white;background-color:black;color:white;font-family:'Press Start 2P';font-size:20px;}@-webkit-keyframes fadeout{0%.jsx-2737425714{opacity:0;}100%.jsx-2737425714{opacity:1;}}@-moz-keyframes fadeout{0%.jsx-2737425714{opacity:0;}100%.jsx-2737425714{opacity:1;}}@-o-keyframes fadeout{0%.jsx-2737425714{opacity:0;}100%.jsx-2737425714{opacity:1;}}@-webkit-keyframes fadeout-jsx-2737425714{0%{opacity:0;}100%{opacity:1;}}@keyframes fadeout-jsx-2737425714{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fadein{0%.jsx-2737425714{opacity:0;}100%.jsx-2737425714{opacity:1;}}@-moz-keyframes fadein{0%.jsx-2737425714{opacity:0;}100%.jsx-2737425714{opacity:1;}}@-o-keyframes fadein{0%.jsx-2737425714{opacity:0;}100%.jsx-2737425714{opacity:1;}}@-webkit-keyframes fadein-jsx-2737425714{0%{opacity:0;}100%{opacity:1;}}@keyframes fadein-jsx-2737425714{0%{opacity:0;}100%{opacity:1;}}@media screen and (max-width.jsx-2737425714:767px) .modal-main{width:90%;}@media screen and (max-width:567px){.modal-main.jsx-2737425714{width:100%;}.close--modal.jsx-2737425714{font-size:40px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxNb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFJZ0MsQUFNUCxBQVVGLEFBQ0EsQUFHQSxBQUNBLEFBR0EsQUFDQSxBQUdBLEFBQ0EsQUFJQSxBQUNBLEFBR0EsQUFDQSxBQUdBLEFBQ0EsQUFHQSxBQUNBLEFBTUosQUFNQyxBQUlJLFVBOUNBLEFBQ0EsQUFHQSxBQUNBLEFBR0EsQUFDQSxBQUdBLEFBQ0EsQUFJQSxBQUNBLEFBR0EsQUFDQSxBQUdBLEFBQ0EsQUFHQSxBQUNBLEFBT2pCLENBTUEsSUFJQSxHQXhEVSxPQU5LLEdBT1EsWUFOVyxXQU9YLHVCQUNYLFlBQ2lCLDZCQUNkLGVBQ2pCLGdCQVZBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxNb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1haENvbnRleHQgfSBmcm9tIFwiLi9Qcm92aWRlclwiO1xuXG5jb25zdCBNb2RhbCA9ICh7IGhhbmRsZUNsb3NlLCBzaG93LCBjb250ZW50LCBwYWdlQ2xhc3MgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNYWhDb250ZXh0PlxuICAgICAge2NvbnRleHQgPT4gKFxuXG4gICAgICAgIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3Nob3cgPyBcIm1vZGFsIGRpc3BsYXktYmxvY2tcIiA6IFwibW9kYWwgZGlzcGxheS1ub25lXCJ9YH0+XG5cbiAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZS0tbW9kYWxcIiBvbkNsaWNrPXsoKT0+IHtoYW5kbGVDbG9zZSgpOyBjb250ZXh0LnVwZGF0ZVR5cGUoXCJcIil9fT5YPC9idXR0b24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Btb2RhbC1tYWluICR7IXVuZGVmaW5lZCAmJiBwYWdlQ2xhc3N9YH0+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgIFxuICAgIC5tb2RhbC1tYWluIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ODNkOGI7XG4gICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICBhbmltYXRpb246IGZhZGVpbiAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIH1cbiAgICBcbiAgICAuY2xvc2UtLW1vZGFsIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCc7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgICAgIDAlICAgeyBvcGFjaXR5OiAwOyB9XG4gICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICAgIH1cbiAgICBALW1vei1rZXlmcmFtZXMgZmFkZW91dCB7XG4gICAgICAwJSAgIHsgb3BhY2l0eTogMDsgfVxuICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICB9XG4gICAgQC1vLWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgICAgIDAlICAgeyBvcGFjaXR5OiAwOyB9XG4gICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIGZhZGVvdXQge1xuICAgICAgMCUgICB7IG9wYWNpdHk6IDA7IH1cbiAgICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG4gICAgfVxuICAgIFxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xuICAgICAgMCUgICB7IG9wYWNpdHk6IDA7IH1cbiAgICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG4gICAgfVxuICAgIEAtbW96LWtleWZyYW1lcyBmYWRlaW4ge1xuICAgICAgMCUgICB7IG9wYWNpdHk6IDA7IH1cbiAgICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG4gICAgfVxuICAgIEAtby1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICAgIDAlICAgeyBvcGFjaXR5OiAwOyB9XG4gICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgICAwJSAgIHsgb3BhY2l0eTogMDsgfVxuICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICB9XG4gICAgXG4gICAgXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgIC5tb2RhbC1tYWluIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgICAgIC5tb2RhbC1tYWluIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jbG9zZS0tbW9kYWwge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGB9XG4gIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgPC8+XG4gICAgKX1cbiAgPC9NYWhDb250ZXh0PlxuIFxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbCJdfQ== */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\Modal.js */"
    })));
  });
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
        className: "jsx-4028736776"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-4028736776"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Press+Start+2P",
        rel: "stylesheet",
        className: "jsx-4028736776"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4028736776",
        css: "*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}body{background:url('http://i.imgur.com/F0gBD6c.png') 100%/cover no-repeat;height:100vh;width:100vw;overflow:hidden;}.points{position:absolute;top:0;right:0;color:#76e680;font-family:'Press Start 2P';text-shadow:1px 2px 12px black;font-size:20px;padding:1rem;}.points-txt{font-size:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxNeUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ3lCLEFBRzRDLEFBS21DLEFBT3BELEFBV0gsZUFDakIsR0FYUSxNQUNFLFFBQ00sR0Fkb0IsV0FlTCx1QkFkL0IsQ0FJZSxLQVdrQixRQVZuQixZQUNJLFdBVUQsS0FUakIsVUFVZSxhQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxNeUxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaWRlYmFyIGZyb20gJy4vU2lkZWJhcidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zYXNzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9taXNjLmNzcydcclxuaW1wb3J0IHsgTWFoQ29udGV4dCB9IGZyb20gXCIuL1Byb3ZpZGVyXCI7XHJcblxyXG5jb25zdCB7Q29tcG9uZW50fSA9IFJlYWN0O1xyXG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcclxuICBtYXJnaW46IDIwLFxyXG4gIHBhZGRpbmc6IDIwLFxyXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjREREJ1xyXG59XHJcblxyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gIHN1cGVyKClcclxuICB0aGlzLnN0YXRlID0ge1xyXG4gICAgc2hvdzogZmFsc2UsXHJcbiAgICB0eXBlOiBcIlwiLFxyXG4gICAgY3VycmVudFBhZ2U6IHVuZGVmaW5lZCxcclxuXHJcbiAgfTtcclxufVxyXG5cclxuICBzaG93TW9kYWwgPSAoKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBzaG93OiB0cnVlLCB0eXBlOiBcImJ1aWx0XCIgfSk7IH07XHJcbiAgaGlkZU1vZGFsID0gKCkgPT4geyB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UsIHR5cGU6IFwiXCIgfSk7IH07XHJcbiAgc2V0UGFnZSA9ICh0aGVQYWdlKSA9PiB7dGhpcy5zZXRTdGF0ZSh7Y3VycmVudFBhZ2U6IHRoZVBhZ2UgfSl9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgXHJcbiAgICByZXR1cm4oICBcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1QcmVzcytTdGFydCsyUFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICoge1xyXG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cDovL2kuaW1ndXIuY29tL0YwZ0JENmMucG5nJykgMTAwJS9jb3ZlciBuby1yZXBlYXQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnBvaW50cyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBjb2xvcjogIzc2ZTY4MDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJztcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAxMnB4IGJsYWNrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucG9pbnRzLXR4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgICA8TWFoQ29udGV4dD5cclxuICAgICAge2NvbnRleHQgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9pbnRzXCI+XHJcbiAgICAgICAgICB7Y29udGV4dC5kYXRhLnBvaW50cyB9PHNwYW4gY2xhc3NOYW1lPVwicG9pbnRzLXR4dFwiPiBwb2ludHM8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L01haENvbnRleHQ+XHJcbiAgICAgIDxTaWRlYmFyIG1lbnU9e3RoaXMucHJvcHMubWVudX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il19 */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\MyLayout.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Provider__WEBPACK_IMPORTED_MODULE_6__["MahContext"], null, function (context) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-4028736776" + " " + "points"
        }, context.data.points, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "jsx-4028736776" + " " + "points-txt"
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
      points: 0,
      type: ""
    };
    return _this;
  }

  _createClass(MyProvider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var points = this.state.points;
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyContext.Provider, {
        value: {
          data: this.state,
          updatePoints: function updatePoints(basePoints) {
            return _this2.setState({
              points: points + (!basePoints ? 100 : basePoints)
            });
          },
          updateType: function updateType(type) {
            return _this2.setState({
              type: type
            });
          }
        }
      }, children);
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "builtOrMaintainedHandler", function (checked) {
      console.log(checked.toLowerCase());
      checked.toLowerCase() === "built" || checked.toLowerCase() === "maintained" ? checked : "";
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "blaher", function (link, updateThePoints, updateTheType) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "".concat(link.children && "sidebar--has-children"),
        onClick: function onClick() {
          link.children && _this.subMenuToggler;
          updateThePoints();
        }
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
          onClick: function onClick() {
            _this.builtOrMaintainedHandler(childLink, updateTheType);

            _this.setPage(link.name.toLowerCase());

            updateTheType(childLink.toLowerCase() === "built" || childLink.toLowerCase() === "maintained" ? childLink.toLowerCase() : "");
          },
          key: childLink
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
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
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
          }, _this2.blaher(link, context.updatePoints, context.updateType)) : _this2.blaher(link, context.updatePoints, context.updateType), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
            styleId: "4217388176",
            css: ".sidebar{".concat(!menu && "display: none", ";}.sidebar--has-children{position:relative;}.sidebar--has-children li{").concat(!haschildren && "display: none;", ";}.sidebar--has-children:before{content:'';top:17px;right:0;border-style:inset;position:absolute;width:0;height:0;border-style:solid;border-width:10px 12.5px 0 12.5px;border-color:white transparent transparent transparent;}.sidebar--has-children .sidebar--links li:hover{background-color:lightgreen;}.sidebar li{cursor:pointer;font-family:'Press Start 2P';text-align:center;list-style:none;padding:0;margin:.5rem auto;width:235px;display:block;color:white;text-shadow:1px 6px 0px black;}.sidebar li:hover{background-color:green;}.sidebar--links,sidebar{padding:0;}.sidebar--link{font-size:36px;}.sidebar--link__child{font-size:18px;}.modal{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);}.modal-main{position:fixed;background:white;right:0;bottom:0;width:80%;height:880px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);overflow:auto;}.display-block{display:block;}.display-none{display:none;}.free-points{font-size:19px;text-transform:uppercase;font-family:'Press Start 2P';text-shadow:0px 3px 1px darkgreen;text-align:center;background-color:forestgreen;color:white;height:50px;display:block;margin:0 auto;border-color:#007500;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxTaWRlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJHMkMsQUFJNEIsQUFFdUIsQUFLdkIsQUFFZ0IsQUFjaUIsQUFJYixBQWFRLEFBS2IsQUFJSyxBQUlBLEFBSUEsQUFVRCxBQWFBLEFBSUQsQUFJRSxVQTFDbkIsQ0FwQ2EsRUEyRVgsQ0FKQSxDQXJEK0IsQUFzQmpDLEFBSUEsQUFJVSxBQVVXLEFBcUJRLEdBdEY3QixFQVFZLENBZ0RELEVBbEJYLEtBN0J1QixBQVl2QixBQW9DYyxDQTVEZCxBQU9BLEdBOERZLE9BUkksQ0FTSCxBQW9Cb0IsSUE3RFgsR0FoQkEsRUEwRFIsRUFUb0IsUUFVakIsR0ExQ0csR0FoQlIsSUE2RTBCLEdBbEIzQixDQTFERSxLQWdCQyxBQWdDWixFQVdVLEVBMURXLE1BZ0JELENBMkNhLFlBMURHLEVBMkVoQixHQTNETixZQUNFLEdBMkRlLFdBMURqQixHQWpCMkMsU0FrQnpCLE1BMERsQixZQUNBLFlBMURoQixBQTJEa0IsY0FDQSxFQTdFbEIsSUF3RG1CLFFBc0JNLE1BckJ2QixlQXNCaUIsZUFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRvbmlvXFxwb3J0LWNvbmNlcHRcXGNvbXBvbmVudHNcXFNpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL01vZGFsJ1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3QnXHJcbmltcG9ydCBXb3JrIGZyb20gJy4uL2NvbXBvbmVudHMvV29yaydcclxuaW1wb3J0IEhpcmUgZnJvbSAnLi4vY29tcG9uZW50cy9IaXJlJ1xyXG5pbXBvcnQgeyBNYWhDb250ZXh0IH0gZnJvbSBcIi4vUHJvdmlkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGViYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzdGFydDogZmFsc2UsXHJcbiAgICAgICAgICAgIGhhc2NoaWxkcmVuOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIGZyZWVQb2ludHM6IHRydWUsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHBhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICBcImNvbnRhY3RcIjogPENvbnRhY3QgLz4sXHJcbiAgICAgICAgICAgICAgICBcIndvcmtcIjogPFdvcmsgLz4sXHJcbiAgICAgICAgICAgICAgICBcImhpcmVcIjogPEhpcmUgLz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpbmtzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJXb3JrXCIsIHVybDogXCIvd29ya1wiLCBjaGlsZHJlbjogW1wiQnVpbHRcIiwgXCJNYWludGFpbmVkXCJdIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJDb250YWN0XCIsIHVybDogXCIvY29udGFjdFwiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJIaXJlXCIsIHVybDogXCIvaGlyZVwiLCBiYWNrZ3JvdW5kOiBcIi8vIGh0dHBzOi8vd3d3Lmdsb3RhY29zbS5jb20vb3JpZW50cGl4ZWwtYmcuanBnXCIgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICBidWlsdE9yTWFpbnRhaW5lZEhhbmRsZXIgPSBjaGVja2VkID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGVja2VkLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAoY2hlY2tlZC50b0xvd2VyQ2FzZSgpID09PSBcImJ1aWx0XCIgfHwgXHJcbiAgICAgICAgICBjaGVja2VkLnRvTG93ZXJDYXNlKCkgPT09IFwibWFpbnRhaW5lZFwiICkgPyBjaGVja2VkIDogXCJcIjtcclxuICAgIH0gXHJcblxyXG4gICAgc3ViTWVudVRvZ2dsZXIgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHtoYXNjaGlsZHJlbjogIXRoaXMuc3RhdGUuaGFzY2hpbGRyZW59KVxyXG4gICAgXHJcbiAgICBoaWRlTW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UsIHR5cGU6IFwiXCIgfSk7XHJcbiAgICBcclxuICAgIHNldFBhZ2UgPSB0aGVQYWdlID0+IHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRQYWdlOiB0aGVQYWdlLCBzaG93OiB0cnVlIH0pXHJcbiAgICBcclxuICAgIGJsYWhlciA9IChsaW5rLCB1cGRhdGVUaGVQb2ludHMsIHVwZGF0ZVRoZVR5cGUpID0+IChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtgJHtsaW5rLmNoaWxkcmVuICYmIFwic2lkZWJhci0taGFzLWNoaWxkcmVuXCJ9YH0gXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGxpbmsuY2hpbGRyZW4gJiYgdGhpcy5zdWJNZW51VG9nZ2xlcjtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVRoZVBvaW50cygpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpZGViYXItLWxpbmtcIiBcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYWdlKGxpbmsubmFtZS50b0xvd2VyQ2FzZSgpKSBcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVRoZVBvaW50cygpO1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAge2xpbmsubmFtZX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dWwgXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BzaWRlYmFyLS1saW5rc2B9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsaW5rLmNoaWxkcmVuICYmIGxpbmsuY2hpbGRyZW4ubWFwKGNoaWxkTGluayA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4geyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsdE9yTWFpbnRhaW5lZEhhbmRsZXIoY2hpbGRMaW5rLCB1cGRhdGVUaGVUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQYWdlKGxpbmsubmFtZS50b0xvd2VyQ2FzZSgpKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGhlVHlwZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGlsZExpbmsudG9Mb3dlckNhc2UoKSA9PT0gXCJidWlsdFwiIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTGluay50b0xvd2VyQ2FzZSgpID09PSBcIm1haW50YWluZWRcIiApID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRMaW5rLnRvTG93ZXJDYXNlKCkgOiBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2NoaWxkTGlua30gXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLS1saW5rX19jaGlsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkTGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9saT5cclxuICAgIClcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2ZyZWVQb2ludHMsIGhhc2NoaWxkcmVuLCBzaG93LCBwYWdlcywgY3VycmVudFBhZ2V9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIGNvbnN0IHsgbWVudX0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuICggIFxyXG4gICAgICAgICAgICA8PiAgIFxyXG4gICAgICAgICAgICA8TWFoQ29udGV4dD5cclxuICAgICAgICAgICAgeyBjb250ZXh0ID0+IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXJcIiBzdHlsZT17e2Rpc3BsYXk6IGAke21lbnUgPyBcIm5vbmVcIiA6IFwiaW5pdGlhbFwiIH1gfX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5saW5rcygpLm1hcChsaW5rID0+IChcclxuICAgICAgICAgICAgICAgICAgPD4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWxpbmsuY2hpbGRyZW4gPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0UGFnZShsaW5rLm5hbWUudG9Mb3dlckNhc2UoKSl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmJsYWhlcihsaW5rLCBjb250ZXh0LnVwZGF0ZVBvaW50cywgY29udGV4dC51cGRhdGVUeXBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJsYWhlcihsaW5rLCBjb250ZXh0LnVwZGF0ZVBvaW50cywgY29udGV4dC51cGRhdGVUeXBlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHshbWVudSAmJiBcImRpc3BsYXk6IG5vbmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLS1oYXMtY2hpbGRyZW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci0taGFzLWNoaWxkcmVuIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7IWhhc2NoaWxkcmVuICYmIFwiZGlzcGxheTogbm9uZTtcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLS1oYXMtY2hpbGRyZW46YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBpbnNldDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMTBweCAxMi41cHggMCAxMi41cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItLWhhcy1jaGlsZHJlbiAuc2lkZWJhci0tbGlua3MgbGk6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXIgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggNnB4IDBweCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhciBsaTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLS1saW5rcywgc2lkZWJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci0tbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItLWxpbmtfX2NoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1vZGFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1vZGFsLW1haW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpc3BsYXktYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGlzcGxheS1ub25lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZnJlZS1wb2ludHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggM3B4IDFweCBkYXJrZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGZvcmVzdGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3NTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBmcmVlUG9pbnRzICYmIFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZyZWUtcG9pbnRzXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC51cGRhdGVQb2ludHMoMTAwMCk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZyZWVQb2ludHM6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIENsaWNrIEhlcmUgZm9yIEZyZWUgUG9pbnRzXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9NYWhDb250ZXh0PlxyXG4gICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgICAgICBzaG93PXtzaG93fSBcclxuICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlPXt0aGlzLmhpZGVNb2RhbH1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3BhZ2VzW2N1cnJlbnRQYWdlXX1cclxuICAgICAgICAgICAgICAgIHBhZ2VDbGFzcz17Y3VycmVudFBhZ2V9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXt0aGlzLnN0YXRlLnR5cGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\Sidebar.js */"),
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
        pageClass: currentPage,
        type: this.state.type
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
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Provider */ "./components/Provider.js");


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
        role: "Freelance Developer / Teacher",
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
      built: false
    };
    return _this;
  }

  _createClass(Work, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.type === "built" && this.setState({
        built: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          built = _this$state.built,
          maintained = _this$state.maintained;
      var type = this.props.type;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4086336753" + " " + "work--container ".concat(built ? "built" : "maintained")
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-4086336753"
      }, "Work"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Provider__WEBPACK_IMPORTED_MODULE_3__["MahContext"], null, function (context) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-4086336753" + " " + "work--filter ".concat(_this2.state.built)
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          onClick: function onClick() {
            return context.updateType("");
          },
          className: "jsx-4086336753"
        }, "All"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          onClick: function onClick() {
            return context.updateType("built");
          },
          className: "jsx-4086336753"
        }, "Built"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          onClick: function onClick() {
            return context.updateType("maintained");
          },
          className: "jsx-4086336753"
        }, "Maintained")), _this2.work().map(function (i, index) {
          console.log(i[context.data.type]);

          if (i[context.data.type] || context.data.type == "") {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WorkItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
              key: index,
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
          }
        }));
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4086336753",
        css: ".modal-main.work{background:url(https://glotacosm.com/img/conifer_forest_inner.png);}.modal-main.work::-webkit-scrollbar{width:0;height:0;}.work--thing,.work--thing .b--content{min-height:254px !important;}.work--container h1{margin-top:10rem;}.work--container .workitem--container:nth-child(odd) .workitem--img-text{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.workitem--container .b--container{margin:0 1rem;}.work h1{font-family:'Press Start 2P';color:white;text-shadow:1px 2px 12px black;text-align:center;font-size:36px;text-transform:uppercase;margin-top:12rem;}.work--filter{text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.work--filter button{line-height:40px;height:40px;background-color:green;border:none;color:white;text-transform:uppercase;font-family:'Press Start 2P';cursor:pointer;text-align:center;width:160px;margin:0 1rem;box-shadow:1px 2px 12px black;}.work--filter button:hover{cursor:pointer;background-color:lightgreen;border:2px solid lightgr;}.work--container{max-width:1140px;margin:0 auto;}@media screen and (max-width:1060px){.work--container{position:initial;}.modal-main.work{width:95%;}.work--container .workitem--container:nth-child(odd) .workitem--img-text{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.work--thing{position:relative;top:-20px;}}@media screen and (max-width:567px){.work--filter{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.work--filter button{margin:1rem 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxXb3JrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1MdUIsQUFHMEUsQUFJM0QsQUFLc0IsQUFHWCxBQU9VLEFBSVgsQUFJYSxBQVVYLEFBT0gsQUFjRixBQU1FLEFBTUksQUFJUCxBQUlZLEFBSUosQUFPSSxBQUlSLFFBeEZULEVBc0VQLElBbkRBLEFBc0VBLENBbkMwQixFQXJEaEMsQUFPSSxBQWdDWSxBQW9CRSxBQU1aLENBakNhLEFBNkNELFVBekVoQixBQTBFSSxDQXhEWSxBQWtCUyxFQW9CekIsVUFyQ21DLEVBK0JSLFNBYmIsWUFDQSxHQS9DZCxDQTREQSxJQS9Cc0IsSUFtQkssRUE4QnZCLEFBV0EsWUEzRGUsRUFRYyxDQW5CL0IsUUE4QjZCLElBbEJGLHlCQUNSLEFBa0JKLGVBQ0csRUFsQmpCLGdCQW1CVyxZQUNFLGNBQ2dCLDBCQWZULElBZ0J6Qix5RkFmRSIsImZpbGUiOiJDOlxcVXNlcnNcXEFudG9uaW9cXHBvcnQtY29uY2VwdFxcY29tcG9uZW50c1xcV29yay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXb3JrSXRlbSBmcm9tIFwiLi9Xb3JrSXRlbVwiO1xuaW1wb3J0IHsgTWFoQ29udGV4dCB9IGZyb20gXCIuL1Byb3ZpZGVyXCI7XG5cbmNsYXNzIFdvcmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJ1aWx0OiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy50eXBlID09PSBcImJ1aWx0XCIgJiYgdGhpcy5zZXRTdGF0ZSh7IGJ1aWx0OiB0cnVlIH0pXG4gIH1cblxuXG4gIHdvcmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHsgdGl0bGU6IFwiUG9kY2FzdCBNb3ZlbW5ldCAyMDE5XCIsXG4gICAgICAgIHN1YmxpbmU6IFwiXCIsXG4gICAgICAgIHJvbGU6IFwiTGVhZCBEZXZlbG9wZXJcIixcbiAgICAgICAgd29ya0xpbms6IFwiaHR0cHM6Ly9wb2RjYXN0bW92ZW1lbnQuY29tL1wiLFxuICAgICAgICBkZXNjcmlwOiBcIkN1c3RvbSB0aGVtZSBidWlsdCBmcm9tIG1vY2stdXBzIGZvciBldmVudC1iYXNlZCBvcmdhbml6YXRpb24uIFNldHVwIGZvciB0aGUgY2xpZW50IHRvIG1ha2UgYmFja2VuZCBjaGFuZ2VzLlwiLFxuICAgICAgICBpbWc6IFwiXCIsXG4gICAgICAgIHN0YWNrOiBcIkhUTUw1LCBKYXZhc2NyaXB0LCBTQVNTLCBQSFAsIFdvcmRwcmVzcywgTm9kZVwiLFxuICAgICAgICBjYXRlZ29yeTogW1wiUG9mZXNzaW9uYWxcIl0sXG4gICAgICAgIGJ1aWx0OiB0cnVlLFxuICAgICAgICBtYWludGFpbmVkOiB0cnVlLFxuICAgICAgfSx7XG4gICAgICAgIHRpdGxlOiBcIlN1cHBseSBDaGFpbiBBdXRvbWF0aW9uXCIsXG4gICAgICAgIHN1YmxpbmU6IFwiXCIsXG4gICAgICAgIHJvbGU6IFwiTGVhZCBEZXZlbG9wZXJcIixcbiAgICAgICAgd29ya0xpbms6IFwiaHR0cDovL3N1cHBseWNoYWluLmRldi5zcXVhcmUyMDUuY29tXCIsXG4gICAgICAgIGRlc2NyaXA6IFwiU3VwcGx5IENoYWluIEF1dG9tYXRpb24gaXMgYSByZXNvdXJjZSB3ZWJzaXRlIGZvciB0aG9zZSBpbnRlcmVzdGVkIGluIFN1cHBseSBDaGFpbiBBdXRvbWF0aW9uIHRvIGFjY2VzcyBlZHVjYXRpb25hbCByZXNvdXJjZXMuIEN1c3RvbSBXb3JkcHJlc3MgdGhlbWUgYnVpbHQgZnJvbSBzY3JhdGNoIGFuZCBkZXZlbG9wZWQgZnJvbSBkZXNpZ24gbW9jay11cHMuIEJ1aWx0LWluIEdvb2dsZSBBbmFseXRpY3MgdHJhY2tpbmcgc29sdXRpb24gdG8gdHJhY2sgZG93bmxvYWRzIGFuZCBwYWdlIHZpc2l0cyBhY2NvcmRpbmcgdG8gdXNlciBtZXRhIGRhdGEuIEJ1aWx0IG1ham9yaXR5IG9mIGZyb250LWVuZC4gQ29tcGxldGUgd2l0aCBTQVNTIHN0eWxlcywgbW9kYWxzLCByZWdpc3RyeSBsb2dpYywgYW5kIGdhdGVkIGNvbnRlbnQuXCIsXG4gICAgICAgIGltZzogXCJcIixcbiAgICAgICAgc3RhY2s6IFwiSFRNTDUsIEphdmFTY3JpcHQsIFNBU1MsIFBIUCwgV29yZHByZXNzLCBQeXRob24sIE5vZGVcIixcbiAgICAgICAgY2F0ZWdvcnk6IFtcIlByb2Zlc3Npb25hbFwiXSxcbiAgICAgICAgYnVpbHQ6IHRydWUsXG4gICAgICAgIG1haW50YWluZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJNb25leSBPbiBNb2JpbGVcIixcbiAgICAgICAgc3VibGluZTogXCJcIixcbiAgICAgICAgcm9sZTogXCJMZWFkIERldmVsb3BlclwiLFxuICAgICAgICB3b3JrTGluazogXCJodHRwOi8vbW9uZXlvbm1vYmlsZS51cy9cIixcbiAgICAgICAgZGVzY3JpcDogXCJDdXN0b20gdGhlbWUgYnVpbHQgZnJvbSBzY3JhdGNoLiBUaHJlZS1wYXJ0IHdlYnNpdGUgdG8gY2F0ZXIgdG8gY29uc3VtZXJzLCByZXRhaWxlcnMsIGFuZCBpbnZlc3RvcnMgb2YgdGhlIGxhcmdlc3QuIE1vbmV5T25Nb2JpbGUgaXMgYSBzaW1wbGUsIGVhc3kgdG8gdXNlIG1vYmlsZSBTTVMgb3Igc21hcnQgcGhvbmUgYXBwbGljYXRpb24gdGhhdCBsZXRzIHlvdSBjb25uZWN0IHdpdGggeW91ciBtb25leSBhdCB0aGUgcHVzaCBvZiBhIGJ1dHRvbi4gV2l0aCBPdmVyIDIwMCBtaWxsaW9uIGN1c3RvbWVycywgaXQgaXMgb25lIG9mIEluZGlhJ3MgbGFyZ2V0IG1vYmlsZSBtb25leSBtYW5nYWdlbWVudCBzeXN0ZW0uIENvbXBsZXRlIHdpdGggdHdpdHRlciBmZWVkLlwiLFxuICAgICAgICBpbWc6IFwiXCIsXG4gICAgICAgIHN0YWNrOiBcIkhUTUw1LCBKYXZhU2NyaXB0LCBTQVNTLCBQSFAsIFdvcmRwcmVzcywgTm9kZVwiLFxuICAgICAgICBjYXRlZ29yeTogW1wiUHJvZmVzc2lvbmFsXCJdLFxuICAgICAgICBidWlsdDogdHJ1ZSxcbiAgICAgICAgbWFpbnRhaW5lZDogZmFsc2VcbiAgICAgIH0se1xuICAgICAgICB0aXRsZTogXCJBdXRvcXVpcFwiLFxuICAgICAgICBzdWJsaW5lOiBcIlwiLFxuICAgICAgICByb2xlOiBcIkRldmVsb3BlclwiLFxuICAgICAgICB3b3JrTGluazogXCJodHRwczovL2F1dG9xdWlwLmNvbVwiLFxuICAgICAgICBkZXNjcmlwOiBcIkNvbnN1bHRlZCBvbiBkZXZlbG9wZXIgb3BlcmF0aW9ucywgdGVjaG5pY2FsIGNoYWxsZW5nZXMsIHNvbHZpbmcgY29kaW5nIHByb2JsZW1zLCBhbmQgbWFuYWdpbmcgZGVwbG95bWVudC4gUGVyZm9ybSBtYWludGVuYWNlIGFuZCBidWlsZCBuZXcgYWRkaXRpb25zLlwiLFxuICAgICAgICBpbWc6IFwiXCIsXG4gICAgICAgIHN0YWNrOiBcIkhUTUw1LCBKYXZhU2NyaXB0LCBSZWFjdCwgV29yZHByZXNzLCBQSFAsIFNBU1MsIE5vZGVcIixcbiAgICAgICAgY2F0ZWdvcnk6IFtcIlByb2Zlc3Npb25hbFwiXSxcbiAgICAgICAgYnVpbHQ6IGZhbHNlLFxuICAgICAgICBtYWludGFpbmVkOiB0cnVlXG4gICAgICB9LHtcbiAgICAgICAgdGl0bGU6IFwiT2ZmaWNlIEZ1cm5pdHVyZSBEaXN0cmlidXRvcnNcIixcbiAgICAgICAgc3VibGluZTogXCJcIixcbiAgICAgICAgcm9sZTogXCJMZWFkIERldmVsb3BlclwiLFxuICAgICAgICB3b3JrTGluazogXCJodHRwczovL29mZGlzdC5jb20vXCIsXG4gICAgICAgIGRlc2NyaXA6IFwiZUNvbW1lcmNlIHdlYnNpdGUgdG8gc2VuZCBxdW90ZXMgZm9yIHZhcmlvdXMgb2ZmaWNlIGZ1cm5pdHVyZSBpdGVtcy4gQWRhcHRlZCBXb3JkcHJlc3MgdGhlbWUgZnJvbSBtb2NrdXBzIHRvIGhhdmUgaXRzIGxvb2sgYW5kIGZlZWwuIEludGVncmF0ZWQgZnVsbHktZnVuY3Rpb25hbCBlQ29tbWVyY2UgZnVuY3Rpb25zLlwiLFxuICAgICAgICBpbWc6IFwiXCIsXG4gICAgICAgIHN0YWNrOiBcIkhUTUw1LCBQSFAsIFdvcmRQcmVzcywgQ1NTMywgUHl0aG9uLCBOb2RlXCIsXG4gICAgICAgIGNhdGVnb3J5OiBbXCJQcm9mZXNzaW9uYWxcIl0sXG4gICAgICAgIGJ1aWx0OiB0cnVlLFxuICAgICAgICBtYWludGFpbmVkOiB0cnVlLFxuICAgICAgfSx7XG4gICAgICAgIHRpdGxlOiBcIlBoeXNtb2RvIENvYWNoIEFuYWx5dGljcyBBcHBcIixcbiAgICAgICAgc3VibGluZTogXCJcIixcbiAgICAgICAgcm9sZTogXCJGcm9udC1lbmQgRGV2ZWxvcGVyXCIsXG4gICAgICAgIGRlc2NyaXA6IFwiU3R5bGl6ZWQgYW5kIHByb2dyYW1tZWQgUmVhY3QgY29tcG9uZW50cyBmb3IgYW4gYW5hbHl0aWNzIGFwcCB1c2luZyBNYXRlcmlhbCBVSVwiLFxuICAgICAgICBpbWc6IFwiXCIsXG4gICAgICAgIHN0YWNrOiBcIkhUTUw1LCBKYXZhU2NyaXB0LCBDU1MzLCBTQVNTLCBSZWFjdCwgTm9kZVwiLFxuICAgICAgICBjYXRlZ29yeTogW1wiUHJvZmVzc2lvbmFsXCJdLFxuICAgICAgICBidWlsdDogdHJ1ZSxcbiAgICAgICAgbWFpbnRhaW5lZDogZmFsc2VcbiAgICAgIH0se1xuICAgICAgICB0aXRsZTogXCJjb2xvci10aGUtaW5uYW5ldFwiLFxuICAgICAgICBzdWJsaW5lOiBcIlwiLFxuICAgICAgICByb2xlOiBcIlwiLFxuICAgICAgICB3b3JrTGluazogXCJodHRwOi8vZ2xvdGFjb3NtLmNvbS9jb2xvcnRoZWlubmFuZXRcIixcbiAgICAgICAgc3VibGluZTogXCJcIixcbiAgICAgICAgZGVzY3JpcDogXCJUdXJuZWQgcmVjZWl2ZWQgV2lGSSBwYWNrZXQgZGF0YSBpbnRvIGNvbG9yIGFydCB0byByZXByZXNlbnQgdGhlIGluZGl2aWR1YWwgcGFja2V0cyBhcyBhbiBhcnQgcHJvamVjdC5cIixcbiAgICAgICAgaW1nOiBcImh0dHBzOi8vY2Ftby5naXRodWJ1c2VyY29udGVudC5jb20vODM1Y2NkMjhhNWUzMzVjZWFjMjdhNTNkODMwMjIwZDA0Nzg1YjliMi82ODc0NzQ3MDczM2EyZjJmNjkyZTY5NmQ2Nzc1NzIyZTYzNmY2ZDJmMzM1MTRmMzA2NDU5NmUyZTcwNmU2N1wiLFxuICAgICAgICBzdGFjazogXCJKYXZhU2NyaXB0LCBIVE1MNSwgQ1NTMywgUHl0aG9uXCIsXG4gICAgICAgIGNhdGVnb3J5OiBbXCJGdW5cIl0sXG4gICAgICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tLzJoYW5kczEwZmluZ2Vycy9jb2xvci10aGUtaW50ZXJuZXRcIixcbiAgICAgICAgYnVpbHQ6IHRydWUsXG4gICAgICAgIG1haW50YWluZWQ6IGZhbHNlLFxuICAgICAgfSx7XG4gICAgICAgIHRpdGxlOiBcIm1vdmllLXBhbFwiLFxuICAgICAgICBzdWJsaW5lOiBcIlwiLFxuICAgICAgICByb2xlOiBcIlwiLFxuICAgICAgICB3b3JrTGluazogXCJcIixcbiAgICAgICAgZGVzY3JpcDogXCJDTEkgdG8gYWNjZXNzIG9tZGJhcGkgYW5kIHRocm91Z2ggd2Vic2NyYXBpbmcsIFByb2R1Y2VzIGEgdXNlciBpbnRlcmZhY2UgZm9yIHF1aWNrbHkgY29weWluZyBkYXRhIGludG8gc3ByZWFkc2hlZXQgcm93cy9jb2x1bW5zIGFuZCBhbHNvIHByb3ZpZGVzIGZyb250LWVuZCBBUEkgc2VhcmNoIHdpdGhpbiB0aGUgdXNlciBpbnRlcmZhY2UuXCIsXG4gICAgICAgIGltZzogXCJodHRwczovL2kuaW1ndXIuY29tL2J3UE1JdjEuanBnXCIsXG4gICAgICAgIHN0YWNrOiBcIkphdmFTY3JpcHQsIFNBU1MsIFB5dGhvblwiLFxuICAgICAgICBjYXRlZ29yeTogW1wiRnVuXCJdLFxuICAgICAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS8yaGFuZHMxMGZpbmdlcnMvbW92aWUtcGFsXCIsXG4gICAgICAgIGJ1aWx0OiB0cnVlLFxuICAgICAgICBtYWludGFpbmVkOiBmYWxzZVxuICAgICAgfSx7XG4gICAgICAgIHRpdGxlOiBcIlJlZGRpdCBJbWFnZSBTY3JhcGVyIHYxLjAtMS4xXCIsXG4gICAgICAgIHJvbGU6IFwiXCIsXG4gICAgICAgIHdvcmtMaW5rOiBcIlwiLFxuICAgICAgICBzdWJsaW5lOiBcIlwiLFxuICAgICAgICBkZXNjcmlwOiBcIlNjcmFwZXMgUmVkZGl0IGltYWdlcyBmcm9tIGFueSBwdWJsaWMgc3VicmVkZGl0IGJ5IGEgdXNlci1zcGVjaWZpZWQgZGF0ZSByYW5nZSBhbmQgc2F2ZXMgdGhlbSB0byB5b3VyIGNvbXB1dGVyLlwiLFxuICAgICAgICBpbWc6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9lMm1nSDdELnBuZ1wiLFxuICAgICAgICBzdGFjazogXCJQeXRob24sIFJlZGRpdCBBUElcIixcbiAgICAgICAgY2F0ZWdvcnk6IFtcIkZyZWVsYW5jZVwiLCBcIkZ1blwiXSxcbiAgICAgICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vMmhhbmRzMTBmaW5nZXJzL1JlZGRpdC1JbWFnZS1TY3JhcGVyLTEuMFwiLFxuICAgICAgICBidWlsdDogdHJ1ZSxcbiAgICAgICAgbWFpbnRhaW5lZDogZmFsc2VcbiAgICAgIH0se1xuICAgICAgICB0aXRsZTogXCJHZW9yZ2UgTWFzb24gVW5pdmVyc2l0eVwiLFxuICAgICAgICBzdWJsaW5lOiBcIkluc3RpdHVlIGZvciBCaW9oZWFsdGggSW5ub3ZhdGlvblwiLFxuICAgICAgICByb2xlOiBcIkZyZWVsYW5jZSBEZXZlbG9wZXIgLyBUZWFjaGVyXCIsXG4gICAgICAgIHdvcmtMaW5rOiBcImh0dHBzOi8vaWJpLmdtdS5lZHUvXCIsXG4gICAgICAgIGRlc2NyaXA6IFwiQWlkZWQgaW4gYnVpbGRpbmcgdGhpcyBzaXRlIGFuZCB0YXVnaHQgdGhlIENvbW11bmljYXRpb25zIE9mZmljZXIgaG93IHRvIGNvZGUgYW5kIG1haW50YWluIGl0LlwiLFxuICAgICAgICBpbWc6IFwiXCIsXG4gICAgICAgIHN0YWNrOiBcIldvcmRwcmVzcywgQ1NTMywgUEhQLCBQeXRob24sIEphdmFTY3JpcHRcIixcbiAgICAgICAgY2F0ZWdvcnk6IFtcIlByb2Zlc3Npb25hbFwiLCBcIkZyZWVsYW5jZVwiXSxcbiAgICAgICAgcmVwbzogXCJcIixcbiAgICAgICAgYnVpbHQ6IHRydWUsXG4gICAgICAgIG1haW50YWluZWQ6IHRydWVcbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2J1aWx0LCBtYWludGFpbmVkfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgXG4gICAgICAgIGNsYXNzTmFtZT17YHdvcmstLWNvbnRhaW5lciAke2J1aWx0ID8gXCJidWlsdFwiIDogXCJtYWludGFpbmVkXCJ9YH1cbiAgICAgID5cbiAgICAgIDxoMT5Xb3JrPC9oMT5cbiAgICAgIFxuICAgICAgPE1haENvbnRleHQ+XG4gICAgICAgIHsgY29udGV4dCA9PiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHdvcmstLWZpbHRlciAke3RoaXMuc3RhdGUuYnVpbHR9YH0+XG4gICAgIDxidXR0b24gb25DbGljaz17KCk9PiBjb250ZXh0LnVwZGF0ZVR5cGUoXCJcIil9PkFsbDwvYnV0dG9uPlxuICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gY29udGV4dC51cGRhdGVUeXBlKFwiYnVpbHRcIil9PkJ1aWx0PC9idXR0b24+XG4gICAgIDxidXR0b24gb25DbGljaz17KCk9PiBjb250ZXh0LnVwZGF0ZVR5cGUoXCJtYWludGFpbmVkXCIpfT5NYWludGFpbmVkPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgICAgICAgICB7dGhpcy53b3JrKCkubWFwKCAoaSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coaVtjb250ZXh0LmRhdGEudHlwZV0pXG4gICAgICAgICAgICAgIGlmIChpW2NvbnRleHQuZGF0YS50eXBlXSB8fCBjb250ZXh0LmRhdGEudHlwZSA9PSBcIlwiKSB7IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8V29ya0l0ZW1cbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17aS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHJvbGU9e2kucm9sZX1cbiAgICAgICAgICAgICAgICAgIHdvcmtMaW5rPXtpLndvcmtMaW5rfVxuICAgICAgICAgICAgICAgICAgZGVzY3JpcD17aS5kZXNjcmlwfVxuICAgICAgICAgICAgICAgICAgaW1nPXtpLmltZ31cbiAgICAgICAgICAgICAgICAgIHN0YWNrPXtpLnN0YWNrfVxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2kuY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICBzdWJsaW5lPXtpLnN1YmxpbmV9XG4gICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAvPiApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApfSBcbiAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L01haENvbnRleHQ+XG4gIFxuICAgXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAubW9kYWwtbWFpbi53b3JrIHtcbiAgICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2dsb3RhY29zbS5jb20vaW1nL2NvbmlmZXJfZm9yZXN0X2lubmVyLnBuZyk7XG4gICAgfVxuXG4gICAgLm1vZGFsLW1haW4ud29yazo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgaGVpZ2h0OiAwO1xuICB9XG4gICAgICBcbiAgICAgIC53b3JrLS10aGluZywgLndvcmstLXRoaW5nIC5iLS1jb250ZW50e1xuICAgICAgICBtaW4taGVpZ2h0OiAyNTRweCAhaW1wb3J0YW50OyBcbiAgICB9XG4gICAgICAud29yay0tY29udGFpbmVyIGgxIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTByZW07XG4gICAgICB9XG5cblxuXG4gICAgICAgIFxuICAgICAgLndvcmstLWNvbnRhaW5lciAud29ya2l0ZW0tLWNvbnRhaW5lcjpudGgtY2hpbGQob2RkKSAud29ya2l0ZW0tLWltZy10ZXh0IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgfVxuXG4gICAgICAgIC53b3JraXRlbS0tY29udGFpbmVyIC5iLS1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAud29yayBoMSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggMnB4IDEycHggYmxhY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMnJlbTtcbiAgICAgICB9XG5cbiAgICAgICAud29yay0tZmlsdGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAud29yay0tZmlsdGVyIGJ1dHRvbiB7XG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICBib3gtc2hhZG93OiAxcHggMnB4IDEycHggYmxhY2s7XG4gIH1cbiAgICAud29yay0tZmlsdGVyIGJ1dHRvbjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncjtcbiAgICB9XG5cbiAgICAud29yay0tY29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogMTE0MHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA2MHB4KSB7XG4gICAgICAgIC53b3JrLS1jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vZGFsLW1haW4ud29yayB7XG4gICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3JrLS1jb250YWluZXIgLndvcmtpdGVtLS1jb250YWluZXI6bnRoLWNoaWxkKG9kZCkgLndvcmtpdGVtLS1pbWctdGV4dCB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3JrLS10aGluZyB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY3cHgpIHsgXG4gICAgICAgIC53b3JrLS1maWx0ZXIge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAud29yay0tZmlsdGVyIGJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcms7Il19 */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\Work.js */"
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
    className: "jsx-2185843424" + " " + "workitem--container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2185843424" + " " + "workitem--title ".concat(props.subline && 'with-subline')
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2185843424"
  }, props.title), props.subline && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-2185843424"
  }, props.subline)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2185843424" + " " + "workitem--img-text"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    href: props.workLink ? props.workLink : props.repo,
    className: "jsx-2185843424"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: props.img ? props.img : "https://via.placeholder.com/500x281",
    alt: props.title,
    className: "jsx-2185843424"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    classes: "work--thing"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2185843424" + " " + "work--description"
  }, props.descrip))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2185843424" + " " + "work--meta"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2185843424" + " " + "work--meta__left"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2185843424" + " " + "work-role-cat"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2185843424" + " " + "work--role"
  }, "Role:", props.role), props.category.length < 2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2185843424"
  }, "Category") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2185843424"
  }, "Categories")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2185843424"
  }, props.category.map(function (category) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: category,
      className: "jsx-2185843424"
    }, category);
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2185843424" + " " + "work--meta__right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    href: props.workLink ? props.workLink : props.repo,
    className: "jsx-2185843424"
  }, props.workLink ? "Visit Site" : "Visit Repo")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2185843424" + " " + "work--stack"
  }, props.stack.split(", ").map(function (stack, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      key: index,
      src: "https://glotacosm.com/img/icons/".concat(stack.toLowerCase(), ".svg"),
      className: "jsx-2185843424"
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2185843424",
    css: ".workitem--container.jsx-2185843424 p.jsx-2185843424,.workitem--container.jsx-2185843424 h2.jsx-2185843424,.workitem--container.jsx-2185843424 h3.jsx-2185843424,.workitem--container.jsx-2185843424 li.jsx-2185843424,.workitem--container.jsx-2185843424 a.jsx-2185843424{font-family:'Press Start 2P';color:white;}.work--stack.jsx-2185843424{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;background-color:#e672b1;border-radius:13px;padding:1rem;border-top-left-radius:0px;border-top-right-radius:0px;margin:1rem 0rem;}.workitem--container.jsx-2185843424 h2.jsx-2185843424{margin:0;}.workitem--container.jsx-2185843424 h3.jsx-2185843424{margin:0rem;font-size:15px;}.workitem--title.jsx-2185843424{text-align:center;text-shadow:1px 2px 12px black;background-color:#e672b1;line-height:70px;height:70px;border-top-right-radius:13px;border-top-left-radius:13px;border-bottom:3px dashed white;margin-bottom:1rem;}.workitem--title.with-subline.jsx-2185843424{line-height:35px;}.work--meta__right.jsx-2185843424{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.work--meta.jsx-2185843424{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.work--meta__right.jsx-2185843424 a.jsx-2185843424{-webkit-text-decoration:none;text-decoration:none;background-color:green;height:30px;line-height:30px;padding:1rem;border:2px solid green;-webkit-transition:0.3s ease-in-out;transition:0.3s ease-in-out;}.work--meta__right.jsx-2185843424 a.jsx-2185843424:hover{cursor:pointer;background-color:white;border:2px solid green;color:green;}.workitem--container.jsx-2185843424{margin:5rem 1rem;border-radius:13px;background-color:#5142ab63;-webkit-animation:fadeIn-jsx-2185843424 1s ease-in-out;animation:fadeIn-jsx-2185843424 1s ease-in-out;box-shadow:1px 2px 1px black;}.workitem--img-text.jsx-2185843424{margin-bottom:1rem !important;}.workitem--img-text.jsx-2185843424 img.jsx-2185843424{margin:0 1rem;width:500px;height:281px;border:2px solid white;}.work--stack.jsx-2185843424{border-top:3px dashed white;}.work--stack.jsx-2185843424 img.jsx-2185843424{width:40px;height:40px;}.workitem--img-text.jsx-2185843424{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.work--description.jsx-2185843424{padding:1rem;}.workitem--container.jsx-2185843424 .b--content.jsx-2185843424{height:254px;}.workitem--container.jsx-2185843424 .b--container.jsx-2185843424{height:254px;}@-webkit-keyframes fadein{0%.jsx-2185843424{opacity:0;}100%.jsx-2185843424{opacity:1;}}@-moz-keyframes fadein{0%.jsx-2185843424{opacity:0;}100%.jsx-2185843424{opacity:1;}}@-o-keyframes fadein{0%.jsx-2185843424{opacity:0;}100%.jsx-2185843424{opacity:1;}}@-webkit-keyframes fadein-jsx-2185843424{0%{opacity:0;}100%{opacity:1;}}@keyframes fadein-jsx-2185843424{0%{opacity:0;}100%{opacity:1;}}@media screen and (max-width:1060px){.workitem--img-text.jsx-2185843424{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.modal-main.work.jsx-2185843424{width:100%;}.work--container.jsx-2185843424{position:initial;}.workitem--title.jsx-2185843424{height:auto;line-height:46px;}.workitem--img-text.jsx-2185843424 img.jsx-2185843424{width:calc(500px * 0.8);height:calc(281px * 0.8);}.work.jsx-2185843424 h1.jsx-2185843424{margin-top:1rem;}.work--meta.jsx-2185843424{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.work--meta__right.jsx-2185843424{text-align:center;}}@media screen and (max-width:460px){.workitem--img-text.jsx-2185843424 img.jsx-2185843424{width:calc(500px * 0.6);height:calc(281px * 0.6);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxXb3JrSXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRGtCLEFBUXNDLEFBS2hCLEFBV0osQUFJRyxBQU1NLEFBWUQsQUFJSixBQU1BLEFBS1EsQUFVUixBQU9JLEFBV2EsQUFJaEIsQUFPYyxBQUlqQixBQUtFLEFBS0EsQUFJQSxBQUlBLEFBSUcsQUFDQSxBQUdBLEFBQ0EsQUFHQSxBQUNBLEFBR0EsQUFDQSxBQUtRLEFBSVgsQUFJTSxBQUlMLEFBS1ksQUFLUixBQUlNLEFBSUosQUFNTSxTQTNKNUIsQ0FxR21CLEFBQ0EsQUFHQSxBQUNBLEFBR0EsQUFDQSxBQUdBLEFBQ0EsQ0FsQ0wsQUE0Q1osQ0F4SGUsQUFnSUksQ0ExQ3JCLEFBSUEsQUFJQSxDQTdCYyxDQXRCUyxDQStGckIsQ0F4SEYsQUFnQ3FCLEFBMEVuQixDQXRIK0IsQUE0SS9CLEtBckVGLENBd0Q2QixBQW1CQSxFQXRGZCxDQWhFZixDQXNFQSxDQTVGYyxBQXFKWixDQXBFRixNQVY2QixFQVBOLENBdUJFLEVBdEZ6QixRQTBCMkIsQUErSHpCLEFBbUJBLENBeEh1QixXQVliLENBdUJaLENBaEJrQyxVQWxCcEIsQUFZaEIsQ0E3RGlDLEFBdUJaLEFBY0ssQUFNTyxBQXFEVixJQW1DbkIsQUEwQkEsT0EzR2lCLE1BMUJMLFdBMkJDLENBMUJnQixZQTJCTixpQkExQkssTUE0QmpDLGNBaEI0QixRQVhRLEtBeUNGLEVBNkIvQix3QkFyRXFCLEdBMENyQixHQXJFMkIsQUEyQzNCLEtBVUYsUUF6QkUsWUEzQnFCLG1CQUNOLFVBb0NmLEdBbkM2QiwyQkFDQyw0QkFDWCxpQkFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRvbmlvXFxwb3J0LWNvbmNlcHRcXGNvbXBvbmVudHNcXFdvcmtJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRlbnRCbG9jayBmcm9tICcuL0NvbnRlbnRCbG9jayc7XG5cbmNvbnN0IFdvcmtJdGVtID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtgd29ya2l0ZW0tLWNvbnRhaW5lcmB9PlxuICA8ZGl2IGNsYXNzTmFtZT17YHdvcmtpdGVtLS10aXRsZSAke3Byb3BzLnN1YmxpbmUgJiYgJ3dpdGgtc3VibGluZSd9YH0+XG4gICAgPGgyPntwcm9wcy50aXRsZX08L2gyPlxuICAgIHtwcm9wcy5zdWJsaW5lICYmIDxoMz57cHJvcHMuc3VibGluZX08L2gzPn1cbiAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JraXRlbS0taW1nLXRleHRcIj5cbiAgICAgIDxhXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiIFxuICAgICAgICBocmVmPXtwcm9wcy53b3JrTGluayA/IHByb3BzLndvcmtMaW5rIDogcHJvcHMucmVwbyB9PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtwcm9wcy5pbWcgPyBwcm9wcy5pbWcgOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81MDB4MjgxXCJ9IFxuICAgICAgICAgIGFsdD17cHJvcHMudGl0bGV9IC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPENvbnRlbnRCbG9jayBjbGFzc2VzPVwid29yay0tdGhpbmdcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3b3JrLS1kZXNjcmlwdGlvblwiPntwcm9wcy5kZXNjcmlwfTwvcD5cbiAgICAgICAgPC9Db250ZW50QmxvY2s+XG4gICAgICA8L2Rpdj5cbiAgIFxuICAgICAgPENvbnRlbnRCbG9jaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yay0tbWV0YVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmstLW1ldGFfX2xlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLXJvbGUtY2F0XCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwid29yay0tcm9sZVwiPlJvbGU6e3Byb3BzLnJvbGV9PC9wPlxuICAgICAgICAgIHtwcm9wcy5jYXRlZ29yeS5sZW5ndGggPCAyID8gPHA+Q2F0ZWdvcnk8L3A+IDogPHA+Q2F0ZWdvcmllczwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtwcm9wcy5jYXRlZ29yeS5tYXAoIGNhdGVnb3J5ID0+IDxsaSBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9saT4gKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yay0tbWV0YV9fcmlnaHRcIj5cbiAgICAgICAgPGFcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiBcbiAgICAgICAgICBocmVmPXtwcm9wcy53b3JrTGluayA/IHByb3BzLndvcmtMaW5rIDogcHJvcHMucmVwbyB9PlxuICAgICAgICAgIHtwcm9wcy53b3JrTGluayA/IFwiVmlzaXQgU2l0ZVwiIDogXCJWaXNpdCBSZXBvXCJ9XG4gICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250ZW50QmxvY2s+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ3b3JrLS1zdGFja1wiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb3BzLnN0YWNrLnNwbGl0KFwiLCBcIikubWFwKCAoc3RhY2ssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8aW1nIGtleT17aW5kZXh9IHNyYz17YGh0dHBzOi8vZ2xvdGFjb3NtLmNvbS9pbWcvaWNvbnMvJHtzdGFjay50b0xvd2VyQ2FzZSgpfS5zdmdgfSAvPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvcD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgLndvcmtpdGVtLS1jb250YWluZXIgcCxcbiAgICAgIC53b3JraXRlbS0tY29udGFpbmVyIGgyLFxuICAgICAgLndvcmtpdGVtLS1jb250YWluZXIgaDMsXG4gICAgICAud29ya2l0ZW0tLWNvbnRhaW5lciBsaSxcbiAgICAgIC53b3JraXRlbS0tY29udGFpbmVyIGEge1xuICAgICAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuXG4gICAgICAud29yay0tc3RhY2sge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2NzJiMTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICAgICAgICBtYXJnaW46IDFyZW0gMHJlbTtcbiAgICAgIH1cblxuICAgICAgLndvcmtpdGVtLS1jb250YWluZXIgaDIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIC53b3JraXRlbS0tY29udGFpbmVyIGgzIHtcbiAgICAgICAgbWFyZ2luOiAwcmVtO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG5cbiAgICAgIH1cblxuICAgICAgLndvcmtpdGVtLS10aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAycHggMTJweCBibGFjaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2NzJiMTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEzcHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEzcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBkYXNoZWQgd2hpdGU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07ICBcbiAgICAgIH1cblxuICAgICAgLndvcmtpdGVtLS10aXRsZS53aXRoLXN1YmxpbmUge1xuICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgIH1cblxuICAgICAgLndvcmstLW1ldGFfX3JpZ2h0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC53b3JrLS1tZXRhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG5cbiAgICAgIC53b3JrLS1tZXRhX19yaWdodCBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXRcbiAgICB9XG5cbiAgICAud29yay0tbWV0YV9fcmlnaHQgYTpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xuICAgICAgY29sb3I6IGdyZWVuO1xuICAgIH1cblxuICAgICAgLndvcmtpdGVtLS1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDVyZW0gMXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUxNDJhYjYzO1xuICAgICAgICBhbmltYXRpb246IGZhZGVJbiAxcyBlYXNlLWluLW91dDtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAxcHggYmxhY2s7XG4gICAgICAgXG4gICAgICB9XG5cbiAgIFxuICAgICAgXG4gICAgICAud29ya2l0ZW0tLWltZy10ZXh0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICAud29ya2l0ZW0tLWltZy10ZXh0IGltZyB7XG4gICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgIGhlaWdodDogMjgxcHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgfVxuXG4gICAgICAud29yay0tc3RhY2sge1xuICAgICAgICBib3JkZXItdG9wOiAzcHggZGFzaGVkIHdoaXRlO1xuICAgICAgfVxuXG4gICAgIC53b3JrLS1zdGFjayBpbWcge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgfVxuXG4gICAgICAud29ya2l0ZW0tLWltZy10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLndvcmstLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIH1cblxuICAgICAgLndvcmtpdGVtLS1jb250YWluZXIgLmItLWNvbnRlbnQge1xuICAgICAgICBoZWlnaHQ6IDI1NHB4O1xuICAgICAgfVxuXG4gICAgICAud29ya2l0ZW0tLWNvbnRhaW5lciAuYi0tY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAyNTRweDtcbiAgICAgIH1cblxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgICAgIDAlICAgeyBvcGFjaXR5OiAwOyB9XG4gICAgICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG4gICAgICB9XG4gICAgICBALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICAgICAgMCUgICB7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICAgIH1cbiAgICAgIEAtby1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICAgICAgMCUgICB7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICAgICAgMCUgICB7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA2MHB4KSB7XG4gICAgICAgIC53b3JraXRlbS0taW1nLXRleHQge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAubW9kYWwtbWFpbi53b3JrIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3JrLS1jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmtpdGVtLS10aXRsZSB7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmtpdGVtLS1pbWctdGV4dCBpbWcge1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDUwMHB4ICogMC44KTtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMjgxcHggKiAwLjgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmsgaDEge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAud29yay0tbWV0YSB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3JrLS1tZXRhX19yaWdodCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG4gICAgICAgIC53b3JraXRlbS0taW1nLXRleHQgaW1nIHtcbiAgICAgICAgICB3aWR0aDogY2FsYyg1MDBweCAqIDAuNik7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDI4MXB4ICogMC42KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG5cbiAgICAgIFxuICAgICAgYH1cblxuICAgICAgPC9zdHlsZT5cbiAgXG4gICAgPC9kaXY+XG4gIClcblxuICBleHBvcnQgZGVmYXVsdCBXb3JrSXRlbTtcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\WorkItem.js */"
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




var _React = react__WEBPACK_IMPORTED_MODULE_1___default.a,
    Component = _React.Component;
var font = "'Press Start 2P';";

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
        css: ".start-button.__jsx-style-dynamic-selector{display:block;margin:1.5rem auto;font-family:".concat(font, " text-transform:uppercase;border:none;color:white;background-color:transparent;text-shadow:1px 3px 0px black;}.portfolio--wrapper.__jsx-style-dynamic-selector>.portfolio--header.__jsx-style-dynamic-selector{margin-top:5rem;}h1.__jsx-style-dynamic-selector{font-family:").concat(font, " text-align:center;font-size:75px;color:white;text-transform:uppercase;text-shadow:1px 5px 0px black;}h2.__jsx-style-dynamic-selector{font-family:").concat(font, " text-align:center;font-size:30px;color:white;text-transform:uppercase;text-shadow:1px 5px 0px black;}.points.__jsx-style-dynamic-selector{color:white;}blink.__jsx-style-dynamic-selector{-webkit-animation:2s linear infinite condemned_blink_effect;-webkit-animation:2s linear infinite condemned_blink_effect-__jsx-style-dynamic-selector;animation:2s linear infinite condemned_blink_effect-__jsx-style-dynamic-selector;}@-webkit-keyframes condemned_blink_effect{0%.__jsx-style-dynamic-selector{visibility:hidden;}50%.__jsx-style-dynamic-selector{visibility:hidden;}100%.__jsx-style-dynamic-selector{visibility:visible;}}@-webkit-keyframes condemned_blink_effect-__jsx-style-dynamic-selector{0%{visibility:hidden;}50%{visibility:hidden;}100%{visibility:visible;}}@keyframes condemned_blink_effect-__jsx-style-dynamic-selector{0%{visibility:hidden;}50%{visibility:hidden;}100%{visibility:visible;}}@media screen and (max-width:767px){.portfolio--header.__jsx-style-dynamic-selector{font-size:37px;}}@media screen and (max-width:567px){.portfolio--header.__jsx-style-dynamic-selector{font-size:32px;}body.__jsx-style-dynamic-selector{background:url(http://i.imgur.com/F0gBD6c.png) 90%/cover no-repeat !important;}.portfolio--header.second.__jsx-style-dynamic-selector{font-size:20px;}.free-points.__jsx-style-dynamic-selector{width:282px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNrQixBQUl1QixBQVdFLEFBTUUsQUFTQSxBQVNOLEFBSWdELEFBS3hDLEFBR0EsQUFHQyxBQUtELEFBR0EsQUFHQyxBQUtKLEFBTUEsQUFJK0QsQUFJL0QsQUFJSCxZQWhEaEIsQUFpREUsRUFwRm1CLENBa0VuQixBQU1BLEFBUUEsQ0FyRUYsRUFpQ0UsQUFHQSxBQVFBLEFBR0EsQ0FSQSxBQVdBLGNBM0R5QiwwQkFlVixBQVNBLENBYXFDLGNBckJ4QyxBQVNBLElBaURaLFFBekR5QixBQVNBLGFBekJiLFlBQ0EsQUFnQmtCLEFBU0EsWUF4QkQsa0JBZ0IvQixBQVVBLFdBekJnQyw4QkFDaEMsZ0RBaUNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXHJcbmltcG9ydCBQcmludGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUHJpbnRlcic7XHJcbmltcG9ydCBNeVByb3ZpZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb3ZpZGVyXCI7XHJcbmNvbnN0IHtDb21wb25lbnR9ID0gUmVhY3RcclxuY29uc3QgZm9udCA9IFwiJ1ByZXNzIFN0YXJ0IDJQJztcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7IHN0YXJ0OiB0cnVlIH1cclxuICB9XHJcblxyXG4gIHByZXNzU3RhcnQgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc3RhcnQ6ICF0aGlzLnN0YXRlLnN0YXJ0fSlcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE15UHJvdmlkZXI+XHJcbiAgICAgIDw+XHJcbiAgICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLS13cmFwcGVyXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJwb3J0Zm9saW8tLWhlYWRlclwiPlxyXG4gICAgICAgIDxQcmludGVyIHRleHQ9e1wiR2xvdGFjb3NtXCIuc3BsaXQoXCJcIil9Lz5cclxuICAgICAgPC9oMT5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInBvcnRmb2xpby0taGVhZGVyIHNlY29uZFwiPlxyXG4gICAgICAgIDxQcmludGVyIHRleHQ9e1wiV2ViIERldmVsb3BtZW50IFBPUlRGT0xJT1wiLnNwbGl0KFwiXCIpfS8+XHJcbiAgICAgIDwvaDI+XHJcbiAgICAgIDxibGluaz5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdGFydC1idXR0b24gYmxpbmtcIlxyXG4gICAgICAgIHN0eWxlPXt7ZGlzcGxheTogYCR7IXRoaXMuc3RhdGUuc3RhcnQgJiYgXCJub25lXCJ9YH19IFxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMucHJlc3NTdGFydH0+XHJcbiAgICAgICAgQ2xpY2sgSGVyZSB0byBDb250aW51ZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9ibGluaz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBcclxuICAgICAgLnN0YXJ0LWJ1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAxLjVyZW0gYXV0bztcclxuICAgICAgICBmb250LWZhbWlseTogJHtmb250fVxyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDNweCAwcHggYmxhY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wb3J0Zm9saW8tLXdyYXBwZXIgPiAucG9ydGZvbGlvLS1oZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgIFxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udH1cclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiA3NXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggNXB4IDBweCBibGFjaztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnR9XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDVweCAwcHggYmxhY2s7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wb2ludHMge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYmxpbmsge1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBsaW5lYXIgaW5maW5pdGUgY29uZGVtbmVkX2JsaW5rX2VmZmVjdDsgLy8gZm9yIGFuZHJvaWRcclxuICAgICAgICBhbmltYXRpb246IDJzIGxpbmVhciBpbmZpbml0ZSBjb25kZW1uZWRfYmxpbmtfZWZmZWN0O1xyXG4gICAgICB9XHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBjb25kZW1uZWRfYmxpbmtfZWZmZWN0IHsgLy8gZm9yIGFuZHJvaWRcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDUwJSB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQGtleWZyYW1lcyBjb25kZW1uZWRfYmxpbmtfZWZmZWN0IHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDUwJSB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAucG9ydGZvbGlvLS1oZWFkZXIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY3cHgpIHtcclxuICAgICAgICAucG9ydGZvbGlvLS1oZWFkZXIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChodHRwOi8vaS5pbWd1ci5jb20vRjBnQkQ2Yy5wbmcpIDkwJS9jb3ZlciBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wb3J0Zm9saW8tLWhlYWRlci5zZWNvbmQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZyZWUtcG9pbnRzIHtcclxuICAgICAgICAgIHdpZHRoOiAyODJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxMYXlvdXQgbWVudT17dGhpcy5zdGF0ZS5zdGFydH0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuXHJcbiAgICAgIDwvPlxyXG4gICAgICAgICAgICA8L015UHJvdmlkZXI+IFxyXG4gICAgKVxyXG4gIH0gXHJcbn0iXX0= */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\pages\\index.js */"),
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