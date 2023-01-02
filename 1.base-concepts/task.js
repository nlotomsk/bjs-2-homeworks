"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (b**2)-4*a*c;
  if (discriminant < 0) {
    arr = [];
    return arr;
  } else if (discriminant === 0) {
    arr = [-b / (2 * a)];
    return arr;
  } else {
    arr = [(-b + Math.sqrt(discriminant) )/(2*a),(-b - Math.sqrt(discriminant) )/(2*a)];
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent)){
    return (`Ошибка!!! Не верный параметр ${percent} `, false);
  } else if (isNaN(contribution)) {
    return (`Ошибка!!! Не верный параметр ${contribution}`, false);
  } else if (isNaN(amount)) {
    return (`Ошибка!!! Не верный параметр ${amount}`, false);
  } else if (isNaN(countMonths)) {
    return (`Ошибка!!! Не верный параметр ${countMonths}`, false);
  } else {
    percent = (percent/100)/12;
    let loanBody = amount - contribution;
    let payment = loanBody * ( percent + ( percent/(((1 + percent)** countMonths) - 1)));
    let totalSum = payment * countMonths;
    totalSum = Number(totalSum.toFixed(2))
    return totalSum;
  }
}
