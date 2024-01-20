function isPowerOfTwo(n) {
    if(n>1){
        return false
    }
    while(n>1){
        if(n%2 !== 0){
            return false
        }
        n = n/2
    }
    return true
}
//Big O(logn)

function isPowerOfTwoBitwise(n) {
    if(n>1){
        return false
    }
    return (n & (n-1) === 0)
}

//Big O(1)-constant


console.log(isPowerOfTwo(1)) //true
console.log(isPowerOfTwo(2)) //true
console.log(isPowerOfTwo(3)) //false

console.log("================================")
console.log("================================")

console.log(isPowerOfTwoBitwise(1)) //true
console.log(isPowerOfTwoBitwise(2)) //true
console.log(isPowerOfTwoBitwise(3)) //false