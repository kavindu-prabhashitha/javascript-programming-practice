
function insertionSortCopilot(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

function insertionSort(arr) {                                              
    for (let i = 0; i < arr.length; i++) {                                                        
        let numberToInsert = arr[i]                               
        let j = i -1                                                                 
        while(j >=0 && arr[j] > numberToInsert){                          
            arr[j+1] = arr[j]                       //                                                  
            j = j-1                                 //                                                      

        }

        arr[j+1] = numberToInsert                   
        
    }
}

const arr = [8, 20, -2, 4, -6]
insertionSort(arr)
console.log(arr)  // [-6, -2, 4, 8, 20]


// 1st Iteration
// [-6, 20, 8, -2, 4] 
// i=0
// numberToInsert = -6 
// j = -1 
// false  
//
// arr[-1+1] -> arr[0]= -6        

// 2nd Iteration
// [-6, 20, 8, -2, 4]   
// i=1  
// numberToInsert = 20 
// j = 1-1 = 0  
// (true && false) -> false 
// arr[1] = 20 

/** 
 * 3rd Iteration 
 
[-6, 20, 8, -2, 4] 
i=2
numberToInsert = arr[2] = 8
j = 2-1 = 1 
(true && true) -> true
     arr[2] = arr[1] -> [-6, 20, 20, -2, 4]
     j = 1-1 = 0
     (true && false) -> false

arr[1]= 8 -->  [-6, 8, 20, -2, 4]
*/

/**
 * 4th Iteration 
[-6, 8, 20, -2, 4]
i=3
numberToInsert = arr[3] = -2
j = 3 -1 = 2
(3 >=0 && (arr[2] -> 20 )> -2)
(true && true) --> true
    arr[2+1] -> arr[3] = arr[2] --> [-6, 8, 20, 20, 4]
    j = j-1 -> 2 -1 = 1

    j >=0 && arr[j] > numberToInsert
    (1 >= 0) && (8 > -2)
    true && true
        arr[j+1] = arr[j] 
        arr[1+1] = arr[1]
        arr[2] = arr[1] --> [-6, 8, 8, 20, 4]
        j = j-1  
        j = 1-1 = 0

        j >=0 && arr[j] > numberToInsert
        0 >= 0 && -6 > -2
        true && false --> false

arr[j+1] = numberToInsert   
arr[0+1] = -2   --> [-6, -2, 8, 20, 4]
 */


/**
 * 5th Iteration
 [-6, -2, 8, 20, 4]
 i=4
 let numberToInsert = arr[i]     
 numberToInsert = 4

  let j = i -1  
  j = 3

  while(j >=0 && arr[j] > numberToInsert)
  3 >= 0 && arr[3] > 4
  3 >= 0 && 20 > 4
  true && true
    arr[j+1] = arr[j] 
    arr[3+1] = arr[3] --> [-6, -2, 8, 20, 20]
    j = j-1
    j = 3-1 = 2

    while(j >=0 && arr[j] > numberToInsert)
    2 >= 0 && arr[2] > 4
    2 >= 0 && 8 > 4
    true && true --> true
        arr[j+1] = arr[j]
        arr[2+1] = arr[2] --> [-6, -2, 8, 8, 20]
        j = j-1
        j = 2 -1 = 1

        while(j >=0 && arr[j] > numberToInsert)
        1 > = 0 && arr[1] > 4
        1 >= 0  && -2 > 4
        true && false --> false
    
arr[j+1] = numberToInsert   
arr[1+1] = 4 --> [-6, -2, 4, 8, 20]

 */

