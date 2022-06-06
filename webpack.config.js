const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js', // .tsx if working on TypeScript
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|.json|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },

      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre'
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },

      {
        test: /\.(((s?[ac]|le)ss)|styl)$/i,
        use: [
          'style-loader',
          'css-loader',

          // From below 4 loaders, uncomment a single loader which you want to use
          // If you have to use CSS, then no need to uncomment any of them

          'sass-loader'
          // 'less-loader'
          // 'postcss-loader'
          // 'stylus-loader'
        ]
      },

      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components')
      // ...etc
    }
  },
  devServer: {
    historyApiFallback: true
  }
};
