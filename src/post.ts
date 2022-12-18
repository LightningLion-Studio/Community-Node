import request from "./utils/request"
import type { TypeGetPost } from "./types/post"
/**
 * 获取文章列表
 *
 * @param limit 限制获取多少篇文章
 * @param offset 偏移，这个自行百度用法，长篇大论就不合适了
 * @param order 排序方式，参考API文档
 */
export async function GetPost(
  limit?: number,
  offset?: number,
  order?: 1 | 2 | 3 | 4 | 5,
): Promise<TypeGetPost> {
  const data = await request({
    url: "/post",
    params: { limit, offset, order },
  })
  return data.data
}
