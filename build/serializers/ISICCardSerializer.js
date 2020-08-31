"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ISICCardResponse = _interopRequireDefault(require("../responses/ISICCardResponse"));

var ISICCardSerializer = /*#__PURE__*/function () {
  function ISICCardSerializer() {
    (0, _classCallCheck2["default"])(this, ISICCardSerializer);
  }

  (0, _createClass2["default"])(ISICCardSerializer, null, [{
    key: "toResource",
    value: function toResource(isicCardObject) {
      var isicCardResource = new _ISICCardResponse["default"](isicCardObject.number, isicCardObject.cvv, isicCardObject.expiry, isicCardObject.id);
      return isicCardResource;
    }
  }]);
  return ISICCardSerializer;
}();

var _default = ISICCardSerializer;
exports["default"] = _default;
//# sourceMappingURL=ISICCardSerializer.js.map