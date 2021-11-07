class Customer {
  constructor(id, customerNumber) {
    this.id = id;
    this.customerNumber = customerNumber;
  }
}

let customer = new Customer(1, "12345");

// instance prototyping
customer.name = "Murat Boz";
console.log(customer.name);

// class prototyping
Customer.something = "Something";
console.log(Customer.something);

console.log(customer.customerNumber);

// inheritance
class IndividualCustomer extends Customer {
  constructor(firstName, id, customerNumber) {
    super(id, customerNumber);
    this.firstName = firstName;
  }
}

class CorporateCustomer extends Customer {
  constructor(companyName, id, customerNumber) {
    super(id, customerNumber);
    this.companyName = companyName;
  }
}

// map, filter, reduce

let myVariable = 156;

console.log(`My variable is ${myVariable}`);