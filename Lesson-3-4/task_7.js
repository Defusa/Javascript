// Задача 7
/*
Пользователь указывает объем флешки в Гб. Программа
должна посчитать сколько файлов размером в 820 Мб помещается на флешку.
*/

let userFlashSize;

do
{
    do {
        userFlashSize = +prompt("Какой размер Вашей флешки?");
    }
    while (isNaN(userFlashSize));

    alert("На флешке " + userFlashSize + " Гб поместится " + Math.floor(userFlashSize * 1024 / 820) + " файлов весмо 820 Мб");
}
while(confirm("Хотите продолжить?"));