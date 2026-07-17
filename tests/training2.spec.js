const { reverse } = require("node:dns");

const users = [
 {id:1,name:"Onur",active:true},
 {id:2,name:"Ali",active:false},
 {id:3,name:"Ayse",active:true}
];

const usersActive = users.filter(user => user.active);
console.log(usersActive);

const userName = users.map(user => user.name);
console.log(userName);

const orders = [
 {amount:100},
 {amount:200},
 {amount:300}
];

const total = orders.reduce((sum,order) => sum + order.amount,0);
console.log(total);

const numbers = [1,2,2,3,4,4,5];
const unique = [...new Set(numbers)];
console.log(unique);

const reverstr = reverseString("onur");

function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverstr);

const Palindrome = isPalindrome("level");

function isPalindrome(str){
    return str === str.split('').reverse().join('');
}
console.log(Palindrome);

const user3 = {
 name:"Onur",
 city:"Berlin",
 age:41
};

const {name,city} = user3;
console.log(name);
console.log(city);

const a = [1,2];
const b = [3,4];

const result4 = [...a, ...b];
console.log(result4);
/*
function getUser(){
 return Promise.resolve("Onur");
}

async function run() {
    const user4 = await getUser();
    //console.log(user4)
}
run();

function getUser(){
 return Promise.resolve("Onur");
}

function getOrders(){
 return Promise.resolve([1,2,3]);
}

async function run2() {
    const [user5, orders5] = await Promise.all([
        getUser(),
        getOrders()
    ]);
    console.log(user5);
    console.log(orders5);
}

run2();
*/

const users6 = [
 {name:"Onur", age:41},
 {name:"Ali", age:20},
 {name:"Ayse", age:35}
];

const result6 = users6.filter(user => user.age > 30)
                    .map(user => user.name);
console.log(result6);

const users7 = [
 {name:"Onur", age:41, active:true},
 {name:"Ali", age:20, active:true},
 {name:"Ayse", age:35, active:false}
];

const activeUsers1 = users7.filter(user => user.active && user.age > 30);
console.log(activeUsers1);

const orders2 = [
 {amount:100, status:"completed"},
 {amount:200, status:"pending"},
 {amount:300, status:"completed"}
];

const total2 = orders2.filter(order => order.status === "completed")
                      .reduce((sum,order) => sum + order.amount,0);
console.log(total2);

const users8 = [
 {name:"Onur"},
 {name:"Ali"},
 {name:"Ayse"}
];

const totalchar1 = users8.map(user => user.name.length)
                        .reduce((sum,len) => sum+len,0);

console.log(totalchar1);

const users9 = [
 {name:"Onur", age:41, active:true},
 {name:"Ali", age:20, active:false},
 {name:"Ayse", age:35, active:true}
];

const result7 = users9.filter(user => user.active === false && user.age < 30)
                    .map(user => user.name)
                    .sort();
console.log(result7);
