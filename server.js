// server.js

const express = require("express");
const morgan = require('morgan');
const next = require("next");
const path = require('path');
const conf = require('./next.config.js');

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev, conf });
const handle = nextApp.getRequestHandler();
const app = express();
const PORT = process.env.PORT || 3100
const distDir = conf.distDir || '.next';

app.use(morgan('dev'));

nextApp.prepare().then(() => {
  app.use(`/_next/static`, express.static(path.join(__dirname, distDir, '/static')));

  app.all('*', (req, res) => {
    return handle(req, res)
  });

}).then(() => {
  const listener = app.listen(PORT, function () {
    console.log("Your app is listening on port " + listener.address().port);
  })
});
