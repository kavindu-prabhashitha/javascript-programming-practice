function greet(){
    console.log("Hell0")
}

const intervalId = setInterval(greet,1000);

setTimeout(()=>{clearInterval(intervalId)},5000)