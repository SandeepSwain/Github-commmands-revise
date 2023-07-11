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
            open: 10,
            close: 8
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
    }
};


restaurant.orderDelivery({ //keep in mind the way code block is written '({})'
    time: '21:00hrs',
    address: 'Laxmisagar',
    mainIndex: 2,
    starterIndex: 3
})
restaurant.orderDelivery({ //keep in mind the way code block is written '({})'
    time: '19:00hrs',
    address: 'Khandagiri',
    mainIndex: 1,
    starterIndex: 5
})

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 112;
let b = 223;

const obj = { a: 23, b: 45, c: 100 };
// {a,b}=obj; //will give error as its looking for code block.
({ a, b } = obj);
console.log(a, b);

// Nested Objects
// const { fri: { open, close } } = openingHours;
// console.log(open, close);
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);