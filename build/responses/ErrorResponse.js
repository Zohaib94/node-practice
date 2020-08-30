"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var ErrorResponse = /*#__PURE__*/function () {
  function ErrorResponse() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Server is facing difficulties at the moment, please try later';
    var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 422;
    (0, _classCallCheck2["default"])(this, ErrorResponse);
    this.success = false;
    this.message = message;
    this.code = code;
  }

  (0, _createClass2["default"])(ErrorResponse, [{
    key: "getResource",
    value: function getResource() {
      return {
        success: this.success,
        message: this.message
      };
    }
  }]);
  return ErrorResponse;
}();

var _default = ErrorResponse;
exports["default"] = _default;
//# sourceMappingURL=ErrorResponse.js.map