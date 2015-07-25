var traverse = require('traverse-async').traverse;

var obj = {root:0};

traverse(obj, function (x, next) {
  if (typeof this.parent == 'object') {
    this.parent[this.key] = {sub:0};
  }
  next();
}, function (newObj) {
  console.log(JSON.stringify(newObj, null, '  '));
});

