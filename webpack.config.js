const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: {
        bundle:'./src/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
                exclude: /node_modules/,
                use: "babel-loader",
                test: /\.js|jsx$/
            },
            {
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {
                        minimize: true
                    }
                }],
                test: /\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [{
                        loader: "url-loader",
                        options: {
                            limit: 40000
                        }
                    },
                    "image-webpack-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            favicon: 'src/img/favicon.ico'
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: "async"
        })
    ],
    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'all'
        }
    }
}

module.exports = config;