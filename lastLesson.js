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
