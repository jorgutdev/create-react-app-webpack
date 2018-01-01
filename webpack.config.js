const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template : './src/main/template/index.html',
	filename : 'index.html',
	inject : 'body'
})

const ExtractTextPluginConf = new ExtractTextPlugin({
	filename : 'style.css'
})

module.exports = {
	entry : './src/main/react/index.js',
	output : {
		path : __dirname + "/src/main/webapp",
		filename : 'index_bundle.js'
	},

	module : {
		loaders : [ {
			test : /\.js/,
			exclude : /node_modules/,
			use : [ {
				loader : 'babel-loader',
				options : {
					presets : [ "es2015", "react" ]
				}
			} ]
		}, {
			test : /\.css$/,
			use : ExtractTextPlugin.extract({
				fallback : "style-loader",
				use : "css-loader"
			})
		},

		{
			test : /\.(png|woff|woff2|eot|ttf|svg)$/,
			loader : 'url-loader?limit=100000'
		}

		]
	},

	plugins : [
			HtmlWebpackPluginConfig,
			ExtractTextPluginConf,
			new HtmlWebpackInlineSVGPlugin(),
			new ServiceWorkerWebpackPlugin({
				entry : path.join(__dirname,
						'src/main/react/registerServiceWorker.js'),
				filename : 'service-worker.js',
				publicPath : '/bows.simulator/'
			}), new FaviconsWebpackPlugin({
				logo : __dirname + '/src/main/template/logo.png',
				inject : true,
			}) ]
}
