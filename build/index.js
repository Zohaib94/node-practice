"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _index = _interopRequireDefault(require("./config/server/index"));

var port = 3002;

_index["default"].listen(port, function () {
  console.log('Running at port 3002');
});
//# sourceMappingURL=index.js.map