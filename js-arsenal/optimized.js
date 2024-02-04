// Nested loops

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}

// Loop-free optimization

for (let i = 0; i < 3; i++) {
    console.log(`i=${i}, j=0`);
    console.log(`i=${i}, j=1`);
    console.log(`i=${i}, j=2`);
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// As the size of the array increases, this operation becomes more time-consuming.

const users = [
    { id: 1, username: 'one', email: 'one@domain.com' },
    { id: 2, username: 'two', email: 'two@domain.com' },
    { id: 3, username: 'three', email: 'three@domain.com' }
];

const usersMap = new Map(users.map(user => [user.username, user]));

// Search for a user by username

const username = 'three';
const user = usersMap.get(username);

if (user) {
    console.log(user.email);
} else {
    console.log(`No user found with the user name ${username}`)
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// Optimization with arrays

// No optimization

function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// With optimization

function getMaxOptimized(arr) {
    let max = arr[0];
    for (let i = 1, len = arr.length; i < len; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// Optimization with Maps

// No optimization

function getValue(key) {
    if (!cache[key]) {
        cache[key] = expensiveCalculation(key);
    }
    return cache[key];
}

// With optimization

const cache = new Map();
function getValueOptimized(key) {
    if (!cache.has(key)) {
        cache.set(key, expensiveCalculation(key));
    }
    return cache.get(key);
}