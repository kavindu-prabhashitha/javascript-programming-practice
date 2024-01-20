const promise01 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 500, "One")
})

const promise02 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 100, "Two")
})

Promise.race([promise01,promise02]).then((value)=>{
    console.log(value)
})