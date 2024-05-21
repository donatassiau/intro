/*
STRING - tekstas, tekstiniu simboliu grandinele
iniciavimas: ' (vienguba), " (dviguba)

*/

const name = 'Jonas';
console.log(name);

const name2 = "Martyte";
console.log(name2);

const sakinys = "Labas rytas, Lietuva!";
console.log(sakinys);

// Vienguba (') kabute.
const kabutes1 ="Vienguba (') kabute.";
console.log(kabutes1);

// Dviguba (") kabute.
const kabutes2 ='Dviguba (") kabute.';
console.log(kabutes2);

const personName = 'Chuck';
const personSurname = 'Norris';
const fullname = personName + ' ' + personSurname;
console.log(fullname);



// Vienguba (') ir Dviguba (") kabutes.
const kabutes12 = "Vienguba (') ir " + 'Dviguba (") kabutes.';
console.log(kabutes12);

// Vienguba (') ir Dviguba (") kabutes.
const kabutes12_1 = "Vienguba (') ir " + 'Dviguba (") kabutes.';
console.log(kabutes12_1);

// Vienguba (') ir Dviguba (") kabutes.
const kabutes12_2 = "Vienguba (') ir " + 'Dviguba (") kabutes.';
console.log(kabutes12_2);

// escaping
console.log(kabutes12_1);
console.log(kabutes12_2);

/*
Pinigines turinys: 0;
Pinigine papildyta: 10;
Pinigines turinys: 10;
Pinigine papildyta: 90;
Pinigines turinys: 100;

*/
console.clear();

const pinigine = 0;
let pinigine1 = true;
const sum = pinigine + pinigine1;
console.log(sum);

pinigine1 = 10;

console.log(sum);

/* 
<header>
   <img>
   <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>
*/

// \r - return
// \n - new line
// \t - tab

const HTML = '<header>\n\
   <img>\
   <nav>\
        <a></a>\
        <a></a>\
        <a></a>\
    </nav>\
</header>';

console.log(HTML);

const backtick = `Labas rytas, Lietuva!`;
console.log(backtick);

const backtick1 = `Backtikine (\`) kabute.`;
const backtick2 = 'Backtikine (`) kabute.';
const backtick3 = "Backtikine (`) kabute.";

const HTML2 = `<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>`;
console.log(HTML2);

console.clear();
const a = 7;
const b = 5;
const c = a + b;

// 7 + 5 = 12
const ats1 = a + ' + ' + b + ' = ' + c;
console.log(ats1);

const ats2 = a + " + " + b + " = " + c;
console.log(ats2);

const ats3 = `${a} + ${b} = ${c}`;
console.log(ats3);


const start = 0;
const finish = 11;
const step = 3;
const answer = 4;

const mini1 = 'Skaičių intervale tarp ' + start + ' ir ' + finish + ', besidalijančių be liekanos iš ' + step + ' yra ' + answer + ' vienetai.';

console.log(mini1);

const mini2 = `Skaičių intervale tarp ${start} ir ${finish}, besidalijančių be liekanos iš ${step} yra ${answer} vienetai.`;
console.log(mini2);

const gg = 'Good game!';
const number = 'Number: ' + answer;

console.log(mini1.length);
console.log(mini1[0]);


console.log('' + true);
console.log(true.toString());








