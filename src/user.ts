import request from "./utils/request"

/**
 * 用户登录
 *
 * @param username 用户名
 * @param password 密码
 */
import { TypeLogin } from "./types/user"
export async function Login(
  username: string,
  password: string,
): Promise<TypeLogin> {
  const data = await request({
    url: "/newuser/login",
    params: { username, password },
  })
  return data.data
}

/**
 * 获取用户信息
 *
 * @param cookie token 必填
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
import { TypeGetUserInfo } from "./types/user"
export async function GetUserInfo(cookie: string): Promise<TypeGetUserInfo> {
  const data = await request({
    url: "/user",
    params: { cookie },
  })
  return data.data
}

/**
 * 检测用户名是否已被占用
 *
 * @param username 用户名 必填
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
import { TypeNormal } from "./types/common"
export async function GetUserNameCheck(username: string): Promise<TypeNormal> {
  const data = await request({
    url: "/newuser/checkname",
    params: { username },
  })
  return data.data
}
