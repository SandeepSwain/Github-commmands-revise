"use strict";

const restaurant = {
    name: 'Italiano Classics',
    location: ['dhenkanal', 'bhubaneswar', 'cuttack'],
    categories: ['bread', 'curry', 'deserts', 'non-veg starter'],
    starterMenu: ['Focaccia', 'Tandoori-chicken', 'Biryani', 'Chicken 65', 'Gulab Jamun', 'Tandoori Naan'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thurs: {
            open: 12,
            close: 12
        },
        fri: {
            open: 1,
            close: 9
        },
        sat: {
            open: 0,
            close: 24
        }
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = '22.00hrs',
        address
    }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious Pasta with ${ing1},  ${ing2} and ${ing3}`)
    },
    orderPizza: function (mainIngredients, ...otherIngredients) {
        console.log(mainIngredients);
        console.log(otherIngredients);
    }
};

// const ingredients = [
//     prompt('Let\'s make pasta! Ingredients 1?'),
//     prompt('Ingredients 2?'),    
//     prompt('Ingredients 3?'),
// ]
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);


const arr = [2, 8, 67];
const newArr = [1, 98, ...arr]
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Sahi Chole', 'Golgapa'];
console.log(newMenu);

// Copy array
const menuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu)

// Iterables: arrays, strings, maps, sets. Not Objects 
const str = [...restaurant.name, ' ', 'S'];
console.log(str);

let strings = 'Sandeep';
const strName = [...strings, ' ', 'Swain'];
console.log(strName);
// console.log(`${...strName} Bhawan`);  //will give unexpected token'...'

//Objects
const newRestaurant = { foundedIn: 1990, founder: 'Sandiego' }
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Bedhei Maikina';
console.log(restaurant.name);
console.log(restaurantCopy.name);

// SPREAD operator right side of =

const arrs = [1, 2, ...[3, 4]];

// REST Operator left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, macroni, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, macroni, otherFoods);

const { sat, ...weekend } = restaurant.openingHours;
console.log(weekend);

// Functions
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        console.log(sum);
    }
}

add(2, 6);
add(2, 6, 7, 8);
add(2, 6, 7, 8, 9);

const x = [34, 45, 54];
add(...x);

restaurant.orderPizza('mushroom', 'pasta', 'tandoori', 'bread');

// OR Operator

// 0 is always a falsy value
console.log('----OR----')
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(0 || true);
console.log(undefined || null);

// restaurant.numGuests = 34;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// AND Operator
console.log('----AND----')


