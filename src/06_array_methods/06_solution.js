// Code your solution here
function useMapToUpperCase(arr) {
  if (typeof arr === 'string') {
    arr = arr.split(' ');
  }
  return arr.map((element) => element.toUpperCase());
}

  
function useFilter(arr) {
  return arr.filter((element) => element.includes('@'));
}

  
  function sumWithReduce(arr, initialValue = 0) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  }
  
  function filterEvensDoubleAndSum(arr) {
    return arr
      .filter((num) => num % 2 === 0)
      .map((num) => num * 2)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  