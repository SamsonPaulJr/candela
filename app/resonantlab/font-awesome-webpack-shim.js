// This is needed due to a problem between Webpack 2.x and font-awesome-styles:
// https://github.com/gowravshekar/font-awesome-webpack/issues/20#issuecomment-223452699.
import 'style!css!less!node/font-awesome-webpack/font-awesome-styles.loader!node/font-awesome-webpack/font-awesome.config.js';