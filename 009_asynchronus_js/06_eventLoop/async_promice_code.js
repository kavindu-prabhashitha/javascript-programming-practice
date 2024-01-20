setTimeout(()=>{
    console.log("First")
},0)

const promise = fetch("www/udemy.com/kavindu")
promise.then(value=>{
    console.log("Promise Value is ",value)
}).catch(
    error=>{
        console.log("Error : ", error)
    }
)

for(let i=0;i<100000000; i++){

}

console.log("Second")