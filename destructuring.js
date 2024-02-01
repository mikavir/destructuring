/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */


// Destructuring arrays
let ages = [30, 27, 28];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects

let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
}

let {mike, jill, alicia} = jobs;

console.log(mike, jill, alicia);
// Destructuring subsets

let languages = ["english", "french", "spanish", "german", "japanese"];

let [johnNative, johnSecondary] = languages;

console.log(johnNative, johnSecondary);

let[ , , maryNative, marySecondary] = languages;

console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese", 
}

let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);
// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];

let [favourite, secondFavourtite, ...others] = fruits;

console.log(favourite);
console.log(secondFavourtite);
console.log(others);

// objects

let favouriteFood = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegeterian",
    andrea: "steak",
}

let { brian, anna, ...rest } = favouriteFood;

console.log(brian);
console.log(anna);
console.log(rest);