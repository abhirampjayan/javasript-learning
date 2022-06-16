let readMap = new WeakMap();
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];
for (const iterator of messages) {
  readMap.set(iterator, new Date(2017, 1, 1));
}
