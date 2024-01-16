const promise01 = Promise.resolve(3)
const promise02 = 42;
const promise03 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"Kavindu")
})

Promise.allSettled([promise01,promise02,promise03]).then((value)=>{
    console.log(value)
})