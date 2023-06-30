const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// extraLargeArray:
//insert 4.0484539999999996 s
// append 12.6303 ms

//largeArray:
//insert 44.1987 ms
// append 2.2906 ms

// mediumArray:
// insert 695.2 μs
// append 509.4 μs

// smallArray:
// insert 226 μs
// append 364.8 μs

// tinyArray:
// insert 197 μs
// append 351.6 μs

//Based on the results, it shows that the time for both the insert and append functions gets smaller as the size of the array gets smaller. This shows that the time complexity of these functions is directly connected to the size of the array.
//If we compare the two functions, it shows the append has a lower time than the insert for all the arrays sizes. This would mean that the append scales better. You can tell by the fact that the append consistently shows lower times accross the different sizes compared to the insert.

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
