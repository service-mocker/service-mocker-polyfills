require('whatwg-fetch');
require('url-polyfill');
var Promise = require('promise-polyfill');

if (!window.Promise) {
    window.Promise = Promise;
}
