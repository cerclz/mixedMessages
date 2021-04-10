const names = ['John', 'George', 'Maria', 'Helena', 'Chris'];
const toDo = ['is going to make', 'is going to eat', 'is going to try', 'definitely won\'t eat'];
const primaryFood = ['pasta', 'steak', 'soup', 'lasagna', 'cake'];
const secondaryFood = ['brocoli', 'carrots', 'chocolate', 'sausage'];

const randomChoice = arr =>{
    randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum];
}

let name = randomChoice(names);
let toDoChoice = randomChoice(toDo);
let food = randomChoice(primaryFood);
let secondFood = randomChoice(secondaryFood);

console.log(`${name} ${toDoChoice} ${food} with ${secondFood}`);