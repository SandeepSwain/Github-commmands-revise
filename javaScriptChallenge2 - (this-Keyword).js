"use strict ";

console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};
calcAge(1991);

const calculateAge = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
};
calculateAge(1980);

// var firstName = 'Matilda';
const jonas = {
    firstName: 'Sandeep',
    year: 1995,
    calcAgeNo: function () {
        console.log(this);
        console.log(2021 - this.year);
    },
    // greet: () => {
    //     console.log(`Hey ${this.firstName}`)   //this will give output of 'Hey undefined'; because arrow function doesnot have own this keyword.
    // },
    greet: () => {
        console.log(`Hey ${jonas.firstName}`)     // this will give output of 'Hey Sandeep'
    },
    greeting: function () {
        console.log(this);
        console.log(`Hey ${this.firstName}`)      // this will give output of 'Hey Sandeep'
    }
}

jonas.greet();
jonas.greeting();
jonas.calcAgeNo();

const matilda = {
    year: 1956,
}

matilda.calcAgeNo = jonas.calcAgeNo;
matilda.calcAgeNo();

// const f = jonas.calcAgeNo;
// f();

//Example 2

const sandy = {
    firstName: 'Rajni',
    year: 1945,
    calcAges: function () {
        console.log(this)
        console.log(2021 - this.year)
        // Solution 1
        // const self = this;
        // const isMillenial = function () {
        //     console.log(self)
        //     console.log(self.year <= 1981 && self.year >= 1940)
        // }
        // isMillenial();


        // Solution 2
        const isMillenial = () => { //as in arrow function it will point towards parent scope this keyword
            console.log(this)
            console.log(this.year <= 1981 && this.year >= 1940)
        }
        isMillenial();

    },


    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`)
    }
}
sandy.greet();
sandy.calcAges();

//Example 2 for arguments(not so important in modern javascript anymore)

const addExpr = function (a, b) {
    console.log(arguments); //show all the arguments paramter in o/p 
    return a + b;
}
addExpr(2, 6, 8);
addExpr(2, 16, 10, 8);

// const addArrw = (a, b) => {
//     console.log(arguments);  //o/p is `arguments not defined` error
//     return a + b;
// }
// addArrw(2, 6, 8);
// addArrw(2, 16, 10, 8);

//Example 2 for object and this keyword
let age = 21;
let oldAge = age;
age = 23;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Sandiego',
    age: 17
}
const friend = me;
friend.age = 20;
console.log(friend, 'friendDetails')
console.log(me, 'meDetails')