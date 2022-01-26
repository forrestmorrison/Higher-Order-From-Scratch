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

// .reduce()



// .filter()