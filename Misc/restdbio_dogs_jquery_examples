/* jQuery AJAX */

/* GET all documents from the dogs collection */
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://awatodogs-5351.restdb.io/rest/dogs",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "<your CORS apikey here>",
    "cache-control": "no-cache"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

/* POST a new document to the dogs collection */
var jsondata = {"field1": "xyz","field2": "abc"};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://awatodogs-5351.restdb.io/rest/dogs",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "<your CORS apikey here>",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

/* PUT a updated document to the dogs collection */
var jsondata = {"field1": "new value","field2": "xxx"};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://awatodogs-5351.restdb.io/rest/dogs/(ObjectID)",
  "method": "PUT",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "<your CORS apikey here>",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

/* DELETE a document from the dogs collection */
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://awatodogs-5351.restdb.io/rest/dogs/(ObjectID)",
  "method": "DELETE",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "<your CORS apikey here>",
    "cache-control": "no-cache"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

/* NodeJS */

/* GET */
var request = require("request");

var options = { method: 'GET',
  url: 'https://awatodogs-5351.restdb.io/rest/dogs',
  headers: 
   { 'cache-control': 'no-cache',
     'x-apikey': '1487108adebbcf5b901800e24f6c7d7873cb6' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

/* POST */
var request = require("request");

var options = { method: 'POST',
  url: 'https://awatodogs-5351.restdb.io/rest/dogs',
  headers: 
   { 'cache-control': 'no-cache',
     'x-apikey': '1487108adebbcf5b901800e24f6c7d7873cb6',
     'content-type': 'application/json' },
  body: { field1: 'xyz', field2: 'abc' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

/* PUT */
var request = require("request");

var options = { method: 'PUT',
  url: 'https://awatodogs-5351.restdb.io/rest/dogs/(ObjectID)',
  headers: 
   { 'cache-control': 'no-cache',
     'x-apikey': '1487108adebbcf5b901800e24f6c7d7873cb6',
     'content-type': 'application/json' },
  body: { field2: 'new value' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

/* DELETE */
var request = require("request");

var options = { method: 'DELETE',
  url: 'https://awatodogs-5351.restdb.io/rest/dogs/(ObjectID)',
  headers: 
   { 'cache-control': 'no-cache',
     'x-apikey': '1487108adebbcf5b901800e24f6c7d7873cb6',
     'content-type': 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

