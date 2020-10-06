let car = ['Honda', 'Toyota', 'Seat', 'Opel', 'VW', 'BMW', 'Audi'];
let numb = [1, 1, 1, 2, 2, 3, 3, 5, 5, 7, 7, 8, 8, 9, 9, 6, 5];
let numb2 = [3, 44, 6, 75, 8, 56, 33];
let arr = [false, 0, '', 'red', null, 1, 4, NaN, undefined];

let newCar = [
  { car: 'honda', color: 'Red' },
  { car: 'Toyota', color: 'Green' },
  { car: 'Seat', color: 'Blue' },
  { car: 'Opel', color: 'Yelow' },
];

// ===============================================================

// let sum = numb.reduce((x, y) => x + y);

// alert(sum);

// ===============================================================

// let newArr = arr.filter(Boolean);
// alert(newArr);

// ===============================================================

// let obj = { ...car };

// console.log(car);
// console.log(obj);

// ===============================================================

// let uni_numb = [...new Set(numb)];

// let uni_numb = Array.from(new Set(numb));

// alert(uni_numb); // 1,2,3,5,7,8,9,6

// ===============================================================

// car.splice(1, 2, 'Volga', 'Tesla'); // 1-position, 2-wieviele, was
// alert(car); //Honda,Volga,Tesla,Opel,VW,BMW,Audi

// ===============================================================

// let carName = Array.from(newCar, ({ car }) => car);
// console.log(carName); //(4) ["honda", "Toyota", "Seat", "Opel"]

// ===============================================================

// let newNumb = [...new Set(numb)].filter((i) => numb2.includes(i));
// console.log(newNumb);

// ===============================================================

// numb.reverse();
// alert(numb);

// ===============================================================

// let newArray = new Array(10).fill(1);
// newArray[2] = 'Vova';
// alert(newArray); // 1,1,Vova,1,1,1,1,1,1,1

// ===============================================================

let zahl = [1, 4, 6, 7, 8, 0, 33];

alert(zahl.pop(2));
alert(zahl);
