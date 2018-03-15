var words = ["ground", "control", "to", "major", "tom"];

var newList = words.map(function (word) {
  return word.length;
});
console.log(newList);

var list = words.map(function (word) {
  return word.toUpperCase();
});
console.log(list);

var list2 = words.map(function (word) {
  return  word.split('').reverse().join("");
});
console.log(list2);

// map(words, function(word) {
  // return word.toUpperCase();
// });
//
// map(words, function(word) {
  // return word.split('').reverse().join('');
// });

