const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    // 'core-js/fn/promise', //babel-polyfill
    main : ['./src/main.js']
  },
  mode: 'development',
  output: {
    filename : '[name]-bundle.js',//output.js
    path : path.resolve(__dirname, '../dist'), //dist path
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    overlay: true
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            use: [
                {
                    loader: 'babel-loader'
                }
            ],
            exclude: /node_modules/
        },
        { 
            test: /\.css$/, //applies to target .ext files NEVER quote REGEX with quotes/double-quotes
            use: [ //array of objects loaders that handle the targeted file type
                {
                    loader: 'style-loader' //responsible for injecting css into html file
                }, //AWLAYS style-loader COMES FIRST
                {
                    loader: 'css-loader'
                },
            ],
        },
        { // for rendering & required .html files
            // npm install html-loader extract-loader file-loader
            test: /\.html$/, //target .ext files for loaders
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].html' //to name the file as its output, 
                    }
                },
                {   //tells webpack to exports the file (bundled, separated)
                    loader: 'extract-loader' //decides how to present the file
                },
                {
                    loader: 'html-loader',  //does the linting
                    options: {
                        attrs: ['img:src'] // array of options for targeting images:src attr in a html file
                    },
                },
                /*From button to top are loaded htlk kiader*/
            ],
        },
        {
            test: /\.handlebars$/,
            use: [
                {
                    loader: 'handlebars-loader',
                    options: {
                    knownHelpersOnly: false,
                    helperDirs: [path.resolve(__dirname, '../src/helpers')],
                    partialDirs: [path.resolve(__dirname, '../src/partials')],
                    }
                }
            ]
        }

    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /\.js$/
    })]
  }
}