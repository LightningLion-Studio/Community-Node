import request from "./utils/request"

/**
 * 新建话题标签
 * 
 * @param cookie 
 * @param name 
 * @param desc 
 * @param poster 
 * @param id 
 * @returns 
 */
export async function PostTag(
  cookie: string,
  name: string,
  desc?: string,
  poster?: string,
  id?: number,
) {
  const data = await request({
    url: '/tag',
    params: { cookie },
    data: { name, desc, poster, id }
  })
  return data.data
}
