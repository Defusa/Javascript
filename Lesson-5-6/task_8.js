// Задача 8
/*
Запросить у пользователя длину окружности и периметр
квадрата. Определить, может ли такая окружность поместиться в указанный квадрат. 
*/

/*
r = a / 2
Радиус круга, вписанного в кадрат по стороне

С = 2 * Пи * радиус
*/

let userSquarePerimeter = +prompt("Введите периметр квадрата");

let userCircleLength = +prompt("Введите длину окружности");

let squareSide = userSquarePerimeter / 4;

let circleRadius = userCircleLength / (2 * Math.PI);

if (circleRadius <= squareSide / 2) {
    alert("Окружность поместится в квадрат");
}
else {
    alert("Окружность не поместится в квадрат");
}