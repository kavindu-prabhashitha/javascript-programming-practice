const  onFulFillment = (result)=> {
    console.log(result)
    console.log("Promise has been full filled")
}

const  onRejection = (error) =>{
    console.log(error)
    console.log("Promise has been Rejected")
}

const promise_res = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Bringing tacos")
    },5000)
})

const promise_rej = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Not Bringing tacos, food truck is not there")
    },7000)
})

promise_res.then(onFulFillment)
promise_rej.catch(onRejection)