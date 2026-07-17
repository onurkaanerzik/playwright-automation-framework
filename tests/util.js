/*
function sayHello() {
    console.log("Hello");
}

function oke(sayi){
    console.log("oke"+sayi);
}

function welcome(username) {
    console.log("Hello " + username);
}


function login(username, password){
    console.log(username);
    console.log(password);
}

login("standard_user", "secret_sauce");

*/

async function login(page, username, password) {

    await page.goto("https://www.saucedemo.com/");

    await page.getByPlaceholder("Username").fill(username);
    await page.getByPlaceholder("Password").fill(password);

    await page.getByRole("button", { name: "Login" }).click();
}

module.exports = { login };