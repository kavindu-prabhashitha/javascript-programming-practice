function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===target){
            return i
        }
    }

    return -1
}

function linearSearchWithFilter(arr, target) {
    const res = arr.filter((val)=>{
        return val === target
    })

    return res
}

console.log(linearSearch([-5,2,4,5,9,3], 5)) // 3
console.log(linearSearch([-2,2,3,12,3], 3)) // 2
console.log(linearSearch([-5,2,4,10,9,7], 8)) //-1

const result = linearSearchWithFilter([-2,2,3,12,3], 3)
console.log(result)