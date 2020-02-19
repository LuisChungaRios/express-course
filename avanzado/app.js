const express = require('express'),
    app = express();

//config
app.set('port',process.env.PORT || 3000);
module.exports = app
