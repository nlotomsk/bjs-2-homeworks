"use strict"

//solveEquation(1,2,3);

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (b**2)-4*a*c;
  if (discriminant < 0) {
    return arr = [];
  } else if (discriminant === 0) {
    return arr = [-b / (2 * a)];
  } else {
    return arr = [(-b + Math.sqrt(discriminant) )/(2*a),(-b - Math.sqrt(discriminant) )/(2*a)]
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
    return Number(totalSum.toFixed(2));
  }
}

//
// const solveEquation = (a, b, c) => {
//   const discriminant = ((b ** 2) - 4 * a * c);
//   if (discriminant < 0) {
//     return array = [];
//   } else if (discriminant === 0) {
//       return array = [-b / (2 * a)];
//   } else {
//       return [(-b + Math.sqrt(discriminant))/(2*a), (-b - Math.sqrt(discriminant)) / (2 * a)];
//   }
// };
//
// // const testCase = (a, b, c) => console.log(solveEquation(a, b, c))
// // testCase(11, 122, 4);
//
// const calculateTotalMortgage = (percent, contribution, amount, countMonths) => {
//   if (isNaN(percent) === true ||
//       isNaN(contribution) === true ||
//       isNaN(amount) === true ||
//       isNaN(countMonths) === true) {
//     return false
//   } else {
//     percent = (percent / 100) / 12;
//     const loanBody = amount - contribution;
//     const monthlyInstallment = loanBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
//     const totalAmount = (monthlyInstallment * countMonths);
//     return Number(totalAmount.toFixed(2));
//   }
// };
//
