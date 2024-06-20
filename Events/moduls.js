'use strict';

const http = require('http');
const os = require('os');
const greeting = require('./greeting');

const userName = os.userInfo().username;
greeting
console.log(userName)