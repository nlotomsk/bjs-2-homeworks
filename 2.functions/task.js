function getArrayParams(...arr) {
let max = arr[0];
let min = arr[0];
let sum = 0;
let diffMaxMin;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  } else if (arr[i] > max){
    max = arr[i];
  }
  sum = sum + arr[i]
}
  let avg = sum / arr.length
  avg = Number(avg.toFixed(2))
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  sum = 0;
  if (arr.length > 0){
  for (let i = 0; i < arr.length; i++) {

    sum = sum + arr[i];
  }
  } else {
    sum = Number(arr);
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length > 0){
    max = arr[0];
    min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
      } else if (arr[i] > max){
        max = arr[i];
      }
    }
  } else {
    return 0;
  }
  diffMaxMin = max - min;
  return diffMaxMin;
}

function differenceEvenOddWorker(...arr) {
  let diffEvenOdd = 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length > 0){
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 > 0) {
        sumOddElement = sumOddElement + arr[i];
      } else {
        sumEvenElement = sumEvenElement + arr[i];
      }
    }
  } else {
    return 0;
  }
  diffEvenOdd = sumEvenElement - sumOddElement;
  return diffEvenOdd;
}

function averageEvenElementsWorker(...arr) {
  let avgEven = 0;
  let totalElement = 0;
  let sumEvenElement = 0;
  if (arr.length > 0){
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
        totalElement++
      }
    }
  } else {
    return 0;
  }
  avgEven = sumEvenElement / totalElement;
  return avgEven;
}

function makeWork (arrOfArr, func) {
  let array = [...arrOfArr];
  let resultFun = 0;
  let maxWorkerResult = array[0][0];
  for (i of array) {
    resultFun = func(...i);
    if (resultFun > maxWorkerResult) {
    maxWorkerResult = resultFun;
    }
  }
  return maxWorkerResult;
}
