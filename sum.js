let args = process.argv;
args = args.slice(2);
// console.log("these are the array values", args);


function sumArray(array) {
  let sum = 0;

  array.forEach(item => {
    sum += Number(item);
  });

  return sum;
}

console.log(sumArray(args));