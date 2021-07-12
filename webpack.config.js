const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        app: ['./src/payment/app.tsx', 'webpack-hot-middleware/client'],
        vendor: ['react', 'react-dom'],
    },
    output: {
        path: path.resolve(__dirname, './public/js'),
        filename: 'payment/[name].bundle.js',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
            },
            {enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'},
        ],
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: path.resolve(__dirname, 'src', 'app', 'index.html'),
    //     }),
    //     new webpack.HotModuleReplacementPlugin(),
    // ],
};
