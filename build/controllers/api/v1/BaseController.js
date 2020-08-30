"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var BaseController = (0, _express.Router)();
BaseController.get('/', function (request, response) {
  return response.json('Hello World');
});
var _default = BaseController;
exports["default"] = _default;
//# sourceMappingURL=BaseController.js.map