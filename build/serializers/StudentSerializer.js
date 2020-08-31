"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _StudentResponse = _interopRequireDefault(require("../responses/StudentResponse"));

var StudentSerializer = /*#__PURE__*/function () {
  function StudentSerializer() {
    (0, _classCallCheck2["default"])(this, StudentSerializer);
  }

  (0, _createClass2["default"])(StudentSerializer, null, [{
    key: "toResource",
    value: function toResource(studentObject) {
      var studentResource = new _StudentResponse["default"](studentObject.id, studentObject.firstName, studentObject.lastName);
      return studentResource;
    }
  }]);
  return StudentSerializer;
}();

var _default = StudentSerializer;
exports["default"] = _default;
//# sourceMappingURL=StudentSerializer.js.map