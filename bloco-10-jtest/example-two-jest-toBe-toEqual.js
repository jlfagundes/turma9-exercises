// let name = "Pedro";
// let firstName = name;

// name = "Carol";

// console.log(name);
// console.log(firstName);

let myName = { fistName: "Pedro"};
let identify = myName;

myName.fistName = "Carol";

setTimeout(() => {
    console.log(myName.fistName);
}, 2000);
console.log(identify.fistName);
