// task #1

let numbers = [2, 3, 4, 5];
let result = 1;
for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
}
console.log(result);

let multiplicationBase = 1;
let ind = 0;
while (ind < numbers.length) {
    multiplicationBase *= numbers[ind];
    ind++;
}
console.log(multiplicationBase);

// task #2

for (let counter = 0; counter <= 15; counter++) {
    if (counter % 2 === 0) {
        console.log(counter + ` is even`);
    } else if (counter % 2 != 0) {
        console.log(counter + ` is odd`);
    }
}

// task #3

function randArray(k) {
    let arrayToFill = [];
    for (let el = 0; el < 5; el++) {
        arrayToFill[el] = Math.floor(Math.random() * 501);
    }
    console.log(arrayToFill);
}

// task #4

let numberToRaise = parseInt(prompt(`Enter integer number, you want to raise to power`));
let power = parseInt(prompt(`Enter power to which you want to raise previous number`));

function raiseToDegree(a, b) {
    (!isNaN(a) && !isNaN(b)) ? alert(a + ` in ` + b + ` power is ` + a ** b): alert(`Seems like you messed up with numbers!`);
};
raiseToDegree(numberToRaise, power);

// task #5

function lastElArray(arr, num) {
    if (num === undefined) {
        num = 1;
    }
    num > arr.length ? console.log(arr) : console.log(arr.slice(arr.length - num));
}

// task #6

let stringToArray = prompt('Type whatever you want');

function capFirstLetter(str) {
    let arrFromStr = str.split(` `);
    let capitalArray = [];

    for (let word = 0; word < arrFromStr.length; word++) {
        capitalArray.push(arrFromStr[word].charAt(0).toUpperCase() + arrFromStr[word].substring(1));
    }

    console.log(capitalArray.join(` `));
}

capFirstLetter(stringToArray);