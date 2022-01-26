// .map() - takes an array & function & returns new array with each item manipulated by that function

// input = (numbers, myFunction)
// expected output = [650, 440, 120, 40]

function myMap(myArray, myFunction) {
    // iterate userArray
    // apply function
    // return copy of user inputted array

    let mappedArray = [];

    for (let i = 0; i < myArray.length; i++) {
        let changedVar = myFunction(myArray[i]);
        mappedArray.push(changedVar);
    }
    
    return mappedArray;
}

const numbers = [65, 44, 12, 4];

function timesTen(num) {
  return num * 10;
}

console.log(myMap(numbers, timesTen));



// .reduce() - takes an array of food orders with their amounts and returns the total amount of all the food orders.

// const array1 = [1, 2, 3, 4];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;

//1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// expected output: 15

function myReduce(anArray) {
    let sum = 0;
    for (let i = 0; i < anArray.length; i++) {
        let current = anArray[i];
        sum = sum + current; 
    }
    return sum;
}

const foodOrders = [5, 10, 20, 40];

console.log(myReduce(foodOrders));

// .filter()