// 1 Checking PRIME NUMBERS

function isPrime(...numbers) {
  let myArray = numbers;

  for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    if (element === 1 || element === 2) {
      console.log(`${element} is a Prime Number...`);
    } else {
      let counter = 0;
      for (let index = 2; index < element; index++) {
        if (element % index == 0) {
          counter++;
        }
      }
      if (counter == 0) {
        console.log(`${element} is a Prime Number...`);
      }
    }
  }
}

// by using forEach

function isPrime2(...numbers) {
  numbers.forEach((element) => {
    if (element === 1 || element === 2) {
      console.log(`${element} is Prime...`);
    } else {
      let counter = 0;
      for (let index = 2; index < element; index++) {
        if (element % index == 0) {
          counter++;
        }
      }
      if (counter == 0) {
        console.log(`${element} is a Prime Number...`);
      }
    }
  });
}

isPrime(1, 2, 4, 5, 7, 22, 13, 47);

console.log(
  "--------------------------------------------------------------------------"
);

// 2 Checking FRIENDLY NUMBERS

function areFriendly(...numbers) {
  let [firstNum, secondNum] = numbers;
  let [divFirstNum, divSecondNum] = [[], []];

  for (let index = 1; index < firstNum; index++) {
    if (firstNum % index == 0) {
      divFirstNum.push(index);
    }
  }

  for (let index = 1; index < secondNum; index++) {
    if (secondNum % index == 0) {
      divSecondNum.push(index);
    }
  }
  let sum1 = 0;
  let sum2 = 0;
  divFirstNum.forEach((element) => {
    sum1 += element;
  });

  divSecondNum.forEach((element) => {
    sum2 += element;
  });

  if (sum1 == secondNum && sum2 == firstNum) {
    console.log(`${firstNum} and ${secondNum} are Friendly Numbers...`);
  } else {
    console.log(`${firstNum} and ${secondNum} are not Friendly Numbers...`);
  }
}
areFriendly(220, 284);
areFriendly(2620, 2924);

console.log(
  "--------------------------------------------------------------------------"
);

// 3 Finding PERFECT NUMBERS

function isPerfect(number) {
  let myArray = [];
  for (let index = 1; index < number; index++) {
    if (number % index == 0) {
      myArray.push(index);
    }
  }

  let sum = 0;
  myArray.forEach((element) => {
    sum += element;
    if (sum == number) console.log(`${number} is a Perfect Number...`);
  });
}

let counter = 1;
while (counter < 1000) {
  isPerfect(counter);
  counter++;
}

console.log(
  "--------------------------------------------------------------------------"
);

// 4 Finding PRIME NUMBERS

function primeNumbers(number) {
  let myArray = [];
  let primeNumbers = [1, 2];

  for (let index = 3; index < number; index++) {
    myArray.push(index);
  }

  myArray.forEach((element) => {
    let counter = 0;

    for (let index = 2; index < element; index++) {
      if (element % index == 0) {
        counter++;
      }
    }
    if (counter == 0) {
      primeNumbers.push(element);
    }
  });

  console.log(primeNumbers);
}

primeNumbers(1000);

console.log(
  "--------------------------------------------------------------------------"
);
