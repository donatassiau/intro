/*
Duomens tipo nustatymas

TYPEOF(duomens tipo nustatymo operatorius)
*/
function empty() {
    
}

console.log(typeof 5);
console.log(typeof 3.1415);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof '');
console.log(typeof 'Labas');
console.log(typeof true);
console.log(typeof false);
console.log(typeof [2, 4]);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof empty);

// Kai norite patikrinti ar TAI yra masyvas
console.log(Array.isArray([]));
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray('labas'));
console.log(Array.isArray(true));
console.log(Array.isArray(empty));

console.log('................');

const tikrinamasDalykas = null;
if (tikrinamasDalykas === null) {
    console.log('taip');
} else {
    console.log('ne');
}

console.clear();


const a = 21562;
console.log(a);

if (typeof a === 'string') {
    console.log('As dirbu su STRING');
} else {
    console.log('As dirbu ne su STRING');
}

console.clear();

const x = '';
const y = 7;

console.log(typeof (x && y));
console.log(typeof ('' && y));
console.log(typeof ('' && 7));
console.log(typeof (false && false));
console.log(typeof (false && true));
console.log(typeof (false));

if (typeof (x && y) !== 'number') {
    console.log('ERROR');
} else {
    console.log('OK');
}


// if (typeof x !== 'number') {
//    console.log('ERROR: x');
//
//} else if (typeof y !== 'number') {
//    console.log('ERROR: y');
//
//} else {
//
//console.log('VISKAS OK');
//}

let hh = 77;

if (true) {
    hh = 5;
}
