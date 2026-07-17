const base = require('@playwright/test');

const test = base.test.extend({

    user: async ({}, use) => {

        const user = {
            username: "admin",
            password: "123"
        };

        await use(user);
    }

});

test('Fixture Test', async ({ user }) => {

    console.log(user.username);
    console.log(user.password);

});