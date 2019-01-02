var requires=require("./requires")


requires.requires(["./a.js"],(name)=>{
    console.log(name)
})