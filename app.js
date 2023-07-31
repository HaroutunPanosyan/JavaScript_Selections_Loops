console.log("Hello World!\n==========\n");

// // Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");
// for (let num = 0; num < 100; num++) {
//     if (num % 2 == 0) {
//         continue;
//     }
//     else {
//         console.log(num)
//     }
// }

// // Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");
// for (let num = 0; num <= 100; num++) {
//     if (num % 3 == 0 && num % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if (num % 3 == 0) {
//         console.log("Fizz");
//     } else if (num % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(num);
//     }
// }


// Exercise 3 Section
console.log("EXERCISE 3-1:\n==========\n");
// var num = 1;
// while (num < 100) {
//     if (num % 3 == 0 && num % 5 == 0) {
//     console.log("FizzBuzz");
//     } else if (num % 3 == 0) {
//     console.log("Fizz");
//     } else if (num % 5 == 0) {
//     console.log("Buzz");
//     } else {
//     console.log(num);
//     }
//     num++;
// }

// console.log("EXERCISE 3-2:\n==========\n");
// let numb = 1;
// do {
//     if (numb % 2 !=0) {
//         console.log(numb)
//     }
//     numb++;
// } while ( numb <= 100);

// // Exercise 4 Section

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

console.log("Random Val:")
console.log(value);
console.log("End point: ");
console.log(n);
console.log("Looking...")

let isFound = false;
if (n > value){
    for (let i =1; i <=n; i++)
    {
        if (i == value) {
            console.log(`Found Value: ${n}!`)
            isFound = true;
            break;
        }
        if (isFound == false) {
            console.log("Did not find value...");
        }
    }
}
else 
{
    console.log("Value is not in range.")
}

// // // Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

