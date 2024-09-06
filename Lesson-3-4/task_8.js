// Задача 8
/*
Пользователь вводит сумму денег в кошельке и цену одной
шоколадки. Программа выводит сколько шоколадок может
купить пользователь и сколько сдачи у него останется. 
*/

let userBalance;
let chocolatePrice;
let userCanAfford;

do
{
    do {
        userBalance = prompt("Сколько у Вас деняк?");
    }
    while (isNaN(userBalance));

    do {
        chocolatePrice = prompt("Сколько стоит чоколатка?");

        if (chocolatePrice == 0) {
            alert("Шоколадка не может стоить 0 деняк, Вы нам врете. Введите корректно");
            chocolatePrice = NaN;
        }
    }
    while (isNaN(chocolatePrice));

    if (chocolatePrice != null) {
        if (Number(chocolatePrice) > Number(userBalance)) {
            alert("Ваш баланс " + Number(userBalance) + " и он меньше стоимости шоколадки. А ну пшли вон из магазина, нищук");
        }
        else {
            userCanAfford = Math.floor(userBalance / chocolatePrice);
    
            if (userCanAfford < 3) {
                alert("Вы можете позволить себе всего " + userCanAfford + ", устройтесь на работу");
            }
            else {
                alert("Вы можете позволить себе " + userCanAfford + ". Уважаемое количество");
            }
            
        }
    }
    
}
while(confirm("Хотите продолжить?"));