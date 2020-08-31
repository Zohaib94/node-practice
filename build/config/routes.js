"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _BaseController = _interopRequireDefault(require("../controllers/api/v1/BaseController"));

if (process.env.NODE_ENV !== 'production') {
  _dotenv["default"].config();
}

var _default = {
  BaseController: _BaseController["default"]
};
exports["default"] = _default;
//# sourceMappingURL=routes.js.map