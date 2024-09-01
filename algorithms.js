const studentDatabase = ["jordan", "eric", "michael"];
let groceries = [1, 3];
const findStudent = (allStudent, studentName) => {
  for (let i = 0; i < allStudent.length; i++) {
    const element = allStudent[i];
    if (element === studentName) {
      console.log(`student  ${studentName}`);
    }
  }
};

const searchItem = (item) => {
  for (let i = 0; i < groceries.length; i++) {
    const element = groceries[i];
    if (element === item) {
      return true;
    } else return false;
  }

  for (let j = 0; j < groceries.length; j++) {
    const newItem = groceries[j];
    if (newItem === item) return true;
  }
};

const nums1 = [1, 2, 3, 4];

const getElement = (arr, index) => arr[index];

//
function findPairs(arr) {
  for (let index = 0; index < arr.length; index++) {
    for (let j = 0; j < arr.length; j++) {
      const element = arr[j];
      console.log(element);
    }
    const element = arr[index];
  }
}

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  get(index) {
    return this.data[index];
  }
  pop() {
    const last = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return last;
  }

  shift() {
    const firstItem = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  deleteByIndex(index) {
    const item = this.data[index];
    for (let i = 0; i < this.length; i++) {
      const element = this.data[i];
      element = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const myArr = new MyArray();
myArr.push("apple");
myArr.get(0);
myArr.pop();
myArr.shift();

findPairs(nums1);

getElement(nums1, 0);

searchItem("rice");

findStudent(studentDatabase, "jordd");

// REVERSE STRING

function reverseString(str) {
  return str.split("").reverse().join("");
}

// palindrome
const palindrome = (str) => str.split("").reverse().join("") === str;

// integer reversal
function reverseInt(num) {
  const reversal =
    parseInt(Math.abs(num).toString().split("").reverse().join("")) *
    Math.sign(num);
  return reversal;
}
// caitalize word
function capitalize(str) {
  return str
    .toLowerCase()
    .split("")
    .map((word) => word[0].toUpperCase() + word.splice(1))
    .join("");
}
function capitalizeWord(word) {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function capitalizeSentence(sentence) {
  if (!sentence) return "";
  return sentence
    .split(" ")
    .map((word) => capitalizeWord(word))
    .join(" ");
}

// fizzBuzz

const fizzBuzz = (n) => {
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      return true;
    } else if (i % 3 === 0) {
      return true;
    } else if (i % 5 === 0) {
      return true;
    } else {
      return false;
    }
  }
};

function fizzBuzz2(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Example usage
fizzBuzz2(15);

// maxProfit Algorithm
const maxProfit = (prices) => {
  let minxPrice = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const currentPrices = array[i];
    //
    minxPrice = Math.min(minxPrice, currentPrices);
    const potPrize = currentPrices - minxPrice;
    Math.max(maxProfit, potPrize);
    console.log(minxPrice, maxProfit);
    return { maxProfit, minxPrice };
  }
};

// Array Chunk

const chunk = (array, size) => {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    console.log("...", chunk);
    chunked.push(chunk);
    index += size;
  }
  return chunked;
};

console.log(chunk([1, 2, 3, 4, 5], 3));

// two sum
function nearestTwoSum(array, target) {
  let closestSum = Infinity;
  let result = [-1, -1];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const currentSum = array[i] + array[j];
      const distanceToTarget = Math.abs(currentSum - target);

      if (distanceToTarget < Math.abs(closestSum - target)) {
        closestSum = currentSum;
        result = [i, j];
      }
    }
  }

  return result;
}

// Example usage
const array = [10, 22, 28, 29, 30, 40];
const target = 54;
console.log(nearestTwoSum(array, target)); // Output: [2, 4] => array[2] + array[4] = 28 + 30 = 58 which is closest to 54

// LINKED List

class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.head = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  pop() {
    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (!this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  ///  unshift
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    // move head to the next node / element
    this.head = this.head.next;
    // remove first element
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    const temp = this.head;

    if (!this.head) {
      return null;
    }

    while (temp) {
      if (!temp.next) {
        return temp;
      }

      temp = temp.next;
    }
  }

  get(index) {
    let counter = 0;
    let temp = this.head;
    while (temp) {
      if (counter === index) {
        return temp;
      }
      counter++;
      temp = temp.next;
    }
    return null;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    index === 0 && this.unshift(value);
    index === this.length && this.push(value);

    let newNode = new Node(value);
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  size() {
    let counter = 0;
    let temp = this.head;
    while (temp) {
      counter++;
      temp = temp.next;
    }
    return counter;
  }

  clear() {
    this.head = null;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(10);
myLinkedList.pop();
console.log(myLinkedList);

class DoublyNode {
  constructor(value) {
    this.node = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new DoublyNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new DoublyNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.tail;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }

  unshift(value) {
    let newNode = new DoublyNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.head;
    if (this.length === 1) {
      this.heead = null;
      this.tail = null;
    }

    this.head = this.head.next;
    this.head.prev = null;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }

  ///
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);

    if (this.length === 0) this.first = newNode;

    newNode.next = this.first;
    this.first = newNode;
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

class Queue {
  constructor(value) {
    let newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    this.first.next = newNode;
    this.last = null;
    this.length = 1;
  }

  dequeue() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.first;

    if (theStack.length === 1) {
      this.first = null;
      this.last = null;
    }

    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  min() {
    if (this.length === 0) {
      return undefined;
    }
    let current = this.first;

    let minValue = current.value;
    while (current.next) {
      current = current.next;
      if (current.value < minValue) {
        console.log(current.value, setInterval);
        minValue = current.value;
      }
    }
  }
}

const isValidParenthesiss = (str) => {
  const stack = [];
  const brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let char of str) {
    if (brackets[char]) {
      stack.push(char);
    } else {
      const top = stack.pop();

      if (!top || brackets[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

function isValidParenthesis(s) {
  const stack = [];
  const bracketPairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      // Push opening brackets onto the stack
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      // For closing brackets, check for the matching opening bracket in the stack
      if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
        return false;
      }
    }
  }

  // If stack is empty, all brackets are valid and matched
  return stack.length === 0;
}

function reverseStringStack(str) {
  const stack = [];
  for (let char of str) {
    stack.push(char);
  }
  let reversedStr = "";
  while (stack.length > 0) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}

// Example usage:
console.log(isValidParenthesis("()")); // true
console.log(isValidParenthesis("()[]{}")); // true
console.log(isValidParenthesis("(]")); // false
console.log(isValidParenthesis("([)]")); // false
console.log(isValidParenthesis("{[]}")); // true
console.log(reverseStringStack("Wilson Ibekason"));

let theStack = new Stack(0);
let theQueue = new Queue(3);

theStack.push(1);
theStack.push(3);
theStack.push(4);
theStack.push(5);
theStack.pop();
console.log(theStack);
console.log(theQueue);

class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  _hasFunction(key) {
    let sum = 0;
    const PRIME_NUMBER = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const charCode = key.charCodeAt(0) - 96;
      sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
    }
  }

  set(key, value) {
    const index = this._hasFunction(key);
    if (!this.keyMap[index]) {
      this.keyMap = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hasFunction(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  egtAllKeys() {
    const keys = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }

  getAllValues() {
    const values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          values.push(this.keyMap[i][j][1]);
        }
      }
    }
    return values;
  }
}

function wordCounter(text) {
  let lowerT = text.toLowerCase();
  let wordMap = {};
  let words = lowerT.split(/\W+/); // Splitting on non-word characters

  for (const word of words) {
    if (word) {
      // Ensure word is not an empty string
      if (word in wordMap) {
        wordMap[word]++;
      } else {
        wordMap[word] = 1;
      }
    }
  }

  return wordMap;
}

// Example usage
console.log(wordCounter("Hello, hello world! Hello...")); // { hello: 3, world: 1 }

console.log(wordCounter("hi ji hi djdjdjd ddddk oo oo jddj"));

const phoneBook = new HashTable();

class Node3 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node3(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode) {
        if (newNode.value === temp.value) {
          return undefined;
        }
        if (newNode.value < temp.value) {
          if (temp.left === null) {
            temp.left = newNode;
            return this;
          } else {
            temp = temp.last;
          }
        } else {
          if (temp.right === null) {
            temp.right = newNode;
            return this;
          } else {
            temp = temp.right;
          }
        }
      }
    }
  }

  includes(value) {
    if (!this.root) {
      return false;
    }
    let temp = this.root;

    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value < temp.value) {
        temp = temp.right;
      } else if (value === temp.value) {
        return true;
      }
    }
    return false;
  }
}

const tree = new BST();

console(tree.insert(5), tree.insert(10));
