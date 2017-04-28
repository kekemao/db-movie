// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '**v2/**': {
        target: 'http://api.douban.com/',
        changeOrigin: true,
        onError: function (err, req, res) {
          console.log(err)
            // console.log(req);
            // console.log(res);
        },
        onProxyRes: function (proxyRes, req, res) {
        },
        onProxyReq: function (proxyReq, req, res) {
          var is4dot0 = false
          var acceptValue = ''
          var acceptEncodeing = ''
          var rawHeaders = req.rawHeaders

          rawHeaders.forEach(function (value, index) {
            if (value === 'Accept') {
              acceptValue = rawHeaders[index + 1]
            }
            if (value === 'Accept-Encoding') {
              acceptEncodeing = rawHeaders[index + 1]
            }
            if (value.indexOf('Mozilla/4.0') === 0) {
              is4dot0 = true
            }
          })
          if (is4dot0) {
            proxyReq.setHeader('Accept', acceptValue)
            proxyReq.setHeader('Accept-Encoding', acceptEncodeing)
          }
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
