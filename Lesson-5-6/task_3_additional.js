// Задача 3 от себя
/*
Запросить у пользователя число и проверить,
есть ли в нем одинаковые цифры.
В условии не сказано, чтобы выписывать подобные числа, а лишь найти.
*/

let userNumber = +prompt("Введите любое число");
let tempNumber;

if (isNaN(userNumber)) {
 alert("Это не число, к сожалению.");
}
else {
    tempNumber = userNumber.toString();
    for (let i = 0; i < tempNumber.length; i++) {
        for (let j = i + 1; j < tempNumber.length; j++) {
            if (tempNumber[i] == tempNumber[j]) {
                alert("Повторяющаяся цифра есть: " + tempNumber[i]);
                i = tempNumber.length + 1;
                j = tempNumber.length + 1;
            }
        }
        if (i == tempNumber.length - 1 ) {
            alert("Нет повторяек");
        }
    }
    
}


    