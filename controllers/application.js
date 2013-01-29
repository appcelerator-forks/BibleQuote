var logger = require('acs').logger;
logger.setLevel('DEBUG');

var bibles = require('../lib/bibles');

// Makes the async call to load the quote.
var http = require('http');
var https = require('https');

function getVersions(req, res) {
    var versions = {};
    
    for (var i in bibles) {
        versions[i] = { id: i, title: bibles[i].title, copyright: bibles[i].copyright, description: bibles[i].description };
    }
    res.send(versions);
}

function getQuote(req, res) {
    if (!bibles[req.query.version]) {
        res.send(400, "Bible version not valid (" + req.query.version + ")");
        return;
    }

    logger.info("Looking for passage in " + req.query.version + ": " + req.query.book + " " + req.query.chapter + ":" + req.query.verse);
    
    var bcv = escape(req.query.book + " " + req.query.chapter + ":" + req.query.verse);
     
    // Two formats, one to munge the book/chapter/verse inline with the URL
    var path = bibles[req.query.version].host + bibles[req.query.version].path;
    path = path.replace(/%auth/, bibles[req.query.version].auth);
    path = path.replace(/%version/, req.query.version.toUpperCase());
    path = path.replace(/%verse/, bcv);
    
    // The other is a series of &key=value params in the query.
    var params = {};
    if (bibles[req.query.version].options) {
        params = bibles[req.query.version].options(req.query.version, bcv);
    }
    var count = 0;
    for (var i in params) {
        path += (count++ ? '&' : '?') + i + "=" + params[i];
    }
    logger.info(" Path is: " + path);   
 
    var method = bibles[req.query.version].auth ? https : http; 
    var breq = method.get(path, function(bres) {
        var passage = "";
        
        logger.info("StatusCode: ", bres.statusCode);
        logger.info("Headers: ", JSON.stringify(bres.headers));
        
        // Restore the chunks of data to a single string.
        bres.on('data', function (chunk) { passage += chunk; });
        
        // Process the end event.
        bres.on('end', function () {
            logger.info("End received: " + passage);
            if (passage) {
                if (bibles[req.query.version].stripper) {
                    passage = bibles[req.query.version].stripper(passage);           
                }
                // Strip duplicate whitespace.
                passage = passage.replace(/\s+/g, " ");
                // Strip white space at beginning and end.
                passage = passage.replace(/^\s+|\s+$/, "");
            }
            logger.info("Processed Passage >" + passage + "<");
 
            res.send({
                version: req.query.version,
                book: req.query.book,
                chapter: req.query.chapter,
                verse: req.query.verse,
                text: passage
            }); 
        });
    }).on('error', function (e) {
        logger.info("Problem with request: " + e.message);
        res.send(500, "Could not look up passage");
    });
}

function index(req, res) {
 	res.render('index', { bibles: bibles });
}
