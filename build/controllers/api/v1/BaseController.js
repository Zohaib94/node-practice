"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

// Router is isolated instance of middleware and routes capable of only routing and middleware functions
var BaseController = (0, _express.Router)();
BaseController.get('/', function (request, response) {
  return response.json('Hello World');
});
var _default = BaseController;
exports["default"] = _default;
//# sourceMappingURL=BaseController.js.map