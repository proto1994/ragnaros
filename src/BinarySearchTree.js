const { Compare, defaultCompare } = require('./utils');

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(key) {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  search(key) {
    return this.searchNode(this.root, key)
  }

  searchNode(node, key) {
    if (!node) return null;
    if (this.compareFn(key, node.key) === Compare.EQUALS) {
      return node;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    } else {
      return this.searchNode(node.right, key);
    }
  }

  // 中序遍历
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node, callback) {
    if (!node) return null;
    this.inOrderTraverseNode(node.left, callback);
    callback(node.key);
    this.inOrderTraverseNode(node.right, callback);
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    if (!node) return null;
    callback(node.key);
    this.preOrderTraverseNode(node.left, callback);
    this.preOrderTraverseNode(node.right, callback);
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback) {
    if (!node) return null;
    this.postOrderTraverseNode(node.left, callback);
    this.postOrderTraverseNode(node.right, callback);
    callback(node.key);
  }

  min() {
    return this.minNode(this.root);
  }
  minNode(node) {
    if (!node) return null;
    while(node.left) {
      node = node.left;
    }
    return node.key;
  }
  max() {
    return this.maxNode(this.root);
  }
  maxNode(node) {
    if (!node) return null;
    while(node.right) {
      node = node.right;
    }
    return node.key;
  }

  remove(key) {

  }


 }

 module.exports = BinarySearchTree;