import request from "./utils/request"

export async function GetCateogry(limit:number,offset:number) {
  const data = await request({
    url: '/category',
    params: { limit, offset }
  })
  return data.data
}