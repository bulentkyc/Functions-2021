'use strict'

//alert('Hey')

var myTestVar = 'Hello World!';

function test() {
    var myNumber = 13;
    console.log('Function: ' , myTestVar);
    console.log('Function: ' , myNumber);
}

test();

console.log('Global: ' , myTestVar);
//console.log('Global: ' , myNumber); // myNumber is on the function scope. So it does not work here

function myFirstFunction() {
    alert('Hey this is my function!');
}

//myFirstFunction();

/* 
if (isNaN(myTestVar)) {
    console.log('Your variable is not a number')
}

var content = false;
var result = isNaN(content);
console.log(result);

var age = prompt('how old are you?');
var birthDate;

if (isNaN(age)) {
    console.log('Please type as digits.');
}else {
    birthDate = 2021-age;
    console.log(`Your birth date is ${birthDate}`)
}
 */



//if(!number2) is same as if(number2 == undefined)


function sum(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        return('You should give me only numbers');
    } else {
        var total = number1 + number2;
        return(total);
        alert('test') // After return no code works
    }
}

var n1;
function promptSum() {
    n1 = parseInt(prompt(`1. number: `));
    var n2 = parseInt(prompt(`2. number: `));
    
    alert(sum(n1, n2));
}

console.log(n1);

var testX = 5

var tester;

tester = testX; // tester = 5

console.log( sum() );
console.log( sum );


function isPrime1(cNumber) {
    var result;
    var i;
    for (i = 2; i <= cNumber/2; i++) {
        console.log(`${cNumber}/${i}=${cNumber/i}`);
        if (cNumber % i === 0) {
            result = false;
            //console.log(`${cNumber} is not a prime number, since it's dividable by ${i}`);
            break;
        }
    }
    console.log(i);
    if (Math.ceil(cNumber/2) === i) {
        result = true;
        //console.log(`${cNumber} is a prime number.`);
    }
    return result;
}

function isPrime2(cNumber) {
    if (!isNaN(parseInt(cNumber))) {
        for (let i = 2; i < cNumber; i++) {
            //console.log(`${cNumber}/${i}=${cNumber/i}`);
            if (cNumber % i === 0) {
                return false;
            }
        }
        return true;
    } else {
        console.error(`${cNumber} is not a number.`);
    }
}

console.log(isPrime2('4'));


function printPrimes(start, end) {
    for (let i = start; i <= end; i++) {
        if ( isPrime2(i)) {
            console.log(i);
        }
    }
}

/* 
    //if we hav e numbers
    if (condition) {
        
    }
 */
    
    //Loop through numbers start and end


    /*


myFunction();

//Function declarion
function myFunction() {
    console.log('Hello World');
}


//Hoisting not alloud
//mySecondFunc();

//Function expression
var mySecondFunc = function() {
    console.log('Hello World!');
}

console.log(myFunction);
console.log(typeof myFunction);


console.log(mySecondFunc);
console.log(typeof mySecondFunc);

mySecondFunc();

//------------------------Day-3----------------------------//

const myNewFunc = function name() {
    alert('Hey!')
}

myNewFunc = 0;

console.log(myNewFunc);

myNewFunc();
////////////////////////////////////////


const testMe = 5;
console.log(testMe);
testMe = 10;

console.log(testMe);

testMe = 'Hello World';

console.log(testMe);


if(true){
    let xyz = 'yes';
}

console.log(xyz);
*/
// Arrow functions //
myFunc2()

function myFunc1() {
    return 123;
}

var myFunc2 = function() {
    return 123;
}

const myFunc3 = function() {
    return 123;
}

const myFunc4 = () => {
    return (123);
}

const myFunc5 = () => 1234;

const myFunc6 = parameterName => 123+parameterName;

console.log(myFunc1());
console.log(myFunc2());
console.log(myFunc3());
console.log(myFunc4());
console.log(myFunc5());
console.log(myFunc6());

let testNew = 'true';

console.log( testNew == 'true');



const getLonger = (text1, text2) => (text1.length > text2.length) ? text1 : (text1.length < text2.length) ? text2 : null;

/* 
const getLonger = (text1, text2) => {
    if (text1.length > text2.length) {
        return text1;
    } else if (text1.length < text2.length) {
        return text2;
    } else {
        return null;
    }
}
 */

const promptGetLonger = () => {
    let t1 = prompt('Please give me a text to compare');
    let t2 = prompt('Please give me another text to compare');
    console.log( getLonger(t1, t2));
}

let myText = 'Hello World!';
console.log(myText[10]);