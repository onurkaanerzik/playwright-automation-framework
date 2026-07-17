const { log } = require("node:console");
const { user } = require("pg/lib/defaults");

const users = [
 {id:1,name:"Onur",active:true},
 {id:2,name:"Ali",active:false},
 {id:3,name:"Ayse",active:true}
];

const activeUsers = users.filter (users => users.active);
console.log (activeUsers);

const names = users.map (user => user.name);
console.log(names);

const orders = [
 {amount:100},
 {amount:200},
 {amount:300}
];

const total = orders.reduce((sum, order) => sum + order.amount, 0);
console.log(total);

const numbers = [1,2,2,3,4,4,5];

const unique = [...new Set(numbers)];
console.log(unique);

const reverstr = reverseString("onur");
function reverseString(str){return str.split('').reverse().join('')};
console.log(reverstr);

const palindrome = isPalindrome("level");
function isPalindrome(str){ return str === str.split('').reverse().join('');}
console.log(palindrome);

const user2 = {
 name:"Onur",
 city:"Berlin",
 age:41
};

const {name, city} = user2;
console.log (name);
console.log (city);

const a = [1,2];
const b = [3,4];

const result = [...a, ...b];
console.log(result);
/*
function getUser(){
 return Promise.resolve("Onur");
}

async function run() {
 const user = await getUser();
 console.log(user);
}

run();

function getUser(){
 return Promise.resolve("Onur");
}

function getOrders(){
 return Promise.resolve([1,2,3]);
}

async function run(){

 const [user1, orders1] =
   await Promise.all([
     getUser(),
     getOrders()
   ]);

 console.log(user1);
 console.log(orders1);
}

run();

*/
const users2 = [
 {name:"Onur", age:41},
 {name:"Ali", age:20},
 {name:"Ayse", age:35}
];

const result1 = users2
        .filter(user => user.age > 30)
        .map(user => user.name);
console.log(result1);


const users3 = [
 {name:"Onur", age:41, active:true},
 {name:"Ali", age:20, active:true},
 {name:"Ayse", age:35, active:false}
];
const result2 = users3.filter(user => user.active && user.age >30);
console.log(result2);

const orders1 = [
 {amount:100, status:"completed"},
 {amount:200, status:"pending"},
 {amount:300, status:"completed"}
];

const total1 = orders1.filter(order => order.status === "completed")
                    .reduce((sum, order) => sum + order.amount,0);
console.log(total1);

const users4 = [
 {name:"Onur"},
 {name:"Ali"},
 {name:"Ayse"}
];

const totalChar = users4.map(user => user.name.length)
                        .reduce((sum,len) => sum+len,0);
console.log(totalChar);

const users5 = [
 {name:"Onur", age:41, active:true},
 {name:"Ali", age:20, active:false},
 {name:"Ayse", age:35, active:true}
];

const result3 = users5.filter(user => user.active && user.age >30)
                    .map(user => user.name)
                    .sort();
console.log(result3);
console.log("Feature login tests branch");