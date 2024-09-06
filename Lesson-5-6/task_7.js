// Задача 7
/*
Запросить у пользователя сумму покупки и вывести сумму
к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
до 500 – 5%, от 500 и выше – 7%. 
*/

let userCheckOut = +prompt("Введите сумму покупки");
let salesCoefficient = 1;

if (userCheckOut > 500){
    salesCoefficient = 0.93;
}
else if ((userCheckOut <= 500) && (userCheckOut > 300)) {
    salesCoefficient = 0.95;
}
else if ((userCheckOut <= 300) && (userCheckOut >= 200)) {
    salesCoefficient = 0.97;
}

userCheckOut = (Math.round((userCheckOut * salesCoefficient) * 100) / 100).toFixed(2);

alert("Итого: " + userCheckOut + "\nСкидка " + (100 - (salesCoefficient * 100)) + "%");