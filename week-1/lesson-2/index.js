///ES6 ES2022 ES2023 EcmaScript javascript

const calculateSum = (x, y,z) => {
    return x + y + z;
}

const numberArray = [2,5,8];
console.log(calculateSum(...numberArray))

const carObject = {
    id: 1,
    model: "Seat",
    color: "gray"
}

const newModelSpec = {
    age: 35,
    wheelCount: 4,
    maxSpeed: 200,
};

const newCar = {...carObject, ...newModelSpec}

console.log("Car Model", carObject);
console.log('Car', newCar);

const newNumberArray = [...numberArray, 1 , 3, 5];

console.log('NewNumberArray', ...new Set(newNumberArray));


//Object destructing

const [x, y, ...rest] = numberArray;
console.log('X', x);
console.log('Y', y);
console.log('NumberArray Rest', rest);

const {model, maxSpeed, ...restCar} = newCar;
console.log('NewModel', {model, maxSpeed});
console.log('Model', model);
console.log('MaxSpeed', maxSpeed)
console.log('Car Rest Model',restCar)

const modelSpec = {
    age: 35,
    wheelCount: 4,
    maxSpeed: 200,
    speedInterval: ["1","2"]
};

console.log('Model', modelSpec?.speedInterval?.forEach(x=> x))

//Ternary Operator
// const isRed = false;

console.log('Ternary', (carObject.color === 'red' ) ? 'Araba kirmizi' : "Kirmizi degildir");
console.log('Null', modelSpec.speedInterval || "0");







