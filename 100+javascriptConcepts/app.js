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

//callback function
setTimeout(() => {
  console.log("5 second in the future");
}, 5000);

async function asyncFun() {
  try {
    const result = await Promise;
  } catch (error) {
    console.log("error", error);
  }
}

// reject
const promise = new Promise((resolve, reject) => {
  if (greatSuccess) {
    resolve("success");
  } else {
    reject("failure");
  }
});

// then and catch

promise
  .then((success) => {
    console.log("yey!", success);
  })
  .catch((err) => {
    console.log("oh no!", err);
  });
