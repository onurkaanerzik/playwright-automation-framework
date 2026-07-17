/*const users = ["Ali", "Ayşe", "Mehmet"];

console.log(users[0]);
console.log(users[1]);


const fruits = ["apple", "banana"];

fruits.push("orange");
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(users.includes("Ali"));


let numbers = [1, 2, 3];

const result = numbers.map(num => num*2);

console.log(result);


numbers = [1,2,3,4,5,6];

const even = numbers.filter(num => num % 2 === 0);

console.log(even);


const prices = [100, 200, 300, 400];

const result1 = prices.filter(price => price > 200)
                     .map(price => price * 0.9);

console.log(result1);
*/

const products = [
  "Laptop - 1200 EUR",
  "Mouse - 50 EUR",
  "Keyboard - 150 EUR",
  "Monitor - 400 EUR"
];

/*
let sayi = products.match(/\d+/g);
console.log(sayi[0]);
console.log(sayi[1]);
console.log(sayi[2]);
console.log(sayi[3]);


const price1= products
.map(products => Number(products.split("-")[1].replace("EUR","")))
.filter(price => price > 200 );
console.log(price1);


const price2= products
.map(products => Number(products.split("-")[1].replace("EUR","")))
.filter(price => price > 200);
console.log(price2);

const price3=products
.map(products => Number(products.split("-")[1].replace("EUR","").trim()))
.filter(price => price >200);
console.log(price3);
*/

const price = products
.map(products => Number(products.split("-")[1].replace("EUR","").trim()))
.filter(price => price >200);
console.log(price);


const price2 = products
.map(products => Number(products.split("-")[1].replace("EUR","").trim()))
.filter(price => price > 140)
console.log(price2);
