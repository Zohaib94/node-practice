"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var StudentResponse = function StudentResponse() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var firstName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var lastName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  (0, _classCallCheck2["default"])(this, StudentResponse);
  this.firstName = firstName;
  this.lastName = lastName;
  this.id = id;
};

var _default = StudentResponse;
exports["default"] = _default;
//# sourceMappingURL=StudentResponse.js.map