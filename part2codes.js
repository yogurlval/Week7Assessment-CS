//Sum Zero //

function addToZero(arr){
    let result = false

for (let i = 0; i < arr.length; i++){
    for (let k = 0; k < arr.length; k++){
        if(arr[i] + arr[k] === 0){
            result = true
        }
    }
}
return result
}

// this code runtime is O(n^2)
// the space complexity is O(1)

// console.log(addToZero([]));
// // -> False

// console.log(addToZero([1]));
// // -> False

// console.log(addToZero([1, 2, 3]));
// // -> False

// console.log(addToZero([1, 2, 3, -2]));
// -> True

// Unique Characters //

function hasUniqueChars(string){
    for( let i =0; i < string.length; i++){
        for( let x = i +1; x < string.length; x++){
            if(string[i] === string[x]){
                return false
            }
        }
    }
 return true
}

//this code runtime is O(n^2) and space complexity is O(1)

// console.log(hasUniqueChars("Monday"));
// // -> True

// console.log(hasUniqueChars("Moonday"));
// -> False

//Pangram Sentence//

const isPangram = (sentence) =>{
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let lowercase = sentence.toLowerCase()

    for(let i = 0; i < alphabet.length; i++){
        if (!lowercase.includes(alphabet[i])){
            return false
        }
    }

    return true
}

// this function time complexity is O(n) and space is O(1)

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

//Longest Word//
const findLongestWord = words =>{
    let longestLength = 0

    for(let i = 0; i < words.length; i++){
        if(words[i].length > longestLength){
            longestLength = words[i].length
        }
    }

    return longestLength
}

// this function time complexity is O(n) and space is O(1)

console.log(findLongestWord(["hi", "hello", "valentina"]));
// -> 5