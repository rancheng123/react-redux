webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(3);
	
	var _redux = __webpack_require__(4);
	
	var _reactRedux = __webpack_require__(5);
	
	var _reduxThunk = __webpack_require__(6);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxLogger = __webpack_require__(7);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _devTools = __webpack_require__(8);
	
	var _devTools2 = _interopRequireDefault(_devTools);
	
	var _index = __webpack_require__(12);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(16);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _login = __webpack_require__(30);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _product_list = __webpack_require__(31);
	
	var _product_list2 = _interopRequireDefault(_product_list);
	
	var _product_add = __webpack_require__(32);
	
	var _product_add2 = _interopRequireDefault(_product_add);
	
	var _product_detail = __webpack_require__(35);
	
	var _product_detail2 = _interopRequireDefault(_product_detail);
	
	var _order_list = __webpack_require__(40);
	
	var _order_list2 = _interopRequireDefault(_order_list);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//compents
	//注意点   后面不能写.js后缀
	
	//redux 开发工具
	
	//中间件1  action creator 和 网络请求结合起来( 让action生成器 支持返回函数，并且提供dispatch等参数 )
	
	//redux
	
	var ReduxStore = (0, _redux.createStore)(_index2.default,
	//从右到左来组合多个函数,见http://cn.redux.js.org/docs/api/compose.html
	(0, _redux.compose)(
	//应用中间件
	(0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)()), _devTools2.default.instrument()));
	//reducers
	
	// 中间件2   一个很便捷的 middleware，用来打印 action 日志
	
	//redux与react链接插件
	//react
	
	(0, _reactDom.render)(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: ReduxStore },
	    _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            _reactRouter.Router,
	            { history: _reactRouter.hashHistory },
	            _react2.default.createElement(_reactRouter.Route, { path: '/', component: _login2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _login2.default }),
	            _react2.default.createElement(
	                _reactRouter.Route,
	                { path: '/index', component: _index4.default },
	                _react2.default.createElement(_reactRouter.Route, { path: '/productList', component: _product_list2.default }),
	                _react2.default.createElement(_reactRouter.Route, { path: '/productAdd', component: _product_add2.default }),
	                _react2.default.createElement(_reactRouter.Route, { path: '/productDetail', component: _product_detail2.default }),
	                _react2.default.createElement(_reactRouter.Route, { path: '/orderList', component: _order_list2.default })
	            )
	        ),
	        _react2.default.createElement(_devTools2.default, null)
	    )
	), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = window._Lib["react"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = window._Lib["react-dom"];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = window._Lib["react-router"];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = window._Lib["redux"];

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = window._Lib["react-redux"];

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = window._Lib["redux-thunk"];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = window._Lib["redux-logger"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxDevtools = __webpack_require__(9);
	
	var _reduxDevtoolsLogMonitor = __webpack_require__(10);
	
	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);
	
	var _reduxDevtoolsDockMonitor = __webpack_require__(11);
	
	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(
	    _reduxDevtoolsDockMonitor2.default,
	    { toggleVisibilityKey: 'ctrl-h',
	        changePositionKey: 'ctrl-q' },
	    _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, null)
	));

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = window._Lib["redux-devtools"];

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = window._Lib["redux-devtools-log-monitor"];

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = window._Lib["redux-devtools-dock-monitor"];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(4);
	
	var _reducer_popagation = __webpack_require__(13);
	
	var _reducer_order = __webpack_require__(14);
	
	var _reducer_product = __webpack_require__(15);
	
	//合并reducers
	var reducers = (0, _redux.combineReducers)({
	    popagation: _reducer_popagation.popagation,
	    user: _reducer_order.user,
	    orderList: _reducer_order.orderList,
	    products: _reducer_product.products
	});
	
	exports.default = reducers;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var popagation_initState = {
	    pageNum: 1,
	    pageSize: 10,
	    totalNum: 100
	};
	
	//异步order
	var popagation = exports.popagation = function popagation() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? popagation_initState : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case 'CHANGE_PAGESIZE':
	
	            var newState = Object.assign({}, state, {
	                pageSize: action.pageSize
	            });
	            return newState;
	        case 'CHANGE_PAGENUM':
	
	            var newState = Object.assign({}, state, {
	                pageNum: action.pageNum
	            });
	            return newState;
	
	        default:
	            return state;
	    }
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var user = exports.user = function user() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? 'rancheng' : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case 'CHANGE_USER':
	            return action.user;
	        default:
	            return state;
	    }
	};
	
	var orderList_initState = {
	    //来显示进度条
	    isFetching: false,
	    //是否过期
	    didInvalidate: false,
	    //数据最后更新时间
	    lastUpdated: new Date().getDate(),
	
	    data: []
	};
	
	var count = 0;
	
	//异步order
	var orderList = exports.orderList = function orderList() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? orderList_initState : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case 'REQUEST_ORDER_START':
	
	            var newState = Object.assign({}, state, {
	                //来显示进度条
	                isFetching: true
	            });
	            return newState;
	        case 'REQUEST_ORDER_SUCCESS':
	
	            if (count) {
	                action.data = [{
	                    "text": "order1"
	                }, {
	                    "text": "order2"
	                }, {
	                    "text": "order3"
	                }];
	            } else {
	                action.data = [{
	                    "text": "order4"
	                }, {
	                    "text": "order5"
	                }, {
	                    "text": "order6"
	                }];
	            }
	            count = !count;
	
	            var newState = Object.assign({}, state, {
	                //来显示进度条
	                isFetching: false,
	                //是否过期
	                didInvalidate: false,
	                //数据最后更新时间
	                lastUpdated: new Date().getDate(),
	
	                data: action.data
	            });
	            return newState;
	
	        case 'REQUEST_ORDER_FAILD':
	
	            var newState = Object.assign({}, state, {
	                //来显示进度条
	                isFetching: false
	            });
	            return newState;
	
	        default:
	            return state;
	    }
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	            value: true
	});
	var products = exports.products = function products() {
	            var state = arguments.length <= 0 || arguments[0] === undefined ? ['product1', 'product2'] : arguments[0];
	            var action = arguments[1];
	
	            switch (action.type) {
	                        case 'ADD_PRODUCT':
	
	                                    var newState = [1, 2, 3];
	                                    newState.push(1);
	                                    return newState;
	
	                        /*return Object.assign({},state,{
	                          })*/
	                        case 'GET_PRODUCTLIST':
	                                    var newState = [1, 2, 3];
	                                    return newState;
	
	                        default:
	                                    return state;
	            }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _head = __webpack_require__(17);
	
	var _head2 = _interopRequireDefault(_head);
	
	var _body = __webpack_require__(18);
	
	var _body2 = _interopRequireDefault(_body);
	
	var _foot = __webpack_require__(25);
	
	var _foot2 = _interopRequireDefault(_foot);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(26);
	__webpack_require__(28);
	
	var Index = function (_Component) {
	    _inherits(Index, _Component);
	
	    function Index() {
	        _classCallCheck(this, Index);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Index).call(this));
	    }
	
	    _createClass(Index, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_head2.default, null),
	                _react2.default.createElement(_body2.default, { compent: this.props.children }),
	                _react2.default.createElement(_foot2.default, null),
	                _react2.default.createElement('div', { id: 'you' })
	            );
	        }
	    }]);
	
	    return Index;
	}(_react.Component);
	
	;
	
	exports.default = Index;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Head = function (_Component) {
	    _inherits(Head, _Component);
	
	    function Head() {
	        _classCallCheck(this, Head);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Head).call(this));
	    }
	
	    _createClass(Head, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { id: "head" },
	                "this is header"
	            );
	        }
	    }]);
	
	    return Head;
	}(_react.Component);
	
	;
	
	exports.default = Head;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _leftNav = __webpack_require__(19);
	
	var _leftNav2 = _interopRequireDefault(_leftNav);
	
	var _rightDetail = __webpack_require__(24);
	
	var _rightDetail2 = _interopRequireDefault(_rightDetail);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Body = function (_Component) {
	    _inherits(Body, _Component);
	
	    function Body() {
	        _classCallCheck(this, Body);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Body).call(this));
	    }
	
	    _createClass(Body, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'body' },
	                _react2.default.createElement(_leftNav2.default, null),
	                _react2.default.createElement(_rightDetail2.default, { compent: this.props.compent })
	            );
	        }
	    }]);
	
	    return Body;
	}(_react.Component);
	
	;
	
	exports.default = Body;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//引入了样式
	__webpack_require__(20);
	
	var LeftNav = function (_Component) {
	    _inherits(LeftNav, _Component);
	
	    function LeftNav() {
	        _classCallCheck(this, LeftNav);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(LeftNav).call(this));
	    }
	
	    _createClass(LeftNav, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'leftNav' },
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/productList' },
	                            'ProductList'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/orderList' },
	                            'Order'
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return LeftNav;
	}(_react.Component);
	
	;
	
	exports.default = LeftNav;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.24.0/css-loader/index.js!./../../../node_modules/.npminstall/sass-loader/4.0.2/sass-loader/index.js?sourceMap!./leftNav.scss", function() {
				var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.24.0/css-loader/index.js!./../../../node_modules/.npminstall/sass-loader/4.0.2/sass-loader/index.js?sourceMap!./leftNav.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n", ""]);
	
	// exports


/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RightDetail = function (_Component) {
	    _inherits(RightDetail, _Component);
	
	    function RightDetail() {
	        _classCallCheck(this, RightDetail);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(RightDetail).call(this));
	    }
	
	    _createClass(RightDetail, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                this.props.compent
	            );
	        }
	    }]);
	
	    return RightDetail;
	}(_react.Component);
	
	;
	
	exports.default = RightDetail;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Foot = function (_Component) {
	    _inherits(Foot, _Component);
	
	    function Foot() {
	        _classCallCheck(this, Foot);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Foot).call(this));
	    }
	
	    _createClass(Foot, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { id: "foot" },
	                "this is Foot"
	            );
	        }
	    }]);
	
	    return Foot;
	}(_react.Component);
	
	;
	
	exports.default = Foot;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.24.0/css-loader/index.js!./../../../node_modules/.npminstall/sass-loader/4.0.2/sass-loader/index.js?sourceMap!./reset.scss", function() {
				var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.24.0/css-loader/index.js!./../../../node_modules/.npminstall/sass-loader/4.0.2/sass-loader/index.js?sourceMap!./reset.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  margin: 0px;\n  padding: 0px;\n  list-style: none; }\n", ""]);
	
	// exports


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.24.0/css-loader/index.js!./../../../node_modules/.npminstall/sass-loader/4.0.2/sass-loader/index.js?sourceMap!./index.scss", function() {
				var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.24.0/css-loader/index.js!./../../../node_modules/.npminstall/sass-loader/4.0.2/sass-loader/index.js?sourceMap!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, "#head {\n  height: 30px;\n  background: gray; }\n\n#body {\n  overflow: hidden; }\n\n#foot {\n  height: 30px;\n  background: gray; }\n\n.leftNav {\n  width: 80px;\n  border: 1px solid green;\n  float: left; }\n", ""]);
	
	// exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Login = function (_Component) {
	    _inherits(Login, _Component);
	
	    function Login() {
	        _classCallCheck(this, Login);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Login).call(this));
	    }
	
	    _createClass(Login, [{
	        key: 'login',
	        value: function login() {
	            window.location.hash = 'index';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'login' },
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    '姓名：',
	                    _react2.default.createElement('input', { type: 'text' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    '密码：',
	                    _react2.default.createElement('input', { type: 'password' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement('input', { type: 'button', value: '登录', onClick: this.login })
	                )
	            );
	        }
	    }]);
	
	    return Login;
	}(_react.Component);
	
	;
	
	exports.default = Login;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProductList = function (_Component) {
	    _inherits(ProductList, _Component);
	
	    function ProductList() {
	        _classCallCheck(this, ProductList);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ProductList).call(this));
	    }
	
	    _createClass(ProductList, [{
	        key: 'productAdd',
	        value: function productAdd() {
	            window.location.hash = 'productAdd';
	        }
	    }, {
	        key: 'productDetail',
	        value: function productDetail() {
	            window.location.hash = 'productDetail';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement('input', { type: 'button', value: '添加', onClick: this.productAdd })
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'span',
	                            null,
	                            'Car 100$'
	                        ),
	                        _react2.default.createElement('input', { type: 'button', value: '查看详情', onClick: this.productDetail })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return ProductList;
	}(_react.Component);
	
	;
	
	exports.default = ProductList;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _underscore = __webpack_require__(33);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _reactValidation = __webpack_require__(34);
	
	var _reactValidation2 = _interopRequireDefault(_reactValidation);
	
	var _reactRedux = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//验证插件
	
	//扩展Validation的规则
	Object.assign(_reactValidation2.default.rules, {
	    required: {
	        rule: function rule(value, component, form) {
	            return value.trim();
	        },
	        hint: function hint(value) {
	            return _react2.default.createElement(
	                'span',
	                { className: 'form-error is-visible' },
	                'Required'
	            );
	        }
	    },
	    email: {
	        rule: function rule(value) {
	            return (/^[123]+$/.test(value)
	            );
	        },
	        hint: function hint(value) {
	            return _react2.default.createElement(
	                'span',
	                { className: 'form-error is-visible' },
	                value,
	                ' isnt an Email.'
	            );
	        }
	    },
	    init: {
	        rule: function rule(value, component, form) {
	            return (/^[\d]+$/.test(value)
	            );
	        },
	        hint: function hint(value) {
	            return _react2.default.createElement(
	                'span',
	                { className: 'form-error is-visible' },
	                '请输入整数'
	            );
	        }
	    },
	    password: {
	        rule: function rule(value, component, form) {
	            // form.state.states[name] - name of corresponding field
	            var password = form.state.states.password;
	            var passwordConfirm = form.state.states.passwordConfirm;
	            // isUsed, isChanged - public properties
	            var isBothUsed = password && passwordConfirm && password.isUsed && passwordConfirm.isUsed;
	            var isBothChanged = isBothUsed && password.isChanged && passwordConfirm.isChanged;
	
	            if (!isBothUsed || !isBothChanged) {
	                return true;
	            }
	
	            return password.value === passwordConfirm.value;
	        },
	        hint: function hint(value) {
	            return _react2.default.createElement(
	                'span',
	                { className: 'form-error is-visible' },
	                'Passwords should be equal.'
	            );
	        }
	    }
	});
	
	var AddProduct = function (_Component) {
	    _inherits(AddProduct, _Component);
	
	    function AddProduct() {
	        _classCallCheck(this, AddProduct);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(AddProduct).call(this));
	    }
	
	    _createClass(AddProduct, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            console.log('productAdd 即将加载');
	
	            var dispatch = this.props.dispatch;
	
	            dispatch({
	                type: 'product_add_state'
	            });
	        }
	    }, {
	        key: 'submit',
	        value: function submit() {
	
	            //校验全部
	            var res = this.refs.form.validateAll();
	
	            if (_underscore2.default.isEmpty(res)) {
	                window.location.hash = 'productList';
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	
	            // 通过调用 connect() 注入:
	            var _props = this.props;
	            var dispatch = _props.dispatch;
	            var visibleTodos = _props.visibleTodos;
	            var visibilityFilter = _props.visibilityFilter;
	
	            console.log('product');
	            console.log(visibleTodos);
	
	            return _react2.default.createElement(
	                _reactValidation2.default.components.Form,
	                { ref: 'form' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'login' },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        '名称：',
	                        _react2.default.createElement(_reactValidation2.default.components.Input, { type: 'text',
	                            value: '',
	                            name: 'name',
	                            validations: ['required', 'email'] })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        '价格：',
	                        _react2.default.createElement(_reactValidation2.default.components.Input, { type: 'text',
	                            value: '',
	                            name: 'price',
	                            validations: ['required', 'init'] })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement('input', { type: 'button', value: '提交', onClick: this.submit.bind(this) }),
	                        _react2.default.createElement('input', { type: 'button', value: '1', id: '1' }),
	                        _react2.default.createElement('input', { type: 'button', value: '2', id: '2' })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return AddProduct;
	}(_react.Component);
	
	;
	
	exports.default = (0, _reactRedux.connect)(function (state /*全局state*/) {
	
	    //return  给当前组件  添加属性（根据需要，从全局state中选）
	    return {
	        visibleTodos: state,
	        visibilityFilter: state
	    };
	})(AddProduct);
	//export default AddProduct;

	/*

	 */

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = window._Lib["underscore"];

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = window._Lib["react-validation"];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(36);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	var _reactAddonsTransitionGroup = __webpack_require__(37);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(38);
	
	var ProductDetail = function (_Component) {
	    _inherits(ProductDetail, _Component);
	
	    function ProductDetail() {
	        _classCallCheck(this, ProductDetail);
	
	        //相当于getInitialState
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProductDetail).call(this));
	
	        _this.state = {
	            items: ['hello', 'world', 'click', 'me']
	        };
	        return _this;
	    }
	
	    _createClass(ProductDetail, [{
	        key: 'handleAdd',
	
	        /*
	        这里不能写getInitialState，会报错
	        getInitialState() {
	            return {a:1};
	        };*/
	
	        value: function handleAdd() {
	            var newItems = this.state.items.concat([prompt('Enter some text')]);
	            this.setState({ items: newItems });
	        }
	    }, {
	        key: 'handleRemove',
	        value: function handleRemove(i) {
	            var newItems = this.state.items;
	            newItems.splice(i, 1);
	            this.setState({ items: newItems });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	
	            var items = this.state.items.map(function (item, i) {
	                return _react2.default.createElement(
	                    'div',
	                    { key: item, className: 'red',
	                        onClick: this.handleRemove.bind(this, i) },
	                    item
	                );
	            }.bind(this));
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    'Car'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    '100'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    'Detail'
	                ),
	                _react2.default.createElement(
	                    _reactAddonsCssTransitionGroup2.default,
	                    { transitionName: 'example',
	                        transitionEnterTimeout: 500,
	                        transitionLeaveTimeout: 300 },
	                    items
	                )
	            );
	        }
	    }]);
	
	    return ProductDetail;
	}(_react.Component);
	
	;
	
	exports.default = ProductDetail;

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = window._Lib["react-addons-css-transition-group"];

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = window._Lib["react-addons-transition-group"];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(39);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.24.0/css-loader/index.js!./../../../node_modules/.npminstall/sass-loader/4.0.2/sass-loader/index.js?sourceMap!./detail.scss", function() {
				var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.24.0/css-loader/index.js!./../../../node_modules/.npminstall/sass-loader/4.0.2/sass-loader/index.js?sourceMap!./detail.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".red {\n  height: 50px;\n  width: 100px;\n  background: gray; }\n\n.example-enter {\n  opacity: 0.01;\n  transition: opacity .5s ease-in; }\n\n.example-enter.example-enter-active {\n  opacity: 1; }\n\n.example-leave {\n  opacity: 1;\n  transition: opacity .5s ease-in; }\n\n.example-leave.example-leave-active {\n  opacity: 0.01; }\n", ""]);
	
	// exports


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(5);
	
	var _redux = __webpack_require__(4);
	
	var _isomorphicFetch = __webpack_require__(41);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _OrderActions = __webpack_require__(42);
	
	var TodoActionCreators = _interopRequireWildcard(_OrderActions);
	
	var _popagation = __webpack_require__(43);
	
	var _popagation2 = _interopRequireDefault(_popagation);
	
	var _order_search = __webpack_require__(46);
	
	var _order_search2 = _interopRequireDefault(_order_search);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//分页
	
	//分页
	
	var orderList = function (_Component) {
	    _inherits(orderList, _Component);
	
	    function orderList() {
	        _classCallCheck(this, orderList);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(orderList).call(this));
	    }
	
	    _createClass(orderList, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.getOrderList({
	                pageNum: 1,
	                pageSize: 10
	            });
	        }
	    }, {
	        key: 'getOrderList',
	        value: function getOrderList(opts) {
	            var dispatch = this.props.dispatch;
	
	            var action = TodoActionCreators.getOrderList(opts);
	            dispatch(action);
	        }
	    }, {
	        key: 'addOrder',
	        value: function addOrder() {
	            var _this2 = this;
	
	            (0, _isomorphicFetch2.default)('./data/order/order_add.json').then(function (response) {
	                return response.json();
	            }).then(function (data) {
	                if (data.status == 200) {
	
	                    _this2.getOrderList({
	                        pageNum: 1,
	                        pageSize: 10
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var that = this;
	
	            // 通过调用 connect() 注入:
	            var _props = this.props;
	            var dispatch = _props.dispatch;
	            var user = _props.user;
	            var orderList = _props.orderList;
	            var popagation = _props.popagation;
	
	            var boundActionCreators = (0, _redux.bindActionCreators)(TodoActionCreators, dispatch);
	
	            if (orderList.data && orderList.data.length) {
	                var ordersHTML = orderList.data.map(function (ele, i) {
	                    return _react2.default.createElement(
	                        'div',
	                        { key: i },
	                        ele.text
	                    );
	                });
	            };
	
	            //分页配置
	            var popagationConfig = {
	                callback: function callback() {
	
	                    that.getOrderList({
	                        pageNum: popagation.pageNum,
	                        pageSize: popagation.pageSize
	                    });
	                }
	            };
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_order_search2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    ordersHTML
	                ),
	                _react2.default.createElement(_popagation2.default, { config: popagationConfig }),
	                _react2.default.createElement('input', { type: 'button', value: '添加', onClick: this.addOrder.bind(this) })
	            );
	        }
	    }]);
	
	    return orderList;
	}(_react.Component);
	
	;
	
	//将react组件与 redux连接起来111244446777888
	exports.default = (0, _reactRedux.connect)(function (state /*全局state*/) {
	
	    //return  给当前组件  添加属性（根据需要，从全局state中选）
	    //将redux的 state 变成 react组件的属性(同时，redux 的dispatch等方法也被注入到组件里面)
	    return {
	        user: state.user,
	        orderList: state.orderList,
	        popagation: state.popagation
	    };
	})(orderList);
	//export default orderList;

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = window._Lib["isomorphic-fetch"];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getOrderList = getOrderList;
	
	var _reduxThunk = __webpack_require__(6);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _isomorphicFetch = __webpack_require__(41);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	     会有非常多的action
	
	        解决办法：
	            1. type 定义成常量，防止重复
	            2. action 集中放置，方便管理
	*/
	
	//action creator 和 网络请求结合起来( 让action生成器 支持返回函数，并且提供dispatch等参数 )
	
	var GET_ORDERLIST = 'GET_ORDERLIST';
	//action生成器
	
	//让所有浏览器支持fetch （fetch 是 新一代的ajax）
	function getOrderList(opts) {
	
	    /*//1.  返回action对象（同步）
	        return {
	            type: GET_ORDERLIST,
	            pageNum: 1,
	            pageSize: 10,
	            msg
	        };
	    */
	    //2. 返回函数( 异步，使用redux-thunk插件后，可以返回函数 )
	    return function (dispatch /*dispatch是redux-thunk插件提供的*/, getState) {
	
	        //开始请求
	        dispatch({
	            type: 'REQUEST_ORDER_START'
	        });
	
	        var url = './data/order/orderList.json';
	        return (0, _isomorphicFetch2.default)(url).then(function (response) {
	            return response.json();
	        }).then(function (data) {
	
	            //请求成功(将数据通过action传给state)
	            dispatch({
	                type: 'REQUEST_ORDER_SUCCESS',
	                data: data.data
	            });
	        });
	    };
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(44);
	
	var Popagation = function (_Component) {
	    _inherits(Popagation, _Component);
	
	    function Popagation() {
	        _classCallCheck(this, Popagation);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Popagation).call(this));
	    }
	
	    _createClass(Popagation, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'clickFn',
	        value: function clickFn(ev) {
	
	            // 通过调用 connect() 注入:
	            var dispatch = this.props.dispatch;
	
	            //修改分页状态
	
	            dispatch({
	                type: 'CHANGE_PAGENUM',
	                pageNum: ev.target.value
	            });
	
	            //调取数据
	            this.props.config.callback();
	        }
	    }, {
	        key: 'blurFn',
	        value: function blurFn(ev) {
	
	            // 通过调用 connect() 注入:
	            var dispatch = this.props.dispatch;
	            //修改分页状态
	
	            dispatch({
	                type: 'CHANGE_PAGESIZE',
	                pageSize: ev.target.value
	            });
	
	            //调取数据
	            this.props.config.callback();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var pageNum = _props.pageNum;
	            var pageSize = _props.pageSize;
	            var totalNum = _props.totalNum;
	
	            //解决数字不能循环的问题
	
	            var arr = [];
	            for (var i = 0; i < Math.ceil(totalNum / pageSize); i++) {
	                arr[i] = i;
	            };
	
	            var btnsHtml = arr.map(function (ele, i) {
	
	                if (pageNum == i + 1) {
	                    var classStr = 'active';
	                } else {
	                    var classStr = '';
	                }
	
	                return _react2.default.createElement('input', { className: classStr,
	                    type: 'button', key: i, value: i + 1, onClick: _this2.clickFn.bind(_this2) });
	            });
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'react-popagation-box' },
	                _react2.default.createElement('input', { type: 'button', value: '首页', onClick: this.clickFn.bind(this) }),
	                btnsHtml,
	                _react2.default.createElement('input', { type: 'text', onBlur: this.blurFn.bind(this) }),
	                _react2.default.createElement('input', { type: 'button', value: '末页', onClick: this.clickFn.bind(this) })
	            );
	        }
	    }]);
	
	    return Popagation;
	}(_react.Component);
	
	;
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        pageNum: state.popagation.pageNum,
	        pageSize: state.popagation.pageSize,
	        totalNum: state.popagation.totalNum
	    };
	})(Popagation);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(45);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/.npminstall/css-loader/0.24.0/css-loader/index.js!./../../../../node_modules/.npminstall/sass-loader/4.0.2/sass-loader/index.js?sourceMap!./popagation.scss", function() {
				var newContent = require("!!./../../../../node_modules/.npminstall/css-loader/0.24.0/css-loader/index.js!./../../../../node_modules/.npminstall/sass-loader/4.0.2/sass-loader/index.js?sourceMap!./popagation.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, ".react-popagation-box .active {\n  background: green; }\n", ""]);
	
	// exports


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(5);
	
	var _redux = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var orderSearch = function (_Component) {
	    _inherits(orderSearch, _Component);
	
	    function orderSearch() {
	        _classCallCheck(this, orderSearch);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(orderSearch).call(this));
	    }
	
	    _createClass(orderSearch, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var that = this;
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement('input', { type: 'text', value: '姓名', id: '' }),
	                _react2.default.createElement('input', { type: 'text', value: '状态', id: '' }),
	                _react2.default.createElement('input', { type: 'button', value: '搜索', id: '' })
	            );
	        }
	    }]);
	
	    return orderSearch;
	}(_react.Component);
	
	;
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        user: state.user,
	        orderList: state.orderList
	    };
	})(orderSearch);

/***/ }
]);
//# sourceMappingURL=index.js.map