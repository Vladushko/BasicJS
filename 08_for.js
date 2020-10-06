'use strict';

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) alert(i);
// }

// ===========================================

// let i = 0;

// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// =================================================

// const zahl = prompt('gib mir zahl großer als 100');

// while (zahl < 100) {
//   const zahl = prompt('gib mir zahl großer als 100');
//   if (zahl >= 100) break;
// }

// =====================================================

// let num;

// do {
//   num = prompt('Введите число, большее 100?', 0);
// } while (num <= 100);

let userName = 'Вася';

function showMessage() {
  userName = 'Петя'; // (1) изменяем значение внешней переменной

  let message = 'Привет, ' + userName;
  alert(message);
}

alert(userName); // Вася перед вызовом функции

showMessage();

alert(userName); // Петя, значение внешней переменной было изменено функцией
