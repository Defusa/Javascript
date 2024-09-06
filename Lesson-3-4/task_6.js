// Задача 6
/*
Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в
константе
*/

const EXCHANGE_RATE_USD_EUR = 0.9;
let userValueCurrency;

do {
    do {
        userValueCurrency = +prompt("Сколько долларов в евро Вы хотите поменять?");
    }
    while (isNaN(userValueCurrency));

    alert("Ваши " + userValueCurrency + " долларов преваритились в " + (userValueCurrency * EXCHANGE_RATE_USD_EUR) + " евро");
}
while (confirm("Хотите продолжить?"));