const AVLTree =  require('../AVLTree');

describe('AVLTree测试', () => {
  test('测试AVLTree初始化测试', () => {
    const avlTree = new AVLTree();
    expect(avlTree.root).toBe(null);
  })

  // test('测试AVLTree insert', () => {
  //   const avlTree = new AVLTree();
  //   avlTree.insert(100);
  //   avlTree.insert(80);
  //   avlTree.insert(60);
  //   avlTree.insert(40);
  //   avlTree.insert(50);
  //   avlTree.insert(70);

  //   // 中序遍历
  //   const inOrderTraverseArr = [];
  //   avlTree.inOrderTraverse((key) => {
  //     inOrderTraverseArr.push(key);
  //   });
  //   expect(inOrderTraverseArr).toEqual([40, 50, 60, 70, 80, 100]);
  // })


  test('测试AVLTree remove', () => {
    const avlTree = new AVLTree();
    avlTree.insert(100);
    avlTree.insert(80);
    avlTree.insert(60);
    avlTree.insert(40);
    avlTree.insert(50);
    avlTree.insert(70);
    console.log('root:', avlTree.root);
    avlTree.remove(70);
    console.log('root:', avlTree.root);
    
  })
  
})
  
  