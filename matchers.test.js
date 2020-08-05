// test('测试10与10相匹配', () => {
//   // toBe 匹配器 machers
//   expect(10).toBe(10)
// })

// test('测试对象内容相等', () => {
//   // toEqual 匹配器
//   const a = { one: 1 }
//   expect(a).toEqual({ one: 1 })
// })

// test('toBeNull匹配器', () => {
//   // toBeNull 匹配器
//   const a = null
//   expect(a).toBeNull()
// })

// 真假有关的匹配器
// test('toBeUndefined匹配器', () => {
//   const a = undefined
//   expect(a).toBeUndefined()
// })

// test('toBeDefined匹配器', () => {
//   const a = 1
//   expect(a).toBeDefined()
// })

// test('toBeTruthy匹配器', () => {
//   const a = 1
//   expect(a).toBeTruthy()
// })

// test('toBeFalsy匹配器', () => {
//   const a = null
//   expect(a).toBeFalsy()
// })

// test('not 匹配器', () => {
//   const a = true
//   expect(a).not.toBeFalsy()
// })

// 数字相关的匹配器
// test('toBeGreaterThan匹配器', () => {
//   const a = 8
//   expect(a).toBeGreaterThan(9)
// })

// test('toBeLessThan匹配器', () => {
//   const a = 8
//   expect(a).toBeLessThan(9)
// })

// test('toBeGreaterThanOrEqual匹配器', () => {
//   const a = 9
//   expect(a).toBeGreaterThanOrEqual(9)
// })

// test('toBeLessThanOrEqual匹配器', () => {
//   const a = 18
//   expect(a).toBeLessThanOrEqual(9)
// })

// test('toBeCloseTo匹配器', () => {
//   const firstNumber = 0.1
//   const secondNumber = 0.2
//   expect(firstNumber + secondNumber).toBeCloseTo(0.3)
// })

//  String相关匹配器
// test('toMatch匹配器', () => {
//   const str = 'http://www.baidu.com'
//   expect(str).toMatch('baidu')
// })

// Array, Set相关匹配器
// test('toContain匹配器', () => {
//   const arr = ['dell', 'lee', 'imooc']
//   const data = new Set(arr)
//   expect(data).toContain('dell')
// })

// 异常相关匹配器
const throwNewErrorFunc = () => {
  throw new Error('this is a new error')
}
test('toThrow匹配器', () => {
  expect(throwNewErrorFunc).toThrow('this is a old error')
})

// 更多匹配器： https://jestjs.io/docs/en/expect





