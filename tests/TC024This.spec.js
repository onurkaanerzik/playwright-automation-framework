const {test} = require('@playwright/test');

test('This', async() => {
/*
const user = {

    username: "admin1",

    login() {

        console.log(`Login with ${user.username}`);
    }
};

user.login();
*/

const users = [

    { username: "admin1" },

    { username: "admin2" },

    { username: "admin3" }
];


const loginAction = {
    login() {
        console.log(`Login with ${this.username}`);
    }
}

users.forEach(user => {

    user.login = loginAction.login;

    user.login();
});

});