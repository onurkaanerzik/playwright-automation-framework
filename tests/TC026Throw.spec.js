//const {test} = require("@playwright/test");

const age = 15;
/*
if (age < 18) {

    throw new Error("18 yasindan kucuk");
}
*/
console.log(age);

/*
const a = {
    address: {
        city: "Berlin"
    }
};

const b = { ...a };

b.address = {
    city: "Hamburg"
};

console.log(a.address.city);
console.log(b.address.city);

*/
const a = {
    address: {
        city: "Berlin"
    }
};

const b = a;

b.address = {
    city: "Hamburg"
};

console.log(a.address.city);