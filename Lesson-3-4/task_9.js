// Задача 9
/*
Запросите у пользователя трехзначное число и выведите
его задом наперед. Для решения задачи вам понадобится
оператор % (остаток от деления).
*/

let userNumber;
let userNumberTemp;
let userNumberBackwards = 0;

userNumber = +prompt("Введите свое число");
userNumberTemp = userNumber;

while (userNumberTemp >= 1) {
    userNumberBackwards = userNumberBackwards * 10;

    userNumberBackwards = userNumberBackwards + (userNumberTemp % 10);

    userNumberTemp = Math.floor(userNumberTemp / 10);

}

alert("Ваше число наоборот " + userNumberBackwards);