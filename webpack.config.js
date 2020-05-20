const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // detect the directory where the files are going to export and create the new folder named dist
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'] //Resolve extension we'll use on the proyect
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // identification of our js and jsx files
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },{
                test: /\.(png|gif|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer: { //Esto es necesario para manejar la historia y el manejo del navegador en donde me estoy moviendo en cada uno de los elementos.
        historyApiFallback: true, //Esto es para React Router
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html', //Where is the template we have
            filename: './index.html' // the name that will have
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css' //This is the result file
        })
    ]
}