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

alert(tempUserNumber);