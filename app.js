"use strict";
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const buttonElement = document.querySelector("button"); //! => ignore null check , we know button will not be null
//const numsArray : number[] = [];
const strArray = [];
//--Generic Array decelration
const numsArray = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num2 === 'string' && typeof num2 === 'string') {
        return num1 + "" + num2; //"" added optional -- to show string concatinated result
    }
    return +num1 + +num2;
}
buttonElement.addEventListener('click', () => {
    console.log("button clicked!");
    //+num1 typecasted String value to number
    let num1v = num1Element.value;
    let num2v = num2Element.value;
    const result = add(+num1v, +num2v);
    const stringResult = add(num1v, num2v);
    console.log(result);
    console.log(stringResult);
    // console.log(add(true,false));
});
//defining type of "result" of Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It worked;");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
    console.log("I am", JSON.stringify(person1));
});
const person1 = { name: "aayush", age: 12 };
