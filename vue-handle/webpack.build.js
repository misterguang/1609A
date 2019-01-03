
var htmlWebpackPlugin=require("html-webpack-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack=require("webpack")
const path=require("path")
module.exports={
    entry:"./src/main.js",
    output:{
        path:__dirname+"/dist",
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
              test:/\.html$/,
              use:["html-loader"]
             },
             {
              test:/\.jpg$/,
              use:["url-loader"]
             },
              {
                test: /\.vue$/,
                use: [{
                  loader: "vue-loader",
                  options: {
                    loaders: {
                      js: [{
                        loader: 'babel-loader',
                        // options:{
                        //     presets:[
                        //         "env"
                        //     ]
                        // }
                      }]
                    }
                  }
                }]
              },
            {
                test:/\.js$/,
                use:["babel-loader"],
            
                // options:{
                //     presets:["env", {
                //         modules: false
                //       }]
                // }
            }
        ]
    },
 
    resolve:{
        extensions: [".js", ".vue"],
        alias:{
            "vue":"vue/dist/vue.js",
            "@":"../src/components"
        }
    },

    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name:"common.js",
            filename:"common.js"
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
              include: /\/src/,
              compress: {
                warnings: false
              },
              sourceMap:false,
              parallel: true   //使用多进程并行运行和文件缓存来提高构建速度
            },
          }),
          new CopyWebpackPlugin([{
            from: path.resolve(__dirname, './src/static'),
            to: __dirname+"/dist/static",
            ignore: ['.*']
          }]),
          // 提取css
          new ExtractTextPlugin({
            filename: 'css/[name].[contenthash].css',
            allChunks: true,
          }),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            minify: {
                removeComments: true, //去除注释
                collapseWhitespace: true, //去除空格
                removeAttributeQuotes: true, //移除属性的引号
                removeEmptyAttributes: true, //去除空属性
              }
        })
    ]
}