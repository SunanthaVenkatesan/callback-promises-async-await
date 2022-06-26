//an alternate to callback 
//promise is an object that represents a task will be completed in future-is like a invocation of callback 
//promise is declared with new Promise and always have resolve and reject 
// var p1=new Promise(function(resolve,reject){
//     resolve([1,2,3,4])
// }) 
// //here p1.then is the next task that is alloted for promise after line 5 
// p1.then(function(arr){
//     console.log("promise 1 is resolved with data:",arr)
// })
//if a promise is resolved ,by using then keyword the next task can be alloted 
//if a promise is rejected ,by using catch keyword ,error can be highlighted 
// var p1=new Promise(function(resolve,reject){
//     reject("Error")
// })
// p1.then(function(data){
//     console.log("promise 1 is resolved with data:",data)
// }).catch(function(data){
//     console.log("promise1 is rejected with data",data)

// })
//promise with async code 
// var p1=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         var num=Math.floor(Math.random()*10)

//         resolve(num)
       
    
//     },4000)
// })

  
   

// p1.then(function(result){
    
//     console.log("Random number",result)
// })
// //promise with chaining
// var p1=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         var num=Math.floor(Math.random()*10)

//         resolve(num)
       
    
//     },4000)
// })

  
   

// p1.then(function(result){
    
//     console.log("Random number",result)//this first returns the value
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             var num=Math.floor(Math.random()*10)
    
//             resolve(num)
           
        
//         },8000)
//     })
// }).then(function(data){
//     console.log("second random",data)//this is the second promise created
// })

//promise chaining with return and same parameter
var chain=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(5)


    },2000)

}).then(function(res){
   return res+10
    
}).then(function(res){
    return res*7
}).then(function(res){
    console.log("return result",res)
})