let arr = [4, 1, 2, 1, 2];
let arr2 = [2, 2, 1];
function unique(arr) {
  let sorted = arr.sort();
  let unique;

  for (let i = 0; i < arr.length; i = i + 2) {
    if (sorted[i] != sorted[i + 1] && sorted[i] != sorted[i - 1])
      unique = arr[i];
  }
  return unique;
}

console.log(unique(arr));
console.log(unique(arr2));
