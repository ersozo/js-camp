// function addToCart(productName = "elma", quantity) {
//   console.log(`Sepete Eklendi: ${productName} adet: ${quantity}`);
// }
function addToCart(quantity, productName = "elma") {
  console.log(`Sepete Eklendi: ${productName} adet: ${quantity}`);
}

addToCart();
addToCart(10);

// arrow function

let sayHello = () => {
  console.log("Hello World!");
};
sayHello();

let sayHello2 = function () {
  console.log("Hello world 2");
};
sayHello2();
