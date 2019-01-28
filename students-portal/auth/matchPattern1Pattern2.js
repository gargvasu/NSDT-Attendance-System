var https = require('https');
var querystring = require('querystring');
var base_url = 'api.typingdna.com';
var apiKey = '4d545933bc25fd13878d9fcebce3615a';
var apiSecret = '137e11beaaaecbb348ffff7e251ac3cd';
var data = {
    tp1 : '{tp1}',
    tp2 : '{tp2}',
    quality : '{quality}',
}

var options = {
    hostname : base_url,
    port : 443,
    path : '/match',
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