//1
const a = prompt(`number a`)
a === 0 ? `Верно` : `Неверно`
//2
const a = prompt(`number a`)
a > 0 ? `Верно` : `Неверно`
//3
const a = prompt(`number a`)
a < 0 ? `Верно` : `Неверно`
//4
const a = prompt(`number a`)
a >= 0 ? `Верно` : `Неверно`
//5
const a = prompt(`number a`)
a <= 0 ? `Верно` : `Неверно`
//6
const a = prompt(`number a`)
a !== 0 ? `Верно` : `Неверно`
//7
const a = prompt(`number a`)
a === `test` ? `Верно` : `Неверно`
//8
const a = prompt(`number a`)
a === `1` ? `Верно` : `Неверно`
//9
const a = prompt(`number a`)
a === a > 0 && a < 5 ? `Верно` : `Неверно`
//10
let a = prompt(`number a`)
a === 0 || a === 2 ? `Верно` : `Неверно`
//11
const a = prompt(`number a`)
const b = prompt(`number b`)
const c = (a <= 1 && b >= 3 ? a+b : a-b)
alert (c)
//12
const a = prompt(`number a`)
const b = prompt(`number b`)
a > 2 && a < 11 || b>=6 && b<14 ? `Верно` : `Неверно`
//13
let num = prompt(`number`)
switch (num){
    case `1`:
        alert(`зима`);
        break;
    case `2`:
        alert(`весна`);
        break;
    case `3`:
        alert(`лето`);
        break;
    case `4`:
        alert(`осень`);
        break;
}