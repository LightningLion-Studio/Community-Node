import { TypeGetFollow } from "./types/follow"
import request from "./utils/request"

/**
 * 获取该用户关注了谁
 *
 * @param id 用户id
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
