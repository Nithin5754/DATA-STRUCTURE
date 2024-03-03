let arr = [20, 6, 7, 54, 3, 267, 5, 4, 2, 33, 45, 2, 54, 12];

// bubble sort

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(arr);

// selectionSort

for (let i = 0; i < arr.length; i++) {
  let smallest = i;
  for (let j = 1 + i; j < arr.length; j++)
    if (arr[j] < arr[smallest]) {
      let temp = arr[j];
      arr[j] = arr[smallest];
      arr[smallest] = temp;
    }
}

console.log(arr, "hello");

// insertion sort

for (let i = 1; i < arr.length; i++) {
  let numberToIndex = arr[i];
  let j = i - 1;

  while (j >= 0 && arr[j] > numberToIndex) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = numberToIndex;
}

console.log(arr);

// mergeSort

function mergeSorted(array) {
  if (array.length < 2) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  return merge(mergeSorted(left), mergeSorted(right));
}

function merge(left, right) {
  let sortedArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}

console.log(mergeSorted(arr));

// quickSort

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  let pivot = array.length - 1;
  let pivotValue = array[pivot];
  let left = [];
  let right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivotValue) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivotValue, ...quickSort(right)];
}

console.log(quickSort(arr));
