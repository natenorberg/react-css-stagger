(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Stagger"] = factory(require("react"));
	else
		root["Stagger"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Stagger = __webpack_require__(1);
	
	var _Stagger2 = _interopRequireDefault(_Stagger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Stagger2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  delay: _react2.default.PropTypes.number.isRequired,
	  initialDelay: _react2.default.PropTypes.number,
	  transition: _react2.default.PropTypes.string.isRequired,
	  className: _react2.default.PropTypes.string
	};
	
	var defaultProps = {
	  initialDelay: 1
	};
	
	var Stagger = function (_React$Component) {
	  _inherits(Stagger, _React$Component);
	
	  function Stagger() {
	    _classCallCheck(this, Stagger);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Stagger).call(this));
	
	    _this.state = { childrenAdded: [], animationDone: false };
	
	    _this.addItem = _this.addItem.bind(_this);
	    return _this;
	  }
	
	  _createClass(Stagger, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.itemsAdded = 0;
	      this.timeout = setTimeout(this.addItem, this.props.initialDelay);
	    }
	  }, {
	    key: 'addItem',
	    value: function addItem() {
	      if (this.itemsAdded < this.props.children.length) {
	        this.setState({
	          childrenAdded: [].concat(_toConsumableArray(this.state.childrenAdded), [this.props.children[this.itemsAdded]])
	        });
	        this.itemsAdded++;
	
	        // Queue up the next addition
	        this.timeout = setTimeout(this.addItem, this.props.delay);
	      } else {
	        this.setState({ animationDone: true });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: this.props.className },
	        this.state.animationDone ? this.props.children : this.props.children.map(function (child, index) {
	
	          var transitionClassName = index >= _this2.state.childrenAdded.length ? _this2.props.transition + '-enter' : _this2.props.transition + '-enter ' + _this2.props.transition + '-enter-active';
	
	          var className = child.props.className ? [child.props.className, transitionClassName].join(' ') : transitionClassName;
	
	          return _react2.default.cloneElement(child, { className: className });
	        })
	      );
	    }
	  }]);
	
	  return Stagger;
	}(_react2.default.Component);
	
	exports.default = Stagger;
	
	
	Stagger.propTypes = propTypes;
	Stagger.defaultProps = defaultProps;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map