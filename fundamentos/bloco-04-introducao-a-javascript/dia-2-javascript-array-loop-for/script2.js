let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let decres =[5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

array.sort(function(a, b) {
  return a - b;
});
decres.sort(function(a, b) {
    return b - a;
  });
  
console.log(array);
console.log(decres);
