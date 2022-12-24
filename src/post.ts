import request from "./utils/request"
import type { TypeDatabaseUpdate } from "./types/common"

import type { TypeGetPost } from "./types/post"
/**
 * 获取文章/帖子列表
 *
 * @param type 必填，自己看参数
 * @param limit 限制获取多少篇文章/帖子
 * @param offset 偏移，这个自行百度用法，长篇大论就不合适了
 * @param order 排序方式，参考API文档
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function Get(
  type: "post" | "topic" | "tag",
  limit?: number,
  offset?: number,
  order?: 1 | 2 | 3 | 4 | 5,
): Promise<TypeGetPost> {
  const data = await request({
    url: "/" + type,
    params: { limit, offset, order },
  })
  return data.data
}

import type { TypeGetSinglePost } from "./types/post"
/**
 * 获取单篇文章/帖子
 *
 * @param type 必填，自己看参数
 * @param id 文章/帖子id
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function GetSingle(
  type: "post" | "topic",
  id: number,
): Promise<TypeGetSinglePost> {
  const data = await request({
    url: `/${type}/single`,
    params: { id },
  })
  return data.data
}

/**
 * 发布草稿/保存文章/帖子草稿
 *
 * @param cookie cookie 必填
 * @param type 必填，自己看参数
 * @param title 文章/帖子标题 必填
 * @param data 文章/帖子markdown数据 必传
 * @param comment 评论 必填
 * @param category 分类目录，不传默认为1
 * @param id 如果传入了此参数，此接口作为保存文章/帖子的接口使用；如果未传入，则调用此接口会新建一篇文章/帖子
 * @param poster 文章/帖子封面
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function PostDraft(
  cookie: string,
  type: "post" | "topic",
  title: string,
  data: string,
  comment: "open" | "closed",
  category?: number,
  id?: number,
  poster?: string,
): Promise<TypeDatabaseUpdate> {
  const req = await request({
    method: "post",
    url: "/" + type,
    params: { cookie },
    data: { title, data, comment, poster, id, category },
  })
  return req.data
}

/**
 * 将草稿放入待审列表
 *
 * @param cookie cookie 必填
 * @param id 文章/帖子id
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function PutCheck(
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

/**
 * 点赞/取消点赞
 *
 * @param cookie token 必填
 * @param type 自己看参数
 * @param id 文章/帖子id
 * @param action 选择点赞还是取消点赞（⚠️注意：dislike的取消点赞，后端没有点踩的接口！）
 */
export async function Like(
  cookie: string,
  type: "post" | "topic",
  id: number,
  action: "like" | "dislike",
): Promise<TypeDatabaseUpdate> {
  const data = await request({
    url: `/${type}/like`,
    params: { cookie },
    data: { id, type: action },
  })
  return data.data
}
