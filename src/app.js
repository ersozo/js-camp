console.log("Merhaba kodlama.io");

let dolarBugun = 9.3;
let dolarDun = 9.2;
dolarDun = "9.20";

{
  let dolarDun = 9.1;
}
console.log(dolarDun);

const euroDun = 11.2;
// euroDun = 11.10;

console.log(euroDun);

// array (dizi)
// camelCase
// PascalCase
let konutKredileri = [
  "Konut Kredisi",
  "Emlak Konut Kredisi",
  "Kamu Konut Kredisi",
];

console.log("<ul>");
for (let index = 0; index < konutKredileri.length; index++) {
  const element = konutKredileri[index];
  console.log("<li>" + element + "</li>");
}
console.log("</ul>");

console.log(konutKredileri);
