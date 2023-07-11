
// Example 0
// console.log(me);
// console.log(job);
// console.log(age);

// var me = 'sandeep';
// let job = 'doctor';
// const age = 23;

//Example 1

console.log(addDecl(2, 3)); //function declaration call is possible before function definition.
// console.log(addedExpr(3, 4)); 
//console.log(addedArrow(2,9));

//as the const and let is in temporal dead zone so can''t be accessed before initialization

// console.log(addExpr(3, 7));
// console.log(addArrow(3, 9)); 

//as the variable initialisation is done before the var declaration so it is undefined as per hoisting.

function addDecl(a, b) {
    return a + b;
}

const addedExpr = function (a, b) {
    return a + b;
}

const addedArrow = (a, b) => (a + b);

var addExpr = function (a, b) {
    return a + b;
}

var addArrow = (a, b) => (a + b);

// Example 2
console.log(undefined);
if (!numProducts) {     //here the numProducts is undefined due to hoisting as 'var' is undefined.
    deleteShoppingCart();
}

var numProducts = 10;
function deleteShoppingCart() {
    console.log("All products are deleted");
}


// Example 3

var x = 10;
let y = 2;
const z = 4;
console.log(this.x === window.x);
console.log(this.y === window.y);
console.log(this.z === window.z);