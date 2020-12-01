const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack.bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(js||jsx)$/,
            exclude: /node-modules/,
            use: {
                loader: 'babel-loader',
            }  
          }
        ]
    },
    {
        test: /\.html$/i,
        loader: 'html-loader',
    }
};