const {test} = require('@playwright/test');

test('PromiseRace', async() => {

const promise1 = new Promise(resolve => 
    setTimeout(() => resolve("Fast"), 100)
);

const promise2 = new Promise(resolve => 
    setTimeout(() => resolve("Slow"), 500)
);

const result = await Promise.race([promise1,promise2]);

console.log(result);

});