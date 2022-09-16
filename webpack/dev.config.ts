import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
import * as HtmlWebpackPlugin from 'html-webpack-plugin'

interface IConfiguration extends webpack.Configuration {
  devServer: webpackDevServer.Configuration
}

const config: IConfiguration = {
  mode: 'development',
  entry: path.resolve(__dirname, '..', 'src/main.ts'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[id].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      { 
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src/template/index.html')
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, '..', 'public')
    },
    hot: true,
    compress: true,
    port: 1919
  },
}

export default config