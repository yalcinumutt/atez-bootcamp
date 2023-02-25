const calucateFactoriel = (factorielNumber) => {
    let result = 1;
    if (factorielNumber %1 === 0 &&
        factorielNumber > 0 &&
        typeof factorielNumber === "number" &&
        factorielNumber !== Infinity) {
        for (let i = 1; i <= factorielNumber ; i++) {
            result = result * i;
        }
        return result;
    } else if(factorielNumber === 0) {
      return  1;
    } else if(factorielNumber < 0) {
        return "Pozitif deger saglamaniz lazimdir";
    }

    return 'Lutfen numerik bir deger veriniz';

}

const calcFactorial = (num) => {
    if (typeof num === "number" && num >= 0 && !isNaN(num) && num !== Infinity ) {
        if(num === 0) return 1;
        return num * calcFactorial(num - 1);
    }
    return "Please enter zero or a positive number!";
};

//console.log(calucateFactoriel(0))

const calcuteArguments = (...args) => {
    const numberArray = args.filter(x=> typeof x === "number");
    return numberArray.reduce((acc, val) =>  acc * val);
}

console.log('Carpim', calcuteArguments(8,4,1, "hele"));


