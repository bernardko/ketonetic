const express = require('express')
const gatsyExpress = require('gatsby-plugin-express');
const app = express();
const port = process.env.PORT || 8001

// serve static files before gatsbyExpress
app.use(express.static('public/'));
app.use(gatsyExpress('config/gatsby-express.json', {
  publicDir: 'public/',

  // redirects all /path/ to /path
  // should be used with gatsby-plugin-remove-trailing-slashes
  redirectSlashes: false,
}));
process.on('uncaughtException', function(e) {
  // console.log('An error has occured. error is: %s and stack trace is: %s', e, e.stack);
  // console.log("Process will restart now.");
  process.exit(1);
})
app.listen(port, () => console.log(`Ketonetic listening on port ${port}!`))