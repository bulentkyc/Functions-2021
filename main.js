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



function sum(number1 , number2) {
    //if(!number2) is same as if(number2 == undefined)
    if (typeof(number2) != 'number') {
        console.log('You should give me the second number');
    } else {
        var total = number1 + number2;
        console.log(total);
    }
}