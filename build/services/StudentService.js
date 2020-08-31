"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Student = _interopRequireDefault(require("../models/Student"));

var _StudentSerializer = _interopRequireDefault(require("../serializers/StudentSerializer"));

var _ISICCardSerializer = _interopRequireDefault(require("../serializers/ISICCardSerializer"));

var _ErrorResponse = _interopRequireDefault(require("../responses/ErrorResponse"));

var StudentService = /*#__PURE__*/function () {
  function StudentService() {
    (0, _classCallCheck2["default"])(this, StudentService);
  }

  (0, _createClass2["default"])(StudentService, null, [{
    key: "findAll",
    value: function () {
      var _findAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var students;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _Student["default"].findAll();

              case 3:
                students = _context.sent;
                return _context.abrupt("return", students.map(function (category) {
                  return _StudentSerializer["default"].toResource(category);
                }));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                throw new _ErrorResponse["default"](_context.t0.message, 422);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function findAll() {
        return _findAll.apply(this, arguments);
      }

      return findAll;
    }()
  }, {
    key: "createStudent",
    value: function () {
      var _createStudent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var newStudent;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _Student["default"].create(params);

              case 3:
                newStudent = _context2.sent;
                return _context2.abrupt("return", _StudentSerializer["default"].toResource(newStudent));

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                throw new _ErrorResponse["default"](_context2.t0.message, 422);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function createStudent(_x) {
        return _createStudent.apply(this, arguments);
      }

      return createStudent;
    }()
  }, {
    key: "createISICCard",
    value: function () {
      var _createISICCard = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(studentID, params) {
        var student, isicCard;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _Student["default"].findByPk(studentID);

              case 3:
                student = _context3.sent;

                if (student) {
                  _context3.next = 6;
                  break;
                }

                throw new Error('Student Not Found');

              case 6:
                if (!student.getISICCard()) {
                  _context3.next = 8;
                  break;
                }

                throw new Error('Student already has an ISIC Card');

              case 8:
                _context3.next = 10;
                return student.createISICCard(params);

              case 10:
                isicCard = _context3.sent;
                return _context3.abrupt("return", _ISICCardSerializer["default"].toResource(isicCard));

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](0);
                throw new _ErrorResponse["default"](_context3.t0.message, 422);

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 14]]);
      }));

      function createISICCard(_x2, _x3) {
        return _createISICCard.apply(this, arguments);
      }

      return createISICCard;
    }()
  }]);
  return StudentService;
}();

var _default = StudentService;
exports["default"] = _default;
//# sourceMappingURL=StudentService.js.map