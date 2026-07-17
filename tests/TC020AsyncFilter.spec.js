const {test} = require('@playwright/test');

test('Async', async() => 
    {

const numbers = [1,2,3,4];

const mapped = await Promise.all(

    numbers.map(async (num) => {

        return {
            number: num,
            valid: num > 2
        };

    })

);
const filtered = mapped.filter(item => item.valid);

console.log(filtered);
    });



