function sum(a, b, c){
    return a+b+c
}

console.log(sum(2,3,5))

// sum(2,3,5) --> sum(2)(3)(4)

function curry(fn){
    return function(a){
        console.log("Argument 'a' Added ")
        return function(b){
            console.log("Argument 'b' Added ")
            return function(c){
                return fn(a, b, c)
            }
        }
    }
}

const curriedSum = curry(sum)
console.log(curriedSum(2)(3)(5))

//03 separate function calls
const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)
console.log(add5)