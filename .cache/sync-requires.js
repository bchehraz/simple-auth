const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/bchehraz/Projects/examples/gatsby/simple-auth/src/pages/404.js"))),
  "component---src-pages-app-js": hot(preferDefault(require("/Users/bchehraz/Projects/examples/gatsby/simple-auth/src/pages/app.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/bchehraz/Projects/examples/gatsby/simple-auth/src/pages/index.js")))
}

