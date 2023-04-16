//Construct a function called titleCase that takes a sentence string and gives it title casing.

const titleCase = (str) => {
  str = str.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
  return str;
};

//EXPECTED:
titleCase("this is an example"); //should return "This Is An Example"
titleCase("test"); //should return "Test"
titleCase("i r cool"); //should return "I R Cool"
titleCase("WHAT HAPPENS HERE"); //should return "What Happens Here"
titleCase(""); //should return ""
titleCase("A"); //should return "A"