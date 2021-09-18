const BinarySearch = require('./BinarySearchTree');
const { Compare, defaultCompare } = require('./utils');


class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5,
};

class AVLTree extends BinarySearch {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null
  }


  getNodeHeight(node) {
    if (node == null) return -1;
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  getBalanceFactor(node) {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch(heightDifference) {
      case -2: 
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }

  // 左子树比右子树高
  // 向右旋转
  rotateLL(node) {
    // 先拿到左子树
    const temp = node.left;
    // 重新赋值当前节点左子树为其之前左子树的右子树
    node.left = temp.right;
    // 将当前节点赋值给其左子树的右子树
    temp.right = node;
    return temp;
  }

  // 右子树比左子树高
  // 向左旋转
  rotateRR(node) {
    // 先拿到右子树
    const temp = node.right;
    // 重新赋值当前右子树为其左子树
    node.right = temp.left;
    // 将当前节点赋值给其左子树
    temp.left = node;
    return temp;
  }

  rotateLR(node) {
    node.left = this.rotateRR(node.left);
    return this.rotateLL(node);
  }

  rotateRL(node) {
    node.right = this.rotateLL(node.right);
    return this.rotateRR(node);
  }

  insert(key) {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      this.root = this.insertNode(this.root, key);
    }

    // console.log('root: ', this.root);
  }

  insertNode(node, key) {
    if (!node) {
      return new Node(key);
    } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key);
    } else if (this.compareFn(key, node.key === Compare.BIGGER_THAN)) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node;
    }
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        node = this.rotateLL(node);
      } else {
        node = this.rotateLR(node);
      }
    } else if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
        node = this.rotateRR(node);
      } else {  
        node = this.rotateRL(node);
      }
    }
    return node;
  }
  remove(key) {
    this.removeNode(this.root, key);
  }
  removeNode(node, key) {
    const tempNode = super.removeNode(node, key);
    return tempNode;
  }

}

module.exports = AVLTree;