// Example - Merge Sort
function merge(left, right) {
  let sorted = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return sorted.concat(left.slice().concat(right.slice()));
}

function mergeSort(array) {
  const mid = array.length / 2;

  if (array.length < 2) {
    return array;
  }

  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return merge(left, right);
}

const unsortedArr = [31, 27, 28, 42, 13];
mergeSort(unsortedArr); // [ 13, 27, 28, 31, 42 ] => O(n log(n))
