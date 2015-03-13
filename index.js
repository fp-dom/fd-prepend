"use strict";

var curry2 = require("fj-curry").curry2;


var _prepend = function (parent, child) {
  return parent.insertBefore(child, parent.firstChild);
};

module.exports = curry2(_prepend);