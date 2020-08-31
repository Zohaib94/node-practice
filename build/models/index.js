"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Student = _interopRequireDefault(require("./Student"));

var _ISICCard = _interopRequireDefault(require("./ISICCard"));

var _Transaction = _interopRequireDefault(require("./Transaction"));

// One to One
_Student["default"].hasOne(_ISICCard["default"]);

_ISICCard["default"].belongsTo(_Student["default"]); // One to Many


_ISICCard["default"].hasMany(_Transaction["default"]);

_Transaction["default"].belongsTo(_ISICCard["default"]);

var _default = {
  Student: _Student["default"],
  ISICCard: _ISICCard["default"],
  Transaction: _Transaction["default"]
};
exports["default"] = _default;
//# sourceMappingURL=index.js.map