var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const precss = require("precss");
const CleanWebpackPlugin = require('clean-webpack-plugin');

require("babel-core/register");
require("babel-polyfill");

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: ['babel-polyfill', "./js/client.js", "./assets/scss/style.scss"],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=../fonts/[name].[ext]'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,

                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",

                    use: [
                        {
                            loader: "css-loader"
                        },

                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                sourceMap: true,
                                plugins: [
                                    require('autoprefixer')({browsers: ['last 2 versions']})
                                ]
                            },
                        },

                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ]
                })
            },


            {
                test: /\.ejs$/,
                loader: 'ejs-compiled-loader'
            },
        ]
    },
    output: {
        path: __dirname + "/src/",
        filename: "client.min.js"
    },
    plugins: debug ? [
        new ExtractTextPlugin({filename: 'assets/css/[name].css', allChunks: true}),
        new webpack.HotModuleReplacementPlugin(),
    ] : [
        new ExtractTextPlugin({filename: 'assets/css/[name].css', allChunks: true}),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),

    ],
};
