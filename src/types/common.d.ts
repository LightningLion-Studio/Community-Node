/**
 * 文章列表数组类型
 */
export interface basicPostList {
  id: number
  title: string
  data: string
  comment: string
  poster?: string
  status: "publish" | "check" | "draft"
  author: number
  view: number
  date: string | number
  category: number
}
