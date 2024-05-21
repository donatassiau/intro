function numberSize(n) {
    if (typeof n !== 'number'){
        return 'Blogas duomenu tipoas'
    }
    const nAsText = '' + n;     // '' + 2 = '2'

    if (nAsText === 'NaN'
        || nAsText === 'Infinity'
        || nAsText === '-Infinity' ) {
        return 'Duok normalu skaiciu';
    
    }
   let size = nAsText.length;

   if (n % 1 !== 0) {
     size--;
   }
   if (n < 0) {
    size--;
   }
   return size;
}

console.log(numberSize(2), '-->', 1);
console.log(numberSize(25), '-->', 2);
console.log(numberSize(4895), '-->', 4);
console.log(numberSize(3.14), '-->', 3);
console.log(numberSize(3.1415), '-->', 5);
console.log(numberSize(-25), '-->', 2);
console.log(numberSize(-4895), '-->', 4);

console.log(numberSize(NaN))
console.log(numberSize(Infinity));
console.log(numberSize(-Infinity));


//console.log(1452);
//console.log('Labas' + 1452);

//console.log(typeof (1452));
//console.log(typeof ('Labas' + 1452));

//const a = 1452;
//console.log(a);
//console.log('' + a);
//console.log(a.toString());

//console.log(typeof a);
//console.log(typeof ('Labas' + a));
//console.log(typeof a.toString());

 /*  desimtainis ir neigiamas
    if (n % 1 !== 0 && n < 0) {
        return nAsText.length -2;
    }
// desimtainis
    if (n % 1 !== 0) {
        return nAsText.length - 1;
    }
    // neigiamas
    if (n < 0);
{}
        return nAsText.length - 1;
    }
    
    
    return nAsText.length;
}
 */