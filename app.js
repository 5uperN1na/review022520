let name = 'John';

// Without template literals, tedious/error-prone:
console.log('Hello ' + name + '!');

// Wrong: The sum of 2 and 4 is 24.
console.log('The sum of 2 and 4 is ' + 2 + 4 + '.');

// Correct: The sum of 2 and 4 is 6.
console.log('The sum of 2 and 4 is ' + (2 + 4) + '.');

// With template literals:
console.log(`Hello ${name}!`);
console.log(`The sum of 2 and 4 is ${2 + 4}.`);

let message = `Hello World! This is
a message that takes up
many different lines.`;

console.log(message);

//Default Function Parameters

function sayHello(name) {
    if (typeof name === 'undefined') {
        name = 'World';
    }
    console.log(`Hello ${name}!`);
}

sayHello('James');
sayHello();

function sayHello(name = 'World2') {
    console.log(`Hello ${name}!`);
}