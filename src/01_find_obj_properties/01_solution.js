// Code your solution here
function findObjPropsHasOwn(obj) {
  let keys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }

  return keys.join(", ");
}

function findObjKeys(obj) {
  const keys = Object.keys(obj);
  return keys.join(', ');
}

  