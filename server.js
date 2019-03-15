
//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'server.js'))


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);