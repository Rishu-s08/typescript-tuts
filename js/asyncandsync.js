// //sync - runs one command then other without interfering each other
// console.log("hey")
// console.log("hey1")
// console.log("hey2")
// console.log("hey3")
// //run in continuous manner

// //async - run together and the one who complete earier return earier followed by rest
// //setTimeout
// //setInterval
// //promises
// //fetch
// //axios
// //XMLHttpRequest






// // setTimeout(callback,timeout);

// console.log("up of async code run instantly");
// setTimeout(() => {
//     console.log("inside run after 2s")
// }, 2000);
// console.log("down of async code run instantly");

// //js is not async PL!! it is single threaded
// console.log("up of async code run instantly");
// setTimeout(() => {
//     console.log("inside run after 0s")
// }, 0);
// console.log("down of async code run instantly");
//it also print async after sync cause sync code execution happen in main stack
//whereas all async block work in side stack and only they come in main stack if there work is done and theres no remaining sync execution left in main stack
//event loop - its the one that ask after main stack is empty and work is complete and then it throw that async in main stack for execution








//promises - used for async code
//callback
//then catch
//async await
// these 3 used for to get the result from the promises 

//either promise - pending (getting data/working) or resolve(completed) or rejected(cant perform)
//so then work if promise resolve and catch when it dont 

var pro = new Promise((resolve, reject)=>{
    //something then return if res and rej

    return resolve("hiii can be used as this it is returning fucktion")
})

var new_pro = pro.then((data)=>{
    // if promise resolve
    console.log(data)
    return new Promise((res,rej)=>{
        return res("omaygod confusing but its in then")
    })
})
.catch(()=>{
    // if promise wont resolve 
    console.log("it doesnt resolve")
    return new Promise((res,rej)=>{
        return rej("omaygod confusing but its in catch")
    })
})

new_pro.then((data)=>{
    console.log(data)
})
.catch((data)=>{
    console.log(data)
})






// now to skip this shit we have async await thats also shitty tho

async function acs(){
    let raw = await fetch("https://randomuser.me/api/") // its an promise, one await gives raw data
    let and = await raw.json()
    console.log(and)

}

acs()