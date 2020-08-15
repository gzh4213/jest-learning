import { fetchData } from './fetchData'

// test('fetchData 返回结果为 { success: true }', (done) => {
//   fetchData(data => {
//     expect(data).toEqual({
//       success: true
//     })
//     done()
//   })
// })

test('fetchData 返回结果为 { success: true }', () => {
  return fetchData().then(res => {
    expect(res.data).toEqual({
      success: true
    })
  })
})