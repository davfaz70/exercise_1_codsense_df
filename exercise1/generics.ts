/* GENERICS */
const numberArray = [1, 2, 3, 4, 5];
const doubledArray = transformArray(numberArray, (num) => num * 2);
console.log(doubledArray); // Output: [2, 4, 6, 8, 10]
const stringArray = ['apple', 'banana', 'cherry'];
const uppercasedArray = transformArray(stringArray, (str) => str.toUpperCase());
console.log(uppercasedArray); // Output: ['APPLE', 'BANANA', 'CHERRY']


function transformArray <T> (inputArray: T[], callbackFunction: (arg0: T) => T) {
    
    inputArray.forEach((element, i) => {
        element = callbackFunction(element);
        inputArray[i] = element;
    });

    return inputArray;
}


