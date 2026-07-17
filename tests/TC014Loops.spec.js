/*
for(let i = 0; i < 5; i++)
    {
        console.log(i);
    }


const users = ["Ali", "Dilek", "Emre"];

for (let i = 0; i < users.length; i++)
    {
        console.log(users[i]);
    }

for (const user of users)
    {
        console.log(user);
    }


const buttons = ["Login", "Save", "Delete"];

for(const button1 of buttons)
    {
        console.log(button1)
    }
*/

const products = ["TV", "Laptop", "Phone"];
/*
for(const product1 of products) 
    {
        console.log(`Product : ${product1}`);
    }

products.forEach(function(product1)
        {
            console.log(product1);
        }
    )

products.forEach(product1 => console.log(product1));


const numbers = [10, 20, 30];

numbers.forEach(function (number1)

        {
            console.log( `Number : ${number1}`);
        }

    )

let i = 0;

while (i < 3) {
    console.log(i);
    i++;
}


let i =0;

do {
    console.log(i);
    i++;
} while (i < 5);

*/

const user = {
    name: "Dilek",
    city: "Berlin"
};

for (const key in user) {
    console.log(key);
    console.log(user[key]);
    console.log(`${key}:${user[key]}`);
}