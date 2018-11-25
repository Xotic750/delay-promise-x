/**
 * @file Manages the root configuration settings for webpack.
 * @module webpack/root/configuration
 * @see {@link https://webpack.js.org/} for further information.
 */

const path = require('path');
const {BannerPlugin, EnvironmentPlugin} = require('webpack');
const merge = require('webpack-merge');
const childProcess = require('child_process');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');
const stylish = require('eslint/lib/formatters/stylish');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const getGlobal = function() {
  'use strict';

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  return Function('return this')();
};

const filename = 'delay-promise-x';
const library = 'DelayPromise';
const dist = path.resolve(__dirname, 'dist');

/**
 * Whether eslint should use the friendly formatter.
 * @type {boolean}
 */
const USE_FRIENDLY_FORMATTER = false;

/**
 * The NODE_ENV environment variable.
 * @type {!Object}
 */
const {NODE_ENV} = process.env;

/**
 * The production string.
 * @type {string}
 */
const PRODUCTION = 'production';

/**
 * The development string.
 * @type {string}
 */
const DEVELOPMENT = 'development';

/**
 * The default exclude regex.
 * @type {RegExp}
 */
const DEFAULT_EXCLUDE_RX = /node_modules/;

/**
 * @typedef {Object} envObject
 * @property {boolean} report - Run the webpack reporter.
 */
/**
 * Allows you to pass in as many environment variables as you like using --env.
 * See {@link http://webpack.js.org/guides/environment-variables}.
 *
 * @param {envObject} [env={}] - The env object.
 */
module.exports = function generateConfig(env = {}) {
  /**
   * The JSON content of `package.json`
   * @type {!Object}
   */
  const PACKAGE = require('./package.json');

  /**
   * The reference created bu git describe --dirty`
   * @type {string}
   * @see {@link https://git-scm.com/docs/git-describe}
   */
  const DESCRIBE = childProcess
    .spawnSync('git', ['describe', '--dirty'])
    .output[1].toString()
    .trim();

  /**
   * The date as of now.
   * @type {string}
   */
  const NOW = new Date().toISOString();

  const base = {
    /**
     * This option controls if and how source maps are generated.
     *
     * nosources-source-map - A SourceMap is created without the sourcesContent in it.
     * It can be used to map stack traces on the client without exposing all of the
     * source code. You can deploy the Source Map file to the web-server.
     *
     * eval-source-map - Each module is executed with eval() and a SourceMap is added as
     * a DataUrl to the eval(). Initially it is slow, but it provides fast rebuild speed
     * and yields real files. Line numbers are correctly mapped since it gets mapped to
     * the original code. It yields the best quality SourceMaps for development.
     *
     * source-map - A full SourceMap is emitted as a separate file. It adds a reference
     * comment to the bundle so development tools know where to find it.
     *
     * @type {string}
     * @see {@link https://webpack.js.org/configuration/devtool/}
     */
    devtool: 'source-map',

    /**
     * Define the entry points for the application.
     * @type {(string|array.<string>)}
     * @see {@link https://webpack.js.org/concepts/entry-points/}
     */
    entry: './src/index.js',

    mode: NODE_ENV === PRODUCTION ? PRODUCTION : DEVELOPMENT,

    /**
     * In modular programming, developers break programs up into discrete chunks of functionality
     * called a module. Each module has a smaller surface area than a full program, making verification,
     * debugging, and testing trivial. Well-written modules provide solid abstractions and encapsulation
     * boundaries, so that each module has a coherent design and a clear purpose within the overall
     * application.
     *
     * webpack supports modules written in a variety of languages and preprocessors, via loaders.
     * Loaders describe to webpack how to process non-JavaScript modules and include these dependencies
     * into your bundles.
     *
     * @type {!Object}
     * @see {@link https://webpack.js.org/configuration/module/#module-rules}
     */
    module: {
      /**
       * @type {Array.<!Object>}
       */
      rules: [
        /**
         * Extract sourceMappingURL comments from modules and offer it to webpack
         * @see {@link https://github.com/webpack-contrib/source-map-loader}
         */
        {
          enforce: 'pre',
          loader: 'source-map-loader',
          test: /\.js$/,
        },

        /**
         * eslint-loader options.
         * @type {!Object}
         * @see {@link https://github.com/MoOx/eslint-loader}
         */
        {
          enforce: 'pre',
          exclude: DEFAULT_EXCLUDE_RX,
          loader: 'eslint-loader',
          options: {
            emitError: true,
            emitWarning: false,
            failOnError: true,
            failOnWarning: false,
            formatter: USE_FRIENDLY_FORMATTER ? eslintFriendlyFormatter : stylish,
            quiet: true,
          },
          test: /\.(js|json)$/,
        },

        /**
         * This package allows transpiling JavaScript files using Babel and webpack.
         *
         * @see {@link https://webpack.js.org/loaders/babel-loader/}
         */
        {
          exclude: DEFAULT_EXCLUDE_RX,
          loader: 'babel-loader',
          test: /\.js$/,
        },
      ],
    },

    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    node: {
      child_process: 'empty',
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      // prevent webpack from injecting useless setImmediate polyfill.
      setImmediate: false,
      tls: 'empty',
    },

    /**
     * Configuring the output configuration options tells webpack how to write the compiled
     * files to disk.
     * @type {!Object}
     * @see {@link https://webpack.js.org/configuration/output/}
     */
    output: {
      // https://github.com/webpack/webpack/issues/6525
      globalObject: `(${getGlobal.toString()}())`,
      library,
      libraryTarget: 'umd',
      path: dist,
    },

    /**
     * Plugins are the backbone of webpack. Webpack itself is built on the same plugin system
     * that you use in your webpack configuration!
     *
     * A webpack plugin is a JavaScript object that has an apply property. This apply property
     * is called by the webpack compiler, giving access to the entire compilation lifecycle.
     *
     */
    plugins: [
      /**
       * Use the shorthand version.
       * @type {!Object}
       * @see {@link https://webpack.js.org/plugins/environment-plugin/}
       */
      new EnvironmentPlugin({
        DEBUG: false, // use 'false' unless process.env.DEBUG is defined.
        NODE_ENV: DEVELOPMENT, // use 'development' unless process.env.NODE_ENV is defined.
      }),

      /**
       * Smaller lodash builds. We are not opting in to path feature.
       * @type {!Object}
       * @see {@link https://github.com/lodash/lodash-webpack-plugin}
       */
      new LodashModuleReplacementPlugin({
        paths: true,
      }),

      /**
       * Adds a banner to the top of each generated chunk.
       * @type {!Object}
       * @see {@link https://webpack.js.org/plugins/banner-`plugin/}
       */
      new BannerPlugin({
        banner: `/*!\n${JSON.stringify(
          {
            copywrite: `${PACKAGE.copyright}`,
            date: `${NOW}`,
            describe: `${DESCRIBE}`,
            description: `${PACKAGE.description}`,
            file: '[file]',
            hash: '[hash]',
            license: `${PACKAGE.license}`,
            version: `${PACKAGE.version}`,
          },
          null,
          2,
        )}\n*/`,
        raw: true,
      }),
    ],

    /**
     * These options change how modules are resolved.
     * @type {!Object}
     * @see {@link https://webpack.js.org/configuration/resolve/}
     */
    resolve: {
      /**
       * Create aliases to import or require certain modules more easily.
       * @type {!Object}
       * @see {@link https://webpack.js.org/configuration/resolve/#resolve-alias}
       */
      alias: {
        RootDir: path.resolve(__dirname, '.'),
        dist: path.resolve(__dirname, 'dist'),
        src: path.resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.json'],
    },
  };

  const browser = merge(base, {
    optimization: {
      minimize: false,
    },

    output: {
      filename: `${filename}.js`,
    },
  });

  const minified = merge(browser, {
    output: {
      filename: `${filename}.min.js`,
    },

    /**
     * Webpack plugin and CLI utility that represents bundle content as convenient
     * interactive zoomable treemap.
     *
     * @see {@link https://github.com/webpack-contrib/webpack-bundle-analyzer}
     */
    plugins: [
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          ecma: 5,
        },
      }),

      ...(env && env.report ? [new BundleAnalyzerPlugin()] : []),
    ],
  });

  return [browser, minified];
};
