async function greet(){
    return "Hello"
}

greet()
console.log(greet())

greet().then((value)=>{
    console.log("Value in then : ",value)
})