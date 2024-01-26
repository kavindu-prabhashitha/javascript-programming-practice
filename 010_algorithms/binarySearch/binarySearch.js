function binarySearch(arr, target) {
    let leftIndex=0;
    let rightIndex = arr.length -1

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(target === arr[middleIndex]){
            return middleIndex
        }

        if(target < arr[middleIndex]){
            rightIndex = middleIndex -1
        }else{
            leftIndex = middleIndex +1
        }
    }

    return -1
}

// console.log(Math.floor(1.8)) // 1

console.log(binarySearch([-5,2,4,5,9], 5)) // 3
console.log(binarySearch([-2,2,3,12,13], 3)) // 2
console.log(binarySearch([-5,2,4,10,19,27], 8)) //-1

// Big O is log(n)