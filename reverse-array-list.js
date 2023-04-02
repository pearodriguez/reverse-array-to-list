var list = {
  value: "a",
  next: {
    value: "b",
    next: {
      value: "c",
      next: null     
    }
  }
};

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.next) {
    array.push(node.value);
  }
  return array;
}

function revArray(array) {
  let revArr = []; 
  for(let i = array.length -1; i >=0; i--) {
    revArr.push(array[i]); 
  }
  return revArr;
}

function arrayToList (revArr) {
  let newList = null; 
  for(let i = revArr.length -1; i >= 0; i--) {
   newList = {value: revArr[i], next: newList}; 
  }
  return newList; 
}

console.log(listToArray(list)); 
console.log(revArray(listToArray(list))); 
console.log(arrayToList(revArray(listToArray(list)))); 

console.log();
console.log(listToArray({value: 1, next: { value: 2, next: { value: 3, next: null } } }));
console.log(revArray(listToArray({value: 1, next: { value: 2, next: { value: 3, next: null } } }))); 
console.log(arrayToList(revArray(listToArray({value: 1, next: { value: 2, next: { value: 3, next: null } } }))));