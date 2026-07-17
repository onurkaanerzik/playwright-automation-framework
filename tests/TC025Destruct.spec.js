const {test} = require('@playwright/test');
/*
const user = [
{
    username: "admin1",
    city: "Berlin1"
},
{
    username: "admin2",
    city: "Berlin2"
}

];

const {username, city} = user[1];

console.log(username);
console.log(city);


const user= {

    username: "admin"
};

const {username, city="Berlin"} = user

console.log(username);
console.log(city);


const defaultUser = {
    username: "Oke",
    password: 1234
};

const testUser = {
    ...defaultUser,
    role: "QA"
};

console.log(testUser);

*/

const user = {
    username: "admin"
};

const user2 = user;

user2.username = "qa";


console.log(user);
console.log(user2);
