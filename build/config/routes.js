"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseController = _interopRequireDefault(require("../controllers/api/v1/BaseController"));

var _StudentsController = _interopRequireDefault(require("../controllers/api/v1/StudentsController"));

var _default = {
  BaseController: _BaseController["default"],
  StudentsController: _StudentsController["default"]
};
exports["default"] = _default;
//# sourceMappingURL=routes.js.map