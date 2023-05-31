// var d1, d2, d3, k1, k2, k3;

const dolphinTeam = (22 + 45 + 99) / 2;

const koalasTeam = (25 + 41 + 84) / 2;

console.log(dolphinTeam, koalasTeam);

// const arr = array[2];

// Calling a function inside a function

const cutPieces = function (fruit) {
    return fruit * 4;
}

const fruitProcessor = function (apples, oranges) {
    const applePiece = cutPieces(apples);
    const orangePiece = cutPieces(oranges);

    const juice = `Juices consists of ${applePiece} pieces of ${apples} apples and ${orangePiece} pieces of ${oranges} oranges`;
    return juice;
}

const fruitJuice = fruitProcessor(3, 8);
console.log(fruitJuice);

// Retirement function definition
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    }
    else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
}

console.log(yearUntilRetirement(1992, 'Sandy'));
console.log(yearUntilRetirement(1970, 'Rinki'));

// Coding test for FUNCTIONS

// TEST 1
const averageScores = (a, b, c) => {
    const avg = (a + b + c) / 3;
    return avg;
}
console.log(averageScores(2, 4, 5));
let scoreDolphins = averageScores(11, 22, 44);
let scoreKoalas = averageScores(2, 3, 5);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Doplohin wins cup`)
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas wins Cup`);
    }
    else {
        console.log(`NO 1 Wins`)
    }
}
checkWinner(scoreDolphins, scoreKoalas);

// TEST 2
scoreDolphins = averageScores(1, 2, 3);
scoreKoalas = averageScores(44, 55, 99);
checkWinner(scoreDolphins, scoreKoalas);