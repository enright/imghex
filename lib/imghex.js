// this is all about using jade, so, yah.., jade
jade = require('jade');

// an ad-hoc minifier created with uglify
minifier = require('./uglyMinifier').minifier;

var exports = module.exports;

exports.version = '0.0.1';

// note that we use __dirname to get the directory that this source file is in
// and use that to reference to the views folder to get to our includes

// template for creating a hex map
exports.hexMap = jade.compile("include hexMapMixin\nmixin hexMap(ranks, files, width, height, defaultImageURL, boardClass, boardRowClass, boardRowEvenClass, boardRowOddClass, boardTileClass, boardFirstTileClass)", { filename: __dirname + '/../views/.', compileDebug: false, client: true });

// client side
exports.clientHexMapTemplate = minifier(exports.hexMap.toString());

// template for creating a hex map inside of a correctly sized div
exports.hexMapDiv = jade.compile("include hexMapDivMixin\nmixin hexMapDiv(ranks, files, width, height, defaultImageURL, divClass, boardClass, boardRowClass, boardRowEvenClass, boardRowOddClass, boardTileClass, boardFirstTileClass)", { filename: __dirname + '/../views/.', compileDebug: false, client: true });

// client-side
exports.clientHexMapDivTemplate = minifier(exports.hexMapDiv.toString());

// template for creating a squares map
exports.squareMap = jade.compile("include squareMapMixin\nmixin squareMap(ranks, files, width, height, defaultImageURL, boardClass, boardRowClass, boardTileClass)", { filename: __dirname + '/../views/.', compileDebug: false, client: true });

// client-side
exports.clientSquareMapTemplate = minifier(exports.squareMap.toString());

// template for creating a squares map inside of a correctly sized div
exports.squareMapDiv = jade.compile("include squareMapDivMixin\nmixin squareMapDiv(ranks, files, width, height, defaultImageURL, divClass, boardClass, boardRowClass, boardTileClass)", { filename: __dirname + '/../views/.', compileDebug: false, client: true });

// client-side
exports.clientSquareMapDivTemplate = minifier(exports.squareMapDiv.toString());