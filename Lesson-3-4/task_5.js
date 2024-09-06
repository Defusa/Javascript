// Задача 5
/*
Запросите у пользователя расстояние в км между двумя
городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы
успеть вовремя.
*/


do 
{
    let userDistanceBetweenCities;
    let userPreferedTime;


    do {
        userDistanceBetweenCities = +prompt("Какое расстояние между Вашими городами?");
        if (isNaN(userDistanceBetweenCities)){
            alert("Введено некорректное значение");
        }
    }
    while(isNaN(userDistanceBetweenCities) || userDistanceBetweenCities < 0);

    do {
        userPreferedTime = +prompt("За сколько часов Вы хотите добраться?");
        if (isNaN(userPreferedTime)){
            alert("Введено некорректное значение");
        }
    }
    while(isNaN(userPreferedTime) || userPreferedTime < 0);

    let userRequiredSpeed = Number((userDistanceBetweenCities / userPreferedTime).toFixed(2));

    if (userRequiredSpeed < 100) {
        alert ("Вам необходимо двигаться со скорокстью " + userRequiredSpeed + " км/ч");
    }
    else if ((userRequiredSpeed > 100) && (userRequiredSpeed <= 200)) {
        alert ("Вам необходимо лететь " + userRequiredSpeed + " км/ч");
    }
    else {
        alert ("Воруйте военный истребитель и летите " + userRequiredSpeed + " км/ч");
    }
}
while (confirm("Хотите повторить?"));