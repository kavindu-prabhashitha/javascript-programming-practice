/*
Tips for recursive solutions

- Figure out how to break down the problem into smaller versions of the same problem
- Identify the base case for recursion
*/

function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length-1)
}

function search(arr, target , leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(target === arr[middleIndex]){
            return middleIndex
        }

    if(target < arr[middleIndex]){
        return search(arr, target, leftIndex, middleIndex-1)
    }else{
        return search(arr, target, middleIndex+1, rightIndex)
    }
}

console.log(recursiveBinarySearch([-5,2,4,5,9], 5)) // 3
console.log(recursiveBinarySearch([-2,2,3,12,13], 3)) // 2
console.log(recursiveBinarySearch([-5,2,4,10,19,27], 8)) //-1


// Time complexity is Big O(log(n))