let userNumber;
let tempUserNumber;
const REGULAR_EXP = /[.]/g; 

do {
    userNumber = +prompt("Введите число");
}
while (isNaN(userNumber) || userNumber > Math.pow(2, 53));

if (userNumber < 0) {
    tempUserNumber = (userNumber * (-1)).toString();
}
else {
    tempUserNumber = userNumber.toString();
}

tempUserNumber = tempUserNumber.replace(REGULAR_EXP, '');

let i = 0;
let j = tempUserNumber.toString().length - 1;



while (i < (tempUserNumber.toString().length / 2)){
   
    if (tempUserNumber.toString()[i] == tempUserNumber.toString()[j]) {
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