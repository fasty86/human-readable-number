module.exports = toReadable;
function toReadable(number) {
    const dCount = getLength(number);
    if ((dCount === 1) | (dCount === 2)) {
        return getDoubleDigits(number);
    } else {
        const firstNumber = Math.floor(number / 100);
        const secondNumber =
            number % 100 === 0 ? "" : getDoubleDigits(number % 100);
        let result = `${singleDigits.get(
            firstNumber
        )} hundred ${secondNumber.trim()}`;
        return result.trim();
    }
}

const singleDigits = new Map();
singleDigits
    .set(undefined, "")
    .set(0, "zero")
    .set(1, "one")
    .set(2, "two")
    .set(3, "three")
    .set(4, "four")
    .set(5, "five")
    .set(6, "six")
    .set(7, "seven")
    .set(8, "eight")
    .set(9, "nine")
    .set(10, "ten")
    .set(11, "eleven")
    .set(12, "twelve")
    .set(13, "thirteen")
    .set(14, "fourteen")
    .set(15, "fifteen")
    .set(16, "sixteen")
    .set(17, "seventeen")
    .set(18, "eighteen")
    .set(19, "nineteen");

const doubleDigits = new Map();
doubleDigits
    .set(2, "twenty")
    .set(3, "thirty")
    .set(4, "forty")
    .set(5, "fifty")
    .set(6, "sixty")
    .set(7, "seventy")
    .set(8, "eighty")
    .set(9, "ninety");

function getLength(number) {
    return Number(number.toString().length);
}
function getDoubleDigits(number) {
    if (singleDigits.has(number)) return singleDigits.get(number);
    else {
        const firstNumber = Math.floor(number / 10);
        const secondNumber = number % 10 === 0 ? undefined : number % 10;
        let result = `${doubleDigits.get(firstNumber)} ${singleDigits.get(
            secondNumber
        )}`;
        return result.trim();
    }
}
// console.log(toReadable(3));
// console.log(toReadable(11));
// console.log(toReadable(99));
// console.log(toReadable(35));
// console.log(toReadable(20));
// console.log(toReadable(30));
// console.log(toReadable(300));
// console.log(toReadable(101));
// console.log(toReadable(999));
