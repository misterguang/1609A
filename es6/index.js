// for (let index = 0; index < 10; index++) {
//     // var index = 1
//     console.log(index)
// }

// console.log(index)


// // var name = 1;
// // let name = 1;

// name = 1
// let name;


// let fn = function() {

// }


// const name
// name = 2;
// const obj = {
//     name: 1
// }
// obj.name = 2
// console.log(234)

// var arr = [1, 2, 3]
// var obj = [...arr]
// var obj = { a: 1, b: 2 }
// var obj1 = {...obj }
// console.log(obj1)



// var arr = [1, 2, 3]

// // var [a, b, c, d] = { a: 1 }
// var [a, b, c, d, ...e] = "123452"
// console.log(e)


// var a=b?b:"2"

// var arr = [1, 2, 3, ""]

// let [a, b, c, d = (function() {
//     console.log(11)
//     return 4
// })()] = arr
// console.log(d)

// var a = 1
// var objs = {
//     a: a
// }

// var obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// var bb, aa;
// ({ b: bb, a: aa }) = obj
// // console.log(a, b)
// console.log(aa, bb)


// var obj = {
//     aa: {
//         a: {
//             b: 23
//         },
//         c: 45
//     },
//     bb: 34
// }


// var { aa: { a: { b }, c }, cc = { a: 2 } } = obj
// console.log(cc)


// var { 1: a } = [1, 2]
// console.log(a)


// function aa({ a, b = 34 }) {

//     console.log(a)
// }

// aa({
//     a: 1
// })



// let { a } = null

// var [a] = { a: 2 }
function l(arg) {
    console.log(arg)
}
// var str = "sdfdsfsda"

// l(str.repeat(-0.1))


// function aa() {
//     // let data = Array.prototype.slice.call(arguments, 2)
//     // console.log(data)
//     // l(arguments)
//     // l(Array.from(arguments).slice(2))
//     l([...arguments])

// }
// aa(1, 2, 3, 4)


// let data = new Set([1, 2, 3, 4])
// l([...data])
// l(Array.from(data, (i) => {
//     if (i > 2) {
//         return i
//     }
// }))

// let data = [1, 2, 3]
// let data2 = [4, 5, 6]
// let data3 = data.concat(data2)
// l(data3 == data)

// l([...data, ...data2])

// l(Array.of(...data) == data)

// function aa(a, ...rest) {
//     // console.log()
//     // l([...arguments])
//     console.log(rest)
// }

// let data = [1, 2, 3]
// aa(...data)

// var data = [1, 2, 3, 4]
// l(data.find((i) => {
//     console.log(i)
//     if (i == 2) {
//         return true
//     }
// }))

// let data = [1, 2, 3, 4]
// let obj = {
//         a: "1",
//         b: 2,
//         c: 3
//     }
//     // l(Object.entries(obj))
//     // l(Object.keys(obj))
// l(Object.values(obj))
// var data = [1, 2, 3]
// var data1 = {
//         [Symbol.iterator]: () => { return { a: 2, b: 3, c: 4 } }
//         var sets = new Set([1, 2, 3])
//         for (const key of data1) {
//             console.log(key)
//         }


// var arr = [1, , 2, 3]
// l(arr.join("-"))
// l(arr.map((i) => {
//     console.log(1)
//     return i
// }))
function fn() {
    l(2)
    return 1
}
let { a, b } = { a: 1, b: 2 }

// function aa({ a, b }) {
//     // let a = 2
//     console.log(a, b)
// }
// aa({ a: 1, b: 2 })
// function aa(a = 1, ...b) {
//     // let a = 2
//     console.log(a, b)
// }
// aa(1, 2, 3)


// let obj = {
//     aa: function() {
//         console.log(this)
//         var bb = () => {

//                 console.log(this)
//             }
//             // var bb = function() {
//             //     console.log(this)
//             // }

//         return bb.bind(this)
//     }
// }

// var bb = obj.aa()
// bb()

// [...arr]
// Array.from()
// function aa(...b) {
//     var arr = [6, 7, 8]
//     arr.push(...b)
// }
// var arr = [1, 2, 3, 4]
// aa(...arr)
// l([...
//     "sfdsafsdaf"
// ])



// let aa = () => {
//     l(arguments)
// }

// aa(1)

// function fn() {

// }
// var name = 1
// let obj = {
//     fn,
//     name,

//     fnn() {

//     },
//     age: {
//         setter() {
// //             console.log(22)
// //         },
// //         getter() {

// //         }
// //     }
// // }
// // obj.age = 23

// function eventFn(val) {
//     console.log(val)
// }

// const cart = {
//     _wheels: 4,
//     name: 2,
//     get wheels() {
//         console.log(222)
//         return this._wheels;
//     },
//     set wheels(value) {
//         eventFn(value)

//         this._wheels = value;
//     }
// }


// // let oldname = null
// setTimeout(() => {
//     cart.wheels = 3
//         // oldname = cart.name
// }, 1000)



// setInterval(() => {
//     if (oldname != cart.name) {
//  console.log(cart.name)
//     }
// })


// cart.wheels = 3
// cart.wheels



// var arr = [1, 2, 3]
// var arr2 = [4, 5, 6]
// l(Array.from(arr, arr2))
// var c = { cc: 5 }

// var obj2 = { c }
//     // obj2.__proto__ = {
//     //     cc: 2
//     // }
// let obj3 = Object.assign({}, obj, obj2)
//     // l(obj3.c == c)

// var obj = { a: 2, b: 3, c: 3 }
// obj.__proto__ = {
//     cc: 5
// }

// l(Object.getPrototypeOf(obj))

// Object.defineProperty(obj, "a", {
//     writable: false,
//     enumerable: false
// })
// let des = Object.getOwnPropertyDescriptor(obj, "a")
// l(des)

// // for (const key in obj) {
// //     console.log(key)
// // }
// l(Object.getOwnPropertyNames(obj))


// l(Object.values(23))


// let obj = {
//     a: 1,
//     b: 2
// }

// let obj2 = { c: 3 }
// Object.assign({}, obj, obj2)
// let objs = {...obj, ...obj2 }
// l(objs)

// var arr = [{
//     a: 1,
//     b: 2,
//     time: "2018/10/10"
// }, {
//     a: 5,
//     b: 2,
//     time: "2018/10/15"
// }, {
//     a: 2,
//     b: 2,
//     time: "2018/10/12"
// }, {
//     a: 3,
//     b: 2,
//     time: "2018/10/9"
// }]

// var getFormetTime = function(fmt, time) { //author: meizz
//     var date = time ? new Date(time) : new Date()


//     var o = {
//         "M+": date.getMonth() + 1, //月份 
//         "d+": date.getDate(), //日 
//         "h+": date.getHours(), //小时 
//         "m+": date.getMinutes(), //分 
//         "s+": date.getSeconds(), //秒 
//         "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
//         "S": date.getMilliseconds() //毫秒 
//     };
//     if (/(y+)/.test(fmt)) {
//         //RegExp.$1返回上一次正则匹配结果中的子表达式结果，这里是yyyy
//         fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
//     }
//     for (var k in o)
//         if (new RegExp("(" + k + ")").test(fmt)) {
//             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
//         }
//     return fmt;
// }

// function sortArr(cb) {
//     console.log(this)
//     let arr = this.sort((a, b) => {
//         a.time = new Date(a.time)
//         b.time = new Date(b.time)
//         return cb(a) - cb(b)
//     })
//     return arr.map((i) => {
//         i.time = getFormetTime("yyyy-MM-dd", new Date(i.time).toLocaleDateString())
//         return i
//     })
// }
// Array.prototype.sortArr = sortArr
// l(arr.sortArr((item) => { return item.time }))


// var str = "1"
// var str2 = "1"

// let sym1 = Symbol({ sdfasd: 2 })
// let sym2 = Symbol("dsfgsdf")
//     // l(sym1)
//     // l(sym1 == sym2)

// let obj = {
//     [Symbol("name")]: "zhangsan",
//     [Symbol("age")]: 23
// }
// l(obj[Symbol("age")])

// function animal() {
//     var key = Symbol("key")
//     this[key] = "12345"
//     this.fn = function() {
//         if (this[key] == "12345") {
//             return "000001"
//         }
//     }
// }
// let obj = new animal()
// l(obj._key)
// obj.key = 234567
// l(obj.fn())

// let arr = [1, 2, 3, 4, 2, 3]


// function sortArr(data) {
//     return [...new Set(data)]
// }
// l(sortArr(arr))

// var sets = new Set([1, 2, 3, 4, { a: 1 }])
// sets.add({ a: 1 })
// l(sets.keys().forEach(element => {
//         console.log(element)
//     }))
// l(sets)

// var bb = { a: 3 }
// let obj = new Map()
// obj.set(bb, bb)
// for (const iterator of obj) {
//     console.log(iterator)
// }
// // l(obj)


// function* helloWorldGenerator() {
//     yield 'hello';
//     l(1)
//     yield 'world';
//     l(2)
//     return 'ending';
// }

// var hw = helloWorldGenerator();
// hw.next()
// hw.next()
// hw.next()
// hw.next()
// l(hw)

// function one() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 resolve(1)
//             }, 1000)
//             // reject()
//     })
// }

// function two(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(++num)
//         }, 2000)
//     })
// }

// async function aa() {
//     let num = await one()
//     let num2 = await two(num)
//     return { num, num2 }
// }

// aa().then((data) => {
//     console.log(data)
// })

// Promise.all([one(), two(1)]).then((data) => {
//     console.log(data)
// })

// Promise.race([one(), two(1)]).then((data) => {
//     console.log(data)
// })



// one().then((data) => {
//     console.log(data)
//     return two(data)
// }).then((data2) => {
//     console.log(data2)
// }).catch((err) => {
//     console.log(err)
// })

// function a() {
//     this.name = "zhangsan"
// }

// function b() {
//     this.age = 23
// }
// a.prototype ={add(){}}

//     // a.prototype.add = function() {}

// var $aa = new a()

// this = {}
// this.name = 23
// return this

// new b()
// b()




// class bb {
//     constructor() {
//         this.age = 34
//         return obj
//     }
// }

// var str = Symbol("")

// var obj = {}
// class aa {
//     static test=1223;
//     constructor(num) {
//         // super()
//         this.name = "lisi"
//         this.fn = function() {}
//             // this.add = this.add.bind(this)
//         this.add = () => this._add()
//             // if (num) {
//             //     Object.assign(this, { age: 1 })
//             // }
//             // return {}
//             // return obj
//             this._addr="beijing"
//     }
//     _add() {
//         console.log(this.name)
//     }

//     [str]() {
//         console.log(123)
//     }

//     get addr(){
//         l("get")
//         return this._addr
//     }
//     set addr(val){
//         console.log("set")
//         this._addr=val
//     }
// }

// var obj={
//     _a:23,
//     get a(){
//         return this._a
//     }
// }

// l(aa.test)
// var $aa = new aa()
// l($aa.test)


// function Promise(){
//     this.name="22"
// }
// Promise.all=function(){

// }
// $aa.addr=244

// new Promise

// Promise.all()


// l(str == str)

// $aa[str]()

// $aa.__proto__.test = function() {
//     console.log("2")
// }
// var $bb = new aa()

// $bb.test()


// var {a:b}={a:1}
// console.log(a)

// l($aa.__proto__ == $bb.__proto__)


// const MyClass = class Me {
//     getClassName() {
//         return Me.name;
//     }
// };

// new Me()

// Object.assign(aa.prototype, { test() { l("nihao") } })

// var { add } = new aa(true)
// add()
// console.log(add)
// console.log(Object.getOwnPropertyNames(aa.prototype))

// l(typeof aa)
// var $aa = new aa({
//     num: 1
// })
// console.log($aa.constructor == aa)





// class bb{
//     constructor(){
//         this.name="@22"
//     }
//     add(){

//     }
// }

// class aa extends bb{
//     constructor(){
//         super()
//         l(super.add)
//         l(this.name)
//     }
// }

// let obj=new aa()


// class A {
//     constructor(){
//         this.name=1
//     }
// }

// class B extends A {
// }

// let bb=new B()
// let aa=new A()
// l(aa.__proto__==A.prototype)
// l(B.prototype.__proto__==aa.__proto__)
// B.__proto__ === A // true
// B.prototype.__proto__ === A.prototype // true


// function b(){

// }
// function a(){

// }
// b.prototype=new a()



// try {
//     // setTimeout(()=>{
//         throw Error("2222")
//     // })
// } catch (error) {
    
// }

// new Promise((res)=>{
//     res(123)
// })

// l(Promise.resolve(123).then((data)=>{
//     l(data)
// }))



// async function f() {
//     try {
//        await new Promise((res,rej)=>{
//            throw Error(123)
//             // setTimeout(()=>{
//             //         rej(234)
//             // })
//        });
//     } catch(e) {
//       console.log(e+"内部")
//     }
//     return await Promise.resolve('hello world');
//      };

//  f().then(v => console.log(v))
//  .catch(e => console.log(e+"外部"))

// async function f(){
//     return await 123;

// }
// f().then((data)=>{
//     console.log(data)
// })





