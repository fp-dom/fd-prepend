"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var elem = _interopRequire(require("fd-elem"));

var prepend = _interopRequire(require("./"));

var h1 = elem("h1", "I'm first");
document.body.appendChild(h1);

it("fd-prepend", function () {
  var prependtoBody = prepend(document.body);
  var p = elem("p", "No, I am");
  prependtoBody(p);
  assert.equal(document.body.firstChild.innerText, "No, I am");
});