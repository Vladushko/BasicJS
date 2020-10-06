'use stict';

// 'const name = 'admin';
// const password = 'boss';

// const login = prompt('Wer isd da?');
// // login == 'admin' ? prompt('Password') : login == null ? alert('abgebrochen') : alert('Ich kenne Sie nicht');

// // // alert(typeof login);

// // const passAnfrage = prompt('Password');
// // password == login ? alert('Hallo!') : alert('xuy');
// alert(login);

// if (login == name) {
//   const passAnfrag = promt('Password');
//   if (passAnfrag == password) {
//     alert('hallo');
//   }
// }

const name = 'admin';
const password = 'boss';

// let userName = prompt('Кто там?');
// if (userName == 'Админ') {
//   let pass = prompt('Пароль?', '');

//   if (pass == 'Я главный') {
//     alert('Здравствуйте!');
//   } else if (pass == '' || pass == null) {
//     alert('Отменено');
//   } else {
//     alert('Неверный пароль');
//   }
// } else if (userName == '' || userName == null) {
//   alert('Отменено');
// } else {
//   alert('Я вас не знаю');
// }

const login = prompt('Wer ist da?');

if (login == name) {
  const passAnfrag = prompt('Password');

  if (passAnfrag == password) {
    alert('hallo');
  } else if (passAnfrag == '' || passAnfrag == null) {
    alert('angebrochen!');
  } else {
    alert('password ist falsch!');
  }
} else if (login == '' || login == null) {
  alert('angebrochen!');
} else {
  alert('ich kenne sie nicht');
}
