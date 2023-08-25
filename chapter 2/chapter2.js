// practice 2.3
// declare the function
let hypotenuse;
function pythagoreanTheorem(a, b) {
  // exponential assignment shorthand to modify and assign a value to a variable
  a **= 2;
  b **= 2;
  // declare and store calculation to variable
  hypotenuse = (a + b) ** (1 / 2);

  console.log(hypotenuse);
}
pythagoreanTheorem(3, 4);
// practice exercice 2.4
let c = 0;
let d = 1;
let e = 2;

c += d;

e /= c;

e %= d;

console.log(
  `the value of c is: ${c}, the value of d is ${d}, the value of e is: ${e}`
);

// chapter 2 projects:
//Miles to kilometres convertor:
let miles = 80.78;
let kmPerMile = 1.60934;
let kilometres = miles * kmPerMile;

console.log(
  `The distance of ${kilometres.toFixed(2)}kms is equal to ${miles} miles`
);

// BMI calculator:
// set value for height - inches
let height = 67.5;
// set value for weight - pounds
let weight = 185;
// convert centimetres and kilos
let inch = 2.54;

let kilo = 2.2046;

// new variables for calculations
let newHeight = height * inch;

let newWeight = weight / kilo;

console.log(`height in cms ${newHeight}: weight in kilos ${newWeight}`);

// calculate BMI
// convert newHeight to metres
let BMIHeight = newHeight / 100;

// variable to hold BMI
let BMI = newWeight / BMIHeight ** 2;

// console.log for BMI
console.log(
  `Based on your height of ${BMIHeight.toFixed(
    2
  )} and weight of ${newWeight.toFixed(2)}.  Your current BMI is ${BMI.toFixed(
    2
  )}`
);
