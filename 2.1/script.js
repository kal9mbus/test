"use strict";

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введте дату в формате YYYY-MM-DD");
let question1 = prompt("Введите обязательнуюстатью расходов в этом месяце");
let question2 = prompt("Во сколько обойдется?");

let appData = {
    budget: money,
    timeData: time,
    expenses: 'question1 + " : " + question2',
    optionalEspenses:null,
    income: null,
    savings: false
}
alert("Ваш бюджет на 1 день: "+(money/30));
