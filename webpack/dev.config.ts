import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'development',
  entry: '../src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[id].bundle.js'
  }
}

export default config