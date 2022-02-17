
//Requiring path very important  KB(FY , Nov , 2021)
const path = require('path')
//Requiring a sexy package called dotenv-webpack , future me , thank me later
const Dotenv=require("dotenv-webpack");

module.exports = {
  mode : "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  watch: true,
  //add this plugin of dotenv-webpack for your webpack config
  plugins: [
    new Dotenv()
  ]
}