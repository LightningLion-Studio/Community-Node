import { TypeConfigNormal } from "./types/config"
import request from "./utils/request"

/**
 * 获取App远程数据
 *
 * @param app app参数
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function GetApp(
  app: "bilibili" | "new",
): Promise<TypeConfigNormal> {
  const data = await request({
    url: "/app",
    params: { app },
  })
  return data.data
}

/**
 * 获取公告
 *
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function GetAnnouncement(): Promise<TypeConfigNormal> {
  const data = await request({
    url: "/announcement",
  })
  return data.data
}

/**
 * 获取网站PV
 *
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function GetPV(): Promise<TypeConfigNormal> {
  const data = await request({
    url: "/pv",
  })
  return data.data
}

export async function PostPV(): Promise<TypeConfigNormal> {
  const data = await request({
    url: "/pv",
    method: "post",
  })
  return data.data
}
