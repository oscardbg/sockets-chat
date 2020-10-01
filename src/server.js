const express = require('express');
const path = require('path');

/**
 * Initializations
 */
const server = express();

/**
 * Settings
 */
server.set('port', process.env.PORT || 3002);


/**
 * Static Files
 */
server.use(express.static(path.join(__dirname, 'public')));

module.exports = server;