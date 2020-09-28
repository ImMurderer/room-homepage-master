const Webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 0,
            minChunks: 1,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 3,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'public'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'index.html' })
    ]
}