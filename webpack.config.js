const path = require('path')

const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log('__dirname',__dirname)
module.exports = {
    name: "react-project",
    // mode 는 개발 모드인지 프로덕션 모드인지 구분
    mode: "development",
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@image': path.resolve(__dirname, 'src/assets/img')
        }
    },
    entry: {
        app: ['./src/index.jsx']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
            test: /\.jsx?/,
            loader: "babel-loader",
            options: {
                presets: [
                    ["@babel/preset-env", {
                        targets: {
                            browsers: [
                                'last 2 chrome versions',
                                '> 5% in KR'
                            ]
                        },
                        debug: true
                    }],
                    ["@babel/preset-react", {
                        "runtime": "automatic" // 이 부분을 수정해주세요
                    }]
                ],
                plugins: [
                    'react-refresh/babel'
                ]
            }
        },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },
    plugins: [
        new webpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "./index.html",
            template: path.join(__dirname, 'public/index.html')
        })
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: "/dist"
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
            publicPath: '/',
            serveIndex: true,
            watch: true,
        },
        compress: true,
        port: 9095,
        hot: true,
        historyApiFallback: true
    },
}