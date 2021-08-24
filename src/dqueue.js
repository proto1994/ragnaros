class Dqueue {
  constructor() {
    this.items = {};
    this.tailIndex = 0; // 尾部下标
    this.frontIndex = 0; // 头部下标
  }

  addTail(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  addFront(item) {
    this.frontIndex--;
    this.items[this.frontIndex] = item;
  }

  removeTail() {
    const tail = this.items[this.tailIndex];
    this.tailIndex--;
    return tail;
  }


  removeFront() {
    const front = this.items[this.frontIndex];
    this.frontIndex++;
    return front;
  }

  size() {
    return this.tailIndex - this.frontIndex;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.tailIndex = 0; // 尾部下标
    this.frontIndex = 0; // 头部下标
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let result = `${this.items[this.frontIndex]}`;
    for (let i = this.frontIndex + 1; i < this.tailIndex; i++) {
      result = `${result},${this.items[i]}`;
    }
    return result;
  }


} 

module.exports = Dqueue;