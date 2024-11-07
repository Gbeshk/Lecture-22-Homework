let masivi1 = [1, 2, 3, 4, 5];
masivi1.forEach((number, index) => {
  console.log(number * number);
});

let masivi2 = ["msxali", "vashli", "nesvi", "ananasi", "mango"];
masivi2.forEach((number, index) => {
  console.log(number);
});

let x = 0;
let masivi3 = [1, 2, 3, 4, 5];
masivi3.forEach((number, index) => {
  x = x + number;
});
console.log(x);

let masivi4 = [
  "giorgi beshkenadze",
  "giorgi gabriadze",
  "luka lanchava",
  "nino burjanadze",
  "mixeil saakashvili",
];
masivi4.forEach((number, index) => {
  console.log(`${number} ${index + 1} ადგილზე`);
});

let masivi5 = [1, 2, 3, 4, 5];
masivi5.forEach((number, index) => {
  if (number % 2 === 0) {
    console.log(number);
  }
});

let masivi6 = [1, 2, 3, 4, 5];
let ChangedMasivi6 = masivi6.map((num) => {
  return num * num;
});
console.log(ChangedMasivi6);

let masivi7 = ["GIORGI", "LUKA", "MARI"];
masivi7.map((num) => {
  console.log(num.toLowerCase());
});

let masivi8 = [1, 2, 3, 4, 5];
let ChangedMasivi8 = masivi8.map((num) => {
  return num + 10;
});
console.log(ChangedMasivi8);

let masivi9 = [
  { saxeli: "giorgi beshkenadze", qula: 10 },
  { saxeli: "vaxo", qula: 10 },
  { saxeli: "lionel mesi", qula: 10 },
  { saxeli: "nino burjanadze", qula: 10 },
  { saxeli: "mixeil saakashvili", qula: 5 },
];
let ChangedMasivi9 = masivi9.map((num) => {
  return num.saxeli;
});
console.log(ChangedMasivi9);

let masivi10 = [1, 2, 3, 4, 5];
let ChangedMasivi10 = masivi10.map((num) => {
  if (num % 2 === 0) {
    return num * 2;
  } else {
    return num;
  }
});
console.log(ChangedMasivi10);

let masivi11 = [1, 2, 3, 4, 5, 6];
let FilterMasivi11 = masivi11.filter((number) => {
  return number % 2 == 0;
});
console.log(FilterMasivi11);

let masivi12 = ["adawd", "faedawd", "aa", "fawfafawaw"];
let FilterMasivi12 = masivi12.filter((number) => {
  return number.length > 5;
});
console.log(FilterMasivi12);

let masivi13 = [-2, -24, -1, 1, 2, 3, 4, 5, 6];
let FilterMasivi13 = masivi13.filter((number) => {
  return number >= 0;
});
console.log(FilterMasivi13);

let masivi14 = [
  { saxeli: "magida", fasi: 80 },
  { saxeli: "skami", fasi: 80 },
  { saxeli: "macivari", fasi: 400 },
  { saxeli: "sarecxi manqana", fasi: 500 },
  { saxeli: "uto", fasi: 30 },
  { saxeli: "mtversasruti", fasi: 180 },
];
let FilterMasivi14 = masivi14.filter((number) => {
  return number.fasi > 100;
});
console.log(FilterMasivi14);

let masivi15 = [1, 2, 3, 4, 100, 1213];
let FilterMasivi15 = masivi15.filter((number) => {
  return number > 50;
});
console.log(FilterMasivi15);

let index = 1;
while (index < 10) {
  console.log(index);
  index++;
}

let index1 = 1;
let y = 0;
while (index1 < 10) {
  y = y + index1;
  index1++;
}
console.log(y);

let index3 = 1;
while (index3 < 19) {
  y = y + index3;
  index3 = index3 + 2;
  console.log(index3);
}

let index5 = 20;
while (index5 >= 10) {
  console.log(index5);
  index5--;
}

let masivi16 = [
  { saxeli: "magida", fasi: 80 },
  { saxeli: "skami", fasi: 80 },
  { saxeli: "macivari", fasi: 400 },
  { saxeli: "sarecxi manqana", fasi: 500 },
  { saxeli: "uto", fasi: 30 },
  { saxeli: "mtversasruti", fasi: 180 },
];
let index7 = 0;
while (index7 < masivi16.length) {
  console.log(masivi16[index7].saxeli);
  index7++;
}
