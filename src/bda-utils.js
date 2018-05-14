var _ = require("lodash");
var erf = require( 'compute-erf' );

function isNumeric(num){
  return !isNaN(num);
};

function parseFloat(x){
  return parseFloat(x);
};

function fillArray(value, len) {
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr.push(value);
  }
  return arr;
};

function erf(x){
  return erf(x)
};

var closest = function (num, arr) {
    var curr = arr[0];
    var diff = Math.abs (num - curr);
    for (var val = 0; val < arr.length; val++) {
        var newdiff = Math.abs (num - arr[val]);
        if (newdiff < diff) {
            diff = newdiff;
            curr = arr[val];
        }
    }
    return curr;
};

module.exports = {
  parseFloat: parseFloat,
  isNumeric: isNumeric,
  fillArray: fillArray,
  extend: _.extend,
  range: _.range,
  object: _.object,
  pluck: _.pluck,
  uniq: _.uniq,
  erf: erf,
  closest: closest
};
