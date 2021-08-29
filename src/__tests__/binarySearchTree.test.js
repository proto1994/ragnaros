const BinarySearchTree =  require('../BinarySearchTree');

describe('BinarySearchTree测试', () => {
  test('测试BinarySearchTree初始化测试', () => {
    const binarySearchTree = new BinarySearchTree();
    expect(binarySearchTree.root).toBe(null);
  })

  test('测试BinarySearchTree insert函数', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(5);
    expect(binarySearchTree.root).toEqual({
      key: 5,
      left: null,
      right: null
    });
    binarySearchTree.insert(4);
    expect(binarySearchTree.root.left).toEqual({
      key: 4,
      left: null,
      right: null
    });
    binarySearchTree.insert(6);
    expect(binarySearchTree.root.right).toEqual({
      key: 6,
      left: null,
      right: null
    });

    binarySearchTree.insert(3);
    expect(binarySearchTree.root.left.left).toEqual({
      key: 3,
      left: null,
      right: null
    });
  })

  test('测试BinarySearchTree search函数', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(5);
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    binarySearchTree.insert(3);
    expect(binarySearchTree.search(3)).toEqual({
      key: 3,
      left: null,
      right: null
    });
    expect(binarySearchTree.search(2)).toBe(null);
    expect(binarySearchTree.search(4)).toEqual({
      key: 4,
      left: {
        key: 3,
        left: null,
        right: null,
      },
      right: null
    });
  })

  test('测试BinarySearchTree遍历', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(8);
    binarySearchTree.insert(5);
    binarySearchTree.insert(3);
    binarySearchTree.insert(6);
    binarySearchTree.insert(9);
    binarySearchTree.insert(11);

    // 中序遍历
    const inOrderTraverseArr = [];
    binarySearchTree.inOrderTraverse((key) => {
      inOrderTraverseArr.push(key);
    });
    expect(inOrderTraverseArr).toEqual([3, 5, 6, 8, 9, 11]);

    // 先序遍历
    const preOrderTraverseArr = [];
    binarySearchTree.preOrderTraverse((key) => {
      preOrderTraverseArr.push(key);
    });
    expect(preOrderTraverseArr).toEqual([8, 5, 3, 6, 9, 11]);

    // 后序遍历
    const postOrderTraverseArr = [];
    binarySearchTree.postOrderTraverse((key) => {
      postOrderTraverseArr.push(key);
    });
    expect(postOrderTraverseArr).toEqual([3, 6, 5, 11, 9, 8]);

  })


  
})
  
  