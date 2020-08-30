"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _index = _interopRequireDefault(require("./config/server/index"));

var port = 3002;

_index["default"].sequelize.authenticate().then(function () {
  console.log('Connected to Database Successfully'); // binds and listens for connections on specified port

  _index["default"].app.listen(port, function () {
    console.log('Running at port 3002');
  });
})["catch"](function (err) {
  console.error('Unable to connect to the database:', err);
});
//# sourceMappingURL=index.js.map