let text = `
Order Confirmation

Customer: Dilek Melek
Order No: ORD-2026-98473
Email: dilek.melek@gmail.com
Phone: +49 176 12345678
Total Amount: 249.99 EUR
Date: 15/05/2026

Status: SUCCESS
`;

const orderno = text.match(/ORD-\d+-\d+/);
console.log(orderno[0]);

const email = text.match(/\S+@\S+\.\S+/);
console.log(email[0]);

const phone = text.match(/\+\d+\s\d+\s\d+/);
console.log(phone[0]);

const amount = text.match(/\d+\.\d+/);
console.log(amount[0]);

const date = text.match(/\d{2}\/\d{2}\/\d{4}/);
console.log(date[0]);

const status = /SUCCESS/.test(text);
console.log(status);

text = `
Product A: 25 EUR
Product B: 50 EUR
Product C: 75 EUR
`;

let sayi = text.match(/\d+/g);
console.log(sayi[0]);
console.log(sayi[1]);
console.log(sayi[2]);
