import { fetchData } from './fetchData'

// test('fetchData 返回结果为 { success: true }',async () => {
//   await expect(fetchData()).resolves.toMatchObject({
//     data: {
//       success: true
//     }
//   })
// })

// test('fetchData 返回结果为 404', async () => {
//   await expect(fetchData()).rejects.toThrow()
// })

// test('fetchData 返回结果为 { success: true }',async () => {
//   const res =  await fetchData()
//   expect(res.data).toEqual({
//     success: true
//   })
// })

test('fetchData 返回结果为 404', async () => {
  expect.assertions(1)
  try {
    await fetchData()
  } catch (error) {
    expect(error.toString()).toEqual('Error: Request failed with status code 404')
  }
})