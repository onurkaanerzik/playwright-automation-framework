/*
const product = {
  name: "iPhone",
  price: 1200,
  stock: true
};

console.log(product.name);
console.log(product.price);
console.log(product.stock);
*/

const products = [
  {
    name: "Laptop",
    price: 1200,
    stock: true
  },
  {
    name: "Mouse",
    price: 50,
    stock: false
  },
  {
    name: "Monitor",
    price: 400,
    stock: true
  }
];

const stock1 = products.filter(products => products.stock);
console.log(stock1);

const name1 = products.filter(products => products.stock).map(products => products.name);
console.log(name1);