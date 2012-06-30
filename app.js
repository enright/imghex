var express,
	connect,
	jade,
	uglify,
	ug_parser,
	ug_uglify,
	app;
		
express = require('express');
jade = require('jade');
// an ad-hoc minifier created with uglify
minifier = require('./uglyMinifier').minifier;

app = express.createServer();

// Configuration
app.configure(function(){
  // use jade
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  
  app.use(app.router);
  
  // serve up tile images
  app.use(express.static(__dirname + '/public'));
  // serve up jade so can get the runtime.min.js
  app.use('/jade', express.static(__dirname + '/node_modules/jade'));
});

// these are chosen via environment variable i.e. $ NODE_ENV=production node app.js
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// a minified compiled jade template for creating hex maps in the client
var minifiedMapTemplate = minifier(jade.compile("include hexMapMixin\nmixin hexMap(ranks, files, width, height, defaultImageURL, boardClass, boardRowClass, boardRowEvenClass, boardRowOddClass, boardTileClass,boardFirstTileClass)", { filename: 'views/.', compileDebug: false, client: true }).toString());

app.get('/testMap', function(req, res) {
    res.render('hexMapTest', { layout: false,
		board: { 
		    ranks: 12,
		    files: 4
		},
		tile: {
		    height: 72,
		    width: 72
		},
		// minified jade template for creating client-side maps is available as a local
		mapTemplate: minifiedMapTemplate
	})
});

console.log("Express version %s\n", express.version);
app.listen(3001);
console.log("Express server listening on port %d\n", app.address().port);

