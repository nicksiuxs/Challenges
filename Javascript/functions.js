/**
 * Challenge 01
 * Create a new function in Regular and Arrow types, 
 * which should receive a number and will print in 
 * console if that number is either odd or even
*/

//--------------------

/**
 * Function to check if a number is an odd number or an even number
 * @param {*} number number to verify if it is odd
 * @returns string with text is a odd number or even number
 */
const checkOddNumber = (number) => number % 2 === 0 ? "is an Odd number" : "is an Even number";

/**
 * Function to check if a number is an even number or an odd number
 * @param {*} number number to verify if it is odd
 * @returns string with text is a odd number or even number
 */
function checkEvenNumber(number) {
    if (number % 2 === 1) {
        return "is an Even number";
    }
    return "is an Odd number";
}

const numbers = [];

for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

numbers.forEach(number => {
    console.log("--------")
    console.log("number: ", number)
    console.log("checkOddNumber --> ", checkOddNumber(number));
    console.log("checkEvenNumber -->", checkEvenNumber(number));
    console.log("---------")
    console.log(" ")
})