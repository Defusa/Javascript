// Задача 5
/*
Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
*/

let userNumber;


do {
    userNumber = +prompt("Введите пятизначное число");
}
while (isNaN(userNumber) || (Math.floor(userNumber / 10000 > 9)) || (Math.floor(userNumber / 10) < 1000));

let i = 0;
let j = userNumber.toString().length - 1;



while (i < (userNumber.toString().length / 2)){
   
    if (userNumber.toString()[i] == userNumber.toString()[j]) {
        i++;
        j--;
    }
    else {
        alert("Число не является полиндромом");
        break;
    }
}

if (i >= j) {
    alert("Число палиндром");
}