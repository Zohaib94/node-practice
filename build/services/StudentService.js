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

var _TransactionSerializer = _interopRequireDefault(require("../serializers/TransactionSerializer"));

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
                _context3.next = 8;
                return student.getISICCard();

              case 8:
                isicCard = _context3.sent;

                if (!isicCard) {
                  _context3.next = 13;
                  break;
                }

                throw new Error('Student already has an ISIC Card');

              case 13:
                _context3.next = 15;
                return student.createISICCard(params);

              case 15:
                isicCard = _context3.sent;
                return _context3.abrupt("return", _ISICCardSerializer["default"].toResource(isicCard));

              case 17:
                _context3.next = 22;
                break;

              case 19:
                _context3.prev = 19;
                _context3.t0 = _context3["catch"](0);
                throw new _ErrorResponse["default"](_context3.t0.message, 422);

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 19]]);
      }));

      function createISICCard(_x2, _x3) {
        return _createISICCard.apply(this, arguments);
      }

      return createISICCard;
    }()
  }, {
    key: "generatePayment",
    value: function () {
      var _generatePayment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(studentID, params) {
        var student, isicCard, payment;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _Student["default"].findByPk(studentID);

              case 3:
                student = _context4.sent;

                if (student) {
                  _context4.next = 6;
                  break;
                }

                throw new Error('Student Not Found');

              case 6:
                _context4.next = 8;
                return student.getISICCard();

              case 8:
                isicCard = _context4.sent;

                if (isicCard) {
                  _context4.next = 13;
                  break;
                }

                throw new Error('Student does not have an ISIC Card');

              case 13:
                _context4.next = 15;
                return isicCard.createTransaction(params);

              case 15:
                payment = _context4.sent;
                return _context4.abrupt("return", _TransactionSerializer["default"].toResource(payment));

              case 17:
                _context4.next = 22;
                break;

              case 19:
                _context4.prev = 19;
                _context4.t0 = _context4["catch"](0);
                throw new _ErrorResponse["default"](_context4.t0.message, 422);

              case 22:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 19]]);
      }));

      function generatePayment(_x4, _x5) {
        return _generatePayment.apply(this, arguments);
      }

      return generatePayment;
    }()
  }]);
  return StudentService;
}();

var _default = StudentService;
exports["default"] = _default;
//# sourceMappingURL=StudentService.js.map