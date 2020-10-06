'use strict';

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('А родители разрешили?');
//   }
// }

// let age = prompt('Сколько вам лет?', 18);

// if (checkAge(age)) {
//   alert('Доступ получен');
// } else {
//   alert('Доступ закрыт');
// }

// ==============================================================

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i); // простое
  }
}

function isPrime(m) {
  for (let i = 2; i < m; i++) {
    alert(m % i);
    if (m % i == 0) return false;
  }
  return true;
}

showPrimes(10);
