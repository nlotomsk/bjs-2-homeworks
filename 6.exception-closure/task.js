﻿function parseCount (perem){
    let resultFloat = Number.parseFloat(perem);
    if (isNaN(resultFloat)){
        throw new Error('Невалидное значение');
    }
    return Number.parseFloat(perem);
}

function validateCount (perem){
    try {
        return parseCount(perem);
    } catch (perem){
        return perem;
    }
}

class Triangle{
    constructor(a, b, c) {
        if (a + b <= c || b + c <= a || c + a <= b) {
           throw new Error('Треугольник с такими сторонами не существует');
            }
        this.a = a;
        this.b = b;
        this.c = c;
        }
    get perimeter(){
        return  this.a + this.b + this.c;
    };
    get area(){
       let p = 0.5 * ( this.a + this.b + this.c);
       return Number(Math.sqrt(p * (p - this.a)*(p - this.b)*(p - this.c)).toFixed(3));
    }
}
function getTriangle(a, b, c){
    try {
        return new Triangle(a,b,c);
    } catch {
        return {
            get perimeter(){
                return 'Ошибка! Треугольник не существует';
            },
            get area (){
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}