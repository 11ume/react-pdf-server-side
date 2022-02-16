const { resolve } = require('node:path')
const webpack = require("webpack")

module.exports = {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    entry: './src/test/index.jsx',
    output: {
        filename: './public/js/bundle.js',
    },
    output: {
        path: resolve(__dirname, "public"),
        filename: "[name].js"
    },
    resolve: {
        extensions: [".js", ".jsx"],
        fallback: {
            process: require.resolve("process/browser"),
            zlib: require.resolve("browserify-zlib"),
            stream: require.resolve("stream-browserify"),
            util: require.resolve("util"),
            buffer: require.resolve("buffer"),
            asset: require.resolve("assert"),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
            process: "process/browser",
        }),
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}