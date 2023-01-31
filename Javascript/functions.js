const checkOddNumber = (number) => number % 2 === 0 ? "is an Odd number" : "is an Even number";

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