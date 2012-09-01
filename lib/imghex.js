// this is all about using jade, so, yah.., jade
var jade = require('jade'),
    // an ad-hoc minifier created with uglify
    minifier = require('./uglyMinifier').minifier;

module.exports = function (jadeOptions, mangleOptions, squeezeOptions, genOptions) {

    var hexMapMixin = "include hexMapMixin\nmixin hexMap(ranks, files, width, height, defaultImageURL, boardClass)",
        hexMapDivMixin = "include hexMapDivMixin\nmixin hexMapDiv(ranks, files, width, height, defaultImageURL, divClass, boardClass)",
        squareMapMixin = "include squareMapMixin\nmixin squareMap(ranks, files, width, height, defaultImageURL, boardClass)",
        squareMapDivMixin = "include squareMapDivMixin\nmixin squareMapDiv(ranks, files, width, height, defaultImageURL, divClass, boardClass)",
        hexMap,
        hexMapTemplate,
        hexMapDiv,
        hexMapDivTemplate,
        squareMap,
        squareMapTemplate,
        squareMapDiv,
        squareMapDivTemplate;

    function createHexMap() {
        if (hexMap === undefined) {
            hexMap = jade.compile(hexMapMixin, jadeOptions);
        }
        return hexMap;
    }

    function createHexMapTemplate() {
        if (hexMapTemplate === undefined) {
            hexMapTemplate = minifier(createHexMap().toString(), mangleOptions, squeezeOptions, genOptions);
        }
        return hexMapTemplate;
    }

    function createHexMapDiv() {
        if (hexMapDiv === undefined) {
            hexMapDiv = jade.compile(hexMapDivMixin, jadeOptions);
        }
        return hexMapDiv;
    }

    function createHexMapDivTemplate() {
        if (hexMapDivTemplate === undefined) {
            hexMapDivTemplate = minifier(createHexMapDiv().toString(), mangleOptions, squeezeOptions, genOptions);
        }
        return hexMapDivTemplate;
    }

    function createSquareMap() {
        if (squareMap === undefined) {
            squareMap = jade.compile(squareMapMixin, jadeOptions);
        }
        return squareMap;
    }

    function createSquareMapTemplate() {
        if (squareMapTemplate === undefined) {
            squareMapTemplate = minifier(createSquareMap().toString(), mangleOptions, squeezeOptions, genOptions);
        }
        return squareMapTemplate;
    }

    function createSquareMapDiv() {
        if (squareMapDiv === undefined) {
            squareMapDiv = jade.compile(squareMapDivMixin, jadeOptions);
        }
        return squareMapDiv;
    }

    function createSquareMapDivTemplate() {
        if (squareMapDivTemplate === undefined) {
            squareMapDivTemplate = minifier(createSquareMapDiv().toString(), mangleOptions, squeezeOptions, genOptions);
        }
        return squareMapDivTemplate;
    }

    return {
        version: '0.0.1',
        hexMap: createHexMap,
        hexMapTemplate: createHexMapTemplate,
        hexMapDiv: createHexMapDiv,
        hexMapDivTemplate: createHexMapDivTemplate,
        squareMap: createSquareMap,
        squareMapTemplate : createSquareMapTemplate,
        squareMapDiv: createSquareMapDiv,
        squareMapDivTemplate: createSquareMapDivTemplate
    };
};