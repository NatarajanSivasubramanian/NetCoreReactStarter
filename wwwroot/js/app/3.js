(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./components/routes/protected/users.js":
/*!**********************************************!*\
  !*** ./components/routes/protected/users.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactAutoForm = __webpack_require__(/*! react-auto-form */ \"../../node_modules/react-auto-form/es/index.js\");\n\nvar _reactAutoForm2 = _interopRequireDefault(_reactAutoForm);\n\nvar _ApiWidget = __webpack_require__(/*! ../../shared/ApiWidget */ \"./components/shared/ApiWidget.js\");\n\nvar _ApiWidget2 = _interopRequireDefault(_ApiWidget);\n\nvar _axios = __webpack_require__(/*! axios */ \"../../node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Users = function (_Component) {\n  _inherits(Users, _Component);\n\n  function Users(props) {\n    _classCallCheck(this, Users);\n\n    var _this = _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).call(this, props));\n\n    _this.onSubmit = _this.onSubmit.bind(_this);\n    return _this;\n  }\n\n  _createClass(Users, [{\n    key: 'onSubmit',\n    value: function onSubmit(event, data) {\n      event.preventDefault();\n\n      var apiConfig = _ApiWidget2.default.getRequestTemplate();\n\n      apiConfig.url = \"/api/proxy\" + '?url=$Config.jsonPlaceHolderBasePath$/users';\n      apiConfig.method = 'get';\n      apiConfig.headers = { 'userid': '$Jwt.nameid$', 'givenName': '$Jwt.given_name$' };\n\n      var onSuccess = function onSuccess(data) {\n        console.log(data);\n      };\n\n      this.refs.btnGetUsers.executeRequest(apiConfig, onSuccess);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'card border-primary' },\n        _react2.default.createElement(\n          'div',\n          { className: 'card-header text-white bg-primary' },\n          'Users List'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'card-body' },\n          _react2.default.createElement(\n            'h5',\n            { className: 'card-title' },\n            'List is fetched from API'\n          ),\n          _react2.default.createElement(\n            'p',\n            { className: 'card-text' },\n            'Server is proxing the request'\n          ),\n          _react2.default.createElement(\n            _reactAutoForm2.default,\n            { onSubmit: this.onSubmit, trimOnSubmit: true },\n            _react2.default.createElement(\n              'div',\n              { className: 'form-group' },\n              _react2.default.createElement(\n                'div',\n                { className: 'col-sm-12 controls' },\n                _react2.default.createElement(_ApiWidget2.default, {\n                  Component: function Component() {\n                    return _react2.default.createElement(\n                      'button',\n                      { type: 'submit', className: 'btn btn-primary' },\n                      ' Get Users '\n                    );\n                  },\n                  ref: 'btnGetUsers'\n                })\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Users;\n}(_react.Component);\n\nexports.default = Users;\nmodule.exports = exports['default'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JvdXRlcy9wcm90ZWN0ZWQvdXNlcnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQXBwL3NyYy9jb21wb25lbnRzL3JvdXRlcy9wcm90ZWN0ZWQvdXNlcnMuanM/NTQzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXV0b0Zvcm0gZnJvbSAncmVhY3QtYXV0by1mb3JtJztcclxuaW1wb3J0IEFwaVdpZGdldCBmcm9tICcuLi8uLi9zaGFyZWQvQXBpV2lkZ2V0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIFVzZXJzIGV4dGVuZHMgQ29tcG9uZW50XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKVxyXG4gICAge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gXHJcbiAgICBvblN1Ym1pdChldmVudCwgZGF0YSlcclxuICAgIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGxldCBhcGlDb25maWcgPSBBcGlXaWRnZXQuZ2V0UmVxdWVzdFRlbXBsYXRlKCk7XHJcblxyXG4gICAgICBhcGlDb25maWcudXJsID0gX19nbG9iYWxzLlBST1hZX1VSSSArICc/dXJsPSRDb25maWcuanNvblBsYWNlSG9sZGVyQmFzZVBhdGgkL3VzZXJzJztcclxuICAgICAgYXBpQ29uZmlnLm1ldGhvZCA9ICdnZXQnO1xyXG4gICAgICBhcGlDb25maWcuaGVhZGVycyA9IHsgJ3VzZXJpZCcgOiAnJEp3dC5uYW1laWQkJywgJ2dpdmVuTmFtZScgOiAnJEp3dC5naXZlbl9uYW1lJCcgfVxyXG5cclxuICAgICAgbGV0IG9uU3VjY2VzcyA9IChkYXRhKSA9PlxyXG4gICAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucmVmcy5idG5HZXRVc2Vycy5leGVjdXRlUmVxdWVzdChhcGlDb25maWcsIG9uU3VjY2Vzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYm9yZGVyLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciB0ZXh0LXdoaXRlIGJnLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICBVc2VycyBMaXN0XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+TGlzdCBpcyBmZXRjaGVkIGZyb20gQVBJPC9oNT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5TZXJ2ZXIgaXMgcHJveGluZyB0aGUgcmVxdWVzdDwvcD5cclxuICAgICAgICAgICAgICA8QXV0b0Zvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IHRyaW1PblN1Ym1pdD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcGlXaWRnZXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBvbmVudD17KCkgPT4ge3JldHVybig8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj4gR2V0IFVzZXJzIDwvYnV0dG9uPil9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPSdidG5HZXRVc2VycydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0F1dG9Gb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQURBO0FBREE7QUFEQTtBQUhBO0FBSkE7QUFvQkE7Ozs7OztBQUdBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/routes/protected/users.js\n");

/***/ }),

/***/ "./components/shared/ApiWidget.js":
/*!****************************************!*\
  !*** ./components/shared/ApiWidget.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"../../node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _qs = __webpack_require__(/*! qs */ \"../../node_modules/qs/lib/index.js\");\n\nvar _qs2 = _interopRequireDefault(_qs);\n\nvar _reactNotifyToast = __webpack_require__(/*! react-notify-toast */ \"../../node_modules/react-notify-toast/bin/notify.js\");\n\nvar _loadingGear = __webpack_require__(/*! ../../images/loadingGear.gif */ \"./images/loadingGear.gif\");\n\nvar _loadingGear2 = _interopRequireDefault(_loadingGear);\n\nvar _error = __webpack_require__(/*! ../../images/error.gif */ \"./images/error.gif\");\n\nvar _error2 = _interopRequireDefault(_error);\n\nvar _constants = __webpack_require__(/*! constants */ \"../../node_modules/constants-browserify/constants.json\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar APIWidget = function (_Component) {\n    _inherits(APIWidget, _Component);\n\n    function APIWidget(props) {\n        _classCallCheck(this, APIWidget);\n\n        var _this = _possibleConstructorReturn(this, (APIWidget.__proto__ || Object.getPrototypeOf(APIWidget)).call(this, props));\n\n        _this.state = {\n            isBusy: false,\n            hasError: false,\n            errorMessage: null\n        };\n        return _this;\n    }\n\n    _createClass(APIWidget, [{\n        key: 'updateWidgetSettings',\n        value: function updateWidgetSettings(config) {\n            var widgetSettings = {\n                transformRequest: null,\n                transformResponse: null,\n                timeout: 2000,\n                withCredentials: false, // default\n                adapter: null,\n                auth: null,\n                paramsSerializer: function paramsSerializer(params) {\n                    return _qs2.default.stringify(params, { arrayFormat: 'brackets' });\n                },\n                // `onUploadProgress` allows handling of progress events for uploads\n                onUploadProgress: function onUploadProgress(progressEvent) {\n                    // Do whatever you want with the native progress event\n                },\n                // `onDownloadProgress` allows handling of progress events for downloads\n                onDownloadProgress: function onDownloadProgress(progressEvent) {\n                    // Do whatever you want with the native progress event\n                },\n                params: config.queryParams,\n                data: config.body\n            };\n\n            var updatedConfig = _extends({}, config, widgetSettings);\n            return updatedConfig;\n        }\n    }, {\n        key: 'updateExecutionState',\n        value: function updateExecutionState(updatedProps) {\n            this.setState(_extends({}, updatedProps));\n            if (updatedProps.hasOwnProperty('hasError') && updatedProps.hasError == true) {\n                _reactNotifyToast.notify.show(updatedProps.errorMessage, \"error\");\n            }\n        }\n    }, {\n        key: 'executeRequest',\n        value: function executeRequest(config, onSuccess) {\n            var _this2 = this;\n\n            this.setState({ isBusy: true, hasError: false });\n            var updatedConfig = this.updateWidgetSettings(config);\n\n            _axios2.default.request(updatedConfig).then(function (response) {\n                if (response.status == \"200\") {\n                    _this2.updateExecutionState({ isBusy: false });\n                    onSuccess(response.data);\n                } else {\n                    _this2.updateExecutionState({ isBusy: false, hasError: true, errorMessage: response.data.message });\n                }\n            }).catch(function (error) {\n                var message = error.message;\n                _this2.updateExecutionState({ isBusy: false, hasError: true, errorMessage: message });\n            });\n        }\n    }, {\n        key: 'componentWillReceiveProps',\n        value: function componentWillReceiveProps(nextProps) {\n            this.setState(_extends({}, nextProps));\n        }\n    }, {\n        key: 'getImageProperties',\n        value: function getImageProperties() {\n            return {\n                src: this.state.hasError ? _error2.default : _loadingGear2.default,\n                title: this.state.hasError ? this.state.errorMessage : null,\n                alt: this.state.hasError ? 'Error' : 'Loading'\n            };\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var DynamicComponent = this.props.Component;\n\n            if (!this.state.isBusy && !this.state.hasError) return _react2.default.createElement(DynamicComponent, null);\n\n            var imageProps = this.getImageProperties();\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'd-inline-flex' },\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(DynamicComponent, null)\n                ),\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement('img', _extends({}, imageProps, { style: { height: '30px', width: '30px', marginLeft: '5px' } }))\n                )\n            );\n        }\n    }], [{\n        key: 'getRequestTemplate',\n        value: function getRequestTemplate() {\n            //Credit : https://github.com/axios/axios\n            return {\n                url: null,\n                method: 'get', // default\n                baseURL: '',\n                headers: null,\n                queryParams: {},\n                body: {},\n                responseType: 'json', // default\n                responseEncoding: 'utf8', // default\n                cancelToken: null\n            };\n        }\n    }]);\n\n    return APIWidget;\n}(_react.Component);\n\nexports.default = APIWidget;\nmodule.exports = exports['default'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NoYXJlZC9BcGlXaWRnZXQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQXBwL3NyYy9jb21wb25lbnRzL3NoYXJlZC9BcGlXaWRnZXQuanM/MmNmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFFzIGZyb20gJ3FzJztcclxuaW1wb3J0IHtub3RpZnl9IGZyb20gJ3JlYWN0LW5vdGlmeS10b2FzdCc7XHJcbmltcG9ydCBpbWdfTG9hZGluZ0dlYXIgZnJvbSAnLi4vLi4vaW1hZ2VzL2xvYWRpbmdHZWFyLmdpZic7XHJcbmltcG9ydCBpbWdfRXJyb3IgZnJvbSAnLi4vLi4vaW1hZ2VzL2Vycm9yLmdpZic7XHJcbmltcG9ydCB7IFNTTF9PUF9ORVRTQ0FQRV9ERU1PX0NJUEhFUl9DSEFOR0VfQlVHIH0gZnJvbSAnY29uc3RhbnRzJztcclxuXHJcbmNsYXNzIEFQSVdpZGdldCBleHRlbmRzIENvbXBvbmVudFxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcylcclxuICAgIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZT1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlzQnVzeSAgICAgIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGhhc0Vycm9yICAgIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA6IG51bGwsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRSZXF1ZXN0VGVtcGxhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIC8vQ3JlZGl0IDogaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogbnVsbCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JywgLy8gZGVmYXVsdFxyXG4gICAgICAgICAgICBiYXNlVVJMOiAnJyxcclxuICAgICAgICAgICAgaGVhZGVyczogbnVsbCxcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHt9LFxyXG4gICAgICAgICAgICBib2R5OiB7fSxcclxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsIC8vIGRlZmF1bHRcclxuICAgICAgICAgICAgcmVzcG9uc2VFbmNvZGluZzogJ3V0ZjgnLCAvLyBkZWZhdWx0XHJcbiAgICAgICAgICAgIGNhbmNlbFRva2VuOiBudWxsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlV2lkZ2V0U2V0dGluZ3MoY29uZmlnKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB3aWRnZXRTZXR0aW5ncyA9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm1SZXF1ZXN0OiBudWxsLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1SZXNwb25zZTogbnVsbCxcclxuICAgICAgICAgICAgdGltZW91dDogMjAwMCxcclxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSwgLy8gZGVmYXVsdFxyXG4gICAgICAgICAgICBhZGFwdGVyOiBudWxsLFxyXG4gICAgICAgICAgICBhdXRoOiBudWxsLFxyXG4gICAgICAgICAgICBwYXJhbXNTZXJpYWxpemVyOiBmdW5jdGlvbihwYXJhbXMpIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFFzLnN0cmluZ2lmeShwYXJhbXMsIHthcnJheUZvcm1hdDogJ2JyYWNrZXRzJ30pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIGBvblVwbG9hZFByb2dyZXNzYCBhbGxvd3MgaGFuZGxpbmcgb2YgcHJvZ3Jlc3MgZXZlbnRzIGZvciB1cGxvYWRzXHJcbiAgICAgICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IGZ1bmN0aW9uIChwcm9ncmVzc0V2ZW50KSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gRG8gd2hhdGV2ZXIgeW91IHdhbnQgd2l0aCB0aGUgbmF0aXZlIHByb2dyZXNzIGV2ZW50XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gYG9uRG93bmxvYWRQcm9ncmVzc2AgYWxsb3dzIGhhbmRsaW5nIG9mIHByb2dyZXNzIGV2ZW50cyBmb3IgZG93bmxvYWRzXHJcbiAgICAgICAgICAgIG9uRG93bmxvYWRQcm9ncmVzczogZnVuY3Rpb24gKHByb2dyZXNzRXZlbnQpIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBEbyB3aGF0ZXZlciB5b3Ugd2FudCB3aXRoIHRoZSBuYXRpdmUgcHJvZ3Jlc3MgZXZlbnRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFyYW1zIDogY29uZmlnLnF1ZXJ5UGFyYW1zLFxyXG4gICAgICAgICAgICBkYXRhICAgOiBjb25maWcuYm9keVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCB1cGRhdGVkQ29uZmlnID0gey4uLmNvbmZpZywgLi4ud2lkZ2V0U2V0dGluZ3N9O1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVkQ29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUV4ZWN1dGlvblN0YXRlKHVwZGF0ZWRQcm9wcylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi51cGRhdGVkUHJvcHN9KTtcclxuICAgICAgICBpZiAodXBkYXRlZFByb3BzLmhhc093blByb3BlcnR5KCdoYXNFcnJvcicpICYmIHVwZGF0ZWRQcm9wcy5oYXNFcnJvciA9PSB0cnVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbm90aWZ5LnNob3codXBkYXRlZFByb3BzLmVycm9yTWVzc2FnZSwgXCJlcnJvclwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhlY3V0ZVJlcXVlc3QoY29uZmlnLCBvblN1Y2Nlc3MpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNCdXN5IDogdHJ1ZSwgaGFzRXJyb3IgOiBmYWxzZX0pO1xyXG4gICAgICAgIGxldCB1cGRhdGVkQ29uZmlnID0gdGhpcy51cGRhdGVXaWRnZXRTZXR0aW5ncyhjb25maWcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF4aW9zLnJlcXVlc3QodXBkYXRlZENvbmZpZylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IFwiMjAwXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRXhlY3V0aW9uU3RhdGUoe2lzQnVzeSA6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3MocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUV4ZWN1dGlvblN0YXRlKHtpc0J1c3kgOiBmYWxzZSwgIGhhc0Vycm9yIDogdHJ1ZSwgZXJyb3JNZXNzYWdlIDogcmVzcG9uc2UuZGF0YS5tZXNzYWdlfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRXhlY3V0aW9uU3RhdGUoe2lzQnVzeSA6IGZhbHNlLCAgaGFzRXJyb3IgOiB0cnVlLCBlcnJvck1lc3NhZ2UgOiBtZXNzYWdlIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLm5leHRQcm9wc30pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlUHJvcGVydGllcygpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYyA6IHRoaXMuc3RhdGUuaGFzRXJyb3IgPyBpbWdfRXJyb3IgOiBpbWdfTG9hZGluZ0dlYXIsXHJcbiAgICAgICAgICAgIHRpdGxlIDogdGhpcy5zdGF0ZS5oYXNFcnJvciA/IHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlIDogbnVsbCxcclxuICAgICAgICAgICAgYWx0IDogdGhpcy5zdGF0ZS5oYXNFcnJvciA/ICdFcnJvcicgOiAnTG9hZGluZydcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBEeW5hbWljQ29tcG9uZW50ID0gdGhpcy5wcm9wcy5Db21wb25lbnQ7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pc0J1c3kgJiYgIXRoaXMuc3RhdGUuaGFzRXJyb3IpXHJcbiAgICAgICAgICAgIHJldHVybiA8RHluYW1pY0NvbXBvbmVudCAvPjtcclxuXHJcbiAgICAgICAgbGV0IGltYWdlUHJvcHMgPSB0aGlzLmdldEltYWdlUHJvcGVydGllcygpO1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj48RHluYW1pY0NvbXBvbmVudCAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHsuLi5pbWFnZVByb3BzfSBzdHlsZT17eyBoZWlnaHQgOiAnMzBweCcsIHdpZHRoIDogJzMwcHgnLCBtYXJnaW5MZWZ0IDogJzVweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBUElXaWRnZXQ7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBUUE7QUFDQTs7O0FBa0JBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQXRCQTtBQUNBO0FBd0JBO0FBQ0E7QUFDQTs7O0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFGQTtBQU9BOzs7QUFsSEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTs7Ozs7O0FBdUdBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/shared/ApiWidget.js\n");

/***/ }),

/***/ "./images/error.gif":
/*!**************************!*\
  !*** ./images/error.gif ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"2499ce4672314aab10439f4fbdecf61c.gif\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbWFnZXMvZXJyb3IuZ2lmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Vycm9yLmdpZj8xODRmIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjI0OTljZTQ2NzIzMTRhYWIxMDQzOWY0ZmJkZWNmNjFjLmdpZlwiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./images/error.gif\n");

/***/ }),

/***/ "./images/loadingGear.gif":
/*!********************************!*\
  !*** ./images/loadingGear.gif ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e9b95510828b89500fb0d93bcece6980.gif\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbWFnZXMvbG9hZGluZ0dlYXIuZ2lmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2xvYWRpbmdHZWFyLmdpZj83ZTVkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU5Yjk1NTEwODI4Yjg5NTAwZmIwZDkzYmNlY2U2OTgwLmdpZlwiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./images/loadingGear.gif\n");

/***/ })

}]);
//# sourceMappingURL=3.js.map