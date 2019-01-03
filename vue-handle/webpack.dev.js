
var htmlWebpackPlugin=require("html-webpack-plugin")
const webpack=require("webpack")
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
    devServer:{
        host:"localhost",
        port:"8888",
        hot:true,
        inline:true,
        open:true,
        before(){

        }
    },
    resolve:{
        extensions: [".js", ".vue"],
        alias:{
            "vue":"vue/dist/vue.js",
            "@":"../src/components"
        }
    },

    plugins:[
        new webpack.HotModuleReplacementPlugin(),
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