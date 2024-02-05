const name = "Aritra";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my name count is ${repoCount}`);

const gameName = new String('aritra-as-com');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-6, 5);
console.log(anotherString);

const newStringOne = " Aritra "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aritra.com/aritra%70sarkar";

console.log(url.replace('%70', '-'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));
