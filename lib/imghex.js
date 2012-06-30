// this is all about using jade, so, yah.., jade
jade = require('jade');

// an ad-hoc minifier created with uglify
minifier = require('./uglyMinifier').minifier;

var exports = module.exports;

exports.version = '0.0.1';

exports.clientMapTemplate = minifier(jade.compile("include hexMapMixin\nmixin hexMap(ranks, files, width, height, defaultImageURL, boardClass, boardRowClass, boardRowEvenClass, boardRowOddClass, boardTileClass,boardFirstTileClass)", { filename: 'views/.', compileDebug: false, client: true }).toString());

// more to come?