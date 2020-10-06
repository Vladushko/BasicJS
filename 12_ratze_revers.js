'use strict';

/*
Поворот числа
Сформировать из введенного числа или слова обратное и вывести на экран
Например если число 3486 то вывести 6843
*/

let gebenWas = prompt('Geben die Zhal oder das Wort für reverse');

// const reverse = (text) => {
//   let reversText = '';
//   for (let i = text.length - 1; i >= 0; i--) {
//     reversText += text[i];
//   }
//   return reversText;
// };

// let ergebnis = reverse(gebenWas);
// alert(ergebnis);

//==================================================================================

let arr = gebenWas.split('');
let arrReverse = arr.reverse();

let arrRevString = arrReverse.join('');

// alert(arrReverse);
// alert(typeof arrReverse);

alert(arrRevString);
// alert(typeof aarrRevString);
