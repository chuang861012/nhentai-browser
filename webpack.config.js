const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const config = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
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
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}

module.exports = config;