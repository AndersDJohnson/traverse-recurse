var traverse = require('traverse');

var obj = {};

var newObj = traverse(obj).forEach(function (x) {
  var stop = this.level > 5;
  this.update({sub:0}, stop);
});

console.log(JSON.stringify(newObj, null, '  '));

