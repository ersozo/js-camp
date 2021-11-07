let students = ["Engin Demiroğ", "Halit Kalaycı", "Engin Toprak", "Büşra"];

// console.log(students);

let students2 = [
  students,
  { id: 2, name: "Halit" },
  "Ankara",
  { city: "İstanbul" },
];
// console.log(students2);

// rest parametre
// params C#
// varArgs Java

let showProducts = function (id, ...products) {
  console.log(id);
  console.log(products[0]);
};

console.log(typeof showProducts);

// showProducts(10, "elma", "armut", "karpuz");
// showProducts(10, ["elma", "armut", "karpuz"]);

// spread
let points = [1, 2, 3, 4, 50, 14];
// console.log(...points);

// console.log(Math.max(...points));
// console.log(..."ABC", "D", ..."EFG");

// Destructuring
let populations = [10000, 20000, 30000, [40000, 100000]];

let [small, medium, high, [tooHigh, max]] = populations;

console.log(small);
console.log(medium);
console.log(high);
console.log(tooHigh);
console.log(max);

function someFunction([small1], number) {
  console.log(small1);
}

someFunction(populations);

let category = { id: 1, name: "içecek" };

console.log(category.name);
console.log(category["name"]);

let { id, name } = category;

console.log(id);
console.log(name);
