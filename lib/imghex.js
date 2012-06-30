// this is all about using jade, so, yah.., jade
jade = require('jade');

// an ad-hoc minifier created with uglify
minifier = require('./uglyMinifier').minifier;

var exports = module.exports;

exports.version = '0.0.1';

// note that we use __dirname to get the directory that this source file is in
// and use that to reference to the views folder to get to our includes
exports.clientMapTemplate = minifier(jade.compile("include hexMapMixin\nmixin hexMap(ranks, files, width, height, defaultImageURL, boardClass, boardRowClass, boardRowEvenClass, boardRowOddClass, boardTileClass,boardFirstTileClass)", { filename: __dirname + '/../views/.', compileDebug: false, client: true }).toString());

// more to come?