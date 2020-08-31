"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var TransactionResponse = function TransactionResponse() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  (0, _classCallCheck2["default"])(this, TransactionResponse);
  this.amount = amount;
  this.id = id;
};

var _default = TransactionResponse;
exports["default"] = _default;
//# sourceMappingURL=TransactionResponse.js.map