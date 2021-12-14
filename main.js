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
    for (i = 2; i < cNumber/2; i++) {
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
    for (let i = 2; i < cNumber/2; i++) {
        //console.log(`${cNumber}/${i}=${cNumber/i}`);
        if (cNumber % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime2(751));





/* 
    //if we hav e numbers
    if (condition) {
        
    }
 */
    
    //Loop through numbers start and end