import { TypeNormal } from "./types/common"
import { TypeGetFollow, TypeGetUserFollowStatic } from "./types/follow"
import request from "./utils/request"

/**
 * 获取该用户关注了谁
 *
 * @param id 用户id
 * @param limit 限制
 * @param offset 偏移
 */
export async function GetUserFollow(
  id: number,
  limit: number,
  offset: number,
): Promise<TypeGetFollow> {
  const data = await request({
    url: "/follow",
    params: {
      id,
      limit,
      offset,
      type: "follow",
    },
  })
  return data.data
}

/**
 * 获取该用户的粉丝
 *
 * @param id 用户id
 * @param limit 限制
 * @param offset 偏移
 */
export async function GetUserFans(
  id: number,
  limit: number,
  offset: number,
): Promise<TypeGetFollow> {
  const data = await request({
    url: "/follow",
    params: {
      id,
      limit,
      offset,
      type: "fans",
    },
  })
  return data.data
}

/**
 * 使"该用户"关注"某用户"
 *
 * @param cookie token 必填："该用户"
 * @param id 用户id 必填："某用户"
 */
export async function PostUserFollow(
  cookie: string,
  id: number,
): Promise<TypeNormal> {
  const data = await request({
    url: "/follow",
    method: "post",
    params: { cookie, foll: id },
  })
  return data.data
}

/**
 * 取关某人（别取关我GitHub(￣∇￣)
 *
 * @param cookie token 必填
 * @param id 用户id 必填
 * @returns
 */
export async function DeleteUserFolloe(
  cookie: string,
  id: number,
): Promise<TypeNormal> {
  const data = await request({
    url: "/follow",
    params: { cookie, id },
    method: "delete",
  })
  return data.data
}

/**
 * 获取用户关注与粉丝数据
 *
 * @param id 用户id
 */
export async function GetUserFollowStatic(
  id: number,
): Promise<TypeGetUserFollowStatic> {
  const data = await request({
    url: `/follow/${id}`,
  })
  return data.data
}
