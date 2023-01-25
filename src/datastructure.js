let arrays = [1, 3, 4, "sysys"];

arrays.push(3);
for (const item of arrays) {
  console.log(item);
}

const object = {
  name: "wilson ibekason",
  age: 10,
  "key-address": "California",
  sayHello: function () {
    console.log(this.name);
  }
};

object.class = "ss3 Word of Faith Group Of Schools".toUpperCase().toString();

delete object.age;
let keys = Object.keys(object);
let values = Object.values(object);
let entries = Object.entries(object);

const set = new Set([1, 3, 4]);

set.add(4);
//value exist
set.has(4);
set.delete(3);
set.size;
set.clear();

for (const item of set) {
  console.log(item);
}

const map = new Map([
  ["a", 1],
  ["b", 1]
]);
map.set("s", 3);
console.log(map.get("s"));

console.log(map.has("a"));
console.log(map.delete("s"));

for (const [key, value] of map) {
  console.log(`${key}:${value} `);
}

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop(element) {
    this.element.pop(element);
  }
}

console.log(
  "Object Response",
  arrays,
  object["key-address"],
  object.sayHello,
  keys,
  values,
  entries,
  map
);
