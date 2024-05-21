/*
BOOLEAN - logines reiksmes

- true
- false

Boolean logikos operatoriai:
- && (and)
- || (or)
- ! (not)

Kaip interpretuojami kiti duomenu tipai ir ju reiksmes,
jei jos yra naudojamos lyg boolean'ai?
String:
- jei tuscias - false
- jei ne tuscias - true

Number:
- jei nulis - false
- jei ne nulis - true
- jei NaN - false
- jei Infinity - true
- jei -Infiniy - true

Array:
- jei tuscias - true
- jei ne tuscias - true

Object:
- jei tuscias - true
- jei ne tuscias - true

Undefined - false
null - false
*/

const username = 'Jonas';
const age = 99;
const isSunShining = true;
const hasFuel = false;

console.log(isSunShining);
console.log(hasFuel);

console.log('KAIP NENAUDOTI:' , true + true);

console.log('---------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// MERGINA
// kada eisiu i pasimatyma?
// - turi buti grazus
// - turi buti turtingas
// - turi buti jaunas

const isBeautiful = true;
const isYoung = true;
const isRich = true;

const willIGoTo = isBeautiful && isYoung && isRich;
console.log('>>>' , willIGoTo);

// VAIKINAS ||
// kada eisiu i pasimatyma?
// - turi buti grazi
// - turi buti turtinga
// - turi buti jauna

const willIGoTo2 = isBeautiful || isYoung || isRich;
console.log('>>>' , willIGoTo2);

console.clear();

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
 
console.clear();

console.log('--------------');

console.log(true && true || true);
console.log(true && true || false);

console.log(true && false || true);
console.log(true && false || false);

console.log(false && true || true);
console.log(false && true || false);

console.log(false && false || true);
console.log(false && false || false);


// console.log(true && true || true);
// console.log(true && true || false);

// console.log(true && false || true);
// console.log(true && false || false);

// console.log(false && true || true);
// console.log(false && true || false);

// console.log(false && false || true);
// console.log(false && false || false);

console.clear();

// ND - visos 128 kombinacijos
console.clear();

console.log(!true);
console.log(!false);
// daugiau negu 2 sauktukai - nerasyti

console.log(true && true && true && true);
console.log(true && true && true || true);
console.log(true && true && true || false);
console.log(true && true && true && false);

console.log(true && true || true && true);
console.log(true || true && true && true);
console.log(true && true || true && false);
console.log(true || true && true && false);

console.log(false && true && true && true);
console.log(false || true && true && true);
console.log(false && true || true && true);
console.log(false && true && true || true);

console.log(true && false && true && true);
console.log(true || false && true && true);
console.log(true && false || true && true);
console.log(true && false && true || true);

console.log(true && true && false && true);
console.log(true || true && false && true);
console.log(true && true || false && true);
console.log(true && true && false || true);

console.log(true || true || true || false);
console.log(true || true || true && false);
console.log(true || true && true && false);
console.log(true && true || true || false);

console.log(true && true || true && true);
console.log(true || true && true && true);
console.log(true || true || true && true);
console.log(true && true || true || true);

console.log(true || true && true || true);
console.log(true || true || true || true);
console.log(false || true || true && true);
console.log(false && true || true || true);

console.log(false || true || true || true);
console.log(true && true && true && true);
console.log(true && true && true && true);
console.log(true && true && true && true);

console.log(true && true && true && true);
console.log(true && true && true && true);
console.log(true && true && true && true);
console.log(true && true && true && true);

console.log(true && true && true && true);
console.log(true && true && true && true);
console.log(true && true && true && true);
console.log(true && true && true && true);

console.log(true && true && true && true);
console.log(true && true && true && true);
console.log(true && true && true && true);
console.log(true && true && true && true);

console.log(true && true && true && true);
console.log(true && true && true && true);
console.log(true && true && true && true);
console.log(true && true && true && true);

console.log(true && true && true && true);
console.log(true && true && true && true);
console.log(true && true && true && true);
console.log(true && true && true && true);

console.log(true && true && true && true);
console.log(true && true && true && true);
console.log(true && true && true && true);
console.log(true && true && true && true);

console.log(true && true && true && true);
console.log(true && true && true && true);
console.log(true && true && true && true);
console.log(true && true && true && true);

console.log(true && true && true && true);
console.log(true && true && true && true);
console.log(true && true && true && true);
console.log(true && true && true && true);

console.log(true && true && true && true);
console.log(true && true && true && true);
console.log(true && true && true && true);
console.log(true && true && true && true);

console.log(false && false && false && false);
console.log(false && false && false && false);
console.log(false && false && false && false);
console.log(false && false && false && false);

console.log(false && false && false && false);
console.log(false && false && false && false);
console.log(false && false && false && false);
console.log(false && false && false && false);

console.log(false && false && false && true);
console.log(false || false && false && true);
console.log(false && false || false && true);
console.log(false && false && false || true);

console.log(false && false && true && false);
console.log(false || false && true && false);
console.log(false && false || true && false);
console.log(false && false && true || false);

console.log(false && true && false && false);
console.log(false || true && false && false);
console.log(false && true || false && false);
console.log(false && true && false || false);

console.log(true && false && false && false);
console.log(true || false && false && false);
console.log(true && false || false && false);
console.log(true && false && false || false);

+

console.log(false || false && false && false);
console.log(false && false || false && false);
console.log(false && false && false || false);
console.log(false && false && false && false);

console.log(false || false || false && false);
console.log(false && false || false || false);
console.log(false || false && false || false);
console.log(false || false || false || false);

console.clear();

const bbb = 4 + 2;

if (true) {
    console.log(true);
} else {
    console.log(false);
}
