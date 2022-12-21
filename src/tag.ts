import request from "./utils/request"

/**
 * 新建话题标签
 *
 * @param cookie token 必填
 * @param name 话题名称
 * @param id 传入0为不填写则为新建此tag
 * @param desc 描述
 * @param poster 图标地址
 */
export async function PostTag(
  cookie: string,
  name: string,
  id?: number = 0,
  desc?: string,
  poster?: string,
) {
  const data = await request({
    url: "/tag",
    params: { cookie },
    data: { name, desc, poster },
  })
  return data.data
}
