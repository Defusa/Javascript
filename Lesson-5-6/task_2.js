// Задача 2
/*
Запросить у пользователя число от 0 до 9 и вывести ему
спецсимвол, который расположен на этой клавише (1–!,
2–@, 3–# и т. д).
*/

let serverMap = new Map();

serverMap.set('1', '!');
serverMap.set('2', '@');
serverMap.set('3', '#');
serverMap.set('4', '$');
serverMap.set('5', '%');
serverMap.set('6', '^');
serverMap.set('7', '&');
serverMap.set('8', '*');
serverMap.set('9', '(');
serverMap.set('0', ')');


alert("Запросить у пользователя число от 0 до 9 и вывести ему\nспецсимвол, который расположен на этой клавише (1–!,\n2–@, 3–# и т. д).");


let userInput = prompt("Введите цифру");

if (serverMap.get(userInput)) {
    alert("'" + userInput + "' соответствует символ '" + serverMap.get(userInput) + "'");
}
else {
    alert("Введено неверное значение");
}
