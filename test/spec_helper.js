/*eslint-env node*/
var config = require("../config/babel");
require("babel-register")(config);
require("babel-polyfill");
expect = require("chai").expect;
