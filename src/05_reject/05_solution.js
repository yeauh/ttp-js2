// Code your solution here
function reject(arr, func) {
    return arr.filter((element) => !func(element));
  }
  