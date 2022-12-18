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

export async function GetUserInfo(cookie: string): Promise<TypeRequest> {
  const data = await request({
    url: "/user",
    params: { cookie },
  })
  return data.data
}
