const Stack =  require('../stack');



describe('stack测试', () => {

  test('测试stack初始化测试', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  })

  test('测试stack push&peek功能', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
  })

  test('测试stack pop功能', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.pop()).toBe(1);
  })

  test('测试stack size功能', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
  })

  test('测试stack clear功能', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
  })

  test('测试stack toString功能', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.toString()).toBe('1,2');
  })

})

