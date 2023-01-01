import { TypeGetComment, TypePostComment } from "./types/comment"
import request from "./utils/request"

/**
 * 获取评论列表
 *
 * @param type post和topic
 * @param id 评论id
 * @param limit 限制
 * @param offset 偏移
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function GetComment(
  type: "post" | "topic",
  id: number,
  limit: number,
  offset: number,
): Promise<TypeGetComment> {
  const data = await request({
    url: "/comment",
    params: { type, id, limit, offset },
  })
  return data.data
}

/**
 * 获取子级评论列表
 *
 * @param parent 父级评论id
 * @param limit 限制
 * @param offset 偏移
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function GetChildComment(
  parent: number,
  limit: number,
  offset: number,
): Promise<TypeGetComment> {
  const data = await request({
    url: "/comment/child",
    params: { parent, limit, offset },
  })
  return data.data
}

/**
 *
 * @param cookie token 必填
 * @param id 可选，父级评论id，如果该评论为父级评论则请填0
 * @param post 文章/帖子id 必填
 * @param data 评论内容 必填
 * @param type 看ts定义知功能，我不说了
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function PostComment(
  cookie: string,
  id: number = 0,
  post: number,
  data: string,
  type: "post" | "topic",
): Promise<TypePostComment> {
  const req = await request({
    url: "/comment",
    method: "post",
    params: { cookie },
    data: {
      parent: id,
      post,
      data,
      type,
    },
  })
  return req.data
}
