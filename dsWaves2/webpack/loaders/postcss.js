const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
        plugins:[
        require('postcss-nested'),         
        require('tailwindcss'),
        require('autoprefixer'),
        ]
        }
      },
    },
  ],
};
