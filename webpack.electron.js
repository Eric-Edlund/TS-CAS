const path = require('path');

module.exports = {
  entry: './src/electronmain.ts',
  target: 'electron-main',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'electron-main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};