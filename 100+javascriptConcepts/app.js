// let luckyNum;

// console.log(luckyNum);

// luckyNum = 23;

// console.log(luckyNum);

// luckyNum = null;

/* let a = " global";

function fun() {
  let a = "function";

  if (true) {
    let a = "block";
    var b = "hoisted";
  }
  fun();
} */

function higherOrder(fun) {
  fun();
  return function () {};
}
