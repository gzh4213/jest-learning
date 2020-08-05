import { add, minus, multi } from './math'

test('测试方法 3 + 7', () => {
  expect(add(3,7)).toBe(10)
})

test('测试方法 3 - 3', () => {
  expect(minus(3,3)).toBe(0)
})

test('测试乘法 3 * 3', () => {
  expect(multi(3,3)).toBe(9)
})

// npm run test
// jest (babel-jest)
// babel-core
// 取 .babelrc 配置
// 在运行测试之前，结合babel，先把代码做一次转化
// 运行转化过的测试用例代码