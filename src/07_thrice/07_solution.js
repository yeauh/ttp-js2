// Code your solution here
function thrice(func) {
    let count = 0;
  
    return function () {
      if (count < 3) {
        count++;
        return func();
      } else {
        return undefined;
      }
    };
  }
  