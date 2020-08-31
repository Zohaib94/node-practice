"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _index = _interopRequireDefault(require("./config/server/index"));

var _index2 = _interopRequireDefault(require("./models/index"));

var port = 3002;

_index["default"].sequelize.authenticate().then( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _index2["default"].Student.sync();

        case 2:
          _context.next = 4;
          return _index2["default"].ISICCard.sync();

        case 4:
          _context.next = 6;
          return _index2["default"].Transaction.sync();

        case 6:
          console.log('Connected to Database Successfully'); // binds and listens for connections on specified port

          _index["default"].app.listen(port, function () {
            console.log('Running at port 3002');
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})))["catch"](function (err) {
  console.error('Unable to connect to the database:', err);
});
//# sourceMappingURL=index.js.map