/*
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Ayşe" },
  { id: 3, name: "Mehmet" }
];

const user1 = users.find( u => u.id ===2);
console.log(user1);

const response = {
  users: [
    { id: 1, status: "passive" },
    { id: 2, status: "active" },
    { id: 3, status: "passive" }
  ]
};

const user2 = response.users.find( u => u.status==="active");
console.log(user2);

const numbers = [10, 20, 30];

const result= numbers.some(n => n>25);
console.log(result);

const result2 = numbers.every(n => n <= 35);
console.log(result2);

const users3 = [
  { active: true },
  { active: true },
  { active: false }
];

const allActive = users3.every(users3 => users3.active);
console.log(allActive);

const numbers2 = [10, 20, 30];

const total = numbers2.reduce(
        (sum, number) => sum + number,
        0
);
console.log(total);
*/

const prices = ["10$", "20$", "30$"];

const total = prices.map(price => Number(price.replace("$","")))
                    .reduce((sum,price) => sum + price,0);
        console.log(total);