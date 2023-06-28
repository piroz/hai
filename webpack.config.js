const path = require('path')

module.exports = {
    mode: 'production',
    optimization: {
        minimize: false
    },
    entry: {
        index: path.join(__dirname, 'src', 'index.ts')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'hai.js',
        libraryTarget: 'commonjs'
    },
    target: 'node18.0',
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                },
            }
        ]
    }
}
