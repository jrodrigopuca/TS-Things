module.exports = {
    mode: 'production',
    entry: './index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node-modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output:{
        filename: 'bundle.js'
    }
}