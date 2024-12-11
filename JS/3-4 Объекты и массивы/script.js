// Повторение. Логические операторы И и ИЛИ
// Задание 1
// Задайте в коде переменную n с числовым значением.
// С помощью логического И в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.
// Бонус - функцию создать checkIsNumberInterval()

// let n = 25;

// if(n >= 0 && n <=100) {
//     console.log("Перемнная n в диапазоне от 0 до 100 включительно");
// } else {
//     console.log("Перемнная n не находится в диапазоне от 0 до 100");
// }

// let n = 110;

// function checkIsNumberInterval(n) {
//     if(n >= 0 && n <=100) {
//         return "Перемнная n в диапазоне от 0 до 100 включительно";
//     } else {
//         return "Перемнная n не находится в диапазоне от 0 до 100";
//     }
// }

// console.log(checkIsNumberInterval(n))

// let n = 110;

// function checkIsNumberInterval(n) {
//     return n >= 0 && n <=100
//      ? "Перемнная n в диапазоне от 0 до 100 включительно"
//      : "Перемнная n не находится в диапазоне от 0 до 100";
// }
// const result1 = checkIsNumberInterval(n);
// console.log(result1)

// const n = 60;

// function isInterval(num) {
//     return (num >= 0 && num <= 100);
// }
// const  resulst1 = isInterval(n);
// console.log(resulst1);


// А сейчас познакомимся с объектами и уделим наибольшее внимание их особой разновидности - массивам.
// Обязательно выполняйте все, что делает преподаватель, вместе с ним. Без практики теория не имеет смысла!


// Задание 2
// Дан объект с именами и заработными платами:
// const engineers = {
// Den: 1000,
// Matt: 5000,
// Steve: 2000
// }
// Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:
// Заработная плата ххх составляет ххх рублей.
// ВНИМАНИЕ. Ваша программа должна работать для любого количества имён и зарплат!


// const engineers = {
//     Den: 1000,
//     Matt: 5000,
//     Steve: 2000
// }

// for (const key in engineers) {
//     console.log(`Заработная плата ${key} составляет ${engineers[key]} рублей.`);
// }

//ARRAY

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers[2]);
// console.log(numbers[0]);

// Всегда получать последний элемент
// console.log(numbers[numbers.length-1]);
// console.log(numbers[6]) // Если не нашли элемень по индексу выводит 


//FOR
// for (let i = 1; i < num.length; i++) {
//     console.log(num[i]);
// }

// Задание 3
// Создать массив из 5 элементов.
// Используя цикл for, вывести каждый второй элемент массива в консоль.

// const num = [2, 15, 24, 36, 48];

// for (let i = 1; i < num.length; i+=2) { // let i = 1 — начинаем с индекса 1, так как это первый второй элемент.
//     console.log(num[i]);
// }



// Задание 4
// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.

// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

// for( let i = 0; i < numbers.length; i++) {
//     console.log(`Индексу ${i} соответствует число ${numbers[i]}`);
// }


//FOR OF
// const names = ['Olzhas', 'Indira', 'Nazgul', 'Guzel', 'Aiganym']
// for (const element of names) {
//     console.log(element);
//     console.log(names.indexOf(element)); //не рек к испл
// };

// const names = ['Olzhas', 'Indira', 'Nazgul', 'Guzel', 'Aiganym']
// for (const index in names) {
//     console.log(index);

// };


// Задание 5
// Дан массив объектов, например:
// let questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];
// Добавить в каждый объект дополнительное поле usersAnswer со значением null.
// Решение должно работать для массива любой длины.

// let questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];

// for (const element of questions) {
//     console.log(element);
//     element.userAnswer = null;
// }

// for(let i = 0; i < questions.length; i++) {
//     questions[i].usersAnswer=null;
// }
//  console.log(questions);


//Вывод массивов?

// for (const element of questions) {
//     console.log(element);
// }

// for (const index in questions) {
//     console.log(questions[index]);
// }

// for(let i = 0; i < questions.length; i++) {
//     console.log(questions[i]);
// }


// let questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];

// questions.forEach(obj =>{
//     obj.usersAnswer = null;
// })

// console.log(questions);


// const names = ['Olzhas', 'Indira', 'Nazgul'];
// names.push('Guzel', 'Akzhan'); //добавляем в конец
// names.unshift('Moldir') // Добавляем в начало
// names.pop(); //Удалить элемент в конце
// names.shift(); // Удалить элемент в начале
// console.log(names);


//Вычеслить сумму всех  чисел в массиве

// const numbers = [2, 5, 6, 23, 97];
// sum = 0; ///Суммирование 
// // sum = 7

// for (const number of numbers) {
//     sum += number // sum = 7 + 6 = 13
// }

// console.log(sum); // 133


// Задание 6
// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// 1) Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком

// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
 
// for (const number of numbers) {
//     console.log(number);
//  }

//  for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//  }



// 2) Посчитать и вывести в консоль сумму элементов в массиве.

// Подсказка: в задачах такого типа нужно заранее предусмотреть переменную (например, sum) 
// и записать в нее начальное значение (в случае с суммой - ноль). Затем уже описать цикл,
// в котором эта сумма будет считаться (в каждой итерации цикла к ней будет прибавляться следующий элемент массива).

// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// let sum = 0;

// for (const number of numbers) {
//     sum+=number;
// }
// console.log(sum); //756


// 3) Посчитать и вывести в консоль сумму только четных чисел в массиве.

// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// let sum = 0;

//#1
// for (const number of numbers) {
//     if( number % 2 === 0) {
//         sum+=number;
//     }
// }

// console.log(`Сумма четных чисел: ${sum}`)

//#2
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 === 0){
//         sum+=numbers[i];
//     }
// }

// console.log(`Сумма четных чисел: ${sum}`)




// 4) Найти и вывести в консоль максимальное число массива.

// Подсказка: как и в случае с суммой, здесь сначала нужно объявить переменную (например, max), 
//записать в нее первый элемент массива, а затем уже в цикле искать максимальное значение.

// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// let max = numbers[0];
//#1
//let max = 0;
// for (const n of numbers) {
//     if(n > max) {
//         max = n;
//     }
// }
//#2
// for(let i = 1; i < numbers.length; i++) {
//     if(numbers[i] > max) {
//         max = numbers[i];
//     }
// }

// console.log(`Максимальное число в массиве: ${max}`);


// 5) Определить и вывести в консоль индекс максимального числа массива 
//(или индексы, если число встречается более одного раза). Само максимальное число
// мы уже нашли в прошлой части задачи, повторно его искать не нужно.

// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// let max = 0;

// for (const n of numbers) {
//     if(n > max) {
//         max = n;
//     }
// }
// console.log(max);

// let indexes = [];
// for (const index in numbers) {
//     if (numbers[index] === max) {
//         indexes.push(index);
//     }
// }
// console.log(`Индексы максимального числа (${max}): ${indexes}`);

// // Максимальное число уже найдено в задаче 4
// let max = 70;  // Можно также использовать переменную max из предыдущей части задачи


// // Массив для хранения индексов
// let maxIndexes = [];

// // Ищем индексы, где значение равно максимальному
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === max) {
//         maxIndexes.push(i);  // Добавляем индекс в массив
//     }
// }

// console.log(`Индексы максимального числа (${max}): ${maxIndexes}`);