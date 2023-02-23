const number1 = 5;
const number2 = 10;

const addNumber = (a, b) => {
    return a + b;
}

const numberAdd = ({a, b}) => a+b;
console.log(numberAdd({a:5, b: 10}));
console.log(number1 - number2)
console.log(number1 / number2)
console.log('Tricky', ((number1 / number2) * 5) + number2);

console.log(0 / "Asd");

// for (let i = 0; i <= 10; i++) {
//     console.log('Cift sayi',i , i%2);
// }

