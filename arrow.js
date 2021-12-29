// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }
// arrow function
const doubleIt = num => num * 2;
const result = doubleIt(5);
console.log(result);

// multiple parameter arrow function
const add = (x, y) => x + y;
const sum = add(50, 70);
console.log(sum)

// empty arrow function
const give6 = () => 6;
const result2 = give6();
console.log(result2);

// huge arrow function
const doMath = (x ,y) =>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result3 = doMath(4,2);
console.log(result3)
