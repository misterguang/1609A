


import App from "@/app"

import Vue from "vue"
// import"./css/app.css"

new Vue({
    el:"#app",
    template:"<div>{{name}}<main><App/></main></div>",
    components:{
        App
    },
    data:{
        name:"zhangsan"
    }
})
