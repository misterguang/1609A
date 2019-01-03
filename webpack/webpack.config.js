
const htmlWebpackPlugin=require("html-webpack-plugin")
const webpack = require("webpack")
const bodyParse=require("body-parser")
module.exports={
    entry:"./src/index.js",
    // entry:{
    //     index1:"./src/index1",
    //     index2:"./src/index2",
    //     index3:"./src/index3"
    // },
    output:{
        path:__dirname+"/dist",
        filename:"[name].js"
    },
    module:{
        rules:[
          {
              test:/\.js$/,
              use:["babel-loader"]
          },
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
           }
        ]
    },
    devServer:{
        contentBase:__dirname + '/dist',
        watchContentBase: true,
        host:"localhost",
        port:"8888",
        hot:true,
        inline:true,
        open:true,
        proxy:{
            "/api": "http://127.0.0.1:8889/api"
            // "/": "http://localhost:3000/"
            //     "/api": {
            //         target: "http://localhost:3000",
            //         pathRewrite: {"^/api" : "/backapi"},
            //         secure: false
                //     }

        },
        before(app){
            app.use(bodyParse())
            app.get("/api/data",(req,res)=>{
                res.send({
                    code:'1',
                    msg:"nihao"
                })
            })
            app.post("/api/data1",(req,res)=>{
                console.log(req.body)
                res.send({
                    code:'1',
                    msg:"nihao"
                })
            })
        }
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            minify: {
                removeComments: true, //去除注释
                collapseWhitespace: true, //去除空格
                removeAttributeQuotes: true, //移除属性的引号
                removeEmptyAttributes: true, //去除空属性
              }
        })
        
    ]
}