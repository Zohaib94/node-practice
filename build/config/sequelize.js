"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var DB_PATH = process.env.NODE_ENV === 'test' ? process.env.DB_PATH_TEST : process.env.DB_PATH;
var sequelize = new _sequelize["default"]({
  dialect: process.env.DB_DIALECT,
  storage: DB_PATH
});
var _default = sequelize;
exports["default"] = _default;
//# sourceMappingURL=sequelize.js.map