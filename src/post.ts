import request from "./utils/request"
import type { TypeDatabaseUpdate } from "./types/common"

import type { TypeGetPost } from "./types/post"
/**
 * 获取文章列表
 *
 * @param limit 限制获取多少篇文章
 * @param offset 偏移，这个自行百度用法，长篇大论就不合适了
 * @param order 排序方式，参考API文档
 * @author Zero <1203970284@qq.com>
 * @since 2022
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

import type { TypeGetSinglePost } from "./types/post"
/**
 * 获取单篇文章
 *
 * @param id 文章id
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function GetSinglePost(id: number): Promise<TypeGetSinglePost> {
  const data = await request({
    url: "/post/single",
    params: { id },
  })
  return data.data
}

/**
 * 发布草稿/保存草稿
 *
 * @param cookie cookie 必填
 * @param title 文章标题 必填
 * @param data 文章markdown数据 必传
 * @param comment 评论 必填
 * @param category 分类目录，不传默认为1
 * @param id 如果传入了此参数，此接口作为保存文章的接口使用；如果未传入，则调用此接口会新建一篇文章
 * @param poster 文章封面
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function PostNewDraft(
  cookie: string,
  title: string,
  data: string,
  comment: "open" | "closed",
  category?: number,
  id?: number,
  poster?: string,
): Promise<TypeDatabaseUpdate> {
  const req = await request({
    method: "post",
    url: "/post",
    params: { cookie },
    data: { title, data, comment, poster, id, category },
  })
  return req.data
}

/**
 * 将草稿放入待审列表
 *
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function PutPostCheck(
  cookie: string,
  id: number,
): Promise<TypeDatabaseUpdate> {
  const data = await request({
    method: "post",
    url: "/post/single",
    params: { cookie, id },
  })
  return data.data
}
