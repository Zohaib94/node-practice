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

var TransactionsController = (0, _express.Router)({
  mergeParams: true
});
TransactionsController.post('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response) {
    var payment;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _StudentService["default"].generatePayment(request.params.studentId, request.body);

          case 3:
            payment = _context.sent;
            response.json(new _SuccessResponse["default"](payment));
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
var _default = TransactionsController;
exports["default"] = _default;
//# sourceMappingURL=TransactionsController.js.map