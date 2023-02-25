// Array For Loop
const personArray = [
    {name: "Umut", surName: "Yalcin", age: 34},
    {name: "Umut", surName: "Yalcin", age: 35},
    {name: "Umut", surName: "Yalcin", age: 36},
    {name: "Umut", surName: "Yalcin", age: 37},
    {name: "Umut", surName: "Yalcin", age: 38},
    {name: "Umut", surName: "Yalcin", age: 39},
]

// map, filter, find, forEach, slice

//foreach
// const carArray = [];
const carModelsArray = ["Porsche", "Tofas", "Ferrari", "Volvo"];
// carModels.forEach((x, index) => {
//     const carObject = {
//         id: index,
//         model: x
//     };
//     carArray.push(carObject);
// });
//
// console.log('Carray', carArray);

//map
const carModels = carModelsArray.map((value,index) => {
    return {
        id: index,
        model: value
    };
});

console.log('CarModels', carModels);

const hasInSaleCars = [
    { id: 0, model: 'Porsche', inSale: true },
    { id: 1, model: 'Tofas' , inSale: false},
    { id: 2, model: 'Ferrari', inSale: false },
    { id: 3, model: 'Volvo', inSale: true }
]

// filter
const inSaleCars = hasInSaleCars.filter(x => x.inSale || x.model ==="Ferrari");
console.log('InSaleCars', inSaleCars);

//find
const foundCars = hasInSaleCars.find(x=> x.id > 1 && x.inSale);
console.log('FoundCars', foundCars);


// const carObject = {
//     id: 1,
//     model: "Porsche"
// }

// for (let i = 0; i < personArray.length; i++) {
//     const person = personArray[i];
//     console.log('Person', person.age);
// }

// for (const personArrayKey in personArray) {
//     console.log('Person Object', personArray[personArrayKey]);
// }

// let expectedAge = 30;
//
// while (expectedAge < 37) {
//     expectedAge = expectedAge + 1;
//     console.log('Deger arttirmark', expectedAge);
// }





