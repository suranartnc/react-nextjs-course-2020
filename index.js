// Enable Babel for server-side

// We won't need to do this on client-side,
// because those scripts will be bundled using babel-loader via Webpack

require('@babel/register')
require('./src/server')
