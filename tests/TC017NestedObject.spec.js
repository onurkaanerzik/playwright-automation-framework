/*
const { test, expect } = require('@playwright/test');

test('API test', async ({ request }) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users'
    );

    const data = await response.json();

    console.log(data);


    const users = data
            .filter(user => user.address.city.includes("burgh"))
            .map(user => user.name);
            console.log(users);

});
*/

const users = [
  {
    id: 1,
    profile: {
      name: "Ali",
      city: "Berlin",
      active: true
    }
  },
  {
    id: 2,
    profile: {
      name: "Ayşe",
      city: "Istanbul",
      active: false
    }
  },
  {
    id: 3,
    profile: {
      name: "Mehmet",
      city: "Berlin",
      active: true
    }
  }
];

const user = users
        .filter(user => user.profile.city === "Berlin");
        console.log(user);

const active_users = users
        .filter(active_users => active_users.profile.active)
        .map(active_users => active_users.profile.name);
        console.log(active_users);

const total_id = users
        .filter(total_id_user => total_id_user.profile.city === "Berlin" && total_id_user.profile.active)
        .map(total_id_user => total_id_user.id)
        .reduce((sum,id) => sum + id,0);
        console.log(total_id);

