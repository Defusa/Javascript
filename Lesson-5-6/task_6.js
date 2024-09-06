// Задача 6
/*
Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR,
RUB или AZN, и получает в ответ соответствующую сумму.
*/

let userBalance = +prompt("Введите сколько долларов хотите обменять");

let currencyList = new Map();

currencyList.set('EUR', 0.9);
currencyList.set('RUB', 90.35);
currencyList.set('AZN', 1.70);

let userCurrencyChoise = prompt("Валюты: EUR, RUB, AZN. Вводить строго, проверок нет, но без точного введения ничего не получится").toUpperCase();

let converter = (Math.round((currencyList.get(userCurrencyChoise) * userBalance) * 100) / 100).toFixed(2);

alert("Ваши " + userBalance + " долларов стали " + converter + " " + userCurrencyChoise);