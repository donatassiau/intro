/*
FOR - pagrindinis ciklas (en. loop)
*/
console.log('START');
for (let i = 0; i < 10; i++) {
    console.log(i);

}
for (let i = 200; i > 100; i -= 23) {
    console.log(i / 10);

}

for (let i = 20; i > 10; i--) {
    console.log(i);

}

console.log('FINISH');

console.clear();

const colors = ['white' , 'black' , 'red' , 'green' , 'blue' , 'violet'];



for (let i = 0; i < colors.length; i++) {
    console.log(i, colors[i]);
}
console.log('----------');

for (let i = colors.length - 1; i > -1; i --) {
console.log(i, colors[colors.length - 1 -i]);
}

console.clear();

const marks = [10, 2, 8, 4, 6];

let sum = 0;

for (let i=0; i<marks.length; i++) {
    sum += marks[i];
}

console.log(sum / marks.length);

const jonas = [];
const maryte = [10, 2];
const petra = [9, 8, 7];
const ona = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function marksAverage(marks) {
    if (marks.length === 0) {
        return 'Nera pazymiu';
    }
    let sum = 0;

    for (let i=0; i < marks.length; i++) {
        sum += marks[i];
    }
  
        return sum / marks.length;
}

console.log(marksAverage(jonas));
console.log(marksAverage(maryte));
console.log(marksAverage(petra));
console.log(marksAverage(ona));

const text = 'Labas';

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);

let x = 5;

x = x + 1;
x += 1;
x++;
++x;