const path = require("path")
const webpack = require("webpack")
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin")

module.exports = {
    entry: {
        solverPage: "./ui/LoadSolverPage.ts",
        graphPage: "./ui/LoadPrimaryPage.ts",
        expressionTestPage: "./ui/LoadExpressionTestPage.ts",
        casWorker: "./ui/CasWorker.ts"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "public")
    },
    plugins: [
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, "cas-wasm-wrapper"),
            // Optional space delimited arguments to appear before the wasm-pack
            // command. Default arguments are `--verbose`.
            args: "--log-level warn",
            // Default arguments are `--typescript --target browser --mode normal`.
            extraArgs: "--target no-modules",

            outDir: path.resolve(__dirname, "public/cas-wasm"),

        }),
        // Have this example work in Edge which doesn't ship `TextEncoder` or
        // `TextDecoder` at this time.
        new webpack.ProvidePlugin({
            TextDecoder: ["text-encoding", "TextDecoder"],
            TextEncoder: ["text-encoding", "TextEncoder"]
        }),
    ],
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "public")
        }
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    experiments: {
        asyncWebAssembly: true
    }
}
