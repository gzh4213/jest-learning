//  String相关匹配器
test('toMatch匹配器', () => {
  const str = 'http://www.baidu.com'
  expect(str).toMatch('baidu')
})

// Array, Set相关匹配器
test('toContain匹配器', () => {
  const arr = ['dell', 'lee', 'imooc']
  const data = new Set(arr)
  expect(data).toContain('dellgg')
})

// 异常相关匹配器
const throwNewErrorFunc = () => {
  throw new Error('this is a new error')
}
test('toThrow匹配器', () => {
  expect(throwNewErrorFunc).toThrow('this is a new error')
})

// 更多匹配器： https://jestjs.io/docs/en/expect





