/*
ARROW FUNCTION - rodykline funkcija, lambda funkicija
*/ 

const n1 = 7;
const n2 = 5;

function sum(a, b) {
    return a + b;
    
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);


// kintamajam priskiriama anonimine funkcija
const diff = function (a, b) {
    return a - b;
    
}
console.log(`${n1} - ${n2} = ${diff(n1, n2)}`);



// arrow function
const multi = function (a, b) {
    return a * b;
    
}
console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);

// arrow function
// jeigu, logikos bloke yra tik 1 procedura
// galima nerasyti return

const div = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${div(n1, n2)}`);
