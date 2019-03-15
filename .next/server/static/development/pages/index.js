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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ContentBlock */ "./components/ContentBlock.js");










var CharSelect =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CharSelect, _Component);

  function CharSelect() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CharSelect);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CharSelect).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "namer", function (char) {
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CharSelect, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          side = _this$props.side,
          charName = _this$props.charName;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "char--select-container ".concat(side)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "char--char-box ".concat(charName)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "https://glotacosm.com/img/char/char-".concat(charName === undefined ? 'unknown' : charName, ".png")
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "char--name"
      }, this.namer(charName))));
    }
  }]);

  return CharSelect;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _CharSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CharSelect */ "./components/CharSelect.js");
/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ContentBlock */ "./components/ContentBlock.js");
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Provider */ "./components/Provider.js");













var Contact =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Contact, _Component);

  function Contact() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Contact);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Contact).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "contactOrNah", function (str) {
      return str == "email" && "Contact";
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "icons", function () {
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Contact, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var label = this.state.label;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "contact--container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Provider__WEBPACK_IMPORTED_MODULE_11__["MahContext"], null, function (context) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, "Contact"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "form"
        }, _this2.icons().map(function (info, index) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
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
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
            src: info.img,
            alt: info.label && info.label
          })));
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", null, "Choose Your Contact Method"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-4123697360" + " " + "contact--char-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_CharSelect__WEBPACK_IMPORTED_MODULE_9__["default"], {
          side: "left",
          charName: label
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-4123697360" + " " + "versus"
        }, "~VS~"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_CharSelect__WEBPACK_IMPORTED_MODULE_9__["default"], {
          side: "right",
          charName: "meme"
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
          id: "4123697360"
        }, ".modal-main.contact{padding:0;height:80.2%;background:-moz-linear-gradient(top,rgba(119,30,154,1) 0%,rgba(119,30,154,0.8) 2%,rgba(119,30,154,0.8) 20%,rgba(152,42,216,0.8) 50%,rgba(119,30,154,0.8) 80%,rgba(119,30,154,0.8) 99%,rgba(119,30,154,0) 100%);background:-webkit-linear-gradient(top,rgba(119,30,154,1) 0%,rgba(119,30,154,0.8) 2%,rgba(119,30,154,0.8) 20%,rgba(152,42,216,0.8) 50%,rgba(119,30,154,0.8) 80%,rgba(119,30,154,0.8) 99%,rgba(119,30,154,0) 100%);background:linear-gradient(to bottom,rgba(119,30,154,1) 0%,rgba(119,30,154,0.8) 2%,rgba(119,30,154,0.8) 20%,rgba(152,42,216,0.8) 50%,rgba(119,30,154,0.8) 80%,rgba(119,30,154,0.8) 99%,rgba(119,30,154,0) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#771e9a',endColorstr='#00771e9a',GradientType=0 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#771e9a',endColorstr='#00771e9a',GradientType=0 );}.versus{color:white;height:110px;line-height:110px;position:absolute;text-shadow:1px 2px 12px black;font-size:22px;background:royalblue;border:1px solid whitesmoke;padding:0 11px;top:40px;border-radius:100px;background:rgb(254,252,234);background:-moz-radial-gradient(center,ellipse cover,rgba(254,252,234,1) 0%,rgba(241,218,54,1) 100%);background:-webkit-radial-gradient(center,ellipse cover,rgba(254,252,234,1) 0%,rgba(241,218,54,1) 100%);background:radial-gradient(ellipse at center,rgba(254,252,234,1) 0%,rgba(241,218,54,1) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefcea',endColorstr='#f1da36',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefcea',endColorstr='#f1da36',GradientType=1 );box-shadow:1px 1px 115px magenta;}.contact--container{padding-top:2rem;background:-moz-linear-gradient(top,rgba(119,30,154,1) 0%,rgba(119,30,154,0.8) 2%,rgba(119,30,154,0.8) 20%,rgba(152,42,216,0.8) 50%,rgba(119,30,154,0.8) 80%,rgba(119,30,154,0.8) 99%,rgba(119,30,154,0) 100%);background:-webkit-linear-gradient(top,rgba(119,30,154,1) 0%,rgba(119,30,154,0.8) 2%,rgba(119,30,154,0.8) 20%,rgba(152,42,216,0.8) 50%,rgba(119,30,154,0.8) 80%,rgba(119,30,154,0.8) 99%,rgba(119,30,154,0) 100%);background:linear-gradient(to bottom,rgba(119,30,154,1) 0%,rgba(119,30,154,0.8) 2%,rgba(119,30,154,0.8) 20%,rgba(152,42,216,0.8) 50%,rgba(119,30,154,0.8) 80%,rgba(119,30,154,0.8) 99%,rgba(119,30,154,0) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#771e9a',endColorstr='#00771e9a',GradientType=0 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#771e9a',endColorstr='#00771e9a',GradientType=0 );}.contact--container h1,.contact--container h2{color:white;text-shadow:1px 2px 12px black;}.form{width:500px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 auto;margin-bottom:3rem;}.contact--container h1,.contact--container h2,.versus{font-family:'Press Start 2P';text-align:center;}.contact--char-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;position:relative;}.char--select-container{width:50%;}.char--select-container.right .b--content{background:-moz-linear-gradient(45deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);background:-webkit-linear-gradient(45deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);background:linear-gradient(45deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799',endColorstr='#001e5799',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799',endColorstr='#001e5799',GradientType=1 );}.char--select-container.left .b--content{background:-moz-linear-gradient(-45deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);background:-webkit-linear-gradient(-45deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);background:linear-gradient(135deg,rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799',endColorstr='#001e5799',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799',endColorstr='#001e5799',GradientType=1 );}.contact--image-link .b--content{background:rgb(183,222,237);background:-moz-linear-gradient(45deg,rgba(183,222,237,1) 0%,rgba(113,206,239,1) 50%,rgba(33,180,226,1) 51%,rgba(183,222,237,1) 100%);background:-webkit-linear-gradient(45deg,rgba(183,222,237,1) 0%,rgba(113,206,239,1) 50%,rgba(33,180,226,1) 51%,rgba(183,222,237,1) 100%);background:linear-gradient(45deg,rgba(183,222,237,1) 0%,rgba(113,206,239,1) 50%,rgba(33,180,226,1) 51%,rgba(183,222,237,1) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#b7deed',endColorstr='#b7deed',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#b7deed',endColorstr='#b7deed',GradientType=1 );}.contact--image-link .b--border:hover{border-color:brown;}.contact--image-link img{width:130px;height:auto;}.char--char-box img{width:auto;height:170px;display:block;margin:0 auto;}.char--select-container.left .char--name{text-align:right;}.char--select-container.right .char--name{text-align:left;}@media screen and (max-width:767px){.versus{padding:initial;line-height:50px;height:50px;}}@media screen and (max-width:567px){.form{width:initial;}.versus{font-size:14px;}.modal-main.contact{height:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvbmlvbm9ndWVyYXMvbmV4dC1qcy1wcmFjL2NvbXBvbmVudHMvQ29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRTJCLEFBSXFCLEFBWUUsQUFxQkssQUFVTCxBQU9BLEFBV2lCLEFBS2hCLEFBTUgsQUFLd0ssQUFRQyxBQVF2SixBQVFULEFBSVAsQUFLRCxBQU9NLEFBSUQsQUFLRSxBQVFGLEFBSUMsQUFJSCxVQTdJRCxBQXdFZixDQXNDZSxDQWxHQSxBQStCa0IsQUFPbEIsQUF1REQsQUFxQ1osRUFSQSxDQUlBLENBakJGLEFBS3FCLENBNUZtTSxBQW1GeE4sRUFoQkEsSUFuR3dOLENBd0d4TixBQUtnQixDQWxHSSxHQWdGd0gsQ0FoQ3hILElBa0VKLEtBZkEsS0FsR0ksQUE4QnBCLEVBb0ZFLEVBbEVGLEtBbURBLFNBbEdpQyxhQW1ERixZQWZkLE1BbkNBLGVBQ00scUJBQ08sZUFrQ0wsYUFqQ1IsTUEyRTJILFNBMUVqSSxDQXlEdUssQ0FRQyxPQWhFN0osaUJBOENGLEdBNUNVLGVBNkM5QixTQWpDcU4sSUFYM0csRUFyQjJHLFlBa0RyTSxjQUNLLG1CQUNyQix3QkF3Q29JLDhCQXRFeEIsa0JBcUQ4RCxFQVFDLCtFQVV0RCxLQXRFckIsQ0FVbUgsTUFoQ0EsMEVBMkU1RixHQVFBLFNBNURGLG9IQVVFLE1BaENBLGdCQTRGdkgsMEZBakJBLEdBUUEsS0E1RG1DLGlDQUNuQyx1RkFTQSxNQTlCQSIsImZpbGUiOiIvVXNlcnMvYW50b25pb25vZ3VlcmFzL25leHQtanMtcHJhYy9jb21wb25lbnRzL0NvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBDaGFyU2VsZWN0IGZyb20gXCIuL0NoYXJTZWxlY3RcIlxuaW1wb3J0IENvbnRlbnRCbG9jayBmcm9tICcuL0NvbnRlbnRCbG9jayc7XG5pbXBvcnQgeyBNYWhDb250ZXh0IH0gZnJvbSBcIi4vUHJvdmlkZXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zdGF0ZSA9e1xuICAgICAgbGFiZWw6IHVuZGVmaW5lZCxcbiAgICAgIHNpdGU6IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxuXG4gIGNvbnRhY3RPck5haCA9IChzdHIpID0+IHtcbiAgICByZXR1cm4gc3RyID09IFwiZW1haWxcIiAmJiBcIkNvbnRhY3RcIlxuICB9XG5cbiAgaWNvbnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHsgc2l0ZTogXCJtYWlsdG86YW50b25pb0BnbG90YWNvc20uY29tXCIsIGltZzogJ2h0dHBzOi8vZ2xvdGFjb3NtLmNvbS9pbWcvY2hhci9jaGFyLWVtYWlsLnBuZycsIGxhYmVsOiBcImVtYWlsXCIgfSxcbiAgICAgIHsgc2l0ZTogXCJodHRwczovL2dpdGh1Yi5jb20vMmhhbmRzMTBmaW5nZXJzXCIsIGltZzogJ2h0dHBzOi8vZ2xvdGFjb3NtLmNvbS9pbWcvY2hhci9jaGFyLWdpdGh1Yi5wbmcnLCBsYWJlbDogXCJnaXRodWJcIiB9LFxuICAgICAgeyBzaXRlOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hbm9ndWVyYXMvXCIsIGltZzogJ2h0dHBzOi8vZ2xvdGFjb3NtLmNvbS9pbWcvY2hhci9jaGFyLWxpbmtlZGluLnBuZycsIGxhYmVsOiBcImxpbmtlZGluXCIgfSxcbiAgICBdXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCB9ID0gdGhpcy5zdGF0ZVxuICAgICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC0tY29udGFpbmVyXCI+XG4gICAgICA8TWFoQ29udGV4dD5cbiAgICAgICAgeyBjb250ZXh0ID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgXG4gICAgICAgICAgPGgxPkNvbnRhY3Q8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgICAgICB7dGhpcy5pY29ucygpLm1hcCggKGluZm8sIGluZGV4KSA9PlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7bGFiZWw6IGluZm8ubGFiZWwsIHNpdGU6IGluZm8uc2l0ZX0pfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtsYWJlbDogdW5kZWZpbmVkLCBzaXRlOiB1bmRlZmluZWQgfSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bjb250YWN0LS1pbWFnZS1saW5rICR7aW5mby5sYWJlbCAmJiBpbmZvLmxhYmVsfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKT0+IGNvbnRleHQudXBkYXRlUG9pbnRzKCl9XG4gICAgICAgICAgICBocmVmPXtpbmZvLnNpdGV9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q29udGVudEJsb2NrPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbmZvLmltZ30gYWx0PXtpbmZvLmxhYmVsICYmIGluZm8ubGFiZWx9Lz5cbiAgICAgICAgICAgICAgICB7LyogaW1hZ2UgZnJvbSBmb250YXdlc29tZSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlICovfVxuICAgICAgICAgICAgICA8L0NvbnRlbnRCbG9jaz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDI+Q2hvb3NlIFlvdXIgQ29udGFjdCBNZXRob2Q8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtLWNoYXItd3JhcHBlclwiPlxuICAgICAgICA8Q2hhclNlbGVjdFxuICAgICAgICAgIHNpZGU9XCJsZWZ0XCJcbiAgICAgICAgICBjaGFyTmFtZT17bGFiZWx9XG4gICAgICAgICAgLz5cblxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVyc3VzXCI+flZTfjwvZGl2PlxuXG4gICAgICAgIDxDaGFyU2VsZWN0XG4gICAgICAgICAgc2lkZT1cInJpZ2h0XCJcbiAgICAgICAgICBjaGFyTmFtZT17XCJtZW1lXCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcblxuICAgICAgICAubW9kYWwtbWFpbi5jb250YWN0IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGhlaWdodDogODAuMiU7XG4gICAgICAgICAgICAgICAgICAgIC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyM3NzFlOWErMjAsOTgyYWQ4KzUwLDc3MWU5YSs4MCYwKzAsMC44KzIsMSswLDErOTksMC44Kzk5LDArMTAwICovXG4gICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDExOSwzMCwxNTQsMSkgMCUsIHJnYmEoMTE5LDMwLDE1NCwwLjgpIDIlLCByZ2JhKDExOSwzMCwxNTQsMC44KSAyMCUsIHJnYmEoMTUyLDQyLDIxNiwwLjgpIDUwJSwgcmdiYSgxMTksMzAsMTU0LDAuOCkgODAlLCByZ2JhKDExOSwzMCwxNTQsMC44KSA5OSUsIHJnYmEoMTE5LDMwLDE1NCwwKSAxMDAlKTsgLyogRkYzLjYtMTUgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMTE5LDMwLDE1NCwxKSAwJSxyZ2JhKDExOSwzMCwxNTQsMC44KSAyJSxyZ2JhKDExOSwzMCwxNTQsMC44KSAyMCUscmdiYSgxNTIsNDIsMjE2LDAuOCkgNTAlLHJnYmEoMTE5LDMwLDE1NCwwLjgpIDgwJSxyZ2JhKDExOSwzMCwxNTQsMC44KSA5OSUscmdiYSgxMTksMzAsMTU0LDApIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMTE5LDMwLDE1NCwxKSAwJSxyZ2JhKDExOSwzMCwxNTQsMC44KSAyJSxyZ2JhKDExOSwzMCwxNTQsMC44KSAyMCUscmdiYSgxNTIsNDIsMjE2LDAuOCkgNTAlLHJnYmEoMTE5LDMwLDE1NCwwLjgpIDgwJSxyZ2JhKDExOSwzMCwxNTQsMC44KSA5OSUscmdiYSgxMTksMzAsMTU0LDApIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzc3MWU5YScsIGVuZENvbG9yc3RyPScjMDA3NzFlOWEnLEdyYWRpZW50VHlwZT0wICk7IC8qIElFNi05ICovXG4gICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLnZlcnN1cyB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDExMHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAxMnB4IGJsYWNrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByb3lhbGJsdWU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDExcHg7XG4gICAgICAgICAgdG9wOiA0MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgIC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyNmZWZjZWErMCxmMWRhMzYrMTAwO0dvbGQrM0QgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU0LDI1MiwyMzQpOyAvKiBPbGQgYnJvd3NlcnMgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMjU0LDI1MiwyMzQsMSkgMCUsIHJnYmEoMjQxLDIxOCw1NCwxKSAxMDAlKTsgLyogRkYzLjYtMTUgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMjU0LDI1MiwyMzQsMSkgMCUscmdiYSgyNDEsMjE4LDU0LDEpIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgcmdiYSgyNTQsMjUyLDIzNCwxKSAwJSxyZ2JhKDI0MSwyMTgsNTQsMSkgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmVmY2VhJywgZW5kQ29sb3JzdHI9JyNmMWRhMzYnLEdyYWRpZW50VHlwZT0xICk7IC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDExNXB4IG1hZ2VudGE7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFjdC0tY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgICAgICAvKiBQZXJtYWxpbmsgLSB1c2UgdG8gZWRpdCBhbmQgc2hhcmUgdGhpcyBncmFkaWVudDogaHR0cDovL2NvbG9yemlsbGEuY29tL2dyYWRpZW50LWVkaXRvci8jNzcxZTlhKzIwLDk4MmFkOCs1MCw3NzFlOWErODAmMCswLDAuOCsyLDErMCwxKzk5LDAuOCs5OSwwKzEwMCAqL1xuICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgxMTksMzAsMTU0LDEpIDAlLCByZ2JhKDExOSwzMCwxNTQsMC44KSAyJSwgcmdiYSgxMTksMzAsMTU0LDAuOCkgMjAlLCByZ2JhKDE1Miw0MiwyMTYsMC44KSA1MCUsIHJnYmEoMTE5LDMwLDE1NCwwLjgpIDgwJSwgcmdiYSgxMTksMzAsMTU0LDAuOCkgOTklLCByZ2JhKDExOSwzMCwxNTQsMCkgMTAwJSk7IC8qIEZGMy42LTE1ICovXG4gICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDExOSwzMCwxNTQsMSkgMCUscmdiYSgxMTksMzAsMTU0LDAuOCkgMiUscmdiYSgxMTksMzAsMTU0LDAuOCkgMjAlLHJnYmEoMTUyLDQyLDIxNiwwLjgpIDUwJSxyZ2JhKDExOSwzMCwxNTQsMC44KSA4MCUscmdiYSgxMTksMzAsMTU0LDAuOCkgOTklLHJnYmEoMTE5LDMwLDE1NCwwKSAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDExOSwzMCwxNTQsMSkgMCUscmdiYSgxMTksMzAsMTU0LDAuOCkgMiUscmdiYSgxMTksMzAsMTU0LDAuOCkgMjAlLHJnYmEoMTUyLDQyLDIxNiwwLjgpIDUwJSxyZ2JhKDExOSwzMCwxNTQsMC44KSA4MCUscmdiYSgxMTksMzAsMTU0LDAuOCkgOTklLHJnYmEoMTE5LDMwLDE1NCwwKSAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM3NzFlOWEnLCBlbmRDb2xvcnN0cj0nIzAwNzcxZTlhJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhY3QtLWNvbnRhaW5lciBoMSxcbiAgICAgICAgLmNvbnRhY3QtLWNvbnRhaW5lciBoMiB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMnB4IDEycHggYmxhY2s7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLmZvcm0ge1xuICAgICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhY3QtLWNvbnRhaW5lciBoMSwgXG4gICAgICAgIC5jb250YWN0LS1jb250YWluZXIgaDIsIFxuICAgICAgICAudmVyc3VzIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFjdC0tY2hhci13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGFyLS1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoYXItLXNlbGVjdC1jb250YWluZXIucmlnaHQgLmItLWNvbnRlbnQgeyAgICAgICAgXG4gICAgICAgICAgLyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHA6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvIzFlNTc5OSsyMCwyOTg5ZDgrNTAsMWU1Nzk5KzgwJjArMCwxKzAsMSs5OSwxKzk5LDArMTAwICovXG4gICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMzAsODcsMTUzLDEpIDAlLCByZ2JhKDMwLDg3LDE1MywxKSAyMCUsIHJnYmEoNDEsMTM3LDIxNiwxKSA1MCUsIHJnYmEoMzAsODcsMTUzLDEpIDgwJSwgcmdiYSgzMCw4NywxNTMsMSkgOTklLCByZ2JhKDMwLDg3LDE1MywwKSAxMDAlKTsgLyogRkYzLjYtMTUgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgzMCw4NywxNTMsMSkgMCUscmdiYSgzMCw4NywxNTMsMSkgMjAlLHJnYmEoNDEsMTM3LDIxNiwxKSA1MCUscmdiYSgzMCw4NywxNTMsMSkgODAlLHJnYmEoMzAsODcsMTUzLDEpIDk5JSxyZ2JhKDMwLDg3LDE1MywwKSAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMzAsODcsMTUzLDEpIDAlLHJnYmEoMzAsODcsMTUzLDEpIDIwJSxyZ2JhKDQxLDEzNywyMTYsMSkgNTAlLHJnYmEoMzAsODcsMTUzLDEpIDgwJSxyZ2JhKDMwLDg3LDE1MywxKSA5OSUscmdiYSgzMCw4NywxNTMsMCkgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMWU1Nzk5JywgZW5kQ29sb3JzdHI9JyMwMDFlNTc5OScsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoYXItLXNlbGVjdC1jb250YWluZXIubGVmdCAuYi0tY29udGVudCB7XG4gICAgICAgICAgLyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHA6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvIzFlNTc5OSsyMCwyOTg5ZDgrNTAsMWU1Nzk5KzgwJjArMCwxKzAsMSs5OSwxKzk5LDArMTAwICovXG4gICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDMwLDg3LDE1MywxKSAwJSwgcmdiYSgzMCw4NywxNTMsMSkgMjAlLCByZ2JhKDQxLDEzNywyMTYsMSkgNTAlLCByZ2JhKDMwLDg3LDE1MywxKSA4MCUsIHJnYmEoMzAsODcsMTUzLDEpIDk5JSwgcmdiYSgzMCw4NywxNTMsMCkgMTAwJSk7IC8qIEZGMy42LTE1ICovXG4gICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDMwLDg3LDE1MywxKSAwJSxyZ2JhKDMwLDg3LDE1MywxKSAyMCUscmdiYSg0MSwxMzcsMjE2LDEpIDUwJSxyZ2JhKDMwLDg3LDE1MywxKSA4MCUscmdiYSgzMCw4NywxNTMsMSkgOTklLHJnYmEoMzAsODcsMTUzLDApIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMzAsODcsMTUzLDEpIDAlLHJnYmEoMzAsODcsMTUzLDEpIDIwJSxyZ2JhKDQxLDEzNywyMTYsMSkgNTAlLHJnYmEoMzAsODcsMTUzLDEpIDgwJSxyZ2JhKDMwLDg3LDE1MywxKSA5OSUscmdiYSgzMCw4NywxNTMsMCkgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMWU1Nzk5JywgZW5kQ29sb3JzdHI9JyMwMDFlNTc5OScsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhY3QtLWltYWdlLWxpbmsgLmItLWNvbnRlbnQge1xuICAgICAgICAgIC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyNiN2RlZWQrMCw3MWNlZWYrNTAsMjFiNGUyKzUxLGI3ZGVlZCsxMDA7U2hhcGUrMStTdHlsZSAqL1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxODMsMjIyLDIzNyk7IC8qIE9sZCBicm93c2VycyAqL1xuICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDE4MywyMjIsMjM3LDEpIDAlLCByZ2JhKDExMywyMDYsMjM5LDEpIDUwJSwgcmdiYSgzMywxODAsMjI2LDEpIDUxJSwgcmdiYSgxODMsMjIyLDIzNywxKSAxMDAlKTsgLyogRkYzLjYtMTUgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgxODMsMjIyLDIzNywxKSAwJSxyZ2JhKDExMywyMDYsMjM5LDEpIDUwJSxyZ2JhKDMzLDE4MCwyMjYsMSkgNTElLHJnYmEoMTgzLDIyMiwyMzcsMSkgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDE4MywyMjIsMjM3LDEpIDAlLHJnYmEoMTEzLDIwNiwyMzksMSkgNTAlLHJnYmEoMzMsMTgwLDIyNiwxKSA1MSUscmdiYSgxODMsMjIyLDIzNywxKSAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNiN2RlZWQnLCBlbmRDb2xvcnN0cj0nI2I3ZGVlZCcsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhY3QtLWltYWdlLWxpbmsgLmItLWJvcmRlcjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBicm93bjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWN0LS1pbWFnZS1saW5rIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGFyLS1jaGFyLWJveCBpbWcge1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIGhlaWdodDogMTcwcHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhci0tc2VsZWN0LWNvbnRhaW5lci5sZWZ0IC5jaGFyLS1uYW1lIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGFyLS1zZWxlY3QtY29udGFpbmVyLnJpZ2h0IC5jaGFyLS1uYW1lIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9IFxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgLnZlcnN1cyB7XG4gICAgICAgICAgICBwYWRkaW5nOiBpbml0aWFsO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgICB3aWR0aDogaW5pdGlhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnZlcnN1cyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5tb2RhbC1tYWluLmNvbnRhY3Qge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH0gXG4gICAgICAgIH1cblxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIDwvTWFoQ29udGV4dD5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/antonionogueras/next-js-prac/components/Contact.js */")));
      }));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./components/ContentBlock.js":
/*!************************************!*\
  !*** ./components/ContentBlock.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var ContentBlock = function ContentBlock(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      contentClass = _ref.contentClass;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3064982863" + " " + ("b--container" + " " + classes || false)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3064982863" + " " + "b--border"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3064982863" + " " + ("b--content" + " " + contentClass || false)
  }, children))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3064982863"
  }, ".b--border.jsx-3064982863{border:1.5px solid white;margin:0.5px;display:block;padding:0px;}.b--container.jsx-3064982863{border:1px solid black;}.b--content.jsx-3064982863{font-family:'Press Start 2P';background-color:black;color:white;padding:0.7rem;border-radius:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvbmlvbm9ndWVyYXMvbmV4dC1qcy1wcmFjL2NvbXBvbmVudHMvQ29udGVudEJsb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdZLEFBR2dDLEFBT0YsQUFLTSx1QkFIL0IsRUFSZSxJQVlVLFNBWFQsY0FDRixBQVdBLFlBVmQsQUFXaUIsZUFDRyxrQkFDeEIiLCJmaWxlIjoiL1VzZXJzL2FudG9uaW9ub2d1ZXJhcy9uZXh0LWpzLXByYWMvY29tcG9uZW50cy9Db250ZW50QmxvY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDb250ZW50QmxvY2sgPSAoe2NoaWxkcmVuLCBjbGFzc2VzLCBjb250ZW50Q2xhc3N9KSA9PiAoXG4gIDw+XG4gIDxkaXYgY2xhc3NOYW1lPXtcImItLWNvbnRhaW5lclwiICsgXCIgXCIgKyBjbGFzc2VzfT5cbiAgPGRpdiBjbGFzc05hbWU9XCJiLS1ib3JkZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJiLS1jb250ZW50XCIgKyBcIiBcIiArIGNvbnRlbnRDbGFzc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48c3R5bGUganN4PntgXG4gIC5iLS1ib3JkZXIge1xuICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCB3aGl0ZTtcbiAgICAgIG1hcmdpbjogMC41cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG5cbiAgLmItLWNvbnRhaW5lciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIC8vIG1heC13aWR0aDogMTYwcHg7XG4gICAgfVxuXG4gIC5iLS1jb250ZW50IHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiAwLjdyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5gfVxuPC9zdHlsZT5cbjwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50QmxvY2s7Il19 */\n/*@ sourceURL=/Users/antonionogueras/next-js-prac/components/ContentBlock.js */"));
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ContentBlock */ "./components/ContentBlock.js");
/* harmony import */ var _Printer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Printer */ "./components/Printer.js");
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Provider */ "./components/Provider.js");












var text = "Accumulating years of experience in the digital marketing field and in creative branding, GLOTACOSM was born. The creative initiative led by Antonio Nogueras is the nuanced response to highly creative branding and marketing. It seeks to build creative infrastructures and execute complex marketing tasks that require a combination of different creative skills.^ GLOTACOSM seeks to make a brainstorm look like a controlled F5 Tornado in the eye of a hurricane. It yearns to approach creative heights where consumers never thought possible. And while you’re wondering, its name derives from Latin and Greek to mean “World of Language”. At least it’s easier to pronounce than Schlotsky’s on the first try.";

var Hire =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Hire, _Component);

  function Hire() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Hire);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Hire).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "printer", function (str) {
      console.log(str.split(""));
      return str.split("");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "skills", function () {
      return ["HTML5", "CSS3", "SASS", "PHP", "JavaScript", "React", "Boostrap", "GraphQL", "mySQL", "Wordpress Custom Theme Building", "Python 3", "Ableton", "Digital Marketing Consultation", "Graphic Design", "Copywriting"];
    });

    _this.state = {
      text: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Hire, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "hire--wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Provider__WEBPACK_IMPORTED_MODULE_11__["MahContext"], null, function (context) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, "Hire Me"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", null, "~ The Legend ~"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "hire--skills"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_9__["default"], {
          contentClass: "main--info"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "hire--text"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Printer__WEBPACK_IMPORTED_MODULE_10__["default"], {
          animate: true,
          text: text.split("")
        }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_9__["default"], {
          classes: "profile"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: "http://www.glotacosm.com/pixelme.png",
          alt: "profile-shot",
          className: "jsx-2420316168" + " " + "hire--profile-image"
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
          id: "2420316168"
        }, ".hire--wrapper{padding:15px 0;}.hire--wrapper h1,.hire--wrapper h2{font-family:'Press Start 2P';text-align:center;}.hire--wrapper h2{color:white;text-shadow:1px 2px 10px black;}.profile{max-width:460px;max-height:190px;margin-top:15px;}.modal-main.hire{background:url(https://www.glotacosm.com/orientpixel-bg.jpg) 100%/cover no-repeat;overflow-y:scroll;-webkit-scrollbar-width:none;-moz-scrollbar-width:none;-ms-scrollbar-width:none;scrollbar-width:none;-ms-overflow-style:none;height:100%;}.modal-main.hire::-webkit-scrollbar{width:0;height:0;}.hire--skills{margin-top:15px;}.hire--profile-image{height:210px;position:relative;top:12px;}.main--info{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:260px;}.hire--text{padding:0 10px;line-height:1.5;}.hire--skills-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;}.hire--skills-wrapper h2{margin-top:4rem;}.hire--skill{margin:2rem;background-color:black;padding:10px 5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-shadow:1px 2px 0px #ffeb3ba1;width:20%;min-height:160px;color:white;text-align:center;font-family:'Press Start 2P';background:url(https://glotacosm.com/spellbook-pixel.png) 100%/contain no-repeat;color:black;font-size:14px;}@media screen and (max-width:767px){.main--info{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.profile .b--border{width:100%;margin:0 0 0 auto !important;}.profile{max-width:initial;}.hire--skill{margin:1.5rem;}.hire--text{font-size:14px;}.hire--profile-image{margin:0 auto;display:block;}}.button--link{text-align:center;padding:1rem;}.button--link a{width:50px;height:72px;padding:0.6rem;text-transform:capitalize;font-size:20px;-webkit-text-decoration:none;text-decoration:none;font-family:'Press Start 2P';color:black;background-color:green;}.button--link a:hover{color:green;background-color:black;cursor:pointer;}@media screen and (max-width:567px){.hire--wrapper h2{font-size:20px;}.modal-main.hire{height:100%;width:90%;}.hire--wrapper:{width:50%;}.hire--skill{margin:0.6rem;width:40%;font-size:15px;}.hire--text{margin-top:2.8rem;}}@media screen and (max-width:478px){.hire--skill{width:66%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvbmlvbm9ndWVyYXMvbmV4dC1qcy1wcmFjL2NvbXBvbmVudHMvSGlyZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRStCLEFBRzhCLEFBR2MsQUFLakIsQUFJTSxBQU1nRSxBQVMxRSxBQUtRLEFBSUgsQUFNQSxBQUtFLEFBS0YsQUFRRyxBQUlKLEFBcUJvQixBQUduQixBQUlPLEFBSUosQUFJQyxBQUlELEFBTUUsQUFLUCxBQVlELEFBUUssQUFHSCxBQUlKLEFBSUksQUFNSSxBQU1SLFFBbElDLEVBbUhiLEFBZ0JBLENBdEVtQyxBQTJCbkIsQ0EzR21CLEFBd0RSLEFBK0RGLEFBV1gsQ0F0R1EsQ0E0RGxCLEFBUWdCLEFBMENSLENBbEpWLEFBK0NrQixBQXFEaEIsQUFtQ0YsQ0EzSHFCLEFBb0JyQixBQTRCQSxDQWhDRixDQWdFSSxBQWtCYSxBQTBDakIsSUFiQSxDQXZCbUIsQ0ErQkYsSUExQ2IsQ0F0R2tCLEVBa0NULEFBV1gsQUErREEsRUFsR29CLEVBb0RELEFBK0RKLEdBWGEsQ0ErQjlCLENBOUdFLEFBbURBLEdBaEZBLElBTEEsRUFVQSxDQW1IRixFQS9EaUIsWUFvREUsVUE1RUUsQUFVTixLQW1FVSxHQXJHSCxHQW1DSCxNQVZqQixTQXhCdUIsRUFrRXJCLHdCQWxCdUIsR0FxRE0sYUFsRU4sZ0JBbUVYLFlBQ1csdUJBQzNCLFFBdkc0Qix3QkFDWixBQStDVSxZQTlDeEIsSUFpQ1ksVUFDZCxvREFhc0Msa0NBQ3hCLFVBQ08saUJBQ0wsWUFDTSxrQkFDVyw2QkFDb0QsaUZBQ3JFLFlBQ0csZUFDbkIiLCJmaWxlIjoiL1VzZXJzL2FudG9uaW9ub2d1ZXJhcy9uZXh0LWpzLXByYWMvY29tcG9uZW50cy9IaXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250ZW50QmxvY2sgZnJvbSAnLi9Db250ZW50QmxvY2snO1xuaW1wb3J0IFByaW50ZXIgZnJvbSAnLi9QcmludGVyJztcbmltcG9ydCB7IE1haENvbnRleHQgfSBmcm9tIFwiLi9Qcm92aWRlclwiO1xuXG5cbmxldCB0ZXh0ID0gXCJBY2N1bXVsYXRpbmcgeWVhcnMgb2YgZXhwZXJpZW5jZSBpbiB0aGUgZGlnaXRhbCBtYXJrZXRpbmcgZmllbGQgYW5kIGluIGNyZWF0aXZlIGJyYW5kaW5nLCBHTE9UQUNPU00gd2FzIGJvcm4uIFRoZSBjcmVhdGl2ZSBpbml0aWF0aXZlIGxlZCBieSBBbnRvbmlvIE5vZ3VlcmFzIGlzIHRoZSBudWFuY2VkIHJlc3BvbnNlIHRvIGhpZ2hseSBjcmVhdGl2ZSBicmFuZGluZyBhbmQgbWFya2V0aW5nLiBJdCBzZWVrcyB0byBidWlsZCBjcmVhdGl2ZSBpbmZyYXN0cnVjdHVyZXMgYW5kIGV4ZWN1dGUgY29tcGxleCBtYXJrZXRpbmcgdGFza3MgdGhhdCByZXF1aXJlIGEgY29tYmluYXRpb24gb2YgZGlmZmVyZW50IGNyZWF0aXZlIHNraWxscy5eIEdMT1RBQ09TTSBzZWVrcyB0byBtYWtlIGEgYnJhaW5zdG9ybSBsb29rIGxpa2UgYSBjb250cm9sbGVkIEY1IFRvcm5hZG8gaW4gdGhlIGV5ZSBvZiBhIGh1cnJpY2FuZS4gSXQgeWVhcm5zIHRvIGFwcHJvYWNoIGNyZWF0aXZlIGhlaWdodHMgd2hlcmUgY29uc3VtZXJzIG5ldmVyIHRob3VnaHQgcG9zc2libGUuIEFuZCB3aGlsZSB5b3XigJlyZSB3b25kZXJpbmcsIGl0cyBuYW1lIGRlcml2ZXMgZnJvbSBMYXRpbiBhbmQgR3JlZWsgdG8gbWVhbiDigJxXb3JsZCBvZiBMYW5ndWFnZeKAnS4gQXQgbGVhc3QgaXTigJlzIGVhc2llciB0byBwcm9ub3VuY2UgdGhhbiBTY2hsb3Rza3nigJlzIG9uIHRoZSBmaXJzdCB0cnkuXCJcblxuY2xhc3MgSGlyZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGV4dDogXCJcIlxuICAgIH07XG4gIH1cblxuICBwcmludGVyID0gKHN0cikgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN0ci5zcGxpdChcIlwiKSlcbiAgICByZXR1cm4gc3RyLnNwbGl0KFwiXCIpXG4gIH1cblxuICBza2lsbHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgIFwiSFRNTDVcIixcbiAgICAgIFwiQ1NTM1wiLFxuICAgICAgXCJTQVNTXCIsXG4gICAgICBcIlBIUFwiLFxuICAgICAgXCJKYXZhU2NyaXB0XCIsXG4gICAgICBcIlJlYWN0XCIsXG4gICAgICBcIkJvb3N0cmFwXCIsXG4gICAgICBcIkdyYXBoUUxcIixcbiAgICAgIFwibXlTUUxcIixcbiAgICAgIFwiV29yZHByZXNzIEN1c3RvbSBUaGVtZSBCdWlsZGluZ1wiLFxuICAgICAgXCJQeXRob24gM1wiLFxuICAgICAgXCJBYmxldG9uXCIsXG4gICAgICBcIkRpZ2l0YWwgTWFya2V0aW5nIENvbnN1bHRhdGlvblwiLFxuICAgICAgXCJHcmFwaGljIERlc2lnblwiLFxuICAgICAgXCJDb3B5d3JpdGluZ1wiXG4gICAgXVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoaXJlLS13cmFwcGVyXCI+XG4gICAgICA8TWFoQ29udGV4dD5cbiAgICAgICAgeyBjb250ZXh0ID0+IChcblxuICAgICAgICA8PlxuICAgICAgICA8aDE+SGlyZSBNZTwvaDE+XG4gICAgICAgIDxoMj5+IFRoZSBMZWdlbmQgfjwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlyZS0tc2tpbGxzXCI+ICAgICBcbiAgICAgICAgICB7LyogPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlyZS0tbG9nb1wiXG4gICAgICAgICAgICBzcmM9XCJodHRwOi8vd3d3Lmdsb3RhY29zbS5jb20vaW1nL0dMT1RBQ09TTS1icmFuZGxvZ28ucG5nXCJcbiAgICAgICAgICAgIGFsdD1cInByb2ZpbGUtc2hvdFwiXG4gICAgICAgICAgLz4gKi99XG5cbiAgICAgICBcbiAgIFxuICAgICAgICA8Q29udGVudEJsb2NrIGNvbnRlbnRDbGFzcz17XCJtYWluLS1pbmZvXCJ9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaXJlLS10ZXh0XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8UHJpbnRlciBhbmltYXRlIHRleHQ9e3RleHQuc3BsaXQoXCJcIil9Lz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Q29udGVudEJsb2NrIGNsYXNzZXM9e1wicHJvZmlsZVwifT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3d3dy5nbG90YWNvc20uY29tL3BpeGVsbWUucG5nXCIgYWx0PVwicHJvZmlsZS1zaG90XCIgY2xhc3NOYW1lPVwiaGlyZS0tcHJvZmlsZS1pbWFnZVwiIC8+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgLmhpcmUtLXdyYXBwZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGlyZS0td3JhcHBlciBoMSwgLmhpcmUtLXdyYXBwZXIgaDIge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJztcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGlyZS0td3JhcHBlciBoMiB7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTs7XG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMnB4IDEwcHggYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvZmlsZSB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0NjBweDtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxOTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9kYWwtbWFpbi5oaXJlIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vd3d3Lmdsb3RhY29zbS5jb20vb3JpZW50cGl4ZWwtYmcuanBnKSAxMDAlL2NvdmVyIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgICAgICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2RhbC1tYWluLmhpcmU6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXG4gICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGlyZS0tc2tpbGxzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhpcmUtLXByb2ZpbGUtaW1hZ2Uge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIxMHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1haW4tLWluZm8ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhpcmUtLXRleHQge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oaXJlLS1za2lsbHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGlyZS0tc2tpbGxzLXdyYXBwZXIgaDIge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGlyZS0tc2tpbGwge1xuICAgICAgICAgICAgICBtYXJnaW46IDJyZW07XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMnB4IDBweCAjZmZlYjNiYTE7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE2MHB4O1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCc7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2dsb3RhY29zbS5jb20vc3BlbGxib29rLXBpeGVsLnBuZykgMTAwJS9jb250YWluIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgXG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgIC5tYWluLS1pbmZvIHtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByb2ZpbGUgLmItLWJvcmRlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wcm9maWxlIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGluaXRpYWw7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaGlyZS0tc2tpbGwge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMS41cmVtO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmhpcmUtLXRleHQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5oaXJlLS1wcm9maWxlLWltYWdlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnV0dG9uLS1saW5rIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnV0dG9uLS1saW5rIGEge1xuICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MnB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjZyZW07XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCc7XG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJ1dHRvbi0tbGluayBhOmhvdmVye1xuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY3cHgpIHtcblxuICAgICAgICAgICAgLmhpcmUtLXdyYXBwZXIgaDIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9kYWwtbWFpbi5oaXJlIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIH0gIFxuICAgICAgICAgIC5oaXJlLS13cmFwcGVyOiB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oaXJlLS1za2lsbCB7XG4gICAgICAgICAgICBtYXJnaW46IDAuNnJlbTtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhpcmUtLXRleHQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMi44cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc4cHgpIHtcbiAgICAgICAgICAuaGlyZS0tc2tpbGwge1xuICAgICAgICAgICAgd2lkdGg6IDY2JTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfVxuXG4gICAgICBcbiAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvQ29udGVudEJsb2NrPlxuICAgXG4gICAgICAgICAgPC9Db250ZW50QmxvY2s+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaXJlLS1za2lsbHMtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGgyPn4gTXkgQm9vayBvZiBTcGVsbHMgfjwvaDI+XG4gICAgICAgICAgXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhpcmUtLXNraWxscy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIHt0aGlzLnNraWxscygpLm1hcCggc2tpbGwgPT4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGlyZS0tc2tpbGxcIiBcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4gY29udGV4dC51cGRhdGVQb2ludHMoKX0gXG4gICAgICAgICAgICAgICAgICBrZXk9e3NraWxsfT57c2tpbGx9PC9saT4pXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+VmlzaXQgdGhlIEdpdEh1YjwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tLWxpbmtcIj5cbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vMmhhbmRzMTBmaW5nZXJzXCI+VmlzaXQ8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTWFoQ29udGV4dD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGlyZTsiXX0= */\n/*@ sourceURL=/Users/antonionogueras/next-js-prac/components/Hire.js */"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "hire--skills-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", null, "~ My Book of Spells ~"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
          className: "hire--skills-container"
        }, _this2.skills().map(function (skill) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
            className: "hire--skill",
            onClick: function onClick() {
              return context.updatePoints();
            },
            key: skill
          }, skill);
        })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", null, "Visit the GitHub")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "button--link"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          target: "_blank",
          href: "https://github.com/2hands10fingers"
        }, "Visit")));
      }));
    }
  }]);

  return Hire;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
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
      id: "2737425714"
    }, ".modal-main.jsx-2737425714{background-color:#483d8b;padding:1.5rem;-webkit-animation:fadein-jsx-2737425714 0.5s ease-in-out;animation:fadein-jsx-2737425714 0.5s ease-in-out;}.close--modal.jsx-2737425714{position:relative;z-index:2;border:1px solid white;background-color:black;color:white;font-family:'Press Start 2P';font-size:20px;}@-webkit-keyframes fadeout{0%.jsx-2737425714{opacity:0;}100%.jsx-2737425714{opacity:1;}}@-moz-keyframes fadeout{0%.jsx-2737425714{opacity:0;}100%.jsx-2737425714{opacity:1;}}@-o-keyframes fadeout{0%.jsx-2737425714{opacity:0;}100%.jsx-2737425714{opacity:1;}}@-webkit-keyframes fadeout-jsx-2737425714{0%{opacity:0;}100%{opacity:1;}}@keyframes fadeout-jsx-2737425714{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fadein{0%.jsx-2737425714{opacity:0;}100%.jsx-2737425714{opacity:1;}}@-moz-keyframes fadein{0%.jsx-2737425714{opacity:0;}100%.jsx-2737425714{opacity:1;}}@-o-keyframes fadein{0%.jsx-2737425714{opacity:0;}100%.jsx-2737425714{opacity:1;}}@-webkit-keyframes fadein-jsx-2737425714{0%{opacity:0;}100%{opacity:1;}}@keyframes fadein-jsx-2737425714{0%{opacity:0;}100%{opacity:1;}}@media screen and (max-width.jsx-2737425714:767px) .modal-main{width:90%;}@media screen and (max-width:567px){.modal-main.jsx-2737425714{width:100%;}.close--modal.jsx-2737425714{font-size:40px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvbmlvbm9ndWVyYXMvbmV4dC1qcy1wcmFjL2NvbXBvbmVudHMvTW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLEFBSWdDLEFBTVAsQUFVRixBQUNBLEFBR0EsQUFDQSxBQUdBLEFBQ0EsQUFHQSxBQUNBLEFBSUEsQUFDQSxBQUdBLEFBQ0EsQUFHQSxBQUNBLEFBR0EsQUFDQSxBQU1KLEFBTUMsQUFJSSxVQTlDQSxBQUNBLEFBR0EsQUFDQSxBQUdBLEFBQ0EsQUFHQSxBQUNBLEFBSUEsQUFDQSxBQUdBLEFBQ0EsQUFHQSxBQUNBLEFBR0EsQUFDQSxBQU9qQixDQU1BLElBSUEsR0F4RFUsT0FOSyxHQU9RLFlBTlcsV0FPWCx1QkFDWCxZQUNpQiw2QkFDZCxlQUNqQixnQkFWQSIsImZpbGUiOiIvVXNlcnMvYW50b25pb25vZ3VlcmFzL25leHQtanMtcHJhYy9jb21wb25lbnRzL01vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWFoQ29udGV4dCB9IGZyb20gXCIuL1Byb3ZpZGVyXCI7XG5cbmNvbnN0IE1vZGFsID0gKHsgaGFuZGxlQ2xvc2UsIHNob3csIGNvbnRlbnQsIHBhZ2VDbGFzcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE1haENvbnRleHQ+XG4gICAgICB7Y29udGV4dCA9PiAoXG5cbiAgICAgICAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c2hvdyA/IFwibW9kYWwgZGlzcGxheS1ibG9ja1wiIDogXCJtb2RhbCBkaXNwbGF5LW5vbmVcIn1gfT5cblxuICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNsb3NlLS1tb2RhbFwiIG9uQ2xpY2s9eygpPT4ge2hhbmRsZUNsb3NlKCk7IGNvbnRleHQudXBkYXRlVHlwZShcIlwiKX19Plg8L2J1dHRvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YG1vZGFsLW1haW4gJHshdW5kZWZpbmVkICYmIHBhZ2VDbGFzc31gfT5cbiAgICAgICAge2NvbnRlbnR9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgXG4gICAgLm1vZGFsLW1haW4ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ4M2Q4YjtcbiAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgIGFuaW1hdGlvbjogZmFkZWluIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgIFxuICAgIC5jbG9zZS0tbW9kYWwge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJztcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXQge1xuICAgICAgMCUgICB7IG9wYWNpdHk6IDA7IH1cbiAgICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG4gICAgfVxuICAgIEAtbW96LWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgICAgIDAlICAgeyBvcGFjaXR5OiAwOyB9XG4gICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICAgIH1cbiAgICBALW8ta2V5ZnJhbWVzIGZhZGVvdXQge1xuICAgICAgMCUgICB7IG9wYWNpdHk6IDA7IH1cbiAgICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgZmFkZW91dCB7XG4gICAgICAwJSAgIHsgb3BhY2l0eTogMDsgfVxuICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICB9XG4gICAgXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgICAwJSAgIHsgb3BhY2l0eTogMDsgfVxuICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICB9XG4gICAgQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgICAwJSAgIHsgb3BhY2l0eTogMDsgfVxuICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICB9XG4gICAgQC1vLWtleWZyYW1lcyBmYWRlaW4ge1xuICAgICAgMCUgICB7IG9wYWNpdHk6IDA7IH1cbiAgICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICAgIDAlICAgeyBvcGFjaXR5OiAwOyB9XG4gICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICAgIH1cbiAgICBcbiAgICBcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgLm1vZGFsLW1haW4ge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjdweCkge1xuICAgICAgLm1vZGFsLW1haW4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNsb3NlLS1tb2RhbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG4gICAgYH1cbiAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgICApfVxuICA8L01haENvbnRleHQ+XG4gXG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsIl19 */\n/*@ sourceURL=/Users/antonionogueras/next-js-prac/components/Modal.js */")));
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Provider */ "./components/Provider.js");










 // import '../styles/index.sass'
// import '../styles/misc.css'


var _React = react__WEBPACK_IMPORTED_MODULE_8___default.a,
    Component = _React.Component;
var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout, _Component);

  function Layout() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showModal", function () {
      _this.setState({
        show: true,
        type: "built"
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "hideModal", function () {
      _this.setState({
        show: false,
        type: ""
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setPage", function (thePage) {
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-774140210"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-774140210"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Press+Start+2P",
        rel: "stylesheet",
        className: "jsx-774140210"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "774140210"
      }, "*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}body{background:url('http://i.imgur.com/F0gBD6c.png') 100%/cover no-repeat;height:100vh;width:100vw;overflow:hidden;}.points{position:absolute;top:0;right:0;color:#76e680;font-family:'Press Start 2P';text-shadow:1px 2px 12px black;font-size:20px;padding:1rem;}.points-txt{font-size:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvbmlvbm9ndWVyYXMvbmV4dC1qcy1wcmFjL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUN5QixBQUc0QyxBQUttQyxBQU9wRCxBQVdILGVBQ2pCLEdBWFEsTUFDRSxRQUNNLEdBZG9CLFdBZUwsdUJBZC9CLENBSWUsS0FXa0IsUUFWbkIsWUFDSSxXQVVELEtBVGpCLFVBVWUsYUFDZiIsImZpbGUiOiIvVXNlcnMvYW50b25pb25vZ3VlcmFzL25leHQtanMtcHJhYy9jb21wb25lbnRzL015TGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9TaWRlYmFyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy8gaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguc2Fzcydcbi8vIGltcG9ydCAnLi4vc3R5bGVzL21pc2MuY3NzJ1xuaW1wb3J0IHsgTWFoQ29udGV4dCB9IGZyb20gXCIuL1Byb3ZpZGVyXCI7XG5cbmNvbnN0IHtDb21wb25lbnR9ID0gUmVhY3Q7XG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcbiAgbWFyZ2luOiAyMCxcbiAgcGFkZGluZzogMjAsXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjREREJ1xufVxuXG5cbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gIHN1cGVyKClcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgICBzaG93OiBmYWxzZSxcbiAgICB0eXBlOiBcIlwiLFxuICAgIGN1cnJlbnRQYWdlOiB1bmRlZmluZWQsXG5cbiAgfTtcbn1cblxuICBzaG93TW9kYWwgPSAoKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBzaG93OiB0cnVlLCB0eXBlOiBcImJ1aWx0XCIgfSk7IH07XG4gIGhpZGVNb2RhbCA9ICgpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlLCB0eXBlOiBcIlwiIH0pOyB9O1xuICBzZXRQYWdlID0gKHRoZVBhZ2UpID0+IHt0aGlzLnNldFN0YXRlKHtjdXJyZW50UGFnZTogdGhlUGFnZSB9KX1cblxuICByZW5kZXIoKXtcblxuICAgIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UHJlc3MrU3RhcnQrMlBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAqIHtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICB9XG5cbiAgICAgIGJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHA6Ly9pLmltZ3VyLmNvbS9GMGdCRDZjLnBuZycpIDEwMCUvY292ZXIgbm8tcmVwZWF0O1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC5wb2ludHMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGNvbG9yOiAjNzZlNjgwO1xuICAgICAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJztcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAycHggMTJweCBibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAucG9pbnRzLXR4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cblxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8TWFoQ29udGV4dD5cbiAgICAgIHtjb250ZXh0ID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludHNcIj5cbiAgICAgICAgICB7Y29udGV4dC5kYXRhLnBvaW50cyB9PHNwYW4gY2xhc3NOYW1lPVwicG9pbnRzLXR4dFwiPiBwb2ludHM8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L01haENvbnRleHQ+XG4gICAgICA8U2lkZWJhciBtZW51PXt0aGlzLnByb3BzLm1lbnV9IC8+XG4gICAgPC9kaXY+XG4gICAgKVxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IExheW91dCJdfQ== */\n/*@ sourceURL=/Users/antonionogueras/next-js-prac/components/MyLayout.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Provider__WEBPACK_IMPORTED_MODULE_11__["MahContext"], null, function (context) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-774140210" + " " + "points"
        }, context.data.points, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "jsx-774140210" + " " + "points-txt"
        }, " points"));
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









var Printer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Printer, _Component);

  function Printer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Printer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Printer).call(this, props));
    _this.state = {
      arr: _this.props.text,
      theText: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Printer, [{
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
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, arr.length && _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(this.state.theText).map(function (letter, index) {
        return letter === '^' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
          className: "jsx-1315177267"
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
          className: "jsx-1315177267"
        })) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "jsx-1315177267" + " " + ((animate ? "lett" : "none") || "")
        }, letter);
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1315177267"
      }, ".lett.jsx-1315177267{-webkit-animation:fadein-jsx-1315177267 0.5s ease-in-out;animation:fadein-jsx-1315177267 0.5s ease-in-out;}@-webkit-keyframes fadein{0%.jsx-1315177267{opacity:0;}100%.jsx-1315177267{opacity:1;}}@-moz-keyframes fadein{0%.jsx-1315177267{opacity:0;}100%.jsx-1315177267{opacity:1;}}@-o-keyframes fadein{0%.jsx-1315177267{opacity:0;}100%.jsx-1315177267{opacity:1;}}@-webkit-keyframes fadein-jsx-1315177267{0%{opacity:0;}100%{opacity:1;}}@keyframes fadein-jsx-1315177267{0%{opacity:0;}100%{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvbmlvbm9ndWVyYXMvbmV4dC1qcy1wcmFjL2NvbXBvbmVudHMvUHJpbnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2tCLEFBSzJDLEFBSWxCLEFBQ0EsQUFHQSxBQUNBLEFBR0EsQUFDQSxBQUdBLEFBQ0EsVUFiQyxBQUNBLEFBR0EsQUFDQSxBQUdBLEFBQ0EsQUFHQSxBQUNBLGdHQWhCbkIiLCJmaWxlIjoiL1VzZXJzL2FudG9uaW9ub2d1ZXJhcy9uZXh0LWpzLXByYWMvY29tcG9uZW50cy9QcmludGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBQcmludGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFycjogdGhpcy5wcm9wcy50ZXh0LFxuICAgICAgdGhlVGV4dDogXCJcIlxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnN0YXRlLmFyci5mb3JFYWNoKChsZXR0ZXIsIGluZGV4KSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgICB0aGVUZXh0OiAgc3RhdGUudGhlVGV4dCArIGxldHRlciBcbiAgICAgICAgfSkpO1xuICAgICAgfSwgMzAgKiBpbmRleClcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYXJyIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBhbmltYXRlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgICAge2Fyci5sZW5ndGggJiZcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5zdGF0ZS50aGVUZXh0KS5tYXAoKGxldHRlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgbGV0dGVyID09PSAnXicgPyBcbiAgICAgICAgICAgICAgPD48YnIvPjxici8+PC8+IDogXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17IGFuaW1hdGUgPyBcImxldHRcIiA6IFwibm9uZVwiIH0+XG4gICAgICAgICAgICAgICAge2xldHRlcn1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBcblxuICAgICAgLmxldHQge1xuICAgICAgICBhbmltYXRpb246IGZhZGVpbiAwLjVzIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICAgICAgMCUgICB7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICAgIH1cbiAgICAgIEAtbW96LWtleWZyYW1lcyBmYWRlaW4ge1xuICAgICAgICAwJSAgIHsgb3BhY2l0eTogMDsgfVxuICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICAgICAgfVxuICAgICAgQC1vLWtleWZyYW1lcyBmYWRlaW4ge1xuICAgICAgICAwJSAgIHsgb3BhY2l0eTogMDsgfVxuICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICAgICAgfVxuICAgICAgQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgICAgICAwJSAgIHsgb3BhY2l0eTogMDsgfVxuICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBcbiAgICAgIGB9XG5cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8Lz5cbiAgICAgIFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpbnRlcjsiXX0= */\n/*@ sourceURL=/Users/antonionogueras/next-js-prac/components/Printer.js */"));
    }
  }]);

  return Printer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






var _React = react__WEBPACK_IMPORTED_MODULE_5___default.a,
    Component = _React.Component;
var MyContext = react__WEBPACK_IMPORTED_MODULE_5___default.a.createContext();

var MyProvider =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MyProvider, _Component);

  function MyProvider() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyProvider);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MyProvider).call(this));
    _this.state = {
      points: 0,
      type: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyProvider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var points = this.state.points;
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(MyContext.Provider, {
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.js");
/* harmony import */ var _components_Work__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Work */ "./components/Work.js");
/* harmony import */ var _components_Hire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Hire */ "./components/Hire.js");
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Provider */ "./components/Provider.js");









var _React = react__WEBPACK_IMPORTED_MODULE_8___default.a,
    Component = _React.Component;






var Sidebar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Sidebar, _Component);

  function Sidebar() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Sidebar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Sidebar).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "links", function () {
      return [{
        name: "Work",
        url: "/work",
        children: ["All", "Built", "Maintained"]
      }, {
        name: "Contact",
        url: "/contact"
      }, {
        name: "Hire",
        url: "/hire",
        background: "// https://www.glotacosm.com/orientpixel-bg.jpg"
      }];
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "builtOrMaintainedHandler", function (checked) {
      console.log(checked.toLowerCase());
      checked.toLowerCase() === "built" || checked.toLowerCase() === "maintained" || checked.toLowerCase() === "all" ? checked : "";
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "subMenuToggler", function () {
      return _this.setState({
        haschildren: !_this.state.haschildren
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "hideModal", function () {
      return _this.setState({
        show: false,
        type: ""
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setPage", function (thePage) {
      return _this.setState({
        currentPage: thePage,
        show: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "blaher", function (link, updateThePoints, updateTheType) {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "".concat(link.children && "sidebar--has-children"),
        onClick: function onClick() {
          link.children && _this.subMenuToggler();
          updateThePoints();
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "sidebar--link",
        onClick: function onClick() {
          _this.setPage(link.name.toLowerCase());

          updateThePoints();
        }
      }, link.name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        className: "sidebar--links"
      }, link.children && link.children.map(function (childLink) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          onClick: function onClick() {
            _this.builtOrMaintainedHandler(childLink, updateTheType);

            _this.setPage(link.name.toLowerCase());

            updateTheType(childLink.toLowerCase() === "built" || childLink.toLowerCase() === "maintained" ? childLink.toLowerCase() : "");
          },
          key: childLink
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
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
        "contact": react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_10__["default"], null),
        "work": react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Work__WEBPACK_IMPORTED_MODULE_11__["default"], null),
        "hire": react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Hire__WEBPACK_IMPORTED_MODULE_12__["default"], null)
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Sidebar, [{
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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Provider__WEBPACK_IMPORTED_MODULE_13__["MahContext"], null, function (context) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
          className: "sidebar",
          style: {
            display: "".concat(menu ? "none" : "initial")
          }
        }, _this2.links().map(function (link) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, !link.children ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            key: link,
            onClick: function onClick() {
              return _this2.setPage(link.name.toLowerCase());
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1622716133", [!menu && "display: none", !haschildren ? "display: none;" : "display: initial;"]]])
          }, _this2.blaher(link, context.updatePoints, context.updateType)) : _this2.blaher(link, context.updatePoints, context.updateType), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
            id: "1622716133",
            dynamic: [!menu && "display: none", !haschildren ? "display: none;" : "display: initial;"]
          }, ".sidebar{".concat(!menu && "display: none", ";}.sidebar--has-children{position:relative;}.sidebar--has-children .sidebar--links{").concat(!haschildren ? "display: none;" : "display: initial;", " animation:fadein 0.3s eas-in-out;}@-webkit-keyframes fadein{0%{opacity:0;}100%{opacity:1;}}@-moz-keyframes fadein{0%{opacity:0;}100%{opacity:1;}}@-o-keyframes fadein{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fadein{0%{opacity:0;}100%{opacity:1;}}@keyframes fadein{0%{opacity:0;}100%{opacity:1;}}.sidebar--has-children:before{content:'';top:17px;right:0;border-style:inset;position:absolute;width:0;height:0;border-style:solid;border-width:10px 12.5px 0 12.5px;border-color:white transparent transparent transparent;}.sidebar--has-children .sidebar--link{pointer-events:none;}.sidebar--has-children .sidebar--links li:hover{background-color:lightgreen;}.sidebar li{cursor:pointer;font-family:'Press Start 2P';text-align:center;list-style:none;padding:0;margin:.5rem auto;width:235px;display:block;color:white;text-shadow:1px 6px 0px black;}.sidebar li:hover{background-color:green;}.sidebar--links,sidebar{padding:0;}.sidebar--link{font-size:36px;}.sidebar--link__child{font-size:18px;}.modal{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);}.modal-main{position:fixed;background:white;right:0;bottom:0;width:80%;height:880px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);overflow:auto;}.display-block{display:block;}.display-none{display:none;}.free-points{font-size:19px;text-transform:uppercase;font-family:'Press Start 2P';text-shadow:0px 3px 1px darkgreen;text-align:center;background-color:forestgreen;color:white;height:50px;display:block;margin:0 auto;border-color:#007500;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvbmlvbm9ndWVyYXMvbmV4dC1qcy1wcmFjL2NvbXBvbmVudHMvU2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RzJDLEFBSTRCLEFBRXVCLEFBTWUsQUFJbkIsQUFDQSxBQUdBLEFBQ0EsQUFHQSxBQUNBLEFBR0EsQUFDQSxBQUdILEFBY08sQUFHVSxBQUliLEFBYVEsQUFLYixBQUlLLEFBSUEsQUFJQSxBQVVELEFBYUEsQUFJRCxBQUlFLFVBbEdBLEFBQ0EsQUFHQSxBQUNBLEFBR0EsQUFDQSxBQUdBLEFBQ0EsQUEyQ25CLENBdkNhLEVBOEVYLENBSkEsQ0FyRCtCLEFBc0JqQyxBQUlBLEFBSVUsQUFVVyxBQXFCUSxHQTVHN0IsRUEyQlksQUFhWixDQXNDVyxFQWxCWCxLQWhDdUIsQUFldkIsQUFvQ2MsQ0FsRmQsR0EyRlksT0FSSSxDQVNILEFBb0JvQixJQTdEWCxHQW5CQSxFQTZEUixFQVRvQixRQVVqQixHQXJGakIsQUEyQ29CLEdBbkJSLElBZ0YwQixHQWxCM0IsQ0E3REUsS0FtQkMsQUFnQ1osRUFXVSxFQTdEVyxNQW1CRCxDQTJDYSxZQTdERyxFQThFaEIsR0EzRE4sWUFDRSxHQTJEZSxXQTFEakIsR0FwQjJDLFNBcUJ6QixNQTBEbEIsWUFDQSxZQTFEaEIsQUEyRGtCLGNBQ0EsRUFoRmxCLElBMkRtQixRQXNCTSxNQXJCdkIsZUFzQmlCLGVBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9hbnRvbmlvbm9ndWVyYXMvbmV4dC1qcy1wcmFjL2NvbXBvbmVudHMvU2lkZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2RhbCdcbmltcG9ydCBDb250YWN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdCdcbmltcG9ydCBXb3JrIGZyb20gJy4uL2NvbXBvbmVudHMvV29yaydcbmltcG9ydCBIaXJlIGZyb20gJy4uL2NvbXBvbmVudHMvSGlyZSdcbmltcG9ydCB7IE1haENvbnRleHQgfSBmcm9tIFwiLi9Qcm92aWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdGFydDogZmFsc2UsXG4gICAgICAgICAgICBoYXNjaGlsZHJlbjogZmFsc2UsXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIGZyZWVQb2ludHM6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiBcIlwiLFxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHBhZ2VzOiB7XG4gICAgICAgICAgICAgICAgXCJjb250YWN0XCI6IDxDb250YWN0IC8+LFxuICAgICAgICAgICAgICAgIFwid29ya1wiOiA8V29yayAvPixcbiAgICAgICAgICAgICAgICBcImhpcmVcIjogPEhpcmUgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGlua3MgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7IG5hbWU6IFwiV29ya1wiLCB1cmw6IFwiL3dvcmtcIiwgY2hpbGRyZW46IFtcIkFsbFwiLCBcIkJ1aWx0XCIsIFwiTWFpbnRhaW5lZFwiXSB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkNvbnRhY3RcIiwgdXJsOiBcIi9jb250YWN0XCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJIaXJlXCIsIHVybDogXCIvaGlyZVwiLCBiYWNrZ3JvdW5kOiBcIi8vIGh0dHBzOi8vd3d3Lmdsb3RhY29zbS5jb20vb3JpZW50cGl4ZWwtYmcuanBnXCIgfVxuICAgICAgICBdXG4gICAgfVxuXG4gICAgYnVpbHRPck1haW50YWluZWRIYW5kbGVyID0gY2hlY2tlZCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrZWQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAoY2hlY2tlZC50b0xvd2VyQ2FzZSgpID09PSBcImJ1aWx0XCIgfHxcbiAgICAgICAgICBjaGVja2VkLnRvTG93ZXJDYXNlKCkgPT09IFwibWFpbnRhaW5lZFwiIHx8XG4gICAgICAgICAgY2hlY2tlZC50b0xvd2VyQ2FzZSgpID09PSBcImFsbFwiICkgPyBjaGVja2VkIDogXCJcIjtcbiAgICB9XG5cbiAgICBzdWJNZW51VG9nZ2xlciA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe2hhc2NoaWxkcmVuOiAhdGhpcy5zdGF0ZS5oYXNjaGlsZHJlbn0pXG5cbiAgICBoaWRlTW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UsIHR5cGU6IFwiXCIgfSk7XG5cbiAgICBzZXRQYWdlID0gdGhlUGFnZSA9PiB0aGlzLnNldFN0YXRlKHtjdXJyZW50UGFnZTogdGhlUGFnZSwgc2hvdzogdHJ1ZSB9KVxuXG4gICAgYmxhaGVyID0gKGxpbmssIHVwZGF0ZVRoZVBvaW50cywgdXBkYXRlVGhlVHlwZSkgPT4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtgJHtsaW5rLmNoaWxkcmVuICYmIFwic2lkZWJhci0taGFzLWNoaWxkcmVuXCJ9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBsaW5rLmNoaWxkcmVuICYmIHRoaXMuc3ViTWVudVRvZ2dsZXIoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVUaGVQb2ludHMoKTtcblxuICAgICAgICAgICAgfX0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpZGViYXItLWxpbmtcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFnZShsaW5rLm5hbWUudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgICAgICB1cGRhdGVUaGVQb2ludHMoKTtcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAge2xpbmsubmFtZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bFxuICAgICAgICAgIGNsYXNzTmFtZT17YHNpZGViYXItLWxpbmtzYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGluay5jaGlsZHJlbiAmJiBsaW5rLmNoaWxkcmVuLm1hcChjaGlsZExpbmsgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWx0T3JNYWludGFpbmVkSGFuZGxlcihjaGlsZExpbmssIHVwZGF0ZVRoZVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQYWdlKGxpbmsubmFtZS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGhlVHlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGRMaW5rLnRvTG93ZXJDYXNlKCkgPT09IFwiYnVpbHRcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZExpbmsudG9Mb3dlckNhc2UoKSA9PT0gXCJtYWludGFpbmVkXCIgKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTGluay50b0xvd2VyQ2FzZSgpIDogXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2NoaWxkTGlua31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItLWxpbmtfX2NoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkTGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgPC9saT5cbiAgICApXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtmcmVlUG9pbnRzLCBoYXNjaGlsZHJlbiwgc2hvdywgcGFnZXMsIGN1cnJlbnRQYWdlfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgY29uc3QgeyBtZW51fSA9IHRoaXMucHJvcHNcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8TWFoQ29udGV4dD5cbiAgICAgICAgICAgIHsgY29udGV4dCA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXJcIiBzdHlsZT17e2Rpc3BsYXk6IGAke21lbnUgPyBcIm5vbmVcIiA6IFwiaW5pdGlhbFwiIH1gfX0+XG4gICAgICAgICAgICAgICAge3RoaXMubGlua3MoKS5tYXAobGluayA9PiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyFsaW5rLmNoaWxkcmVuID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaW5rfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFBhZ2UobGluay5uYW1lLnRvTG93ZXJDYXNlKCkpfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuYmxhaGVyKGxpbmssIGNvbnRleHQudXBkYXRlUG9pbnRzLCBjb250ZXh0LnVwZGF0ZVR5cGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmxhaGVyKGxpbmssIGNvbnRleHQudXBkYXRlUG9pbnRzLCBjb250ZXh0LnVwZGF0ZVR5cGUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHshbWVudSAmJiBcImRpc3BsYXk6IG5vbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItLWhhcy1jaGlsZHJlbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci0taGFzLWNoaWxkcmVuIC5zaWRlYmFyLS1saW5rcyB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHshaGFzY2hpbGRyZW4gPyBcImRpc3BsYXk6IG5vbmU7XCIgOiBcImRpc3BsYXk6IGluaXRpYWw7XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZWluIDAuM3MgZWFzLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAlICAgeyBvcGFjaXR5OiAwOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAlICAgeyBvcGFjaXR5OiAwOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBALW8ta2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwJSAgIHsgb3BhY2l0eTogMDsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCUgICB7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLS1oYXMtY2hpbGRyZW46YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEyLjVweCAwIDEyLjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLS1oYXMtY2hpbGRyZW4gLnNpZGViYXItLWxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLS1oYXMtY2hpbGRyZW4gLnNpZGViYXItLWxpbmtzIGxpOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhciBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggNnB4IDBweCBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhciBsaTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItLWxpbmtzLCBzaWRlYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci0tbGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci0tbGlua19fY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tb2RhbC1tYWluIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDg4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6NTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGlzcGxheS1ibG9jayB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGlzcGxheS1ub25lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZyZWUtcG9pbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAzcHggMXB4IGRhcmtncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmb3Jlc3RncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3NTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICAgICAgICAgICAgICA8Lz5cblxuXG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmcmVlUG9pbnRzICYmXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZyZWUtcG9pbnRzXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnVwZGF0ZVBvaW50cygxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnJlZVBvaW50czogZmFsc2V9KVxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICBDbGljayBIZXJlIGZvciBGcmVlIFBvaW50c1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9NYWhDb250ZXh0PlxuXG5cbiAgICAgICAgPD5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17c2hvd31cbiAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZT17dGhpcy5oaWRlTW9kYWx9XG4gICAgICAgICAgICAgICAgY29udGVudD17cGFnZXNbY3VycmVudFBhZ2VdfVxuICAgICAgICAgICAgICAgIHBhZ2VDbGFzcz17Y3VycmVudFBhZ2V9XG4gICAgICAgICAgICAgICAgdHlwZT17dGhpcy5zdGF0ZS50eXBlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG5cbiAgICAgICAgPC8+XG4gICAgICAgIClcblxuICAgIH1cbn0iXX0= */\n/*@ sourceURL=/Users/antonionogueras/next-js-prac/components/Sidebar.js */")));
        })), freePoints && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          className: "free-points",
          onClick: function onClick() {
            context.updatePoints(1000);

            _this2.setState({
              freePoints: false
            });
          }
        }, "Click Here for Free Points"));
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _WorkItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WorkItem */ "./components/WorkItem.js");
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Provider */ "./components/Provider.js");












var Work =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Work, _Component);

  function Work() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Work);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Work).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "work", function () {
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
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, "subline", ""), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, "descrip", "Turned received WiFI packet data into color art to represent the individual packets as an art project."), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, "img", "https://camo.githubusercontent.com/835ccd28a5e335ceac27a53d830220d04785b9b2/68747470733a2f2f692e696d6775722e636f6d2f33514f3064596e2e706e67"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, "stack", "JavaScript, HTML5, CSS3, Python"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, "category", ["Fun"]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, "repo", "https://github.com/2hands10fingers/color-the-internet"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, "built", true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, "maintained", false), _ref), {
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Work, [{
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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4086336753" + " " + "work--container ".concat(built ? "built" : "maintained")
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-4086336753"
      }, "Work"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Provider__WEBPACK_IMPORTED_MODULE_10__["MahContext"], null, function (context) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-4086336753" + " " + "work--filter ".concat(_this2.state.built)
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          onClick: function onClick() {
            return context.updateType("");
          },
          className: "jsx-4086336753"
        }, "All"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          onClick: function onClick() {
            return context.updateType("built");
          },
          className: "jsx-4086336753"
        }, "Built"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          onClick: function onClick() {
            return context.updateType("maintained");
          },
          className: "jsx-4086336753"
        }, "Maintained")), _this2.work().map(function (i, index) {
          console.log(i[context.data.type]);

          if (i[context.data.type] || context.data.type == "") {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_WorkItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4086336753"
      }, ".modal-main.work{background:url(https://glotacosm.com/img/conifer_forest_inner.png);}.modal-main.work::-webkit-scrollbar{width:0;height:0;}.work--thing,.work--thing .b--content{min-height:254px !important;}.work--container h1{margin-top:10rem;}.work--container .workitem--container:nth-child(odd) .workitem--img-text{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.workitem--container .b--container{margin:0 1rem;}.work h1{font-family:'Press Start 2P';color:white;text-shadow:1px 2px 12px black;text-align:center;font-size:36px;text-transform:uppercase;margin-top:12rem;}.work--filter{text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.work--filter button{line-height:40px;height:40px;background-color:green;border:none;color:white;text-transform:uppercase;font-family:'Press Start 2P';cursor:pointer;text-align:center;width:160px;margin:0 1rem;box-shadow:1px 2px 12px black;}.work--filter button:hover{cursor:pointer;background-color:lightgreen;border:2px solid lightgr;}.work--container{max-width:1140px;margin:0 auto;}@media screen and (max-width:1060px){.work--container{position:initial;}.modal-main.work{width:95%;}.work--container .workitem--container:nth-child(odd) .workitem--img-text{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.work--thing{position:relative;top:-20px;}}@media screen and (max-width:567px){.work--filter{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.work--filter button{margin:1rem 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvbmlvbm9ndWVyYXMvbmV4dC1qcy1wcmFjL2NvbXBvbmVudHMvV29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtTHVCLEFBRzBFLEFBSTNELEFBS3NCLEFBR1gsQUFPVSxBQUlYLEFBSWEsQUFVWCxBQU9ILEFBY0YsQUFNRSxBQU1JLEFBSVAsQUFJWSxBQUlKLEFBT0ksQUFJUixRQXhGVCxFQXNFUCxJQW5EQSxBQXNFQSxDQW5DMEIsRUFyRGhDLEFBT0ksQUFnQ1ksQUFvQkUsQUFNWixDQWpDYSxBQTZDRCxVQXpFaEIsQUEwRUksQ0F4RFksQUFrQlMsRUFvQnpCLFVBckNtQyxFQStCUixTQWJiLFlBQ0EsR0EvQ2QsQ0E0REEsSUEvQnNCLElBbUJLLEVBOEJ2QixBQVdBLFlBM0RlLEVBUWMsQ0FuQi9CLFFBOEI2QixJQWxCRix5QkFDUixBQWtCSixlQUNHLEVBbEJqQixnQkFtQlcsWUFDRSxjQUNnQiwwQkFmVCxJQWdCekIseUZBZkUiLCJmaWxlIjoiL1VzZXJzL2FudG9uaW9ub2d1ZXJhcy9uZXh0LWpzLXByYWMvY29tcG9uZW50cy9Xb3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdvcmtJdGVtIGZyb20gXCIuL1dvcmtJdGVtXCI7XG5pbXBvcnQgeyBNYWhDb250ZXh0IH0gZnJvbSBcIi4vUHJvdmlkZXJcIjtcblxuY2xhc3MgV29yayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYnVpbHQ6IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnR5cGUgPT09IFwiYnVpbHRcIiAmJiB0aGlzLnNldFN0YXRlKHsgYnVpbHQ6IHRydWUgfSlcbiAgfVxuXG5cbiAgd29yayA9ICgpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAgeyB0aXRsZTogXCJQb2RjYXN0IE1vdmVtbmV0IDIwMTlcIixcbiAgICAgICAgc3VibGluZTogXCJcIixcbiAgICAgICAgcm9sZTogXCJMZWFkIERldmVsb3BlclwiLFxuICAgICAgICB3b3JrTGluazogXCJodHRwczovL3BvZGNhc3Rtb3ZlbWVudC5jb20vXCIsXG4gICAgICAgIGRlc2NyaXA6IFwiQ3VzdG9tIHRoZW1lIGJ1aWx0IGZyb20gbW9jay11cHMgZm9yIGV2ZW50LWJhc2VkIG9yZ2FuaXphdGlvbi4gU2V0dXAgZm9yIHRoZSBjbGllbnQgdG8gbWFrZSBiYWNrZW5kIGNoYW5nZXMuXCIsXG4gICAgICAgIGltZzogXCJcIixcbiAgICAgICAgc3RhY2s6IFwiSFRNTDUsIEphdmFzY3JpcHQsIFNBU1MsIFBIUCwgV29yZHByZXNzLCBOb2RlXCIsXG4gICAgICAgIGNhdGVnb3J5OiBbXCJQb2Zlc3Npb25hbFwiXSxcbiAgICAgICAgYnVpbHQ6IHRydWUsXG4gICAgICAgIG1haW50YWluZWQ6IHRydWUsXG4gICAgICB9LHtcbiAgICAgICAgdGl0bGU6IFwiU3VwcGx5IENoYWluIEF1dG9tYXRpb25cIixcbiAgICAgICAgc3VibGluZTogXCJcIixcbiAgICAgICAgcm9sZTogXCJMZWFkIERldmVsb3BlclwiLFxuICAgICAgICB3b3JrTGluazogXCJodHRwOi8vc3VwcGx5Y2hhaW4uZGV2LnNxdWFyZTIwNS5jb21cIixcbiAgICAgICAgZGVzY3JpcDogXCJTdXBwbHkgQ2hhaW4gQXV0b21hdGlvbiBpcyBhIHJlc291cmNlIHdlYnNpdGUgZm9yIHRob3NlIGludGVyZXN0ZWQgaW4gU3VwcGx5IENoYWluIEF1dG9tYXRpb24gdG8gYWNjZXNzIGVkdWNhdGlvbmFsIHJlc291cmNlcy4gQ3VzdG9tIFdvcmRwcmVzcyB0aGVtZSBidWlsdCBmcm9tIHNjcmF0Y2ggYW5kIGRldmVsb3BlZCBmcm9tIGRlc2lnbiBtb2NrLXVwcy4gQnVpbHQtaW4gR29vZ2xlIEFuYWx5dGljcyB0cmFja2luZyBzb2x1dGlvbiB0byB0cmFjayBkb3dubG9hZHMgYW5kIHBhZ2UgdmlzaXRzIGFjY29yZGluZyB0byB1c2VyIG1ldGEgZGF0YS4gQnVpbHQgbWFqb3JpdHkgb2YgZnJvbnQtZW5kLiBDb21wbGV0ZSB3aXRoIFNBU1Mgc3R5bGVzLCBtb2RhbHMsIHJlZ2lzdHJ5IGxvZ2ljLCBhbmQgZ2F0ZWQgY29udGVudC5cIixcbiAgICAgICAgaW1nOiBcIlwiLFxuICAgICAgICBzdGFjazogXCJIVE1MNSwgSmF2YVNjcmlwdCwgU0FTUywgUEhQLCBXb3JkcHJlc3MsIFB5dGhvbiwgTm9kZVwiLFxuICAgICAgICBjYXRlZ29yeTogW1wiUHJvZmVzc2lvbmFsXCJdLFxuICAgICAgICBidWlsdDogdHJ1ZSxcbiAgICAgICAgbWFpbnRhaW5lZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIk1vbmV5IE9uIE1vYmlsZVwiLFxuICAgICAgICBzdWJsaW5lOiBcIlwiLFxuICAgICAgICByb2xlOiBcIkxlYWQgRGV2ZWxvcGVyXCIsXG4gICAgICAgIHdvcmtMaW5rOiBcImh0dHA6Ly9tb25leW9ubW9iaWxlLnVzL1wiLFxuICAgICAgICBkZXNjcmlwOiBcIkN1c3RvbSB0aGVtZSBidWlsdCBmcm9tIHNjcmF0Y2guIFRocmVlLXBhcnQgd2Vic2l0ZSB0byBjYXRlciB0byBjb25zdW1lcnMsIHJldGFpbGVycywgYW5kIGludmVzdG9ycyBvZiB0aGUgbGFyZ2VzdC4gTW9uZXlPbk1vYmlsZSBpcyBhIHNpbXBsZSwgZWFzeSB0byB1c2UgbW9iaWxlIFNNUyBvciBzbWFydCBwaG9uZSBhcHBsaWNhdGlvbiB0aGF0IGxldHMgeW91IGNvbm5lY3Qgd2l0aCB5b3VyIG1vbmV5IGF0IHRoZSBwdXNoIG9mIGEgYnV0dG9uLiBXaXRoIE92ZXIgMjAwIG1pbGxpb24gY3VzdG9tZXJzLCBpdCBpcyBvbmUgb2YgSW5kaWEncyBsYXJnZXQgbW9iaWxlIG1vbmV5IG1hbmdhZ2VtZW50IHN5c3RlbS4gQ29tcGxldGUgd2l0aCB0d2l0dGVyIGZlZWQuXCIsXG4gICAgICAgIGltZzogXCJcIixcbiAgICAgICAgc3RhY2s6IFwiSFRNTDUsIEphdmFTY3JpcHQsIFNBU1MsIFBIUCwgV29yZHByZXNzLCBOb2RlXCIsXG4gICAgICAgIGNhdGVnb3J5OiBbXCJQcm9mZXNzaW9uYWxcIl0sXG4gICAgICAgIGJ1aWx0OiB0cnVlLFxuICAgICAgICBtYWludGFpbmVkOiBmYWxzZVxuICAgICAgfSx7XG4gICAgICAgIHRpdGxlOiBcIkF1dG9xdWlwXCIsXG4gICAgICAgIHN1YmxpbmU6IFwiXCIsXG4gICAgICAgIHJvbGU6IFwiRGV2ZWxvcGVyXCIsXG4gICAgICAgIHdvcmtMaW5rOiBcImh0dHBzOi8vYXV0b3F1aXAuY29tXCIsXG4gICAgICAgIGRlc2NyaXA6IFwiQ29uc3VsdGVkIG9uIGRldmVsb3BlciBvcGVyYXRpb25zLCB0ZWNobmljYWwgY2hhbGxlbmdlcywgc29sdmluZyBjb2RpbmcgcHJvYmxlbXMsIGFuZCBtYW5hZ2luZyBkZXBsb3ltZW50LiBQZXJmb3JtIG1haW50ZW5hY2UgYW5kIGJ1aWxkIG5ldyBhZGRpdGlvbnMuXCIsXG4gICAgICAgIGltZzogXCJcIixcbiAgICAgICAgc3RhY2s6IFwiSFRNTDUsIEphdmFTY3JpcHQsIFJlYWN0LCBXb3JkcHJlc3MsIFBIUCwgU0FTUywgTm9kZVwiLFxuICAgICAgICBjYXRlZ29yeTogW1wiUHJvZmVzc2lvbmFsXCJdLFxuICAgICAgICBidWlsdDogZmFsc2UsXG4gICAgICAgIG1haW50YWluZWQ6IHRydWVcbiAgICAgIH0se1xuICAgICAgICB0aXRsZTogXCJPZmZpY2UgRnVybml0dXJlIERpc3RyaWJ1dG9yc1wiLFxuICAgICAgICBzdWJsaW5lOiBcIlwiLFxuICAgICAgICByb2xlOiBcIkxlYWQgRGV2ZWxvcGVyXCIsXG4gICAgICAgIHdvcmtMaW5rOiBcImh0dHBzOi8vb2ZkaXN0LmNvbS9cIixcbiAgICAgICAgZGVzY3JpcDogXCJlQ29tbWVyY2Ugd2Vic2l0ZSB0byBzZW5kIHF1b3RlcyBmb3IgdmFyaW91cyBvZmZpY2UgZnVybml0dXJlIGl0ZW1zLiBBZGFwdGVkIFdvcmRwcmVzcyB0aGVtZSBmcm9tIG1vY2t1cHMgdG8gaGF2ZSBpdHMgbG9vayBhbmQgZmVlbC4gSW50ZWdyYXRlZCBmdWxseS1mdW5jdGlvbmFsIGVDb21tZXJjZSBmdW5jdGlvbnMuXCIsXG4gICAgICAgIGltZzogXCJcIixcbiAgICAgICAgc3RhY2s6IFwiSFRNTDUsIFBIUCwgV29yZFByZXNzLCBDU1MzLCBQeXRob24sIE5vZGVcIixcbiAgICAgICAgY2F0ZWdvcnk6IFtcIlByb2Zlc3Npb25hbFwiXSxcbiAgICAgICAgYnVpbHQ6IHRydWUsXG4gICAgICAgIG1haW50YWluZWQ6IHRydWUsXG4gICAgICB9LHtcbiAgICAgICAgdGl0bGU6IFwiUGh5c21vZG8gQ29hY2ggQW5hbHl0aWNzIEFwcFwiLFxuICAgICAgICBzdWJsaW5lOiBcIlwiLFxuICAgICAgICByb2xlOiBcIkZyb250LWVuZCBEZXZlbG9wZXJcIixcbiAgICAgICAgZGVzY3JpcDogXCJTdHlsaXplZCBhbmQgcHJvZ3JhbW1lZCBSZWFjdCBjb21wb25lbnRzIGZvciBhbiBhbmFseXRpY3MgYXBwIHVzaW5nIE1hdGVyaWFsIFVJXCIsXG4gICAgICAgIGltZzogXCJcIixcbiAgICAgICAgc3RhY2s6IFwiSFRNTDUsIEphdmFTY3JpcHQsIENTUzMsIFNBU1MsIFJlYWN0LCBOb2RlXCIsXG4gICAgICAgIGNhdGVnb3J5OiBbXCJQcm9mZXNzaW9uYWxcIl0sXG4gICAgICAgIGJ1aWx0OiB0cnVlLFxuICAgICAgICBtYWludGFpbmVkOiBmYWxzZVxuICAgICAgfSx7XG4gICAgICAgIHRpdGxlOiBcImNvbG9yLXRoZS1pbm5hbmV0XCIsXG4gICAgICAgIHN1YmxpbmU6IFwiXCIsXG4gICAgICAgIHJvbGU6IFwiXCIsXG4gICAgICAgIHdvcmtMaW5rOiBcImh0dHA6Ly9nbG90YWNvc20uY29tL2NvbG9ydGhlaW5uYW5ldFwiLFxuICAgICAgICBzdWJsaW5lOiBcIlwiLFxuICAgICAgICBkZXNjcmlwOiBcIlR1cm5lZCByZWNlaXZlZCBXaUZJIHBhY2tldCBkYXRhIGludG8gY29sb3IgYXJ0IHRvIHJlcHJlc2VudCB0aGUgaW5kaXZpZHVhbCBwYWNrZXRzIGFzIGFuIGFydCBwcm9qZWN0LlwiLFxuICAgICAgICBpbWc6IFwiaHR0cHM6Ly9jYW1vLmdpdGh1YnVzZXJjb250ZW50LmNvbS84MzVjY2QyOGE1ZTMzNWNlYWMyN2E1M2Q4MzAyMjBkMDQ3ODViOWIyLzY4NzQ3NDcwNzMzYTJmMmY2OTJlNjk2ZDY3NzU3MjJlNjM2ZjZkMmYzMzUxNGYzMDY0NTk2ZTJlNzA2ZTY3XCIsXG4gICAgICAgIHN0YWNrOiBcIkphdmFTY3JpcHQsIEhUTUw1LCBDU1MzLCBQeXRob25cIixcbiAgICAgICAgY2F0ZWdvcnk6IFtcIkZ1blwiXSxcbiAgICAgICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vMmhhbmRzMTBmaW5nZXJzL2NvbG9yLXRoZS1pbnRlcm5ldFwiLFxuICAgICAgICBidWlsdDogdHJ1ZSxcbiAgICAgICAgbWFpbnRhaW5lZDogZmFsc2UsXG4gICAgICB9LHtcbiAgICAgICAgdGl0bGU6IFwibW92aWUtcGFsXCIsXG4gICAgICAgIHN1YmxpbmU6IFwiXCIsXG4gICAgICAgIHJvbGU6IFwiXCIsXG4gICAgICAgIHdvcmtMaW5rOiBcIlwiLFxuICAgICAgICBkZXNjcmlwOiBcIkNMSSB0byBhY2Nlc3Mgb21kYmFwaSBhbmQgdGhyb3VnaCB3ZWJzY3JhcGluZywgUHJvZHVjZXMgYSB1c2VyIGludGVyZmFjZSBmb3IgcXVpY2tseSBjb3B5aW5nIGRhdGEgaW50byBzcHJlYWRzaGVldCByb3dzL2NvbHVtbnMgYW5kIGFsc28gcHJvdmlkZXMgZnJvbnQtZW5kIEFQSSBzZWFyY2ggd2l0aGluIHRoZSB1c2VyIGludGVyZmFjZS5cIixcbiAgICAgICAgaW1nOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vYndQTUl2MS5qcGdcIixcbiAgICAgICAgc3RhY2s6IFwiSmF2YVNjcmlwdCwgU0FTUywgUHl0aG9uXCIsXG4gICAgICAgIGNhdGVnb3J5OiBbXCJGdW5cIl0sXG4gICAgICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tLzJoYW5kczEwZmluZ2Vycy9tb3ZpZS1wYWxcIixcbiAgICAgICAgYnVpbHQ6IHRydWUsXG4gICAgICAgIG1haW50YWluZWQ6IGZhbHNlXG4gICAgICB9LHtcbiAgICAgICAgdGl0bGU6IFwiUmVkZGl0IEltYWdlIFNjcmFwZXIgdjEuMC0xLjFcIixcbiAgICAgICAgcm9sZTogXCJcIixcbiAgICAgICAgd29ya0xpbms6IFwiXCIsXG4gICAgICAgIHN1YmxpbmU6IFwiXCIsXG4gICAgICAgIGRlc2NyaXA6IFwiU2NyYXBlcyBSZWRkaXQgaW1hZ2VzIGZyb20gYW55IHB1YmxpYyBzdWJyZWRkaXQgYnkgYSB1c2VyLXNwZWNpZmllZCBkYXRlIHJhbmdlIGFuZCBzYXZlcyB0aGVtIHRvIHlvdXIgY29tcHV0ZXIuXCIsXG4gICAgICAgIGltZzogXCJodHRwczovL2kuaW1ndXIuY29tL2UybWdIN0QucG5nXCIsXG4gICAgICAgIHN0YWNrOiBcIlB5dGhvbiwgUmVkZGl0IEFQSVwiLFxuICAgICAgICBjYXRlZ29yeTogW1wiRnJlZWxhbmNlXCIsIFwiRnVuXCJdLFxuICAgICAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS8yaGFuZHMxMGZpbmdlcnMvUmVkZGl0LUltYWdlLVNjcmFwZXItMS4wXCIsXG4gICAgICAgIGJ1aWx0OiB0cnVlLFxuICAgICAgICBtYWludGFpbmVkOiBmYWxzZVxuICAgICAgfSx7XG4gICAgICAgIHRpdGxlOiBcIkdlb3JnZSBNYXNvbiBVbml2ZXJzaXR5XCIsXG4gICAgICAgIHN1YmxpbmU6IFwiSW5zdGl0dWUgZm9yIEJpb2hlYWx0aCBJbm5vdmF0aW9uXCIsXG4gICAgICAgIHJvbGU6IFwiRnJlZWxhbmNlIERldmVsb3BlciAvIFRlYWNoZXJcIixcbiAgICAgICAgd29ya0xpbms6IFwiaHR0cHM6Ly9pYmkuZ211LmVkdS9cIixcbiAgICAgICAgZGVzY3JpcDogXCJBaWRlZCBpbiBidWlsZGluZyB0aGlzIHNpdGUgYW5kIHRhdWdodCB0aGUgQ29tbXVuaWNhdGlvbnMgT2ZmaWNlciBob3cgdG8gY29kZSBhbmQgbWFpbnRhaW4gaXQuXCIsXG4gICAgICAgIGltZzogXCJcIixcbiAgICAgICAgc3RhY2s6IFwiV29yZHByZXNzLCBDU1MzLCBQSFAsIFB5dGhvbiwgSmF2YVNjcmlwdFwiLFxuICAgICAgICBjYXRlZ29yeTogW1wiUHJvZmVzc2lvbmFsXCIsIFwiRnJlZWxhbmNlXCJdLFxuICAgICAgICByZXBvOiBcIlwiLFxuICAgICAgICBidWlsdDogdHJ1ZSxcbiAgICAgICAgbWFpbnRhaW5lZDogdHJ1ZVxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7YnVpbHQsIG1haW50YWluZWR9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBcbiAgICAgICAgY2xhc3NOYW1lPXtgd29yay0tY29udGFpbmVyICR7YnVpbHQgPyBcImJ1aWx0XCIgOiBcIm1haW50YWluZWRcIn1gfVxuICAgICAgPlxuICAgICAgPGgxPldvcms8L2gxPlxuICAgICAgXG4gICAgICA8TWFoQ29udGV4dD5cbiAgICAgICAgeyBjb250ZXh0ID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgd29yay0tZmlsdGVyICR7dGhpcy5zdGF0ZS5idWlsdH1gfT5cbiAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IGNvbnRleHQudXBkYXRlVHlwZShcIlwiKX0+QWxsPC9idXR0b24+XG4gICAgIDxidXR0b24gb25DbGljaz17KCk9PiBjb250ZXh0LnVwZGF0ZVR5cGUoXCJidWlsdFwiKX0+QnVpbHQ8L2J1dHRvbj5cbiAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IGNvbnRleHQudXBkYXRlVHlwZShcIm1haW50YWluZWRcIil9Pk1haW50YWluZWQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt0aGlzLndvcmsoKS5tYXAoIChpLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpW2NvbnRleHQuZGF0YS50eXBlXSlcbiAgICAgICAgICAgICAgaWYgKGlbY29udGV4dC5kYXRhLnR5cGVdIHx8IGNvbnRleHQuZGF0YS50eXBlID09IFwiXCIpIHsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxXb3JrSXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgcm9sZT17aS5yb2xlfVxuICAgICAgICAgICAgICAgICAgd29ya0xpbms9e2kud29ya0xpbmt9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwPXtpLmRlc2NyaXB9XG4gICAgICAgICAgICAgICAgICBpbWc9e2kuaW1nfVxuICAgICAgICAgICAgICAgICAgc3RhY2s9e2kuc3RhY2t9XG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeT17aS5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgIHN1YmxpbmU9e2kuc3VibGluZX1cbiAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIC8+IClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICl9IFxuICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvTWFoQ29udGV4dD5cbiAgXG4gICBcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgIC5tb2RhbC1tYWluLndvcmsge1xuICAgICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZ2xvdGFjb3NtLmNvbS9pbWcvY29uaWZlcl9mb3Jlc3RfaW5uZXIucG5nKTtcbiAgICB9XG5cbiAgICAubW9kYWwtbWFpbi53b3JrOjotd2Via2l0LXNjcm9sbGJhciB7IFxuICAgICAgd2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDA7XG4gIH1cbiAgICAgIFxuICAgICAgLndvcmstLXRoaW5nLCAud29yay0tdGhpbmcgLmItLWNvbnRlbnR7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDI1NHB4ICFpbXBvcnRhbnQ7IFxuICAgIH1cbiAgICAgIC53b3JrLS1jb250YWluZXIgaDEge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHJlbTtcbiAgICAgIH1cblxuXG5cbiAgICAgICAgXG4gICAgICAud29yay0tY29udGFpbmVyIC53b3JraXRlbS0tY29udGFpbmVyOm50aC1jaGlsZChvZGQpIC53b3JraXRlbS0taW1nLXRleHQge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICB9XG5cbiAgICAgICAgLndvcmtpdGVtLS1jb250YWluZXIgLmItLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgIH1cblxuICAgICAgIC53b3JrIGgxIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCc7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAycHggMTJweCBibGFjaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycmVtO1xuICAgICAgIH1cblxuICAgICAgIC53b3JrLS1maWx0ZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC53b3JrLS1maWx0ZXIgYnV0dG9uIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCc7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTYwcHg7XG4gICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMTJweCBibGFjaztcbiAgfVxuICAgIC53b3JrLS1maWx0ZXIgYnV0dG9uOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyO1xuICAgIH1cblxuICAgIC53b3JrLS1jb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpIHtcbiAgICAgICAgLndvcmstLWNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICAubW9kYWwtbWFpbi53b3JrIHtcbiAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmstLWNvbnRhaW5lciAud29ya2l0ZW0tLWNvbnRhaW5lcjpudGgtY2hpbGQob2RkKSAud29ya2l0ZW0tLWltZy10ZXh0IHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmstLXRoaW5nIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAtMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjdweCkgeyBcbiAgICAgICAgLndvcmstLWZpbHRlciB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3JrLS1maWx0ZXIgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgV29yazsiXX0= */\n/*@ sourceURL=/Users/antonionogueras/next-js-prac/components/Work.js */"));
    }
  }]);

  return Work;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
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
    id: "2185843424"
  }, ".workitem--container.jsx-2185843424 p.jsx-2185843424,.workitem--container.jsx-2185843424 h2.jsx-2185843424,.workitem--container.jsx-2185843424 h3.jsx-2185843424,.workitem--container.jsx-2185843424 li.jsx-2185843424,.workitem--container.jsx-2185843424 a.jsx-2185843424{font-family:'Press Start 2P';color:white;}.work--stack.jsx-2185843424{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;background-color:#e672b1;border-radius:13px;padding:1rem;border-top-left-radius:0px;border-top-right-radius:0px;margin:1rem 0rem;}.workitem--container.jsx-2185843424 h2.jsx-2185843424{margin:0;}.workitem--container.jsx-2185843424 h3.jsx-2185843424{margin:0rem;font-size:15px;}.workitem--title.jsx-2185843424{text-align:center;text-shadow:1px 2px 12px black;background-color:#e672b1;line-height:70px;height:70px;border-top-right-radius:13px;border-top-left-radius:13px;border-bottom:3px dashed white;margin-bottom:1rem;}.workitem--title.with-subline.jsx-2185843424{line-height:35px;}.work--meta__right.jsx-2185843424{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.work--meta.jsx-2185843424{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.work--meta__right.jsx-2185843424 a.jsx-2185843424{-webkit-text-decoration:none;text-decoration:none;background-color:green;height:30px;line-height:30px;padding:1rem;border:2px solid green;-webkit-transition:0.3s ease-in-out;transition:0.3s ease-in-out;}.work--meta__right.jsx-2185843424 a.jsx-2185843424:hover{cursor:pointer;background-color:white;border:2px solid green;color:green;}.workitem--container.jsx-2185843424{margin:5rem 1rem;border-radius:13px;background-color:#5142ab63;-webkit-animation:fadeIn-jsx-2185843424 1s ease-in-out;animation:fadeIn-jsx-2185843424 1s ease-in-out;box-shadow:1px 2px 1px black;}.workitem--img-text.jsx-2185843424{margin-bottom:1rem !important;}.workitem--img-text.jsx-2185843424 img.jsx-2185843424{margin:0 1rem;width:500px;height:281px;border:2px solid white;}.work--stack.jsx-2185843424{border-top:3px dashed white;}.work--stack.jsx-2185843424 img.jsx-2185843424{width:40px;height:40px;}.workitem--img-text.jsx-2185843424{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.work--description.jsx-2185843424{padding:1rem;}.workitem--container.jsx-2185843424 .b--content.jsx-2185843424{height:254px;}.workitem--container.jsx-2185843424 .b--container.jsx-2185843424{height:254px;}@-webkit-keyframes fadein{0%.jsx-2185843424{opacity:0;}100%.jsx-2185843424{opacity:1;}}@-moz-keyframes fadein{0%.jsx-2185843424{opacity:0;}100%.jsx-2185843424{opacity:1;}}@-o-keyframes fadein{0%.jsx-2185843424{opacity:0;}100%.jsx-2185843424{opacity:1;}}@-webkit-keyframes fadein-jsx-2185843424{0%{opacity:0;}100%{opacity:1;}}@keyframes fadein-jsx-2185843424{0%{opacity:0;}100%{opacity:1;}}@media screen and (max-width:1060px){.workitem--img-text.jsx-2185843424{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.modal-main.work.jsx-2185843424{width:100%;}.work--container.jsx-2185843424{position:initial;}.workitem--title.jsx-2185843424{height:auto;line-height:46px;}.workitem--img-text.jsx-2185843424 img.jsx-2185843424{width:calc(500px * 0.8);height:calc(281px * 0.8);}.work.jsx-2185843424 h1.jsx-2185843424{margin-top:1rem;}.work--meta.jsx-2185843424{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.work--meta__right.jsx-2185843424{text-align:center;}}@media screen and (max-width:460px){.workitem--img-text.jsx-2185843424 img.jsx-2185843424{width:calc(500px * 0.6);height:calc(281px * 0.6);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvbmlvbm9ndWVyYXMvbmV4dC1qcy1wcmFjL2NvbXBvbmVudHMvV29ya0l0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RrQixBQVFzQyxBQUtoQixBQVdKLEFBSUcsQUFNTSxBQVlELEFBSUosQUFNQSxBQUtRLEFBVVIsQUFPSSxBQVdhLEFBSWhCLEFBT2MsQUFJakIsQUFLRSxBQUtBLEFBSUEsQUFJQSxBQUlHLEFBQ0EsQUFHQSxBQUNBLEFBR0EsQUFDQSxBQUdBLEFBQ0EsQUFLUSxBQUlYLEFBSU0sQUFJTCxBQUtZLEFBS1IsQUFJTSxBQUlKLEFBTU0sU0EzSjVCLENBcUdtQixBQUNBLEFBR0EsQUFDQSxBQUdBLEFBQ0EsQUFHQSxBQUNBLENBbENMLEFBNENaLENBeEhlLEFBZ0lJLENBMUNyQixBQUlBLEFBSUEsQ0E3QmMsQ0F0QlMsQ0ErRnJCLENBeEhGLEFBZ0NxQixBQTBFbkIsQ0F0SCtCLEFBNEkvQixLQXJFRixDQXdENkIsQUFtQkEsRUF0RmQsQ0FoRWYsQ0FzRUEsQ0E1RmMsQUFxSlosQ0FwRUYsTUFWNkIsRUFQTixDQXVCRSxFQXRGekIsUUEwQjJCLEFBK0h6QixBQW1CQSxDQXhIdUIsV0FZYixDQXVCWixDQWhCa0MsVUFsQnBCLEFBWWhCLENBN0RpQyxBQXVCWixBQWNLLEFBTU8sQUFxRFYsSUFtQ25CLEFBMEJBLE9BM0dpQixNQTFCTCxXQTJCQyxDQTFCZ0IsWUEyQk4saUJBMUJLLE1BNEJqQyxjQWhCNEIsUUFYUSxLQXlDRixFQTZCL0Isd0JBckVxQixHQTBDckIsR0FyRTJCLEFBMkMzQixLQVVGLFFBekJFLFlBM0JxQixtQkFDTixVQW9DZixHQW5DNkIsMkJBQ0MsNEJBQ1gsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9hbnRvbmlvbm9ndWVyYXMvbmV4dC1qcy1wcmFjL2NvbXBvbmVudHMvV29ya0l0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGVudEJsb2NrIGZyb20gJy4vQ29udGVudEJsb2NrJztcblxuY29uc3QgV29ya0l0ZW0gPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2B3b3JraXRlbS0tY29udGFpbmVyYH0+XG4gIDxkaXYgY2xhc3NOYW1lPXtgd29ya2l0ZW0tLXRpdGxlICR7cHJvcHMuc3VibGluZSAmJiAnd2l0aC1zdWJsaW5lJ31gfT5cbiAgICA8aDI+e3Byb3BzLnRpdGxlfTwvaDI+XG4gICAge3Byb3BzLnN1YmxpbmUgJiYgPGgzPntwcm9wcy5zdWJsaW5lfTwvaDM+fVxuICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtpdGVtLS1pbWctdGV4dFwiPlxuICAgICAgPGFcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgXG4gICAgICAgIGhyZWY9e3Byb3BzLndvcmtMaW5rID8gcHJvcHMud29ya0xpbmsgOiBwcm9wcy5yZXBvIH0+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e3Byb3BzLmltZyA/IHByb3BzLmltZyA6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzUwMHgyODFcIn0gXG4gICAgICAgICAgYWx0PXtwcm9wcy50aXRsZX0gLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8Q29udGVudEJsb2NrIGNsYXNzZXM9XCJ3b3JrLS10aGluZ1wiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndvcmstLWRlc2NyaXB0aW9uXCI+e3Byb3BzLmRlc2NyaXB9PC9wPlxuICAgICAgICA8L0NvbnRlbnRCbG9jaz5cbiAgICAgIDwvZGl2PlxuICAgXG4gICAgICA8Q29udGVudEJsb2NrPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLS1tZXRhXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yay0tbWV0YV9fbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmstcm9sZS1jYXRcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3b3JrLS1yb2xlXCI+Um9sZTp7cHJvcHMucm9sZX08L3A+XG4gICAgICAgICAge3Byb3BzLmNhdGVnb3J5Lmxlbmd0aCA8IDIgPyA8cD5DYXRlZ29yeTwvcD4gOiA8cD5DYXRlZ29yaWVzPC9wPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8dWw+XG4gICAgICAgICAge3Byb3BzLmNhdGVnb3J5Lm1hcCggY2F0ZWdvcnkgPT4gPGxpIGtleT17Y2F0ZWdvcnl9PntjYXRlZ29yeX08L2xpPiApfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLS1tZXRhX19yaWdodFwiPlxuICAgICAgICA8YVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIFxuICAgICAgICAgIGhyZWY9e3Byb3BzLndvcmtMaW5rID8gcHJvcHMud29ya0xpbmsgOiBwcm9wcy5yZXBvIH0+XG4gICAgICAgICAge3Byb3BzLndvcmtMaW5rID8gXCJWaXNpdCBTaXRlXCIgOiBcIlZpc2l0IFJlcG9cIn1cbiAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRlbnRCbG9jaz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIndvcmstLXN0YWNrXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgcHJvcHMuc3RhY2suc3BsaXQoXCIsIFwiKS5tYXAoIChzdGFjaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxpbWcga2V5PXtpbmRleH0gc3JjPXtgaHR0cHM6Ly9nbG90YWNvc20uY29tL2ltZy9pY29ucy8ke3N0YWNrLnRvTG93ZXJDYXNlKCl9LnN2Z2B9IC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9wPlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAud29ya2l0ZW0tLWNvbnRhaW5lciBwLFxuICAgICAgLndvcmtpdGVtLS1jb250YWluZXIgaDIsXG4gICAgICAud29ya2l0ZW0tLWNvbnRhaW5lciBoMyxcbiAgICAgIC53b3JraXRlbS0tY29udGFpbmVyIGxpLFxuICAgICAgLndvcmtpdGVtLS1jb250YWluZXIgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIC53b3JrLS1zdGFjayB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3MmIxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgICAgIG1hcmdpbjogMXJlbSAwcmVtO1xuICAgICAgfVxuXG4gICAgICAud29ya2l0ZW0tLWNvbnRhaW5lciBoMiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgLndvcmtpdGVtLS1jb250YWluZXIgaDMge1xuICAgICAgICBtYXJnaW46IDByZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcblxuICAgICAgfVxuXG4gICAgICAud29ya2l0ZW0tLXRpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAxMnB4IGJsYWNrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3MmIxO1xuICAgICAgICBsaW5lLWhlaWdodDogNzBweDtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTNweDtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IGRhc2hlZCB3aGl0ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTsgIFxuICAgICAgfVxuXG4gICAgICAud29ya2l0ZW0tLXRpdGxlLndpdGgtc3VibGluZSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgfVxuXG4gICAgICAud29yay0tbWV0YV9fcmlnaHQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLndvcmstLW1ldGEge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIH1cblxuICAgICAgLndvcmstLW1ldGFfX3JpZ2h0IGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dFxuICAgIH1cblxuICAgIC53b3JrLS1tZXRhX19yaWdodCBhOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XG4gICAgICBjb2xvcjogZ3JlZW47XG4gICAgfVxuXG4gICAgICAud29ya2l0ZW0tLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogNXJlbSAxcmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE0MmFiNjM7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2UtaW4tb3V0O1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDFweCBibGFjaztcbiAgICAgICBcbiAgICAgIH1cblxuICAgXG4gICAgICBcbiAgICAgIC53b3JraXRlbS0taW1nLXRleHQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC53b3JraXRlbS0taW1nLXRleHQgaW1nIHtcbiAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgaGVpZ2h0OiAyODFweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIC53b3JrLS1zdGFjayB7XG4gICAgICAgIGJvcmRlci10b3A6IDNweCBkYXNoZWQgd2hpdGU7XG4gICAgICB9XG5cbiAgICAgLndvcmstLXN0YWNrIGltZyB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB9XG5cbiAgICAgIC53b3JraXRlbS0taW1nLXRleHQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAud29yay0tZGVzY3JpcHRpb24ge1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAud29ya2l0ZW0tLWNvbnRhaW5lciAuYi0tY29udGVudCB7XG4gICAgICAgIGhlaWdodDogMjU0cHg7XG4gICAgICB9XG5cbiAgICAgIC53b3JraXRlbS0tY29udGFpbmVyIC5iLS1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDI1NHB4O1xuICAgICAgfVxuXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICAgICAgMCUgICB7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICAgIH1cbiAgICAgIEAtbW96LWtleWZyYW1lcyBmYWRlaW4ge1xuICAgICAgICAwJSAgIHsgb3BhY2l0eTogMDsgfVxuICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICAgICAgfVxuICAgICAgQC1vLWtleWZyYW1lcyBmYWRlaW4ge1xuICAgICAgICAwJSAgIHsgb3BhY2l0eTogMDsgfVxuICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICAgICAgfVxuICAgICAgQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgICAgICAwJSAgIHsgb3BhY2l0eTogMDsgfVxuICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDYwcHgpIHtcbiAgICAgICAgLndvcmtpdGVtLS1pbWctdGV4dCB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb2RhbC1tYWluLndvcmsge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmstLWNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICAud29ya2l0ZW0tLXRpdGxlIHtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud29ya2l0ZW0tLWltZy10ZXh0IGltZyB7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoNTAwcHggKiAwLjgpO1xuICAgICAgICAgIGhlaWdodDogY2FsYygyODFweCAqIDAuOCk7XG4gICAgICAgIH1cblxuICAgICAgICAud29yayBoMSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3JrLS1tZXRhIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmstLW1ldGFfX3JpZ2h0IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgICAgICAgLndvcmtpdGVtLS1pbWctdGV4dCBpbWcge1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDUwMHB4ICogMC42KTtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMjgxcHggKiAwLjYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcblxuICAgICAgXG4gICAgICBgfVxuXG4gICAgICA8L3N0eWxlPlxuICBcbiAgICA8L2Rpdj5cbiAgKVxuXG4gIGV4cG9ydCBkZWZhdWx0IFdvcmtJdGVtO1xuIl19 */\n/*@ sourceURL=/Users/antonionogueras/next-js-prac/components/WorkItem.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkItem);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-server/head */ "next-server/head")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_Printer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Printer */ "./components/Printer.js");
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Provider */ "./components/Provider.js");












var _React = react__WEBPACK_IMPORTED_MODULE_8___default.a,
    Component = _React.Component;
var font = "'Press Start 2P';";

var _default =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, _Component);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "pressStart", function () {
      return _this.setState({
        start: !_this.state.start
      });
    });

    _this.state = {
      start: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Provider__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4135770522" + " " + "portfolio--wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-4135770522" + " " + "portfolio--header"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Printer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        text: "Glotacosm".split("")
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-4135770522" + " " + "portfolio--header second"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Printer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        text: "Web Development PORTFOLIO".split("")
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("blink", {
        className: "jsx-4135770522"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        style: {
          display: "".concat(!this.state.start && "none")
        },
        onClick: this.pressStart,
        className: "jsx-4135770522" + " " + "start-button blink"
      }, "Click Here to Continue")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4135770522"
      }, ".start-button.jsx-4135770522{display:block;margin:1.5rem auto;font-family:".concat(font, " text-transform:uppercase;border:none;color:white;background-color:transparent;text-shadow:1px 3px 0px black;}.portfolio--wrapper.jsx-4135770522>.portfolio--header.jsx-4135770522{margin-top:5rem;}h1.jsx-4135770522{font-family:").concat(font, " text-align:center;font-size:75px;color:white;text-transform:uppercase;text-shadow:1px 5px 0px black;}h2.jsx-4135770522{font-family:").concat(font, " text-align:center;font-size:30px;color:white;text-transform:uppercase;text-shadow:1px 5px 0px black;}.points.jsx-4135770522{color:white;}blink.jsx-4135770522{-webkit-animation:2s linear infinite condemned_blink_effect;-webkit-animation:2s linear infinite condemned_blink_effect-jsx-4135770522;animation:2s linear infinite condemned_blink_effect-jsx-4135770522;}@-webkit-keyframes condemned_blink_effect{0%.jsx-4135770522{visibility:hidden;}50%.jsx-4135770522{visibility:hidden;}100%.jsx-4135770522{visibility:visible;}}@-webkit-keyframes condemned_blink_effect-jsx-4135770522{0%{visibility:hidden;}50%{visibility:hidden;}100%{visibility:visible;}}@keyframes condemned_blink_effect-jsx-4135770522{0%{visibility:hidden;}50%{visibility:hidden;}100%{visibility:visible;}}@media screen and (max-width:767px){.portfolio--header.jsx-4135770522{font-size:37px;}}@media screen and (max-width:567px){.portfolio--header.jsx-4135770522{font-size:32px;}body.jsx-4135770522{background:url(http://i.imgur.com/F0gBD6c.png) 90%/cover no-repeat !important;}.portfolio--header.second.jsx-4135770522{font-size:20px;}.free-points.jsx-4135770522{width:282px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvbmlvbm9ndWVyYXMvbmV4dC1qcy1wcmFjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDa0IsQUFJdUIsQUFXRSxBQU1FLEFBU0EsQUFTTixBQUlnRCxBQUt4QyxBQUdBLEFBR0MsQUFLRCxBQUdBLEFBR0MsQUFLSixBQU1BLEFBSStELEFBSS9ELEFBSUgsWUFoRGhCLEFBaURFLEVBcEZtQixDQWtFbkIsQUFNQSxBQVFBLENBckVGLEVBaUNFLEFBR0EsQUFRQSxBQUdBLENBUkEsQUFXQSxjQTNEeUIsMEJBZVYsQUFTQSxDQWFxQyxjQXJCeEMsQUFTQSxJQWlEWixRQXpEeUIsQUFTQSxhQXpCYixZQUNBLEFBZ0JrQixBQVNBLFlBeEJELGtCQWdCL0IsQUFVQSxXQXpCZ0MsOEJBQ2hDLG9CQWlDQSIsImZpbGUiOiIvVXNlcnMvYW50b25pb25vZ3VlcmFzL25leHQtanMtcHJhYy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBQcmludGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUHJpbnRlcic7XG5pbXBvcnQgTXlQcm92aWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm92aWRlclwiO1xuY29uc3Qge0NvbXBvbmVudH0gPSBSZWFjdFxuY29uc3QgZm9udCA9IFwiJ1ByZXNzIFN0YXJ0IDJQJztcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHsgc3RhcnQ6IHRydWUgfVxuICB9XG5cbiAgcHJlc3NTdGFydCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzdGFydDogIXRoaXMuc3RhdGUuc3RhcnR9KVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE15UHJvdmlkZXI+XG4gICAgICA8PlxuICAgICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLS13cmFwcGVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwicG9ydGZvbGlvLS1oZWFkZXJcIj5cbiAgICAgICAgPFByaW50ZXIgdGV4dD17XCJHbG90YWNvc21cIi5zcGxpdChcIlwiKX0vPlxuICAgICAgPC9oMT5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tLWhlYWRlciBzZWNvbmRcIj5cbiAgICAgICAgPFByaW50ZXIgdGV4dD17XCJXZWIgRGV2ZWxvcG1lbnQgUE9SVEZPTElPXCIuc3BsaXQoXCJcIil9Lz5cbiAgICAgIDwvaDI+XG4gICAgICA8Ymxpbms+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN0YXJ0LWJ1dHRvbiBibGlua1wiXG4gICAgICAgIHN0eWxlPXt7ZGlzcGxheTogYCR7IXRoaXMuc3RhdGUuc3RhcnQgJiYgXCJub25lXCJ9YH19IFxuICAgICAgICBvbkNsaWNrPXt0aGlzLnByZXNzU3RhcnR9PlxuICAgICAgICBDbGljayBIZXJlIHRvIENvbnRpbnVlXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDwvYmxpbms+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBcbiAgICAgIC5zdGFydC1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAxLjVyZW0gYXV0bztcbiAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udH1cbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDNweCAwcHggYmxhY2s7XG4gICAgICB9XG5cbiAgICAgIC5wb3J0Zm9saW8tLXdyYXBwZXIgPiAucG9ydGZvbGlvLS1oZWFkZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgfVxuXG4gICBcbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udH1cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDc1cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCA1cHggMHB4IGJsYWNrO1xuICAgICAgfVxuICAgICAgXG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnR9XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggNXB4IDBweCBibGFjaztcbiAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIC5wb2ludHMge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGJsaW5rIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGxpbmVhciBpbmZpbml0ZSBjb25kZW1uZWRfYmxpbmtfZWZmZWN0OyAvLyBmb3IgYW5kcm9pZFxuICAgICAgICBhbmltYXRpb246IDJzIGxpbmVhciBpbmZpbml0ZSBjb25kZW1uZWRfYmxpbmtfZWZmZWN0O1xuICAgICAgfVxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGNvbmRlbW5lZF9ibGlua19lZmZlY3QgeyAvLyBmb3IgYW5kcm9pZFxuICAgICAgICAwJSB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgY29uZGVtbmVkX2JsaW5rX2VmZmVjdCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgLnBvcnRmb2xpby0taGVhZGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDM3cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgICAgICAgLnBvcnRmb2xpby0taGVhZGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChodHRwOi8vaS5pbWd1ci5jb20vRjBnQkQ2Yy5wbmcpIDkwJS9jb3ZlciBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3J0Zm9saW8tLWhlYWRlci5zZWNvbmQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mcmVlLXBvaW50cyB7XG4gICAgICAgICAgd2lkdGg6IDI4MnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPExheW91dCBtZW51PXt0aGlzLnN0YXRlLnN0YXJ0fS8+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgXG5cbiAgICAgIDwvPlxuICAgICAgICAgICAgPC9NeVByb3ZpZGVyPiBcbiAgICApXG4gIH0gXG59Il19 */\n/*@ sourceURL=/Users/antonionogueras/next-js-prac/pages/index.js */")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        menu: this.state.start
      }))));
    }
  }]);

  return _default;
}(Component);



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/antonionogueras/next-js-prac/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/values":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map