"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _StudentService = _interopRequireDefault(require("../../../services/StudentService"));

var _SuccessResponse = _interopRequireDefault(require("../../../responses/SuccessResponse"));

var _ISICCardsController = _interopRequireDefault(require("./ISICCardsController"));

// Router is isolated instance of middleware and routes capable of only routing and middleware functions
var StudentsController = (0, _express.Router)();
StudentsController.get('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response) {
    var students;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _StudentService["default"].findAll();

          case 3:
            students = _context.sent;
            response.json(new _SuccessResponse["default"](students));
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            response.status(_context.t0.code).json(_context.t0.getResource());

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
StudentsController.post('/', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(request, response) {
    var student;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _StudentService["default"].createStudent(request.body);

          case 3:
            student = _context2.sent;
            response.json(new _SuccessResponse["default"](student));
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            response.status(_context2.t0.code).json(_context2.t0.getResource());

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
StudentsController.use('/:studentId/isic_cards', _ISICCardsController["default"]);
var _default = StudentsController;
exports["default"] = _default;
//# sourceMappingURL=StudentsController.js.map