function greet(name){
    console.log("Hello "+name)
}

const timeoutId = setTimeout(greet, 5000,"Kavindu")
console.log("Timeout ID : ",timeoutId)

//removes the setTimeOut
clearTimeout(timeoutId)