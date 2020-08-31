"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(require("../config/sequelize"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ISICCard = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(ISICCard, _Model);

  var _super = _createSuper(ISICCard);

  function ISICCard() {
    (0, _classCallCheck2["default"])(this, ISICCard);
    return _super.apply(this, arguments);
  }

  return ISICCard;
}(_sequelize.Model);

ISICCard.init({
  number: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    max: 16,
    min: 16
  },
  cvv: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    max: 5,
    min: 3
  },
  expiry: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    max: 5,
    min: 3
  }
}, {
  sequelize: _sequelize2["default"],
  modelName: 'ISICCards'
});
var _default = ISICCard;
exports["default"] = _default;
//# sourceMappingURL=ISICCard.js.map