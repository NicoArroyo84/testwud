var express = require('express');
var bodyParser = require('body-parser')
var fs = require('fs');

var app = express();
app.use(bodyParser.json());
var cache;

function read() {
  return JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf8'));
}

function write() {
  fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(cache));
}

app.listen(8000);

app.get('/users', function(req, res) {
  console.log('GET /users');
  cache = read();
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.json(cache.users);
});


app.options('/user', function(req, res) {
  var headers = {};
  headers["Access-Control-Allow-Origin"] = "*";
  headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
  headers["Access-Control-Allow-Credentials"] = false;
  headers["Access-Control-Max-Age"] = '86400'; // 24 hours
  headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
  res.writeHead(200, headers);
  res.end();
});


app.post('/user', function(req, res) {

  cache = read();
  console.log('POST /user');
  var user = req.body;

  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  var validation = {
    firstname: "string",
    lastname: "string",
    email: "string"
  };

  for (var field in validation) {
    var type = typeof user[field];
    if (!user.hasOwnProperty(field)) {
      res.status(400);
      res.send(`Field '${field}' is required`);
      return;
    }
    else if (type !== validation[field]) {
      res.status(400);
      res.send(`Field '${field}' must be of type '${validation[field]}'.`);
      return;
    }
  }
  user.id = cache.users.length;
  cache.users.push({
    id: cache.users.length,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email
  });
  write();

  res.status(200);
  res.send();
});
