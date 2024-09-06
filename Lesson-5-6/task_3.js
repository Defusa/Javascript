// Задача 3
/*
Запросить у пользователя трехзначное и число и проверить,
есть ли в нем одинаковые цифры.
*/
let userNumber;

do {
    userNumber = +prompt("Введите трехзначное число");
}
while (isNaN(userNumber));


let tempNumber = userNumber.toString();


if ((Math.floor(userNumber / 100) > 9) || (Math.floor(userNumber / 100 < 1))) {
    alert("Введено не трехзначное число. Попробуйте лучше в следующий раз");
}
else {
    for (let i = 0; i < tempNumber.length; i++) {
        for (let j = i + 1; j < tempNumber.length; j++) {
            if (tempNumber[i] == tempNumber[j]) {
                alert("Повторяющееся число есть: " + tempNumber[i]);
                i = tempNumber.length + 1;
                j = tempNumber.length + 1;
            }
        }
        if (i == tempNumber.length - 1 ) {
            alert("Нет повторяек");
        }
    }
}