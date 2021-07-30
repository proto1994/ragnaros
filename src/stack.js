/**
 *  Push Pop
 * var stack = new Stack();
 * stack.push(5)
 * stack: [5]
 * stack.pop()
 * stack: []
 */

class Stack {
  items = {};
  count = 0;
  push(item) {
    this.items[this.count] = item;
    this.count++;
  }
  pop() {
    if (this.count <= 0) return;
    const last = this.items[this.count];
    delete this.items[this.count];
    this.count--;
    return last;
  }

  // 末尾
  peek() {
    if (this.count < 0) return null;
    return this.items[this.count];
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

  }
}
module.exports = Stack;



