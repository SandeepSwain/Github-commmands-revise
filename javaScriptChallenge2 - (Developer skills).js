let number1 = [15, 90, 10, 'error-1', -23, -43, 79, 100, 29];
let number2 = [-1, -99, 10, 'error-2', -23, -43, 9, 10, 299];
const findMax = function (t1, t2) {

    let testArray = t1.concat(t2);
    let maxNumber = testArray[0];
    let minNumber = testArray[0];
    for (let i = 0; i <= testArray.length; i++) {
        if (typeof testArray[i] !== 'number') {
            continue;
        }
        if (testArray[i] > maxNumber) {
            maxNumber = testArray[i];
        }
        if (testArray[i] < minNumber) {
            minNumber = testArray[i];
        }
    }
    console.log(maxNumber, minNumber);
    return maxNumber - minNumber;
}
// findMax([22, 3, 4, 33, 90, 398, 1, 0]);
console.log(findMax(number1, number2));

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
console.log(array1.concat(array2));


// Debug Code testing
const arr1 = [17, 25, 39];
const arr2 = [10, -2.5, 391, 67];
const printForecast = function (tempArr) {
    let str = ' ';
    for (let temp = 0; temp < tempArr.length; temp++) {
        // return "...${tempArr[temp]}\xB0C in ${temp+1} days...";
        str = str + `...${tempArr[temp]}\xB0C... in ${temp + 1} days`;
    }
    console.log(str);
    // return str;
};
printForecast(arr1.concat(arr2));
console.log(`...${arr2[1]}\xB0C...${arr2[0]}\xB0C...${arr2[2]}\xB0C...${arr2[3]}\xB0C...`);