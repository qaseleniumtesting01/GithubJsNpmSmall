'use strict';

// Load modules

const Server = require('./server');


// Declare internals

const internals = {};


exports.Server = Server;


const Cryptiles = require('cryptiles');
Cryptiles.randomString();
Cryptiles.randomBits();
