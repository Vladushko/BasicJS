'use strict';

const name = 'admin';
const password = 'boss';
const esc = null;

// const esc = prompt('klik esc');
// alert(esc);

const login = prompt('wer ist da?');

switch (login) {
  case name:
    const passAnfrage = prompt('Password?');
    switch (passAnfrage) {
      case password:
        alert('Hallo Boss');
        break;
      case esc:
        alert('abgebrochen!');
        break;
      default:
        alert('Password ist falsch!');
    }

    break;

  case esc:
    alert('abgebrochen!');
    break;
  default:
    alert('Ich kenne Sie nicht!');
}
