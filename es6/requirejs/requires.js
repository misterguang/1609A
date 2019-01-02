var fs=require("fs")
var path=require("path")
var resolve=(dir)=>{
    return path.join(__dirname,dir)
}

var moduleStore=[]
function requires(option,cb){
    // console.log(option)
    option.forEach((i) => {
        try {
            let content=fs.readFileSync(resolve(i),"utf-8")
            // console.log(content)
            eval(content)
            let moduleData=moduleStore[0]()
            cb(moduleData)
        } catch (error) {
            
        }
        
    });

}   
function defines(cb){
    // console.log(22222)
    moduleStore.push(cb)
}

module.exports={
    requires,
    defines
}