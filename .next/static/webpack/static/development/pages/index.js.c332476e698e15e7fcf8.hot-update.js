webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
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

    _this.state = {
      hello: undefined
    };
    return _this;
  }

  _createClass(Sidebar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "sidebar"
      }, this.links().map(function (link) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          key: link.url,
          href: link.url
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          className: "jsx-793555105"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "jsx-793555105" + " " + "sidebar--link"
        }, link.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
          className: "jsx-793555105" + " " + "sidebar--links"
        }, link.children && link.children.map(function (childLink) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            key: childLink,
            href: "".concat(link.url, "?sort=").concat(childLink.toLowerCase())
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
            className: "jsx-793555105"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            className: "jsx-793555105" + " " + "sidebar--link__child"
          }, childLink)));
        })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "793555105",
          css: "li.jsx-793555105{cursor:pointer;font-family:'Press Start 2P';text-align:center;list-style:none;padding:0;margin:0;}.sidebar--links.jsx-793555105{padding:0;}.sidebar--link.jsx-793555105{font-size:24px;}.sidebar--link__child.jsx-793555105{font-size:18px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccG9ydC1jb25jZXB0XFxjb21wb25lbnRzXFxTaWRlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDb0MsQUFHZ0QsQUFTTCxBQUlLLEFBSUEsVUFQbkIsS0FUaUMsQUFhakMsQUFJQSw2QkFoQnNCLGtCQUNGLGdCQUNOLFVBQ0QsU0FDYiIsImZpbGUiOiJDOlxcVXNlcnNcXEFudG9uaW9cXHBvcnQtY29uY2VwdFxcY29tcG9uZW50c1xcU2lkZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaGVsbG86IHVuZGVmaW5lZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaW5rcyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB7IG5hbWU6IFwiSG9tZVwiLCB1cmw6IFwiL1wiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJXb3JrXCIsIHVybDogXCIvd29ya1wiLCBjaGlsZHJlbjogW1wiQnVpbHRcIiwgXCJNYWludGFpbmVkXCJdIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJDb250YWN0XCIsIHVybDogXCIvY29udGFjdFwiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJIaXJlXCIsIHVybDogXCIvaGlyZVwifVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLmxpbmtzKCkubWFwKGxpbmsgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtsaW5rLnVybH0gaHJlZj17bGluay51cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNpZGViYXItLWxpbmtcIj57bGluay5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2lkZWJhci0tbGlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpbmsuY2hpbGRyZW4gJiYgbGluay5jaGlsZHJlbi5tYXAoY2hpbGRMaW5rID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17Y2hpbGRMaW5rfSBocmVmPXtgJHtsaW5rLnVybH0/c29ydD0ke2NoaWxkTGluay50b0xvd2VyQ2FzZSgpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2lkZWJhci0tbGlua19fY2hpbGRcIj57Y2hpbGRMaW5rfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLS1saW5rcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci0tbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLS1saW5rX19jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\Users\\Antonio\\port-concept\\components\\Sidebar.js */"
        }));
      }));
    }
  }]);

  return Sidebar;
}(Component);



/***/ })

})
//# sourceMappingURL=index.js.c332476e698e15e7fcf8.hot-update.js.map