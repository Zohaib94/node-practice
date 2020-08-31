"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var ISICCardResponse = function ISICCardResponse() {
  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var cvv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var expiry = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  (0, _classCallCheck2["default"])(this, ISICCardResponse);
  this.number = number;
  this.cvv = cvv;
  this.expiry = expiry;
  this.id = id;
};

var _default = ISICCardResponse;
exports["default"] = _default;
//# sourceMappingURL=ISICCardResponse.js.map