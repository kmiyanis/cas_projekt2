webpackHotUpdate(0,{

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n\tbox-shadow: 0 6px 4px 0 rgba(0,0,0,0.15);\n"], ["\n\tbox-shadow: 0 6px 4px 0 rgba(0,0,0,0.15);\n"]);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(34);

var _styledComponents = __webpack_require__(111);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Navbar = _styledComponents2.default.nav(_templateObject);

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav() {
    _classCallCheck(this, Nav);

    var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this));

    _this.state = {
      collapsed: true
    };
    return _this;
  }

  _createClass(Nav, [{
    key: "toggleCollapse",
    value: function toggleCollapse() {
      var collapsed = !this.state.collapsed;
      this.setState({ collapsed: collapsed });
    }
  }, {
    key: "render",
    value: function render() {
      var location = this.props.location;
      var collapsed = this.state.collapsed;

      var indexClass = location.pathname === "/" ? "active" : "";
      var recipesClass = location.pathname.match(/^\/recipes/) ? "active" : "";
      var shopClass = location.pathname.match(/^\/shop/) ? "active" : "";
      var coursesClass = location.pathname.match(/^\/courses/) ? "active" : "";
      var contactClass = location.pathname.match(/^\/contact/) ? "active" : "";
      var navClass = collapsed ? "collapse" : "";

      return _react2.default.createElement(
        Navbar,
        { className: "navbar navbar-expand-lg navbar-dark bg-dark fixed-top" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "a",
            { className: "navbar-brand", href: "#" },
            "MIYA JAPAN TEE"
          ),
          _react2.default.createElement(
            "button",
            { onClick: this.toggleCollapse.bind(this), className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarResponsive", "aria-controls": "navbarResponsive", "aria-expanded": "false", "aria-label": "Toggle navigation" },
            _react2.default.createElement("span", { className: "navbar-toggler-icon" })
          ),
          _react2.default.createElement(
            "div",
            { className: "collapse navbar-collapse show", id: "navbarResponsive" },
            _react2.default.createElement(
              "ul",
              { className: "navbar-nav ml-auto" },
              _react2.default.createElement(
                "li",
                { className: "nav-item " + indexClass },
                _react2.default.createElement(
                  _reactRouter.IndexLink,
                  { className: "nav-link", to: "/", onClick: this.toggleCollapse.bind(this) },
                  "Home"
                )
              ),
              _react2.default.createElement(
                "li",
                { className: "nav-item " + shopClass },
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: "shop", className: "nav-link", onClick: this.toggleCollapse.bind(this) },
                  "Shop"
                )
              ),
              _react2.default.createElement(
                "li",
                { className: "nav-item " + recipesClass },
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: "recipes", className: "nav-link", onClick: this.toggleCollapse.bind(this) },
                  "Rezepte"
                )
              ),
              _react2.default.createElement(
                "li",
                { className: "nav-item " + coursesClass },
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: "courses", className: "nav-link", onClick: this.toggleCollapse.bind(this) },
                  "Kurse"
                )
              ),
              _react2.default.createElement(
                "li",
                { className: "nav-item " + contactClass },
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: "contact", className: "nav-link", onClick: this.toggleCollapse.bind(this) },
                  "Kontakt"
                )
              )
            )
          )
        )
      );

      //    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      //        <div class="container">
      //          <div class="navbar-header">
      //            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
      //              <span class="sr-only">Toggle navigation</span>
      //              <span class="icon-bar"></span>
      //              <span class="icon-bar"></span>
      //              <span class="icon-bar"></span>
      //            </button>
      //          </div>
      //          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
      //            <ul class="nav navbar-nav">
      //              <li class={featuredClass}>
      //                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Featured</IndexLink>
      //              </li>
      //              <li class={archivesClass}>
      //                <Link to="archives" onClick={this.toggleCollapse.bind(this)}>Archives</Link>
      //              </li>
      //              <li class={settingsClass}>
      //                <Link to="settings" onClick={this.toggleCollapse.bind(this)}>Settings</Link>
      //              </li>
      //            </ul>
      //          </div>
      //        </div>
      //      </nav>
    }
  }]);

  return Nav;
}(_react2.default.Component);

exports.default = Nav;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2xheW91dC9OYXYuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwibmF2IiwiTmF2Iiwic3RhdGUiLCJjb2xsYXBzZWQiLCJzZXRTdGF0ZSIsImxvY2F0aW9uIiwicHJvcHMiLCJpbmRleENsYXNzIiwicGF0aG5hbWUiLCJyZWNpcGVzQ2xhc3MiLCJtYXRjaCIsInNob3BDbGFzcyIsImNvdXJzZXNDbGFzcyIsImNvbnRhY3RDbGFzcyIsIm5hdkNsYXNzIiwidG9nZ2xlQ29sbGFwc2UiLCJiaW5kIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUywyQkFBT0MsR0FBaEIsaUJBQU47O0lBSXFCQyxHOzs7QUFDbkIsaUJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVc7QUFEQSxLQUFiO0FBRlk7QUFLYjs7OztxQ0FFZ0I7QUFDZixVQUFNQSxZQUFZLENBQUMsS0FBS0QsS0FBTCxDQUFXQyxTQUE5QjtBQUNBLFdBQUtDLFFBQUwsQ0FBYyxFQUFDRCxvQkFBRCxFQUFkO0FBQ0Q7Ozs2QkFFUTtBQUFBLFVBQ0NFLFFBREQsR0FDYyxLQUFLQyxLQURuQixDQUNDRCxRQUREO0FBQUEsVUFFQ0YsU0FGRCxHQUVlLEtBQUtELEtBRnBCLENBRUNDLFNBRkQ7O0FBR1AsVUFBTUksYUFBZUYsU0FBU0csUUFBVCxLQUFzQixHQUF0QixHQUE0QixRQUE1QixHQUF1QyxFQUE1RDtBQUNBLFVBQU1DLGVBQWdCSixTQUFTRyxRQUFULENBQWtCRSxLQUFsQixDQUF3QixZQUF4QixJQUF3QyxRQUF4QyxHQUFtRCxFQUF6RTtBQUNBLFVBQU1DLFlBQWdCTixTQUFTRyxRQUFULENBQWtCRSxLQUFsQixDQUF3QixTQUF4QixJQUFxQyxRQUFyQyxHQUFnRCxFQUF0RTtBQUNBLFVBQU1FLGVBQWdCUCxTQUFTRyxRQUFULENBQWtCRSxLQUFsQixDQUF3QixZQUF4QixJQUF3QyxRQUF4QyxHQUFtRCxFQUF6RTtBQUNBLFVBQU1HLGVBQWdCUixTQUFTRyxRQUFULENBQWtCRSxLQUFsQixDQUF3QixZQUF4QixJQUF3QyxRQUF4QyxHQUFtRCxFQUF6RTtBQUNBLFVBQU1JLFdBQVdYLFlBQVksVUFBWixHQUF5QixFQUExQzs7QUFFQSxhQUNFO0FBQUMsY0FBRDtBQUFBLFVBQVEsV0FBTSx1REFBZDtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQU0sV0FBWDtBQUNFO0FBQUE7QUFBQSxjQUFHLFdBQU0sY0FBVCxFQUF3QixNQUFLLEdBQTdCO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQVEsU0FBUyxLQUFLWSxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUFqQixFQUFpRCxXQUFNLGdCQUF2RCxFQUF3RSxNQUFLLFFBQTdFLEVBQXNGLGVBQVksVUFBbEcsRUFBNkcsZUFBWSxtQkFBekgsRUFBNkksaUJBQWMsa0JBQTNKLEVBQThLLGlCQUFjLE9BQTVMLEVBQW9NLGNBQVcsbUJBQS9NO0FBQ0Usb0RBQU0sV0FBTSxxQkFBWjtBQURGLFdBRkY7QUFLRTtBQUFBO0FBQUEsY0FBSyxXQUFNLCtCQUFYLEVBQTJDLElBQUcsa0JBQTlDO0FBQ0U7QUFBQTtBQUFBLGdCQUFJLFdBQU0sb0JBQVY7QUFDRTtBQUFBO0FBQUEsa0JBQUksV0FBTyxjQUFjVCxVQUF6QjtBQUNFO0FBQUE7QUFBQSxvQkFBVyxXQUFNLFVBQWpCLEVBQTRCLElBQUcsR0FBL0IsRUFBbUMsU0FBUyxLQUFLUSxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUE1QztBQUFBO0FBQUE7QUFERixlQURGO0FBS0U7QUFBQTtBQUFBLGtCQUFJLFdBQU8sY0FBY0wsU0FBekI7QUFDRTtBQUFBO0FBQUEsb0JBQU0sSUFBRyxNQUFULEVBQWdCLFdBQU0sVUFBdEIsRUFBaUMsU0FBUyxLQUFLSSxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUExQztBQUFBO0FBQUE7QUFERixlQUxGO0FBUUU7QUFBQTtBQUFBLGtCQUFJLFdBQU8sY0FBY1AsWUFBekI7QUFDRTtBQUFBO0FBQUEsb0JBQU0sSUFBRyxTQUFULEVBQW1CLFdBQU0sVUFBekIsRUFBbUMsU0FBUyxLQUFLTSxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUE1QztBQUFBO0FBQUE7QUFERixlQVJGO0FBV0U7QUFBQTtBQUFBLGtCQUFJLFdBQU8sY0FBY0osWUFBekI7QUFDRTtBQUFBO0FBQUEsb0JBQU0sSUFBRyxTQUFULEVBQW1CLFdBQU0sVUFBekIsRUFBb0MsU0FBUyxLQUFLRyxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUE3QztBQUFBO0FBQUE7QUFERixlQVhGO0FBY0U7QUFBQTtBQUFBLGtCQUFJLFdBQU8sY0FBY0gsWUFBekI7QUFDRTtBQUFBO0FBQUEsb0JBQU0sSUFBRyxTQUFULEVBQW1CLFdBQU0sVUFBekIsRUFBb0MsU0FBUyxLQUFLRSxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUE3QztBQUFBO0FBQUE7QUFERjtBQWRGO0FBREY7QUFMRjtBQURGLE9BREY7O0FBK0JKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7Ozs7RUEvRThCLGdCQUFNQyxTOztrQkFBbEJoQixHIiwiZmlsZSI6IjAuOGYxMDg5OTFlNzRmNDI4M2RlOGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEluZGV4TGluaywgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBOYXZiYXIgPSBzdHlsZWQubmF2YFxuXHRib3gtc2hhZG93OiAwIDZweCA0cHggMCByZ2JhKDAsMCwwLDAuMTUpO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIHRvZ2dsZUNvbGxhcHNlKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9ICF0aGlzLnN0YXRlLmNvbGxhcHNlZDtcbiAgICB0aGlzLnNldFN0YXRlKHtjb2xsYXBzZWR9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY29sbGFwc2VkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGluZGV4Q2xhc3MgIFx0PSBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIgPyBcImFjdGl2ZVwiIDogXCJcIjtcbiAgICBjb25zdCByZWNpcGVzQ2xhc3MgID0gbG9jYXRpb24ucGF0aG5hbWUubWF0Y2goL15cXC9yZWNpcGVzLykgPyBcImFjdGl2ZVwiIDogXCJcIjtcbiAgICBjb25zdCBzaG9wQ2xhc3MgICAgID0gbG9jYXRpb24ucGF0aG5hbWUubWF0Y2goL15cXC9zaG9wLykgPyBcImFjdGl2ZVwiIDogXCJcIjtcbiAgICBjb25zdCBjb3Vyc2VzQ2xhc3MgID0gbG9jYXRpb24ucGF0aG5hbWUubWF0Y2goL15cXC9jb3Vyc2VzLykgPyBcImFjdGl2ZVwiIDogXCJcIjtcbiAgICBjb25zdCBjb250YWN0Q2xhc3MgID0gbG9jYXRpb24ucGF0aG5hbWUubWF0Y2goL15cXC9jb250YWN0LykgPyBcImFjdGl2ZVwiIDogXCJcIjtcbiAgICBjb25zdCBuYXZDbGFzcyA9IGNvbGxhcHNlZCA/IFwiY29sbGFwc2VcIiA6IFwiXCI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE5hdmJhciBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLWRhcmsgZml4ZWQtdG9wXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+TUlZQSBKQVBBTiBURUU8L2E+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbGxhcHNlLmJpbmQodGhpcyl9IGNsYXNzPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhclJlc3BvbnNpdmVcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyUmVzcG9uc2l2ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2Ugc2hvd1wiIGlkPVwibmF2YmFyUmVzcG9uc2l2ZVwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz17XCJuYXYtaXRlbSBcIiArIGluZGV4Q2xhc3N9PlxuICAgICAgICAgICAgICAgIDxJbmRleExpbmsgY2xhc3M9XCJuYXYtbGlua1wiIHRvPVwiL1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ29sbGFwc2UuYmluZCh0aGlzKX0+SG9tZTwvSW5kZXhMaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz17XCJuYXYtaXRlbSBcIiArIHNob3BDbGFzc30+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCJzaG9wXCIgY2xhc3M9XCJuYXYtbGlua1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ29sbGFwc2UuYmluZCh0aGlzKX0+U2hvcDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPXtcIm5hdi1pdGVtIFwiICsgcmVjaXBlc0NsYXNzfT5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cInJlY2lwZXNcIiBjbGFzcz1cIm5hdi1saW5rXCJvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbGxhcHNlLmJpbmQodGhpcyl9PlJlemVwdGU8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz17XCJuYXYtaXRlbSBcIiArIGNvdXJzZXNDbGFzc30+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCJjb3Vyc2VzXCIgY2xhc3M9XCJuYXYtbGlua1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ29sbGFwc2UuYmluZCh0aGlzKX0+S3Vyc2U8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz17XCJuYXYtaXRlbSBcIiArIGNvbnRhY3RDbGFzc30+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCJjb250YWN0XCIgY2xhc3M9XCJuYXYtbGlua1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ29sbGFwc2UuYmluZCh0aGlzKX0+S29udGFrdDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9OYXZiYXI+XG4gICAgKTtcblxuLy8gICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItZml4ZWQtdG9wXCIgcm9sZT1cIm5hdmlnYXRpb25cIj5cbi8vICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4vLyAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlclwiPlxuLy8gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm5hdmJhci10b2dnbGVcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbGxhcHNlLmJpbmQodGhpcyl9ID5cbi8vICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbi8vICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuLy8gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4vLyAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cbi8vICAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgIDxkaXYgY2xhc3M9e1wibmF2YmFyLWNvbGxhcHNlIFwiICsgbmF2Q2xhc3N9IGlkPVwiYnMtZXhhbXBsZS1uYXZiYXItY29sbGFwc2UtMVwiPlxuLy8gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdlwiPlxuLy8gICAgICAgICAgICAgIDxsaSBjbGFzcz17ZmVhdHVyZWRDbGFzc30+XG4vLyAgICAgICAgICAgICAgICA8SW5kZXhMaW5rIHRvPVwiL1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ29sbGFwc2UuYmluZCh0aGlzKX0+RmVhdHVyZWQ8L0luZGV4TGluaz5cbi8vICAgICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgICAgIDxsaSBjbGFzcz17YXJjaGl2ZXNDbGFzc30+XG4vLyAgICAgICAgICAgICAgICA8TGluayB0bz1cImFyY2hpdmVzXCIgb25DbGljaz17dGhpcy50b2dnbGVDb2xsYXBzZS5iaW5kKHRoaXMpfT5BcmNoaXZlczwvTGluaz5cbi8vICAgICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgICAgIDxsaSBjbGFzcz17c2V0dGluZ3NDbGFzc30+XG4vLyAgICAgICAgICAgICAgICA8TGluayB0bz1cInNldHRpbmdzXCIgb25DbGljaz17dGhpcy50b2dnbGVDb2xsYXBzZS5iaW5kKHRoaXMpfT5TZXR0aW5nczwvTGluaz5cbi8vICAgICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgICA8L3VsPlxuLy8gICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgPC9kaXY+XG4vLyAgICAgIDwvbmF2PlxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jb21wb25lbnRzL2xheW91dC9OYXYuanMiXSwic291cmNlUm9vdCI6IiJ9