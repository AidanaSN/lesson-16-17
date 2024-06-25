let a = prompt("Введите часы:");
let b = prompt("Введите минуты:");
let c = prompt("Введите секунды:");


a = Number(a);
b = Number(b);
c = Number(c);

let d = a*60*60 + b*60 +c;

alert("общее количество секунд: " + d);