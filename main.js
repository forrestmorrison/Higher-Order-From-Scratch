// .map() - takes an array & function & returns new array with each item manipulated by that function

// input = (numbers, myFunction)
// expected output = [650, 440, 120, 40]

// iterate userArray
// apply function
// return copy of user inputted array

function myMap(myArray, myFunction) {

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



// .reduce() - takes an array of food orders with their amounts and returns the total amount of all the food orders

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

// .filter() - takes an array of items and a function that returns an array with only the items that return true in the function.


const products = [
    { name: 'Laptop', price: 32000, brand: 'Lenovo', color: 'Silver' },
    { name: 'Phone', price: 700, brand: 'Iphone', color: 'Golden' },
    { name: 'Watch', price: 3000, brand: 'Casio', color: 'Yellow' },
    { name: 'Aunglass', price: 300, brand: 'Ribon', color: 'Blue' },
    { name: 'Camera', price: 9000, brand: 'Lenovo', color: 'Gray' },
];

// Get products that price is greater than 3000 by using a filter

const getProduct = products.filter(product => product.price > 3000);

// Expected output:

// [
//     { name: 'Laptop', price: 32000, brand: 'Lenovo', color: 'Silver' },
//     { name: 'Camera', price: 9000, brand: 'Lenovo', color: 'Gray' }
// ];


// function myFilter(theArray, theFunction()) {    
//     const filterArr = []; 
    
// for(let i=0; i<theArray.length; i++) {        
//     const result = theFunction(theArray[i], i, theArray); 
//     }      
      
//     if(result) {
//         filterArr.push(theArray[i]); 
//     }  

//     return filterArr;
// }

// console.log(myFilter(products, getProduct));


// filter takes an array and function as argument

function theFilter(arr, filterFunc) {    
    const filterArr = []; 
    // empty array        
    // loop though array    
    for(let i=0;i<arr.length;i++) {        
        const result = filterFunc(arr[i], i, arr);       
         // push the current element if result is true        
         if(result)             
         filterArr.push(arr[i]);     
        }    
         return filterArr;
    }

console.log(theFilter(products, getProduct));