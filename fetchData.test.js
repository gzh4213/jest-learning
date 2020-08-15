import { fetchData } from './fetchData'

test('fetchData 返回结果为 { success: true }', (done) => {
  fetchData(data => {
    expect(data).toEqual({
      success: true
    })
    done()
  })
})