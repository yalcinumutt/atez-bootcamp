const x = true;
const y = null;
const z = {
    name: "Umut",
    surName: "Yalcin",
    age: 34
};

if (x && y) {
    console.log('X degeri buraya girdi',x);
}
if (y) {
    console.log("Y degeri buraya girdi", y);
}
if(z) {
    console.log('Z degeri buraya girdin', z);
}

let expectedNumber = 0;

// if (expectedNumber >= 0 && expectedNumber < 4) {
//     console.log("Expected", expectedNumber);
//     expectedNumber = expectedNumber + 1;
// } else if (expectedNumber > 4 && expectedNumber < 9) {
//     console.log('Middle expected', expectedNumber);
//     expectedNumber = expectedNumber + 1;
// } else {
//     console.log('Ben 10 sayisina ulastim', expectedNumber)
// }
