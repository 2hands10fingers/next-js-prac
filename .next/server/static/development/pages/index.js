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



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _React = react__WEBPACK_IMPORTED_MODULE_1___default.a,
    Component = _React.Component;

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this));
    _this.state = {
      triggered: false
    };
    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      var triggered = this.state.triggered;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4260547752", [!triggered ? 0 : 1]]]) + " " + "modal--container"
      }, "HELLO", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4260547752",
        css: ".modal--container.__jsx-style-dynamic-selector{opacity:".concat(!triggered ? 0 : 1, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxNb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjb0IsQUFJUSxxQ0FBQyIsImZpbGUiOiJDOlxcVXNlcnNcXEFudG9uaW9cXHBvcnQtY29uY2VwdFxcY29tcG9uZW50c1xcTW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Q29tcG9uZW50fSA9IFJlYWN0XHJcbmNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRyaWdnZXJlZDogZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgdHJpZ2dlcmVkIH0gPSB0aGlzLnN0YXRlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLS1jb250YWluZXJcIj5cclxuICAgICAgICBIRUxMT1xyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubW9kYWwtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAkeyF0cmlnZ2VyZWQgPyAwIDogMX1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsOyJdfQ== */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\Modal.js */"),
        dynamic: [!triggered ? 0 : 1]
      }));
    }
  }]);

  return Modal;
}(Component);

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



 // import bgImg from '../static/images/bg.jpg'



var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
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
    css: "body{background:url('http://i.imgur.com/F0gBD6c.png') no-repeat;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxNeUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQnVCLEFBR2tFLDJEQUM3RCIsImZpbGUiOiJDOlxcVXNlcnNcXEFudG9uaW9cXHBvcnQtY29uY2VwdFxcY29tcG9uZW50c1xcTXlMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuLy8gaW1wb3J0IGJnSW1nIGZyb20gJy4uL3N0YXRpYy9pbWFnZXMvYmcuanBnJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zYXNzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9taXNjLmNzcydcclxuXHJcbmNvbnN0IGxheW91dFN0eWxlID0ge1xyXG4gIG1hcmdpbjogMjAsXHJcbiAgcGFkZGluZzogMjAsXHJcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnXHJcbn1cclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1QcmVzcytTdGFydCsyUFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgIGJvZHkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHA6Ly9pLmltZ3VyLmNvbS9GMGdCRDZjLnBuZycpIG5vLXJlcGVhdDtcclxuICAgIH1cclxuICAgIFxyXG4gIGB9XHJcbiAgPC9zdHlsZT5cclxuICAgIDxTaWRlYmFyIG1lbnU9e3Byb3BzLm1lbnV9Lz5cclxuICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il19 */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\MyLayout.js */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    menu: props.menu
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



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
        name: "Home",
        url: "/"
      }, {
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
      console.log('HI');

      _this.setState({
        haschildren: !_this.state.haschildren
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "blaher", function (link) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "".concat(link.children && "sidebar--has-children"),
        onClick: link.children && _this.subMenuToggler
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "sidebar--link"
      }, link.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "sidebar--links"
      }, link.children && link.children.map(function (childLink) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          key: childLink,
          href: "".concat(link.url, "?sort=").concat(childLink.toLowerCase())
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "sidebar--link__child"
        }, childLink)));
      })));
    });

    _this.state = {
      start: false,
      haschildren: false
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
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !link.children ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          key: link.url,
          href: link.url
        }, _this2.blaher(link)) : _this2.blaher(link), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "1740944536",
          css: ".sidebar{".concat(!_this2.props.menu && "display: none", ";}.sidebar--has-children{position:relative;}.sidebar--has-children li{").concat(!_this2.state.haschildren && "display: none;", ";}.sidebar--has-children:before{content:'';top:17px;right:0;border-style:inset;position:absolute;width:0;height:0;border-style:solid;border-width:10px 12.5px 0 12.5px;border-color:white transparent transparent transparent;}.sidebar--has-children .sidebar--links li:hover{background-color:lightgreen;}li{cursor:pointer;font-family:'Press Start 2P';text-align:center;list-style:none;padding:0;margin:.5rem auto;width:235px;display:block;color:white;text-shadow:1px 6px 0px black;}li:hover{background-color:green;}.sidebar--links,sidebar{padding:0;}.sidebar--link{font-size:36px;}.sidebar--link__child{font-size:18px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxTaWRlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEMkMsQUFJNEIsQUFFdUIsQUFLdkIsQUFFZ0IsQUFjaUIsQUFJYixBQWFRLEFBS2IsQUFJSyxBQUlBLFVBUG5CLENBcENhLElBa0JvQixBQXNCakMsQUFJQSxHQW5EQSxFQVFZLEdBOEJaLEtBN0J1QixBQVl2QixDQXhCQSxBQU9BLGVBc0JzQixHQWhCQSxlQWlCRixHQWhCUixRQUNDLEtBZ0JDLElBZlMsTUFnQkQsYUFmZ0IsS0FnQnRCLFlBQ0UsY0FDRixHQWpCMkMsU0FrQnpCLDhCQUNsQyxnQkFqQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRvbmlvXFxwb3J0LWNvbmNlcHRcXGNvbXBvbmVudHNcXFNpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZWJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgaGFzY2hpbGRyZW46IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpbmtzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJIb21lXCIsIHVybDogXCIvXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIldvcmtcIiwgdXJsOiBcIi93b3JrXCIsIGNoaWxkcmVuOiBbXCJCdWlsdFwiLCBcIk1haW50YWluZWRcIl0gfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkNvbnRhY3RcIiwgdXJsOiBcIi9jb250YWN0XCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkhpcmVcIiwgdXJsOiBcIi9oaXJlXCJ9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHN1Yk1lbnVUb2dnbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdISScpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aGFzY2hpbGRyZW46ICF0aGlzLnN0YXRlLmhhc2NoaWxkcmVufSl9XHJcblxyXG4gICAgLy8gbWVudUhvdmVyID0gKCkgPT4ge1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBibGFoZXIgPSAobGluaykgPT4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2Ake2xpbmsuY2hpbGRyZW4gJiYgXCJzaWRlYmFyLS1oYXMtY2hpbGRyZW5cIn1gfSBvbkNsaWNrPXtsaW5rLmNoaWxkcmVuICYmIHRoaXMuc3ViTWVudVRvZ2dsZXJ9PlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInNpZGViYXItLWxpbmtcIj57bGluay5uYW1lfTwvYT5cclxuICAgICAgICA8dWwgXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BzaWRlYmFyLS1saW5rc2B9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsaW5rLmNoaWxkcmVuICYmIGxpbmsuY2hpbGRyZW4ubWFwKGNoaWxkTGluayA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2NoaWxkTGlua30gXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7bGluay51cmx9P3NvcnQ9JHtjaGlsZExpbmsudG9Mb3dlckNhc2UoKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNpZGViYXItLWxpbmtfX2NoaWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvbGk+XHJcbiAgICApXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoICBcclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXJcIiBzdHlsZT17e2Rpc3BsYXk6IGAke3RoaXMucHJvcHMubWVudSA/IFwibm9uZVwiIDogXCJpbml0aWFsXCIgfWB9fT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLmxpbmtzKCkubWFwKGxpbmsgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFsaW5rLmNoaWxkcmVuID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17bGluay51cmx9IGhyZWY9e2xpbmsudXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmJsYWhlcihsaW5rKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJsYWhlcihsaW5rKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHshdGhpcy5wcm9wcy5tZW51ICYmIFwiZGlzcGxheTogbm9uZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItLWhhcy1jaGlsZHJlbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLS1oYXMtY2hpbGRyZW4gbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHshdGhpcy5zdGF0ZS5oYXNjaGlsZHJlbiAmJiBcImRpc3BsYXk6IG5vbmU7XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci0taGFzLWNoaWxkcmVuOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDEwcHggMTIuNXB4IDAgMTIuNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLS1oYXMtY2hpbGRyZW4gLnNpZGViYXItLWxpbmtzIGxpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDZweCAwcHggYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGk6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci0tbGlua3MsIHNpZGViYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLS1saW5rX19jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\Sidebar.js */"),
          dynamic: [!_this2.props.menu && "display: none", !_this2.state.haschildren && "display: none;"]
        }));
      }));
    }
  }]);

  return Sidebar;
}(Component);



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
/* harmony import */ var _components_Modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Modal.js */ "./components/Modal.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);



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



 // import "../styles/index.sass"

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
      _this.setState({
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2231101859", [font, font]]]) + " " + "portfolio--wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2231101859", [font, font]]])
      }, "Glotacosm"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("blink", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2231101859", [font, font]]])
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        style: {
          display: "".concat(!this.state.start && "none")
        },
        onClick: this.pressStart,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2231101859", [font, font]]]) + " " + "start-button blink"
      }, "Click Here to Continue")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2231101859",
        css: ".start-button.__jsx-style-dynamic-selector{display:block;margin:0 auto;font-family:".concat(font, " text-transform:uppercase;border:none;color:white;background-color:transparent;text-shadow:1px 10px 0px black;}h1.__jsx-style-dynamic-selector{font-family:").concat(font, " text-align:center;font-size:75px;color:white;text-transform:uppercase;text-shadow:1px 5px 0px black;}blink.__jsx-style-dynamic-selector{-webkit-animation:2s linear infinite condemned_blink_effect;-webkit-animation:2s linear infinite condemned_blink_effect-__jsx-style-dynamic-selector;animation:2s linear infinite condemned_blink_effect-__jsx-style-dynamic-selector;}@-webkit-keyframes condemned_blink_effect{0%.__jsx-style-dynamic-selector{visibility:hidden;}50%.__jsx-style-dynamic-selector{visibility:hidden;}100%.__jsx-style-dynamic-selector{visibility:visible;}}@-webkit-keyframes condemned_blink_effect-__jsx-style-dynamic-selector{0%{visibility:hidden;}50%{visibility:hidden;}100%{visibility:visible;}}@keyframes condemned_blink_effect-__jsx-style-dynamic-selector{0%{visibility:hidden;}50%{visibility:hidden;}100%{visibility:visible;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVrQixBQUd1QixBQVdJLEFBVTBDLEFBS3RDLEFBR0EsQUFHQyxBQUtELEFBR0EsQUFHQyxjQTFDVCxJQTBCZCxBQUdBLEFBUUEsQUFHQSxDQVJBLEFBV0EsU0F6Q3lCLCtCQVNWLENBVXFDLGNBVHhDLFlBQ2EsUUFWYixZQUNBLEtBVWtCLE9BVEQsdUJBVS9CLE1BVGlDLCtCQUNqQyxvREFlRiIsImZpbGUiOiJDOlxcVXNlcnNcXEFudG9uaW9cXHBvcnQtY29uY2VwdFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2RhbC5qcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4vLyBpbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguc2Fzc1wiXHJcblxyXG5jb25zdCBmb250ID0gXCInUHJlc3MgU3RhcnQgMlAnO1wiXHJcblxyXG5cclxuY29uc3Qge0NvbXBvbmVudH0gPSBSZWFjdFxyXG4vLyBjb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxyXG4vLyAgIDxsaT5cclxuLy8gICAgIDxMaW5rIGFzPXtgL3AvJHtwb3N0LmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Bvc3QudGl0bGV9YH0+XHJcbi8vICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cclxuLy8gICAgIDwvTGluaz5cclxuLy8gICAgIDxzdHlsZSBqc3g+e2BcclxuLy8gICAgICAgaDEsIGEge1xyXG4vLyAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XHJcbi8vICAgICAgIH1cclxuXHJcbi8vICAgICAgIHVsIHtcclxuLy8gICAgICAgICBwYWRkaW5nOiAwO1xyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgICBsaSB7XHJcbi8vICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuLy8gICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgICBhIHtcclxuLy8gICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbi8vICAgICAgICAgY29sb3I6IGJsdWU7XHJcbi8vICAgICAgIH1cclxuXHJcbi8vICAgICAgIGE6aG92ZXIge1xyXG4vLyAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgYH08L3N0eWxlPlxyXG4vLyAgIDwvbGk+XHJcbi8vIClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHN0YXJ0OiB0cnVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmVzc1N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0OiAhdGhpcy5zdGF0ZS5zdGFydH0pXHJcbn1cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tLXdyYXBwZXJcIj5cclxuICAgICAgPGgxPkdsb3RhY29zbTwvaDE+XHJcbiAgICAgIDxibGluaz5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdGFydC1idXR0b24gYmxpbmtcIlxyXG4gICAgICAgIHN0eWxlPXt7ZGlzcGxheTogYCR7IXRoaXMuc3RhdGUuc3RhcnQgJiYgXCJub25lXCJ9YH19IFxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMucHJlc3NTdGFydH0+XHJcbiAgICAgICAgQ2xpY2sgSGVyZSB0byBDb250aW51ZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9ibGluaz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuc3RhcnQtYnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBmb250LWZhbWlseTogJHtmb250fVxyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDEwcHggMHB4IGJsYWNrO1xyXG4gICAgICB9XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogJHtmb250fVxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDc1cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCA1cHggMHB4IGJsYWNrO1xyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgIGJsaW5rIHtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogMnMgbGluZWFyIGluZmluaXRlIGNvbmRlbW5lZF9ibGlua19lZmZlY3Q7IC8vIGZvciBhbmRyb2lkXHJcbiAgICAgICAgYW5pbWF0aW9uOiAycyBsaW5lYXIgaW5maW5pdGUgY29uZGVtbmVkX2JsaW5rX2VmZmVjdDtcclxuICAgIH1cclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBjb25kZW1uZWRfYmxpbmtfZWZmZWN0IHsgLy8gZm9yIGFuZHJvaWRcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGNvbmRlbW5lZF9ibGlua19lZmZlY3Qge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8TGF5b3V0IG1lbnU9e3RoaXMuc3RhdGUuc3RhcnR9Lz5cclxuICAgICAgPE1vZGFsIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\pages\\index.js */"),
        dynamic: [font, font]
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        menu: this.state.start
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Modal_js__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
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