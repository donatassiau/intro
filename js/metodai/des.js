/*
Destrukturizavimas
gimininga "siela" - spread
*/

const a = [10, 2, 8, 4, 6];
const first = a[0];
const second = a[1];
const rest = a.slice(2);

console.log(first);
console.log(second);
console.log(rest);

const b = [10, 2];
const first2 = b[0];
const second2 = b[1];
const rest2 = b.slice(2);

console.log(first2);
console.log(second2);
console.log(rest2);

console.clear();

const dict = ['labas', 'rytas', 'Lietuva', 'sakau', 'Tau'];
const [word1, word2, ...restOfDict] = dict;
console.log(word1);
console.log(word2);
console.log(restOfDict);

function giveMeTwoNumbers() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    return [a, b];
}

const res1 = giveMeTwoNumbers(); 
// const n1 = res1[0];
// const n2 = res1[1];

const [n1, n2] = giveMeTwoNumbers(); // <--- vietoj res1, jei tik du skaiciai

console.log(res1, n1 + n2);

const res2 = giveMeTwoNumbers();
const [n3, n4] = res2;
console.log(res2, n1 + n2);

console.clear();

const person = {
    name: 'Ona',
    age: 66,
    color: 'red',
    isMarried: true,
};
const userName =  person.name;
const userAge = person.age;
const userIsMarried = person.isMarried;

const { age, name, ...restDetails } = person;
console.log(age);
console.log(name);
console.log(restDetails);

console.clear();

function food() {
    const list = [
        { title: 'cepelinai', count: 2 },
         { title: 'saltibarsciai', count: 1 },
          { title: 'svogunu laiskai', count: 10 },
    ];
   
    return list[Math.floor(Math.random() * list.length)];
}

// const randomFood1 = food();
// const title = randomFood1.title;
// const count = randomFood1.count;

// const f1 = food();
// const pavadinimas = f1.title;
// const kiekis = f1.count;
// const sentence1 = `Valgysi: ${pavadinimas}; Kiekis: ${kiekis}.`;
// console.log(sentence1);

const { title: f1Title, count: f1Count } = food(); // Naudojama kai reikia destrukturizuoti du vienodus objektus
const sentence1 = `Valgysi: ${f1Title}; Kiekis: ${f1Count}.`;
console.log(sentence1);

const { title: f2Title, count: f2Count } = food();
const sentence2 = `Valgysi: ${f2Title}; Kiekis: ${f2Count}.`;
console.log(sentence2);







