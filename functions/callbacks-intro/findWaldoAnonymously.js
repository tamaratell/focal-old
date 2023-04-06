//findWaldo: names is an array and found is a cb
// The second argument/parameter is expected to be a (callback) function
const findWaldo = function (names, found) {
  //for (let i = 0; i < names.length; i++) {
  names.forEach((element, index) => {
    if (element === "Waldo") {
      found(index);   // execute callback
    }
  })
}

// const actionWhenFound = (index) => {
//   console.log("Found Waldo at index " + index);
// }


findWaldo(["Alice", "Bob", "Waldo", "Winston"], (index) => {
  console.log("Found Waldo at index " + index);
});

//console.log(findWaldo(["Alice", "Bob", "Michael"]));