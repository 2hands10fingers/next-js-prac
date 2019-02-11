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
        className: "jsx-3455621450"
      }, "Glotacosm"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        style: {
          display: "".concat(!this.state.start && "none")
        },
        onClick: this.pressStart,
        className: "jsx-3455621450" + " " + "start-button"
      }, "PRESS ANYTHING TO CONTINUE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3455621450",
        css: ".start-button.jsx-3455621450{dispaly:block;margin:0 auto;}h1.jsx-3455621450{font-family:'Press Start 2P';text-align:center;font-size:75px;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RrQixBQUd1QixBQUllLGNBSGYsY0FDaEIsQ0FHb0Isa0JBQ0gsZUFDVSx5QkFDM0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRvbmlvXFxwb3J0LWNvbmNlcHRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4vLyBpbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguc2Fzc1wiXHJcbmNvbnN0IHtDb21wb25lbnR9ID0gUmVhY3RcclxuLy8gY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcclxuLy8gICA8bGk+XHJcbi8vICAgICA8TGluayBhcz17YC9wLyR7cG9zdC5pZH1gfSBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwb3N0LnRpdGxlfWB9PlxyXG4vLyAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XHJcbi8vICAgICA8L0xpbms+XHJcbi8vICAgICA8c3R5bGUganN4PntgXHJcbi8vICAgICAgIGgxLCBhIHtcclxuLy8gICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgICB1bCB7XHJcbi8vICAgICAgICAgcGFkZGluZzogMDtcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgbGkge1xyXG4vLyAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbi8vICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgYSB7XHJcbi8vICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgICBhOmhvdmVyIHtcclxuLy8gICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIGB9PC9zdHlsZT5cclxuLy8gICA8L2xpPlxyXG4vLyApXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzdGFydDogdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJlc3NTdGFydCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydDogIXRoaXMuc3RhdGUuc3RhcnR9KVxyXG59XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICA8aDE+R2xvdGFjb3NtPC9oMT5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdGFydC1idXR0b25cIlxyXG4gICAgICAgIHN0eWxlPXt7ZGlzcGxheTogYCR7IXRoaXMuc3RhdGUuc3RhcnQgJiYgXCJub25lXCJ9YH19IFxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMucHJlc3NTdGFydH0+UFJFU1MgQU5ZVEhJTkcgVE8gQ09OVElOVUU8L2J1dHRvbj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuc3RhcnQtYnV0dG9uIHtcclxuICAgICAgICBkaXNwYWx5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgfVxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCc7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNzVweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPExheW91dCBtZW51PXt0aGlzLnN0YXRlLnN0YXJ0fS8+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG59Il19 */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\pages\\index.js */"
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
//# sourceMappingURL=index.js.4f9af6b6742999938385.hot-update.js.map