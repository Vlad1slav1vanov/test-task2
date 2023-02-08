function getUnique(arr) {
  return arr.filter(function(item, index){
    return arr.indexOf(item) === index;
  });
}

function getC(A, B) {
  let uniqueA = getUnique(A);
  return uniqueA.filter(function(item) {
    return !B.includes(item);
  });
}

function getD(A, B) {
  let uniqueA = getUnique(A);
  let uniqueB = getUnique(B);
  return uniqueA.filter(function(item) {
    return uniqueB.includes(item);
  });
}