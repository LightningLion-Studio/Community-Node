import { basicPostList } from "./common"
/**
 * 获取文章列表
 */
export interface TypeGetPost {
  code: number
  message: string
  cache: boolean
  limit: number
  offset: number
  data: Array<basicPostList>
}
