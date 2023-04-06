
//get Object1 Key1 as ObjectA
//get Object2 key2 as ObjectB
//assign O1K1 = B
//O2K2 = A


// const swapper = function(key1, object1, key2, object2) {
//   const objectA = object1[key1];
//   const objectB = object2[key2];
//   object1[key1] = objectB;
//   object2[key2] = objectA;
// }

//INSTRUCTIONS: 
// Your function should:

// fetch the value stored in key1 in object1 
//

//and then store that value in key2 of object2.

// take the original value stored in key2 of object2, and store that in key1 of object1.
// not need to return anything.

const swapper = function (key1, object1, key2, object2) {
  console.log("Swap!");

  // const swapper = function(key1, object1, key2, object2) {
  const a = object1[key1];
  const b = object2[key2];
  object1[key1] = b;
  object2[key2] = a;
  console.log("object1: ", object1);
  console.log("object2: ", object2);
};



//TEST CODE 
swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });

// ======LOG=======
// Swap!
// object1: { a: 5 , b: 2, c: 3 }
// object2: { a: 4, b: 3, c: 1 }
// Swap!
// object1: { a: 8 , b: 12, c: 6 }
// object2: { a: 5, b: 1, c: 2, d: 7}
// Swap!
// object1: { a: 1 , b: 3, c: 5, d: 7 }
// object2: { a: 4, b: 0, c: 3 }