/*
const products = [
  { name: "TV", price: 500, stock: true },
  { name: "Phone", price: 800, stock: false },
  { name: "Laptop", price: 1500, stock: true }
];

const total = products.filter( s => s.stock)
                    .map(price1 => price1.price)
                    .reduce((sum,price) => sum+price,0);
        console.log(total);
*/

const users = [
  { name: "Ali", active: true },
  { name: "Ayşe", active: false },
  { name: "Mehmet", active: true }
];

const active_users = users.filter(active1 => active1.active)
                        .map(name1 => name1.name);
        console.log(active_users);