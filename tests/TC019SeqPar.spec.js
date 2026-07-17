/*
const {test} = require('@playwright/test');
const { promiseHooks } = require('node:v8');

test ('Seq', async () => {

    const users = ['Ali', 'Ayse', 'Mehmet'];

    console.time('seq');

    for ( const user of users ) {

        await new Promise (r => setTimeout(r, 2000));
        console.log(`${user} finished`);
    }

console.timeEnd('seq');


});
*/
const {test} = require('@playwright/test');
const { timeEnd } = require('node:console');

test('Par', async() => {

    const users = ['Ali', 'Ayse', 'Mehmet'];
    console.time('Par');

    await Promise.all(

        users.map( async (user) => {

            await new Promise(r => setTimeout(r,2000));

            console.log(`${user} finished`);
        })
    )
console.timeEnd('Par');

});