/*
const { test, expect } = require('@playwright/test');

test('async api test', async () => {

    const ids = [1,2,3];

    const users = await Promise.all(

        ids.map(async (id) => {

            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );

            return response.json();

        })

    );

    console.log(users);

});

const {test} = require('@playwright/test');

test('promise all demo', async() => {
    const number = [1,2,3];

    const results = await Promise.all(

        number.map(async(num) => {

            await new Promise(r => setTimeout(r,1000));
            return num * 10;
        })
    )
    console.log(results);
});


const {test} = require('@playwright/test');

test('promise all', async() => {

const numbers = [1,2,3];

const result = await Promise.all(

        numbers.map(async (num) => {
            return num + 5;
        })
);

console.log(result);

});


const {test} = require('@playwright/test');

test ('Promise all2', async() => {

    const number = [1,2,3];

    const result = await Promise.all(

        number.map(async (num) => {
            return num * 2;
        })
    );

    console.log(result);
});

*/

const {test} = require('@playwright/test');
const { error } = require('node:console');

test('allSettled', async() => {
    const user = ['Ali', 'Ayse', 'Fatma'];

    const result = await Promise.allSettled(
        user.map(async (user) => {
            if (user === 'Ayse') {
                throw new error(`${user} failed`);
            }
            return `${user} success`;
        
    })

);

    console.log(result);
});