const AVLTree =  require('../AVLTree');

describe('AVLTree测试', () => {
  test('测试AVLTree初始化测试', () => {
    const avlTree = new AVLTree();
    expect(avlTree.root).toBe(null);
  })

  test('测试AVLTree insert', () => {
    const avlTree = new AVLTree();
    avlTree.insert(100);
    avlTree.insert(80);
    avlTree.insert(60);
    avlTree.insert(40);
    avlTree.insert(50);
    avlTree.insert(70);
  })
  
})
  
  