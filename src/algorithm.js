function summation(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const result = summation(5);

function secondsummation(n) {
  return (n * (n + 1)) / 2;
}
const result2 = secondsummation(5);

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function isPowerOfNum(n) {
  for (let i = 2; i < n % 2; i++) {
    if (n % 2 === 0) return false;
  }
  return true;
}

function isPowerOfTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return false;
}

function isPowerOfTwoBitwise(n) {
  if (n > 1) return false;
  return (n & (n - 1)) === 0;
}
// Big-0  = O(1)

function recursiveFibonacci(n) {
  if (n < 0) return;
  else if (n < 2) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

function recursiveFactorial(n) {
  if (n === 0) return 1;
  return n * recursiveFactorial(n - 1);
}

function LinearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

function BinarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.index - 1;
  while (leftIndex <= rightIndex) {
    let middleindex = Math.floor((leftIndex - rightIndex) / 2);
    if (target === arr[middleindex]) return middleindex;
    if (target < arr[middleindex]) {
      rightIndex = middleindex - 1;
    } else {
      leftIndex = middleindex + 1;
    }
  }
  return -1;
}

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[middleIndex]) return middleIndex;
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

function BubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let tem = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tem;
        swapped = true;
      }
    }
    return arr;
  } while (swapped);
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    // j represent the index of the sorted element
    while (j >= 0 && numberToInsert < arr[i]) {
      arr[j + i] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}

function QuickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...QuickSort(left), pivot, ...QuickSort(right)];
}

// problem statement : Given a string "s" return the most frequent letter (an Alphabet letter) in  the string s
var solution = function (s) {
  let highestChar = null;
  let highestNum = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!/[a-zA-Z]/.test(char)) continue;
    let occurance = 0;
    for (let j = 0; j < s.length; j++) {
      if (s[j] === char) occurance++;
    }
    if (occurance > highestNum) {
      highestNum = occurance;
      highestChar = char;
    }
  }
  return highestChar;
};

function FilterHighest() {}

function MergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(MergeSort(leftArr), MergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

function cartesianProduct(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr[i], arr2[j]]);
    }
  }
  return result;
}

function ClimbingStaircase(n) {
  const noofDays = [1, 2];
  for (let i = 2; i < n.length; i++) {
    noofDays[i] = noofDays[i - 1] * noofDays[i - 2];
  }
  return noofDays[n - 1];
}

function TowerOfHowai(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod} `);
    return;
  }
  TowerOfHowai(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${usingRod}`);
  TowerOfHowai(n - 1, usingRod, fromRod, toRod);
}

let arr = [-5, 2, 10, 4, 6, -10, "30", -100, 10];
let arr2 = [2, 4, 6];
let arr1 = [1, 2];
let s = "AAAGGGDHD0098294727274NCHSDJESKKKKDJFQQAAAA";

const result4 = isPrime(5);
const result3 = factorial(0);
const result5 = isPowerOfNum(5);
const result6 = isPowerOfTwo(5);
const result7 = isPowerOfTwoBitwise(7);
const result8 = recursiveFibonacci(0);
const result9 = recursiveFibonacci(1);
const result10 = recursiveFibonacci(6);
const result11 = recursiveFactorial(9);
const result12 = LinearSearch(arr, 16);
const result13 = BinarySearch(arr, 9);
const result14 = recursiveBinarySearch(arr, 10);
const result15 = BubbleSort(arr);
const result16 = insertionSort(arr);
const result17 = QuickSort(arr);
const result18 = solution(s);
const result19 = MergeSort(arr);
const result20 = cartesianProduct(arr1, arr2);
const result21 = ClimbingStaircase(5);
const result22 = TowerOfHowai(3, "e", "t", "W");

console.log(
  "response",
  result,
  result2,
  result3,
  result4,
  result5,
  result6,
  result7,
  result8,
  result9,
  result10,
  result11,
  result12,
  result13,
  result14,
  result15,
  result16,
  result17,
  result18,
  result19,
  result20,
  result21,
  result22
);

// worst case - 0(n^2)\
// Avg case - O(nlogn)
