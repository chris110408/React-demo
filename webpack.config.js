
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');



module.exports = {

    entry: [
        './app/assets/javascripts/react_src/app.jsx'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /(\.js|\.jsx)$/,
            exclude: /node_modules/,
            loader: 'babel'
             },
            {test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")}


        ]
    },
    postcss: [autoprefixer],
    plugins: [
        new ExtractTextPlugin('/style/style.css',{ allChunks: true })
    ],

    resolve: {
        extensions: ['', '.js','.scss', '.jsx','.json']

    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
