var https = require('https');
var querystring = require('querystring');

var base_url = 'api.typingdna.com';
var apiKey = '4d545933bc25fd13878d9fcebce3615a';
var apiSecret = '137e11beaaaecbb348ffff7e251ac3cd';
var id = 'testuser';
var data = {
   tp : '0, 2.11, 0, 0, 18, 1473785675, 4, 82, 13, 0, -1, -1, 0, -1, -1, 12, 93, 24, 0, -1, -1|8330, 137|1121, 142|902, 144|776, 128|792, 151|784, 111|864, 151|872, 111|824, 127|816, 104|888, 95|800, 151|808, 119|897, 134|775, 101|848, 111|1000, 143|688, 126',
}

var options = {
   hostname : base_url,
   port : 443,
   path : '/save/' + id,
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