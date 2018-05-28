const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  resolve: {
    modules: ['src', 'node_modules'],
    alias: {
      containers: 'containers',
      componetns: 'components',
      constants: 'constants',
      actions: 'actions',
      reducers: 'reducers',
      store: 'store',
      http: 'http',
      mocks: 'mocks',
      images: 'images'
    },
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(jpg|png|eot|svg|ttf|woff|woff2)?(\?[a-z0-9#=&.]+)?$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [htmlPlugin],
  devServer: {
   historyApiFallback: true,
   contentBase: './'
 }
}
