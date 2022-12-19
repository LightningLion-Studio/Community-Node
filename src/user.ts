import request from "./utils/request"
import { TypeDatabaseUpdate } from "./types/common"
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

/**
 * 发送邮箱验证码
 *
 * @param email 电子邮件地址
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
import { TypePostUserMailCode } from "./types/user"
export async function PostUserMailCode(
  email: string,
): Promise<TypePostUserMailCode> {
  const data = await request({
    url: "/newuser/sendmail",
    params: { email },
  })
  return data.data
}

/**
 * 注册
 *
 * @param config object, 请参考智能提示的配置
 */
export async function Register(config: {
  username: string
  password: string
  email: string
  code: string
}) {
  const data = await request({
    url: "/newuser/register",
    params: {
      username: config.username,
      password: config.password,
      email: config.email,
      code: config.code,
    },
  })
  return data.data
}

/**
 * 输出用户列表
 *
 * @param limit 限制
 * @param offset 偏移
 */
import { TypeGetOtherUserInfo } from "./types/user"
export async function GetUserList(
  cookie: string,
  limit: number,
  offset: number,
): Promise<{
  code: number
  message: string
  limit?: number
  offset?: number
  data?: Array<TypeGetOtherUserInfo>
}> {
  const data = await request({
    url: "/user/list",
    params: { cookie, limit, offset },
  })
  return data.data
}

/**
 * 修改电子邮箱地址
 *
 * @param cookie token 必填
 * @param email 电子邮箱地址
 * @param code 接收到的6位验证码
 */
export async function PostNewMail(
  cookie: string,
  email: string,
  code: string,
): Promise<TypeDatabaseUpdate> {
  const data = await request({
    url: "/user/changemail",
    params: { cookie, email, code },
  })
  return data.data
}

/**
 * 修改密码
 *
 * @param cookie token 必填
 * @param newpass 新密码
 */
export async function PostNewPass(
  cookie: string,
  newpass: string,
): Promise<{
  code: number
  message: string
  data: TypeDatabaseUpdate
}> {
  const data = await request({
    url: "/user/updatepass",
    params: { cookie, newpass },
  })
  return data.data
}

/**
 * 游客状态获取用户信息
 *
 * @param id 用户id
 */
export async function GetUserInfoByGuest(id: number) {
  const data = await request({
    url: "/user/info",
    params: { id },
  })
  return data.data
}
