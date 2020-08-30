"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("../routes"));

var _sequelize = _interopRequireDefault(require("../sequelize"));

var BASE_API_URL = '/api/v1';
var WELCOME_API_URL = "".concat(BASE_API_URL, "/base");
var app = (0, _express["default"])(); // cors to allow cross origin requests

app.use((0, _cors["default"])()); // Allows to parse JSON payloads in body with correct content type

app.use(_express["default"].json()); // Allows to parse URL Encoded data with querystring node module

app.use(_express["default"].urlencoded({
  extended: true
})); // Mounts specified middleware at path
// Order is necessary
// Default is root path

app.use(WELCOME_API_URL, _routes["default"].BaseController);
var _default = {
  app: app,
  sequelize: _sequelize["default"]
};
exports["default"] = _default;
//# sourceMappingURL=index.js.map