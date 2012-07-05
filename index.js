// jade options: use the views directory, compile without debug, compile for the client
// uglify ast_mangle options: mangle top level names
// uglify ast_squeeze options: defaults
// uglify gen_code options: defaults
module.exports = require('./lib/imghex')({ filename: __dirname + '/views/.', compileDebug: false, client: true }, { toplevel: true });