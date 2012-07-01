var express,
	connect,
	jade,
	uglify,
	ug_parser,
	ug_uglify,
	app;
		
express = require('express');
jade = require('jade');
hexMap = require('./lib/imghex');

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

app.get('/testHexMap', function(req, res) {
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
		mapTemplate: hexMap.clientHexMapTemplate
	})
});

app.get('/testSquareMap', function(req, res) {
    res.render('squareMapTest', { layout: false,
		board: { 
		    ranks: 8,
		    files: 6
		},
		tile: {
		    height: 64,
		    width: 64
		},
		// minified jade template for creating client-side maps is available as a local
		mapTemplate: hexMap.clientSquareMapTemplate
	})
});

console.log("Express version %s\n", express.version);
app.listen(3001);
console.log("Express server listening on port %d\n", app.address().port);

