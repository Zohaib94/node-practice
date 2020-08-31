"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _TransactionResponse = _interopRequireDefault(require("../responses/TransactionResponse"));

var TransactionSerializer = /*#__PURE__*/function () {
  function TransactionSerializer() {
    (0, _classCallCheck2["default"])(this, TransactionSerializer);
  }

  (0, _createClass2["default"])(TransactionSerializer, null, [{
    key: "toResource",
    value: function toResource(transactionObject) {
      var paymentResource = new _TransactionResponse["default"](transactionObject.id, transactionObject.amount);
      return paymentResource;
    }
  }]);
  return TransactionSerializer;
}();

var _default = TransactionSerializer;
exports["default"] = _default;
//# sourceMappingURL=TransactionSerializer.js.map