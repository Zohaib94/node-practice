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

// Router is isolated instance of middleware and routes capable of only routing and middleware functions
// mergeparams to receive params from parent
// middleware Middleware functions are functions that have access to the
// request object (req), the response object (res), and the next middleware function
// in the application’s request-response cycle.
var ISICCardsController = (0, _express.Router)({
  mergeParams: true
});
ISICCardsController.post('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response) {
    var isicCard;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log(request.params);
            _context.next = 4;
            return _StudentService["default"].createISICCard(request.params.studentId, request.body);

          case 4:
            isicCard = _context.sent;
            response.json(new _SuccessResponse["default"](isicCard));
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            response.status(_context.t0.code).json(_context.t0.getResource());

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = ISICCardsController;
exports["default"] = _default;
//# sourceMappingURL=ISICCardsController.js.map