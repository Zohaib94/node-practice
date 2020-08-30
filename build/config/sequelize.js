"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var sequelize = new _sequelize["default"]({
  dialect: 'sqlite',
  storage: './database.sqlite'
});
var _default = sequelize;
exports["default"] = _default;
//# sourceMappingURL=sequelize.js.map