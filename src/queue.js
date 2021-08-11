
/**
 * 队列先进先出
 */
class Queue {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  push(item) {
    this.items[this.count] = item;
    this.count++;
  }

  /**
   * {
   *  0: 1
   *  1: 2
   * }
   */
  pop() {
    if (this.count <= 0) return;
    const front = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return front;
  }

  front() {
    return this.items[this.lowestCount];
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

module.exports = Queue;