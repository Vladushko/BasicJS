/*
угадать слкучайное число
в программе генериркется случайное число от 0 до 100
пользователь должен его угадать не более чем за 10 попыток
после каждой неудачи сообщениеБ больше или меньше
если за 10 попыток не угадал, вывести число
*/

const randomNumber = () => {
  let number = Math.floor(Math.random() * 100); // generierem random Zahl
  for (i = 1; i <= 5; i++) {
    let userNumb = prompt('Geben die Zahl von 0 bis 100');
    if (userNumb == number) return alert('Richtig! Nur für ' + i + ' Versuch! Die Zahl ist ' + number);
    else if (userNumb < number) alert('Die Zahl zu klein');
    else alert('Die Zahl zu groß.');
  }
  return alert('Sie haben keine mehr Versuch. Die Zahl ist ' + number + ' !');
};

randomNumber();
