// Задача 10
/*
Запросить дату (день, месяц, год) и вывести следующую
за ней дату. Учтите возможность перехода на следующий
месяц, год, а также високосный год. 
*/

let userYear;

do {
    userYear = +prompt("Введите год");
}
while (userYear < 0);

let monthList = new Map();

monthList.set(1, 31);
monthList.set(3, 31);
monthList.set(4, 30);
monthList.set(5, 31);
monthList.set(6, 30);
monthList.set(7, 31);
monthList.set(8, 31);
monthList.set(9, 30);
monthList.set(10, 31);
monthList.set(11, 30);
monthList.set(12, 31);

if ((userYear % 400 == 0) || ((userYear % 4 == 0) && (userYear % 100 != 0))) {
    monthList.set(2, 29);
}
else {
    monthList.set(2, 28);
}

let userMonth;

do {
    userMonth = +prompt("Введите номер месяца");
}
while (!monthList.has(userMonth));

let userDay;

do {
    userDay = +prompt("Введите день");
}
while (userDay > monthList.get(userMonth));

let newDay = userDay + 1;
let newMonth = userMonth;
let newYear = userYear;


if (newDay > monthList.get(userMonth)) {
    newMonth = userMonth + 1;
    newDay = 1;
    if (newMonth > 12) {
        newMonth = 1;
        newYear = userYear + 1;
    }
}

if (newDay < 10) {
    newDay = "0" + newDay.toString();
}

if (newMonth < 10) {
    newMonth = "0" + newMonth.toString();
}

if (newYear < 10) {
    newYear = "000" + newYear.toString();
}
else {
    if (newYear < 100) {
        newYear = "00" + newYear.toString();
    }
    else {
        if (newYear < 1000){
            newYear = "0" + newYear.toString();
        }
    }
}


alert(newDay + '.' + newMonth + '.' + newYear);


