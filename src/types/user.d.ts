export interface TypeLogin {
  code: number
  message: string
  data?: {
    id: number
    data: string | number
    token: string
  }
}

export interface TypeGetUserInfo {
  code: 200
  message: ""
  data: {
    id: number
    name: string
    avatar?: string
    saying?: string
    email?: string
    level: number
    ban: boolean
    ban_time?: number
  }
  comments: number
  post: {
    post: number
    drafts: number
    checks: number
    publish: number
  }
}
