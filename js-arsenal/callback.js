function add(a, b, callback) {
    let result = a + b;
    callback(result);
}

add(1, 2, function (result) {
    console.log(`The add is: ${result}`);
});

setTimeout(function () {
    console.log('Hello after 3 seconds');
}, 3000)
