//Function declaration
function sum(a, b) {
  return a + b;
}

//Function expression
const add = function (a, b) {
  return a + b;
};
console.log("@SN Sum", sum(5, 6));
console.log("@SN Sum", add(6, 6));
