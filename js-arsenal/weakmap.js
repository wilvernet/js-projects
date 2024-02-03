// Literal object

let employee1 = {
    name: 'Wilver',
    age: 22,
    single: 'true',
    job: ['Software Developer', "DevOps"],
    about: function () {
        console.log('Hi, I\'m Wilver and I\'m reviewing Objects, Maps and WeakMaps');
    }
}

// Map

let myMap = new Map();

myMap.set('name', 'Smith');
myMap.set('age', 25);
myMap.set('single', false);

// WeakMap

const map = new WeakMap();
const obj = [];
map.set(obj, 'Value associated with obj');
console.log(map.get(obj)); // Value associated with obj