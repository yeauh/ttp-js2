// Code your solution here
function runNumTimes(func, num) {
    for (let i = 0; i < num; i++) {
      func();
    }
  }

  let total = 0;

const func = () => {
  total += 5;
};

runNumTimes(func, 5);
console.log(total); // Output: 25
