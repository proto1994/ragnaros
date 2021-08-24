/**
 *  栈 先进后出
 *  Push Pop
 * var stack = new Stack();
 * stack.push(5)
 * stack: [5]
 * stack.pop()
 * stack: []
 */

class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }
  push(item) {
    this.items[this.count] = item;
    this.count++;
  }
  
  pop() {
    if (this.count <= 0) return;
    this.count--;
    const last = this.items[this.count];
    delete this.items[this.count];
    return last;
  }

  peek() {
    if (this.count < 0) return null;
    return this.items[this.count - 1];
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  isEmpty() {
    return this.count === 0;
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
module.exports = Stack;



