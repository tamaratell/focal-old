const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

//create a function that only prints out grades >= 70 to the console. 


// const pass = grades.filter((element) => {
//   return element >= 70;
// })

// console.log("the passing grades are: " + pass);

console.log("the passing grades are: ", grades.filter((element) => element >= 70));