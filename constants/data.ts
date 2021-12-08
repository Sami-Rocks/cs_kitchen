const cate1 = require("./../assets/images/categories/cate1.png")
const cate2 = require("./../assets/images/categories/cate2.png")
const cate3 = require("./../assets/images/categories/cate3.png")

const food1 = require("./../assets/images/foods/food1.png")
const food2 = require("./../assets/images/foods/food2.png")
const food3 = require("./../assets/images/foods/food3.png")
const food4 = require("./../assets/images/foods/food4.png")


export const catogories = [
    {
        id: 1,
        category: 'Rice',
        image: cate1
    },
    {
        id: 3,
        category: 'Burger',
        image: cate2
    },
    {
        id: 2,
        category: 'Tea',
        image: cate3
    },
]

export const foods = [
    {
        id: 1,
        food: "Fried Rice",
        image: food1,
        ingredients: 'Pepper, Onion',
        category: [1,3],
        price: 12.3
    },
    {
        id: 2,
        food: "French Fries",
        image: food2,
        ingredients: 'Pepper, Onion',
        category: [2,3],
        price: 35.3
    },
    {
        id: 3,
        food: "Fried Rice",
        image: food3,
        ingredients: 'Pepper, Onion',
        category: [1,3],
        price: 53.3
    },
    {
        id: 4,
        food: "Banku & Okro",
        image: food4,
        ingredients: 'Pepper, Onion',
        category: [3],
        price: 31.3
    },
]