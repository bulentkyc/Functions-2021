// Default values of parameters

const run = () => {
    console.log('Clicked');
    sum(4);
    sum(1,5);
    sum();
    salute('Essence');
    salute();
}

//run() // Doesn't work since hoisting precent iwit const

const sum = (number1 = 0, number2 = 0) => {
    console.log(number1);
    console.log(number2);
    console.log(number1+number2);
}

const salute = (name = 'Alien') => {
    alert(`Hi ${name}`);
}


//Recursive Functions

const countDown = (startingNumber) => {
    //startingNumber = startingNumber -1;
    //console.log(startingNumber--);
    console.log(startingNumber);
    startingNumber--;
    
    if (startingNumber >= 0) {
        countDown(startingNumber);
    }
}

countDown(10);

// Rest params

const listMyGarage = (car1, car2, ...others) => {
    console.log(car1, car2, others);
}

/*
const listMyGarage = (...others) => {
    console.log(others);
}
*/

listMyGarage('BMW', 'Mercedes', 'Porsche', 'Ferrari', 'Bugatti');