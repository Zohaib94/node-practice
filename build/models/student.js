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

var Student = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(Student, _Model);

  var _super = _createSuper(Student);

  function Student() {
    (0, _classCallCheck2["default"])(this, Student);
    return _super.apply(this, arguments);
  }

  return Student;
}(_sequelize.Model);

Student.init({
  firstName: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    max: 20
  },
  lastName: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    max: 20
  }
}, {
  sequelize: _sequelize2["default"],
  modelName: 'Students'
});
var _default = Student;
exports["default"] = _default;
//# sourceMappingURL=student.js.map