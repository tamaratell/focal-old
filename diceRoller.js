//create a variable that processes command line argument
const arg = Number((process.argv).slice(2));


//define a function with one parameter
const rollDice = function (arg) {
  console.log(arg);
  //define a variable to hold number of roles
  let rolls = [];
  //for parameter x, generate x random numbers 
  for (let i = 0; i < arg; i++) {
    rolls.push(Math.floor(Math.random() * 6 + 1));
    // return random numbers + "rolled 3 dice"
  }
  return `Rolled ${arg} dice: ${rolls}`;
}

// const rollDice = function (arg) {
//   console.log(arg);
//   //define a variable to hold number of roles
//   let rolls = "";
//   //for parameter x, generate x random numbers 
//   for (let i = 0; i < arg; i++) {
//     rolls += (Math.floor(Math.random() * 6 + 1)) + ", ";
//     // return random numbers + "rolled 3 dice"
//   }
//   return rolls;
// }

console.log(rollDice(10));




