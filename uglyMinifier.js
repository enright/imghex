var uglify = require('uglify-js'),
    ug_parser = uglify.parser,
    ug_uglify = uglify.uglify;

// use uglify module to minify javascript
exports.minifier = function (originaljs) {
    var ast = ug_parser.parse(originaljs),
        minfiedjs;
    ast = ug_uglify.ast_squeeze(ast);
    minifiedjs = ug_uglify.gen_code(ast);
    return minifiedjs;
};