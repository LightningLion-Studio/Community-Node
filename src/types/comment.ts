export interface TypeGetComment {
  code: number
  message: string
  data: Array<{
    id: number
    post: number
    parent: number
    data: string
    author: number
  }>
}

export interface TypePostComment {
  code: number
  message: string
}
