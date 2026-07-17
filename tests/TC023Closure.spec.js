const {test}= require('@playwright/test');

test('Closure', async() => {
/*
for (var i = 0; i < 3; i++) {

    setTimeout(() => {
        console.log(i);
    }, 0);
}
*/

for (let i = 0; i < 3; i++) {

    setTimeout(() => {
        console.log(i);
    }, 0);
}


});



