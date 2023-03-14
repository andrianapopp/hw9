//1
const a = prompt(`number a`)
if (a === 0){
    alert(`Верно`)}
else {
    alert(`Неверно`)
}
//2
const a = prompt(`number a`)
if (a > 0){
    alert(`Верно`)}
else {
    alert(`Неверно`)
}
//3
const a = prompt(`number a`)
if (a < 0){
    alert(`Верно`)}
else {
    alert(`Неверно`)
}
//4
const a = prompt(`number a`)
if (a >= 0){
    alert(`Верно`)}
else {
    alert(`Неверно`)
}
//5
const a = prompt(`number a`)
if (a <= 0){
    alert(`Верно`)}
else {
    alert(`Неверно`)
}
//6
const a = prompt(`number a`)
if (a !== 0){
    alert(`Верно`)}
else {
    alert(`Неверно`)
}
//7
const a = prompt(`number a`)
if (a === `test`){
    alert(`Верно`)}
else {
    alert(`Неверно`)
}
//8
const a = prompt(`number a`)
if (a === 1){
    alert(`Верно`)}
else {
    alert(`Неверно`)
}
//9
const a = prompt(`number a`)
if (a > 0 && a < 5){
    alert(`Верно`)}
else {
    alert(`Неверно`)
}
//10
let a = prompt(`number a`)
if (a === 0 || a === 2){
    a += 7}
else {
    a /= 7}
alert(a)
//11
const a = prompt(`number a`)
const b = prompt(`number b`)
if (a <= 1 && b >= 3){
    alert(a+b)}
else {
    alert(a-b)
}
//12
const a = prompt(`number a`)
const b = prompt(`number b`)
if (a > 2 && a < 11 || b>=6 && b<14){
    alert(`Верно`)}
else {
    alert(`Неверно`)
}
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