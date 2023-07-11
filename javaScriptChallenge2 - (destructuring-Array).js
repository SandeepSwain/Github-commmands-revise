"use strict";

const restaurant = {
    name: 'Italiano Classics',
    location: ['dhenkanal', 'bhubaneswar', 'cuttack'],
    categories: ['bread', 'curry', 'deserts', 'non-veg starter'],
    starterMenu: ['Focaccia', 'Tandoori-chicken', 'Biryani', 'Chicken 65', 'Gulab Jamun', 'Tandoori Naan'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [2, 4, 6];
const a = [0];
const b = [1];
const c = [2];

const [x, y, z] = arr; //array destructuring n d o/p is (2 4 6)
console.log(x, y, z);
console.log(arr);

const [first, second, third] = restaurant.categories;
console.log(first, second, third);

let [main, , , secondary] = restaurant.starterMenu;
console.log(main, secondary);

//Solution Type 1
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Solution Type 2
[main, , , secondary] = [secondary, , , main]
console.log(main, secondary);

console.log(restaurant.order(2, 0));
const [starter, mainItems] = restaurant.order(2, 0);
console.log(starter, mainItems);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, j, [k, l]] = nested
console.log(i, j, k, l);