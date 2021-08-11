const Queue =  require('../queue');



describe('queue测试', () => {

  test('测试queue初始化测试', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
  })

  test('测试queue push&front功能', () => {
    const queue = new Queue();
    queue.push(1);
    queue.push(2);
    expect(queue.front()).toBe(1);
  })

  test('测试queue pop功能', () => {
    const queue = new Queue();
    queue.push(1);
    expect(queue.pop()).toBe(1);
  })

  test('测试queue size功能', () => {
    const queue = new Queue();
    queue.push(1);
    queue.push(2);
    expect(queue.size()).toBe(2);
  })

  test('测试queue clear功能', () => {
    const queue = new Queue();
    queue.push(1);
    queue.push(2);
    queue.clear();
    expect(queue.isEmpty()).toBe(true);
  })

  test('测试queue toString功能', () => {
    const queue = new Queue();
    queue.push(1);
    queue.push(2);
    expect(queue.toString()).toBe('1,2');
  })

})

