'use strict';

let sum = 0;

while (true) {
  let value = Number(prompt('Введите число', ''));

  alert(value);
  alert(typeof value);

  if (value == false) break; // (*)

  sum += value;
  alert(sum);
  alert(typeof sum);
}
alert('Сумма: ' + sum);
