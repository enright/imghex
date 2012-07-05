var uglify = require('uglify-js'),
    ug_parser = uglify.parser,
    ug_uglify = uglify.uglify;

// use uglify module to minify javascript
exports.minifier = function (originaljs, mangleOptions, squeezeOptions, genOptions) {
    var ast = ug_parser.parse(originaljs),
        minifiedjs;

    ast = ug_uglify.ast_mangle(ast, mangleOptions);
    ast = ug_uglify.ast_squeeze(ast, squeezeOptions);
    minifiedjs = ug_uglify.gen_code(ast, genOptions);
    return minifiedjs;
};