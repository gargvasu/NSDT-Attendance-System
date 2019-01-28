var https = require('https');
var querystring = require('querystring');

var base_url = 'api.typingdna.com';
var apiKey = '{apiKey}';
var apiSecret = '{apiSecret}';
var id = '{id}';
var data = {
    tp : '{tp}',
    quality : '{quality}',
}

var options = {
    hostname : base_url,
    port : 443,
    path : '/verify/' + id,
    method : 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'no-cache',
        'Authorization': 'Basic ' + new Buffer(apiKey + ':' + apiSecret).toString('base64'),
    },
};

var responseData = '';
var req = https.request(options, function(res) {
    res.on('data', function(chunk) {
        responseData += chunk;
    });

    res.on('end', function() {
        console.log(JSON.parse(responseData));
    });
});

req.on('error', function(e) {
    console.error(e);
});
req.write(
    querystring.stringify(data)
);
req.end();