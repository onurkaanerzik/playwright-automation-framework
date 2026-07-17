const name = "Dilek";
const city = 'Berlin';
let text = `Hello`;

console.log(text.length);
console.log(city.toLowerCase());
console.log(city.toUpperCase());
console.log(name.toUpperCase());


text = 'Welcome to Berlin';
console.log(text.includes("Berlin"));

text = "invoice_2026.pdf";

console.log(text.startsWith("invoice"));
console.log(text.endsWith(".pdf"));

let result= text.replace("invoice","voice");
console.log(result);

result="     hello      ";
console.log(result.trim());


text= "apple,orange,banana";
const arr = text.split(",");
console.log(arr);

console.log(arr[1]);

console.log(arr[1].slice(0,5));
console.log(arr[2].slice(-5));

console.log(`Hello ${name}`);