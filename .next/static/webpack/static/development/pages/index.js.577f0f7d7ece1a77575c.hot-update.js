webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
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


 // import "../styles/index.sass"

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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-533048615"
      }, "Glotacosm"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("blink", {
        className: "jsx-533048615"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "jsx-533048615" + " " + "start-button blink"
      }, "style=", {
        display: "".concat(!this.state.start && "none")
      }, "onClick=", this.pressStart, ">PRESS ANYTHING TO CONTINUE")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "533048615",
        css: ".start-button.jsx-533048615{display:block;margin:0 auto;}h1.jsx-533048615{font-family:'Press Start 2P';text-align:center;font-size:75px;text-transform:uppercase;}blink.jsx-533048615{-webkit-animation:2s linear infinite condemned_blink_effect;-webkit-animation:2s linear infinite condemned_blink_effect-jsx-533048615;animation:2s linear infinite condemned_blink_effect-jsx-533048615;}@-webkit-keyframes condemned_blink_effect{0%.jsx-533048615{visibility:hidden;}50%.jsx-533048615{visibility:hidden;}100%.jsx-533048615{visibility:visible;}}@-webkit-keyframes condemned_blink_effect-jsx-533048615{0%{visibility:hidden;}50%{visibility:hidden;}100%{visibility:visible;}}@keyframes condemned_blink_effect-jsx-533048615{0%{visibility:hidden;}50%{visibility:hidden;}100%{visibility:visible;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERrQixBQUd1QixBQUllLEFBTytCLEFBS3RDLEFBR0EsQUFHQyxBQUtELEFBR0EsQUFHQyxjQWhDVCxJQWdCZCxBQUdBLEFBUUEsQUFHQSxDQVJBLEFBV0EsU0FoQ0YsQ0FHb0Isa0JBQ0gsYUFNcUMsRUFMM0IseUJBQzNCLGlIQUtGIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuLy8gaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LnNhc3NcIlxyXG5jb25zdCB7Q29tcG9uZW50fSA9IFJlYWN0XHJcbi8vIGNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXHJcbi8vICAgPGxpPlxyXG4vLyAgICAgPExpbmsgYXM9e2AvcC8ke3Bvc3QuaWR9YH0gaHJlZj17YC9wb3N0P3RpdGxlPSR7cG9zdC50aXRsZX1gfT5cclxuLy8gICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxyXG4vLyAgICAgPC9MaW5rPlxyXG4vLyAgICAgPHN0eWxlIGpzeD57YFxyXG4vLyAgICAgICBoMSwgYSB7XHJcbi8vICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgdWwge1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDA7XHJcbi8vICAgICAgIH1cclxuXHJcbi8vICAgICAgIGxpIHtcclxuLy8gICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4vLyAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbi8vICAgICAgIH1cclxuXHJcbi8vICAgICAgIGEge1xyXG4vLyAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICAgICAgICBjb2xvcjogYmx1ZTtcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgYTpob3ZlciB7XHJcbi8vICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4vLyAgICAgICB9XHJcbi8vICAgICBgfTwvc3R5bGU+XHJcbi8vICAgPC9saT5cclxuLy8gKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3RhcnQ6IHRydWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXNzU3RhcnQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnQ6ICF0aGlzLnN0YXRlLnN0YXJ0fSlcclxufVxyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgPGgxPkdsb3RhY29zbTwvaDE+XHJcbiAgICAgIDxibGluaz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN0YXJ0LWJ1dHRvbiBibGlua1wiPlxyXG4gICAgICAgIHN0eWxlPXt7ZGlzcGxheTogYCR7IXRoaXMuc3RhdGUuc3RhcnQgJiYgXCJub25lXCJ9YH19IFxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMucHJlc3NTdGFydH0+UFJFU1MgQU5ZVEhJTkcgVE8gQ09OVElOVUU8L2J1dHRvbj5cclxuICAgICAgPC9ibGluaz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuc3RhcnQtYnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgfVxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCc7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNzVweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBibGluayB7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGxpbmVhciBpbmZpbml0ZSBjb25kZW1uZWRfYmxpbmtfZWZmZWN0OyAvLyBmb3IgYW5kcm9pZFxyXG4gICAgICAgIGFuaW1hdGlvbjogMnMgbGluZWFyIGluZmluaXRlIGNvbmRlbW5lZF9ibGlua19lZmZlY3Q7XHJcbiAgICB9XHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgY29uZGVtbmVkX2JsaW5rX2VmZmVjdCB7IC8vIGZvciBhbmRyb2lkXHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBjb25kZW1uZWRfYmxpbmtfZWZmZWN0IHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPExheW91dCBtZW51PXt0aGlzLnN0YXRlLnN0YXJ0fS8+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG59Il19 */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\pages\\index.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        menu: this.state.start
      }));
    }
  }]);

  return _default;
}(Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.577f0f7d7ece1a77575c.hot-update.js.map