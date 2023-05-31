const jonas = [
    'Jonasthan',
    'Marie',
    2037 - 1999,
    'ITER',
    'Third Class College',
    ['Martina', 'Dinesh', 'Santosh']
]
console.log(jonas);

const jonathan = {
    firstName: 'Mariam thomas',
    lastName: 'Sundar Ray',
    age: 23,
    job: 'Developer',
    friends: ['Martina', 'Dinesh', 'Santosh']
}
console.log(jonathan);
console.log(jonathan.firstName);
console.log(jonathan['firstName']);

// Unique way of writing template literal---------------{{{{{{Important}}}}}}
const nameKey = 'Name';
console.log(jonathan['last' + nameKey]);

// Why bracket notation is necessary than dot notation
// Dot notation returns Undefined when property did not match or property is not present in the object 
// console.log(jonathan.'last' + nameKey);
const interestedIn = prompt("What do you want 2 know about Jonas? Give between firstName, lastName, age, job, friends");
if (jonathan[interestedIn]) {
    console.log(interestedIn);
    console.log(jonathan[interestedIn]);
}
else {
    console.log("Wrong request! Please select out of the above options and check the letter casing too.");
}

jonathan.location = "Dhenkanal";
jonathan['Country'] = "India";
console.log(jonathan);

// Test 1
console.log(`${jonathan.firstName} has ${jonathan.friends.length} friends and his best friend is called ${jonathan.friends[1]} `);

// Object Methods
// this method()
const sandy = {
    firstName: 'Mariam thomas',
    lastName: 'Sundar Ray',
    job: 'Developer',
    friends: ['Martina', 'Dinesh', 'Santosh'],
    DOB: 1992,
    hasDrivingLicense: 'Yes',
    calcAge: function () {
        this.age = 2037 - this.DOB
        return this.age;
    },
    calcDetailSummary: function () {
        return (`${sandy.firstName} is a ${sandy.calcAge()}-years old teacher, he has ${this.derivingLicense ? 'a' : 'no'} drivng license`);
    }
}
console.log(sandy.calcAge());

// Test 2
console.log(sandy.calcDetailSummary());

// Test 3
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.89,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};

console.log(mark.calcBMI());
console.log(mark.BMI);
const john = {
    fullName: 'John Smith',
    mass: 90,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};
console.log(john.calcBMI());
console.log(john.BMI);

if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI ${mark.BMI} is greater than  ${john.fullName}'s BMI ${john.BMI}`);
}
else if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI ${john.BMI} is greater than  ${mark.fullName}'s BMI ${mark.BMI}`);
}
else {
    console.log(`Its a tie`);
}





