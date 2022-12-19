import { TypeDatabaseUpdate } from "./common"

export interface TypeLogin {
  code: number
  message: string
  data?: {
    id: number
    data: string | number
    token: string
  }
}

export interface TypeGetOtherUserInfo {
  code: number
  message: string
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
}

export interface TypeGetUserInfo {
  code: number
  message: string
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

export interface TypePostUserMailCode {
  code: number
  message: string
  data: TypeDatabaseUpdate
}
