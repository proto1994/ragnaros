const DQueue =  require('../dqueue');
describe('dqueue测试', () => {

  test('测试dqueue初始化测试', () => {
    const dqueue = new DQueue();
    expect(dqueue.isEmpty()).toBe(true);
    expect(dqueue.size()).toBe(0);
    expect(dqueue.tailIndex).toBe(0);
    expect(dqueue.frontIndex).toBe(0);
  })

  test('测试dqueue addTail', () => {
    const dqueue = new DQueue();
    dqueue.addTail(5);
    dqueue.addTail(5);
    expect(dqueue.size()).toBe(2);
    expect(dqueue.tailIndex).toBe(2);
  })

  test('测试dqueue addFront', () => {
    const dqueue = new DQueue();
    dqueue.addFront(5);
    dqueue.addFront(5);
    expect(dqueue.size()).toBe(2);
    expect(dqueue.frontIndex).toBe(-2);
  })

  test('测试dqueue removeTail', () => {
    const dqueue = new DQueue();
    dqueue.addTail(5);
    dqueue.removeTail();
    expect(dqueue.size()).toBe(0);
    dqueue.addFront();
    dqueue.removeTail();
    expect(dqueue.size()).toBe(0);
  })

  test('测试dqueue removeFront', () => {
    const dqueue = new DQueue();
    dqueue.addTail(5);
    dqueue.removeFront();
    expect(dqueue.size()).toBe(0);
    dqueue.addFront();
    dqueue.removeFront();
    expect(dqueue.size()).toBe(0);
  })

  test('测试dqueue 混合测试', () => {
    const dqueue = new DQueue();
    dqueue.addTail(5);
    dqueue.addFront(4);
    dqueue.addTail(6);
    dqueue.addTail(6);
    expect(dqueue.size()).toBe(4);
    expect(dqueue.toString()).toBe("4,5,6,6");
    dqueue.removeFront();
    expect(dqueue.toString()).toBe("5,6,6");
    dqueue.removeTail();
    expect(dqueue.toString()).toBe("5,6");
    dqueue.clear();
    expect(dqueue.size()).toBe(0);
    expect(dqueue.toString()).toBe("");

  })

})

