/**
 * Stolen from the Firefox debugger examples repository
 * https://github.com/devtools-html/debugger-examples/
 */

const serveIndex = require('serve-index');
const express = require('express');

const EXAMPLES_PORT = 7999;

const examples = express();
examples.use(express.static('examples'));
examples.use(serveIndex('examples', { icons: true }));

examples.listen(EXAMPLES_PORT, '0.0.0.0', (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`View examples at http://localhost:${EXAMPLES_PORT}`);
  }
});
