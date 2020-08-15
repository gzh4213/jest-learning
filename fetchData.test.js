import { fetchData } from './fetchData'

test('fetchData 返回结果为 { success: true }', () => {
  return expect(fetchData()).resolves.toMatchObject({
    data: {
      success: true
    }
  })
})

// test('fetchData 返回结果为 404', () => {
//   return expect(fetchData()).rejects.toThrow()
// })