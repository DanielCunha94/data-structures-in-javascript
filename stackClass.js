class Stack {
  constructor() {
    this.collection = [];
  }

  push(e) {
    this.collection.push(e);
  }

  pop() {
    return this.collection.pop();
  }

  peek() {
    return this.collection[this.collection.length - 1];
  }

  isEmpty() {
    return this.collection.length === 0 ? true : false;
  }

  clear() {
    this.collection = [];
  }

  print() {
    console.log(this.collection);
  }

  size() {
    return this.collection.length;
  }
}
