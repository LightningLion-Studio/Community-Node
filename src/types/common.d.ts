/**
 * 文章列表数组类型, 单篇文章返回数据类型
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

/**
 * 数据库UPDATE查询返回的数据
 */
export interface datebaseUpdate {
  fieldCount: number
  affectedRows: number
  insertId: number
  serverStatus: number
  warningCount: number
  message: string
  protocol41: boolean
  changedRows: number
}

/**
 * 更改数据库返回数据
 */
export interface TypeDatabaseUpdate {
  code: number
  message: string
  data: datebaseUpdate
}
