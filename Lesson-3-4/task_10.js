// Задача 10
/*
Запросите у пользователя целое число и выведите в ответ,
четное число или нет. В задании используйте логические
операторы. В задании не надо использовать if или switch.
*/

let userNumber;
let isEvenOrOdd;

userNumber = +prompt("Введите свое число");

alert(userNumber % 2 > 0 ? "Нечетное" : "Четное");
