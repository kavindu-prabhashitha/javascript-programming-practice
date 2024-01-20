function fibonacci(number){
    const fib = [0,1]
    for(i=2;i<number;i++){
        fib[i]= fib[i-1]+fib[i-2]
    }

    return fib
}

console.log(fibonacci(4)) // [ 0, 1, 2, 3 ]

export default fibonacci