const friends = ['Michael', 'Sonia', 'Ronnie'];
console.log(friends);

console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 3]);

friends[1] = 'Tiger';
console.log(friends);

const firstName = 'JOnas'
const jonas = [firstName, 'Schewanzer', 2037 - 1991, friends];
console.log(jonas);
console.log(jonas.length);


// Previous Function exercise reference
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1994, 1894, 1984, 1884];
const age1 = calcAge(years[3]);
const age3 = calcAge(years.length - 4);
console.log(age1, age3);

// Placing function calls in an array
const ages = [calcAge(years[3]), calcAge(years.length - 4)];
console.log(ages);

// Basic Array OPERATIONS-------

// Add elements
friends.push('Narayan', 'Sobha');
console.log(friends);

// Add elements in first place
friends.unshift('Sreekrishna');
console.log(friends);
console.log(friends.length);

// Remove elements
friends.pop(); //last one
friends.pop();
console.log(friends);

friends.shift(); //first one
console.log(friends);

console.log(friends.indexOf('Ronnie'));

friends.push(23);
console.log(friends);
console.log(friends.includes('23'));

// Array Problem TEST

const calcTip = function (bill) {
    return bill >= 50 & bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const bills = [155, 344, 590, 200];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]), calcTip(bills[3])];
console.log(bills, tip);
const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2], bills[3] + tip[3]];
console.log(total);





















