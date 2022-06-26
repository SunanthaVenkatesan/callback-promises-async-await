//call back,promises and async await
//call backs
const posts=[
    {title:'Post One',body:'This is post one'},
    {title:'Post Two',body:'This is post two'}
]

function getPosts(){
    setTimeout(()=>{//to delay so as to get the info 
        let output=''
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`

        })
        document.body.innerHTML=output

    },1000)

}
function createPost(post,callback){//adding a call back and assigning that as a function is a callback and t
    //there will be async work of code in the backend 
    setTimeout(()=>{
        posts.push(post)
        callback()

        },2000)

    }
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop()
            const error=false//to check error in prior
            if(!error){
                resolve()
            }else{
                console.log('Error:Something Went Wrong')
            }
    
        },2000)
    })

    }

    

createPost({title:'post3',body:'This is post three'},getPosts)//here it creates the post and then gets 
createPost({title:'post4',body:'This is post four'},getPosts )

.then(deletePost)

.catch(err=>console.log(err))


//promises

// const posts=[
//     {title:'Post One',body:'This is post one',createdAt:new Date().getTime()},
//     {title:'Post Two',body:'This is post two',createdAt:new Date().getTime()}
// ]

// function getPosts(){
//     setInterval(()=>{//keeps tracking the seconds 
//         let output=''
//         posts.forEach((post,index)=>{
//             output+=`<li>${post.title}-last updated ${(new Date().getTime() - posts[index].createdAt)/1000} seconds ago</li>`

//         })
//         document.body.innerHTML=output

//     },1000)
// }
// function createPost(post,){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push({...post,createdAt:new Date().getTime()})
//             const error=false//to check error in prior
//             if(!error){
//                 resolve()
//             }else{
//                 reject('Error:Something Went Wrong')
//             }
            
    
//         },2000)
    

//     })
    
// }createPost({title:'post3',body:'This is post three'})
// .then(getPosts)
// .catch(err=>console.log(err))


//Async Await
// async function init(){//elegant way to work with promises
//     await createPost({title:'post3',body:'This is post three'})//waiting fot the response using async function with await 
//     getPosts()
// }
// init()

//async/await/fetch


// async function fetchUsers()//using fetch with async function for promises 
// {
//     const res=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data=await res.json()
//     console.log(data)

// }
// fetchUsers()


// //Promise.all
// const promise1=Promise.resolve('Hello World')
// const promise2=10
// const promise3=new Promise((resolve,reject)=>  
// setTimeout(resolve,2000,'Good Bye'))
// const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())//using fetch for promises
// Promise.all([promise1,promise2,promise3,promise4]).then((
// (values)=>console.log(values)))

//I want you to create one more promise called updateLastUserActivityTime. Every time the user creates a post, this promise should be parallely called (should execute in 1 second) .When both the promises (createPost and updateLastUserActivityTime resolve), I want you to console log all the posts created and lastActivityTime of the user




