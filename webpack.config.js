const path = require('path');
const webpack = require('webpack');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

// module.exports = {
//   mode: "production",
//   entry: {
//     index: "./js/bundle.js"
//   },
//   output: {
//     path: dist,
//     filename: "[name].js"
//   },
//   devServer: {
//     contentBase: dist,
//   },
//   plugins: [
//     new CopyPlugin([
//       path.resolve(__dirname, "static")
//     ]),
// 
//     new WasmPackPlugin({
//       crateDirectory: __dirname,
//     }),
//   ]
// };

module.exports = {
    entry: './ui/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    plugins: [
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, 'cas')
        }),
        // Have this example work in Edge which doesn't ship `TextEncoder` or
        // `TextDecoder` at this time.
        new webpack.ProvidePlugin({
            TextDecoder: ['text-encoding', 'TextDecoder'],
            TextEncoder: ['text-encoding', 'TextEncoder']
        })
    ],
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        }
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    experiments: {
        asyncWebAssembly: true
    }
};


