let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

const jessica = {
    firstName: 'Mandu',
    lastName: 'Mani',
    age: 90
}

const marriedJessica = jessica;
jessica.lastName = 'Badikhai';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica); //Here whatever changes we make in the jessica obj will reflect same in marriedJessica obj and vice versa

// marriedJessica = {};

// Copying objects
const jessica2 = {
    firstName: 'Bedhei',
    lastName: 'Maikina',
    age: 100,
    family: ['Gandimara', 'RandiAnanta', 'ChodiPua']
}

const jessicaCopy = Object.assign({}, jessica2); //Object.assign create ShallowCopy which copy the properties in first level while Deep-Clone/Copy will copy everything.
jessicaCopy.lastName = "Chodhi"
console.log('Before Marriage:', jessica2)
console.log('After Marriage:', jessicaCopy) //Here as jessicaCopy obj is the copy of the jessica2 obj so whatever the change we did in jessica2 obj will not reflect in jessicaCopy obj and vice versa. So basically jessicaCopy obj is the reference of jessica2 obj. So it will point to same 

jessicaCopy.family.push('ChitaKatta')
