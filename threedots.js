const age = [10, 20, 30,40,50]
const age2 = [11,22,33,44,55,66]
const age3 = [12,13,14,34,21,43]
const allAges = age.concat(age2).concat(age3).concat([007]);
const allAges2 = [...age, ...age2, ...age3];

console.log(allAges2)

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa =[650, 450, 250];
const maximum = Math.max(...takaPoisa);
console.log(maximum)