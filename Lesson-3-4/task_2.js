// Задача 2
/*
Запросите у пользователя год его рождения, посчитайте,
сколько ему лет и выведите результат. Текущий год укажите
в коде как константу.
*/
let currentYear = new Date().getFullYear();

let userYearOfBirth;


do 
{
    userYearOfBirth = prompt("Ваш год рождения?");

    if (currentYear - Number(userYearOfBirth) < 0) {
        alert("Вы еще не родились так-то, это точно Ваш год рождения?");
    }
    else if (isNaN(userYearOfBirth)) {
        alert("Введите только год. НЕ НАДО НИКАКИХ ТОЧЕК, СЛОВ И ВООБЩЕ. ТОЛЬКО. ГОД!")
    }
    else {
        if ((currentYear - Number(userYearOfBirth)) % 10 == 1)  {
            alert ("Вам " + (currentYear - Number(userYearOfBirth)) + " год");
        }
        else if (((currentYear - Number(userYearOfBirth)) % 10 > 1) && ((currentYear - Number(userYearOfBirth)) % 10 < 5)) {
            alert ("Вам " + (currentYear - Number(userYearOfBirth)) + " года");
        }
        else {
            alert ("Вам " + (currentYear - Number(userYearOfBirth)) + " лет");
        }
    }

}
while ((currentYear - Number(userYearOfBirth) < 0) || (isNaN(userYearOfBirth)) );