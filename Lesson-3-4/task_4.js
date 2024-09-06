// Задача 4
/*
Запросите у пользователя радиус окружности и выведите
площадь такой окружности.
*/

let userCircleRadius;
let roflCounter = 0; 
// это счетчик для прикола по этой задаче

do {
    if (roflCounter > 4) {
        alert("Мы надеялись, что Вы сами додумаетесь, что радиус круга это не слово, а число. Но у Вас не получилось. ВВОДИТЕ ЧИСЛО, МОЖНО С ТОЧКОЙ, НО ТОЛЬКО С ТОЧКОЙ.")
    }

    userSquareSide = prompt("Введите радиус круга");

    if (isNaN(userSquareSide)) {
        roflCounter++;
    }
    else {
        alert("Площадь Вашего круга " + (Math.pow(userSquareSide, 2) * Math.PI));
    }
}
while (isNaN(userSquareSide));