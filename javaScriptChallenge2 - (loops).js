// console.log(`lifting weights repetition 1`)
// console.log(`lifting weights repetition 2`)
// console.log(`lifting weights repetition 3`)
// console.log(`lifting weights repetition 4`)
// console.log(`lifting weights repetition 5`)
// console.log(`lifting weights repetition 6`)
// console.log(`lifting weights repetition 7`)
// console.log(`lifting weights repetition 8`)
// console.log(`lifting weights repetition 9`)
// console.log(`lifting weights repetition 10`)

for (let rep = 0; rep < 10; rep++) {
    console.log(`lifting weights repetition ${rep}`);
}

const jonas = [
    'Jonasthan',
    'Marie',
    2037 - 1999,
    'ITER',
    'Third Class College',
    ['Martina', 'Dinesh', 'Santosh'],
    false
]

const types = [];
for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i]);
    // console.log(jonas[i], typeof jonas[i]);

    types[i] = typeof jonas[i];
    // console.log(types[i]);
    console.log(i, types);
}

// Important concept starts
const years = [1992, 1999, 1891, 2000];
const age = [];
const ageNumber = [];
for (let x = 0; x < years.length; x++) {
    age[x] = 2037 - years[x];
    ageNumber.push(2037 - years[x]);
}
console.log(age, ageNumber);
// Important concept ends

console.log(`------ONLY STRINGS CONCEPT------`)
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(i, jonas[i], typeof jonas[i]);
}


console.log(`------BREAK WITH NUMBER------`)
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    console.log(i, jonas[i], typeof jonas[i]);
}

// Looping backward 
for (let back = jonas.length - 1; back >= 0; back--) {
    console.log(back, jonas[back]);
}
// loop inside loop
for (let repe = 0; repe < jonas.length; repe++) {
    console.log(repe, jonas[repe]);
    for (let repeinner = 0; repeinner < 5; repeinner++) {
        console.log(`Light weight repetition ${repeinner}`)
    }
}

// While loop
console.log(`----------WHILE LOOP-----------`)
let reps = 1;
while (reps <= 5) {
    console.log(`Lifting repetitions is ${reps}`);
    reps++;
}

let diceRoll = Math.trunc((Math.random() * 6)) + 1;
// console.log(diceRoll);

while (diceRoll !== 5) {
    console.log(`Dice rolled is ${diceRoll}`);
    diceRoll = Math.trunc((Math.random() * 6)) + 1;
    console.log(`Dice rolled is ${diceRoll}`);
    if (diceRoll === 5) {
        console.log(`Loop Ends....`)
    }
    // console.log(`Dice rolled is ${diceRoll}`);
}

// Test for loops

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [23, 56, 334, 564, 99, 6, 200, 778, 991];
const tips = [];
const total = [];

for (let tip = 0; tip < bills.length; tip++) {
    tips.push(calcTip(bills[tip]));
    total.push((calcTip(bills[tip])) + bills[tip]);
}
console.log(bills, tips, total);

const calcAvg = function (arr) {
    let sum = 0;
    for (let arrSum = 0; arrSum < arr.length; arrSum++) {
        // sum = sum + arr[arrSum];  //equals to current value of Sum and current value of 'arr' at current pposition 'arrSum'
        sum += arr[arrSum];
        return sum / arr.length;
    }
    // console.log(run);
}
console.log(calcAvg([1, 2, 3, 999]));
console.log(calcAvg(total));
console.log(calcAvg(tips));