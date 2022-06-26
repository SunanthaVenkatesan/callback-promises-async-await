//call back 
//A function that is passed into another function as a parameter and then invoked by that other function 

//example:
function callback(){
    console.log('coming from call back')
}
//a higher order function is the one that accepts call back as a parameter
function higherorder(fn){
    console.log("about to call back")
    fn()//call back is invoked
    console.log("call back is been invoked")
}
higherorder(callback)//calling function inside another function
//call backs are used for advanced arrays(incase of foreach),browser events,ajax calls(synchronous calls),react development

//advance array callback
var arr=[9,8,7]
arr.forEach((element)=>{
    console.log(element)//element itself is passed as a parameter 
})

//DOM(browser events)
document.addEventListener("click",function(){//function is passsed as a argument 
    document.getElementById(" ").innerHTML="Hello"
})
