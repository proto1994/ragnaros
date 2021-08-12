class Dqueue {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  push(item) {
    this.items[count] = item;
    this.count++;
  }

  addFront(item) {
    this.lowestCount--;
    this.items[this.lowestCount] = item;
    this.count++;
  }

  removeFront() {
    const front = this.items[this.lowestCount];
    this.lowestCount++;
    this.count--;
    return front;
  }


  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let result = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      result = `${result},${this.items[i]}`;
    }
    return result;
  }


} 


module.exports = Dqueue;