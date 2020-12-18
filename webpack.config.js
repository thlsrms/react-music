const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	devServer: {
		compress: true,
		hot: true,
		overlay: true,
		historyApiFallback: true,
		contentBase: path.join(__dirname, 'public'),
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[id].[chunkhash].bundle.js',
		publicPath: '/',
	},
	resolve: {
		modules: [path.join(__dirname, 'src'), 'node_modules'],
		alias: {
			react: path.join(__dirname, 'node_modules', 'react'),
			Pages: path.join(__dirname, 'src', 'pages'),
			Components: path.join(__dirname, 'src', 'components'),
		},
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						"presets": [
							"@babel/preset-env",
							"@babel/preset-react"
						],
						"plugins": [
							"@babel/plugin-transform-runtime"
						]
					},
				},
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									'postcss-preset-env'
								]
							}
						}
					},
					'sass-loader'
				]
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebPackPlugin({
			template: './src/index.html',
		}),
	],
	optimization: {
		splitChunks: {
			chunks: "all",
		},
		runtimeChunk: {
			name: "manifest",
		},
	},
};