const url = require('url');

const myURL = new URL('http://mywebsite.com/hello.html?id=100&status=active');

console.log(myURL.href);