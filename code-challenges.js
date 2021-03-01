// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected outcome: "85 is below boiling point" "350 is above boiling point" "212 is at boiling point"

// var temp1 = 85
// var temp2 = 350
// var temp3 = 212

// const temperatureOutcome = (number) => {
//       if (number < 212) {
//         return `${number} is below boiling point`
//     } else if (number === 212) {
//         return `${number} is at boiling point`
//     } else if (number > 212) {
//         return `${number} is above boiling point`
//     }
// }

// console.log(temperatureOutcome(temp3))


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45] [10, 25, -40, 100, 160]

// var myForNumbers1 = [3, 7, 0, 6, -9]
// var myForNumbers2 = [2, 5, -8, 20, 32]
// create a function that multiplies each number in arrays by 5
// use a for loop
// i need it to return the arrays multiplied by 5!!!!!!!!!!!
// const numbersMultiplied = (array) => {
//     let numbers = []
//     for (let i = 0; i < array.length; i++) {
//         numbers.push(array[i] * 5)
// }
// return numbers
// }
// console.log(numbersMultiplied(myForNumbers1))
// console.log(numbersMultiplied(myForNumbers2))


// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [435, 30, 140, 80, 10] [40, -35, 0, 30, 60]

// write the variables
// var myMapNumbers1 = [87, 6, 28, 16, 2]
// var myMapNumbers2 = [8, -7, 0, 6, 12]
// // write the function that will pull each number and multiply it by 5 using map
// // const mappedNums = myMapNumbers1.map(numbers =>  {
// //       return numbers * 5
// //         // get the return and multiply it by 5
// // })

// // console.log(mappedNums)
// // I DID IT WITH ONE ARRAY BUT CANT FIGURE OUT HOW TO GET BOTH, LET ME TRY AGAIN

// const  mappedNums = (array) => {
//     return array.map(value => {
//         return value * 5
//     })
// }

// console.log(mappedNums(myMapNumbers2))

// I THINK I GOT IT!!!! I WAS HAVING TROUBLE FIGURING OUT WHERE TO PUT MY (ARRAY) AND WHERE TO PUT MY (VALUE)

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

const removedVowels = (array) => {
// // 	// Create variable to store the letters
    let letters = array.split(""); 
    let letters2 =letters.filter(value => {
        if (! ["a", "e", "i", "o", "u"].includes(value)) {
            return true
        } else {
            return false
        }
    })
    return letters2.join('')
}
console.log(removedVowels(removedVowels(stringWithVowels2)))
// //         // create an argument that check to see if statements are true
//             // if true, then it will push whatever does not match the vowels provided
              
// // Expected output "HyThrLrnStdnt" "LvJvScrpt"

// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"

// var refactorTester1 = true
// var refactorTester2 = 42
// var refactorTester3 = "IAmACodingMaster"
// // pasted the previous syntax from questions 4.
// // need function to include nonstreing edges
// const removedVowels = (array) => {
//         let letters = array.split(""); 
//         let letters2 =letters.filter(value => {
//             // need it to check for uppercase and lowercase letters
//             if (! ["a", "e", "i", "o", "u"].includes(value)) {
//                 // need it to check nonstring edges
//                 return true
//             } else {
//                 return false
//             }
//         })
        
//  if (typeof value === "number" || typeof value === "boolean" {
//     return `${value} is not a string`
//     return letters2.join('')
// }
//     }
//     console.log(removedVowels(refactorTester2))
    // can't get it to read the uppercase letters too. i know i have to put .toLowerCase
    // but i can't find anywhere to put it



// --------------------6) Create a function that takes in an array of strings and returns the string with the most characters.
// Expected output: "chopsticks" "stemware"

// var utensils = ["fork", "knife", "tongs", "chopsticks", "skewer"]
// var vessels = ["cup", "mug", "stemware", "glass", "tumbler", "tea cup"]

// const highestNumWord = (array, index) => {

// for (let i = 1; i < array.length; i++) {
//     // Check if the next element in the array has more letters
//     if (array[i] > highestNumWord) {
//         // The string with the most letters is now index 'i' of array 'nums'
//         highestNumWord = array[i]
//     }
// }
// }

// console.log(highestNumWord(utensils))
// im stuck!!!!!!!!

// --------------------7) Create a function that takes in an array of strings and returns an array with the last letter removed from each string.
// Expected output: ["Luig", "Peac", "Toa", "Yosh"] ["Ink", "Blink", "Pink", "Clyd"]

// var mario = ["Luigi", "Peach", "Toad", "Yoshi"]
// var pacman = ["Inky", "Blinky", "Pinky", "Clyde"]
// // create the function that tales an array
// // i need it to return an array with the last letters removed from each string

// const letterRemoved = (array) => {
//     return array.map((array) => {
//         return array.slice(0, -1)
//     })
// }
// console.log(letterRemoved(mario))
// need to identfy the last letter.... .push() maybe?
// i need to remove it
// i need a return with the last letter removed .....