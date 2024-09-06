// Задача 3
/*
Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата. 
*/

let userSquareSide;
let roflCounter = 0; 
// это счетчик для прикола по этой задаче

do {

    if (roflCounter > 4) {
        alert("Мы надеялись, что Вы сами додумаетесь, что сторона квадрата это не слово, а число. Но у Вас не получилось. ВВОДИТЕ ЧИСЛО, МОЖНО С ТОЧКОЙ, НО ТОЛЬКО С ТОЧКОЙ.")
    }

    userSquareSide = prompt("Введите длину стороны квадрата");

    if (isNaN(userSquareSide)) {
        roflCounter++;
    }
    else {
        alert("Периметр Вашего квадрата " + (userSquareSide * 4));
    }
}
while (isNaN(userSquareSide));