require('es6-shim');

var context = require.context('./src', false, /.+Spec\.js$/);
context.keys().forEach(context);
module.exports = context;

