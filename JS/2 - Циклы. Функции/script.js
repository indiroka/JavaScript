//Тернарный оператор
// const money = +prompt('Сколько у вас на данный момент денег?');
// const phonePrice = 300000;

// if(money > phonePrice) {
//     console.log('Не достаточно средств для поукпки телефона');
// } else {
//     console.log('Хватает средств для поукпки телефона');
// }

//(money > phonePrice) ? console.log('Не достаточно средств для поукпки телефона') : ('Хватает средств для поукпки телефона');
//console.log(money > phonePrice ? 'Не достаточно средств для поукпки телефона' : 'Хватает средств для поукпки телефона');

// Задание 1
// let age = 19;

// let message = age > 18 ? ' Welcome!' : 'Вы слишком юны';
// alert (message);

// Задание 2
// Перепишите код с использованием тернарного оператора

//let country = 'Sweden';
// let access;
// if (country == 'Sweden') {
// access = true;
// } else{
// access = false;
// }

// let country = 'Sweden';
// let access = (country === 'Sweden') ? true : false;

// // console.log(country === 'Sweden') ? 'true' : 'false';


//Задание 2
// Создать переменную и записать в нее число, например 10.
// 10 раз увеличить значение этой переменной на 1. Итоговый результат вывести в консоль.

// let number = 10;

// for(let i = 0; i < 10; i++) {
//     number++;
// }

// console.log(`Итоговый результат ${number}`);


//Задание 3
// Увеличивая счетчик цикла на 2, нужно 5 раз выполнить след. действия:
// - запросить у пользователя ввод числа
// - проверить, равно ли это число 10. Если равно, вывести в консоль "Равно 10". Иначе вывести "Не равно 10"
// В итоге должно получиться 5 запросов и 5 результатов в консоли.


// for( let i = 0; i < 10; i+=2) {
//     let num = +prompt('Введите число');
//     if(num === 10) {
//         console.log("Равно 10")
//     } else {
//         console.log("Не равно 10")
//     }
// }


// for (let i = 0; i < 10; i += 2) {
//     let num = +prompt('Введите число');
//     console.log(num === 10 ? 'Равно 10' : 'Не равно 10');
// }


//While

// Задание 6
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }

// let i = 0;

// while(i < 3) {
//     alert( `number ${i}!`);
//     i++;    
// }

//Задание от Олжаса
// Создайте функцию которая проверяет число на кратность 
// принимает 2 параметра - первое число , второе число

//Кейс - 1 -if/else

// function isMultiple(num1, num2) {
//     if (num1 % num2 === 0) {
//         console.log(`${num1} кратно ${num2}`);
//     } else {
//         console.log(`${num1} не кратно ${num2}`);
//     }
// }


// isMultiple(8, 4); 
// isMultiple(14, 5);

// ----------------------------------------
// Кейс-2 -Тернарный оператор

// function isMultiple(num1, num2) {
//     console.log(num1 % num2 === 0 ? ${num1} кратно ${num2} : `${num1} не кратно ${num2}`);
// }


// isMultiple(8, 4); 
// isMultiple(14, 5);

// Кейс-3 

// const num1 = +prompt('Введите первое число');
// const num2 = +prompt('Введите второе число');

// function isMultiple(num1, num2) {
//     console.log(num1 % num2 === 0 ? `${num1} кратно ${num2}` : `${num1} не кратно ${num2}`);
// }

// isMultiple(num1, num2);


// Кейс-4

// function isMultiple(num1, num2) {
//     return (num1 % num2 === 0 ? `${num1} кратно ${num2}` : `${num1} не кратно ${num2}`);
// }

// const res1 = isMultiple(4, 2);
// const res2 = isMultiple(10, 6);
    
// console.log('Ответ: ' +res1);
// console.log(res2);



//HOME WORK

// Задание 4
// Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
// ** Задавать количество чисел, которые нужно вывести, при помощи функции prompt.

// let numbers = +prompt('Введите количество чисел от 0 до 100(не включая 100), квадраты которых нужно вывести');

// if(numbers > 0) {
//     for(let i = 0; i < numbers; i++) {
//         console.log(i**2);
//     }
// } else {
//     console.log('Введите корректное число которое не меньше 0 и не больше 100.')
// }


// Задание 5
// Напишите программу, которая выводит в консоль числа от 1 до 100.
// При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»

//Кейс-1
// for(let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('«Fizz»');
//     } else if (i % 3 === 0) {
//         console.log('«Buzz»');
//     } else if (i % 5 === 0) {
//         console.log('«FizzBuzz»');
//     } else {
//         console.log(i);
//     }
// }

//Кейс-2
//Фигурные скобки необходимы, если у вас несколько операторов внутри одного блока кода, но если один, их можно опустить.
//else используется, когда нужно явно указать, что делать, если условие не выполнено.
// for (let i = 1; i <= 100; i++) {
//     let output = ''; // Переменная для формирования результата

//     if (i % 3 === 0) output += 'Fizz'; // Если кратно 3, добавляем "Fizz"
//     if (i % 5 === 0) output += 'Buzz'; // Если кратно 5, добавляем "Buzz"

//     console.log(output || i); // Если output пустой, выводим число
// }


// Задание 7
// Переписать задание 4 в виде функции. Т.е. описать функцию, которая выводит квадраты чисел из заданного диапазона (диапазон будет попадать в функцию как аргументы - min и max).


// if(numbers > 0) {
//     for(let i = 0; i < numbers; i++) {
//         console.log(i**2);
//     }
// } else {
//     console.log('Введите корректное число которое не меньше 0 и не больше 100.')
// }

// let sum = +prompt('Введите количество чисел от 0 до 100(не включая 100), квадраты которых нужно вывести');

// function getSquares(min, max) {
//     if(min>=max || min < 0 || max > 100) {
//         console.log ('Введите корректное число которое не меньше 0 и не больше 100.');
//         return;
//     }
//     for(let i = min; i < max; i++) {
//         console.log(i**2);
//      }
// }

// getSquares(0, sum);





// Задание 8
// Написать функцию, котрая возвращает строку - случайный цвет в формате rgb. Это будет строка вида "rgb(10,55,250)"
// Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):

// Подсказки: 
// - Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255. 
// - Одна функция может вызывать другую функцию


// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }


// function getRandomRGB(red, green, blue) {
//     red = getRandomInteger(0, 255);
//     green = getRandomInteger(0, 255);
//     blue = getRandomInteger(0, 255);

//     return `rgb(${red}, ${green}, ${blue})`;
// }

// console.log(getRandomRGB())

// Задание 9
// Написать функцию, которая принимает целое число n.   
// Внутри функции запустить цикл от 1 до n с шагом 0.5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.
// Такая функция не будет ничего возвращать, она просто выводит информацию в консоль.
// Пример, при запуске функции с параметром 3:
// "1 integer"
// "1.5 decimal"
// "2 integer"
// "2.5 decimal"

// function integer(n) {
//     for(let i = 1; i <= n; i+=0.5) {
//         console.log(i % 1 === 0 ? `${i} integer` : `${i} decimal`);
//     }
// }

// integer(5);


// Задание 10
// Написать функцию calcPrice, которая рассчитывает и выводит в консоль стоимость аренды авто на кол-во дней, которое приходит в функцию как параметр.
// День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.

// function calcPrice(rentDays) {
//     const dailyRate = 40;
//     let totalCost = rentDays * dailyRate;

//     if(rentDays >= 7) {
//         totalCost -= 50;
//     } else if( rentDays >= 3) {
//         totalCost -= 20;
//     }
//     return totalCost; // Возвращаем итоговую стоимость
// }

// console.log(calcPrice(4)); //140

