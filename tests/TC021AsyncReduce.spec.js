/*
const {test} = require('@playwright/test');

test('AsyncReduce', async() => {

const numbers =[1,2,3,4];

const total = numbers.reduce((sum, num) => {
    return sum+num;
},0);

*/

/*
const total = numbers.reduce((sum,num)=>{
    return sum+num;
},0);

console.log(total);

});

*/

const {test}=require('@playwright/test');

test('AsyncReduce', async() => {

    const numbers = [1,2,3,4];

    const total = await numbers.reduce(

        async(sumPromise, num) => {
            const sum= await sumPromise;
            
            await new Promise(r => setTimeout(r,500));

            return sum+num;
    

},
    Promise.resolve(0)
);

console.log(total);

});