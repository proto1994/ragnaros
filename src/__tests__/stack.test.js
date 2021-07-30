const Stack =  require('../stack');



describe('stack测试', () => {

  test('测试stack初始化测试', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  })

  test('测试stack push功能', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toBe(1);
  })


})

