// Example - Binary Search
function binarySearch(array, value) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (array[mid] === value) {
      return mid;
    } else if (array[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // Value not found
}

binarySearch([1, 2, 5, 7, 13, 15, 16, 18, 19, 24], 18); // 7 => O(log^2(n)) => O(log(n))
