const users = [
 {name:"Onur", city:"Berlin"},
 {name:"Ali", city:"Istanbul"},
 {name:"Ayse", city:"Berlin"},
 {name:"Mehmet", city:"Istanbul"},
 {name:"Zeynep", city:"Berlin"}
];

const result = users.reduce((acc, user) => {
  user.city ? acc.Berlin++ : acc.Istanbul++;
  return acc;
}, { Berlin: 0, Istanbul: 0 });

console.log(result);

const result = users.reduce((acc, user) => {
  user.city === "Berlin" ? acc.Berlin++ : acc.Istanbul++;

  return acc;
}, { Berlin: 0, Istanbul: 0 });

console.log(result);