const { user } = require("pg/lib/defaults");

const response = {
  status: "success",
  users: [
    {
      id: 1,
      name: "Dilek",
      role: "admin",
      active: true
    },
    {
      id: 2,
      name: "Ahmet",
      role: "user",
      active: false
    }
  ]
};

console.log(response.status);
/*
const user1 = response.users.filter(users => users.id === 1);
console.log(user1[0].name);

const user2 = response.users.filter(users => users.active);
console.log(user2);

console.log(user2[0].name);
*/

const user1 = response.users.find(users => users.id === 1);
console.log(user1.name);

const user2 = response.users.find(users => users.active);
console.log(user2);

const user3 = response.users.find(users => users.active);
console.log(user3.name);