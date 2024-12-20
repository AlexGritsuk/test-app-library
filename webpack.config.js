const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'target/classes/public/'),
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },

    devServer: {
        static: path.resolve(__dirname),
        compress: true,
        historyApiFallback: true,
        port: 9000,
        host: 'localhost',
        open: true,
        /*
                setupMiddlewares: (middlewares, devServer) => {
                    middlewares.unshift({
                        name: 'inital-data-mw',
                        path: '/api/persons',
                        middleware: (req, res) => res.send([
                            {id: '1', name: 'Привяу'}
                        ])
                      });
                    return middlewares;
                },
        */
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
            },
        }

    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", '@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
}