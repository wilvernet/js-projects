// Code in sequence
console.log(1);
console.log(2);
console.log(3);

// Asynchronous code
setTimeout(() => {
    console.log('x');
}, 1000);
console.log(2);
console.log(3);